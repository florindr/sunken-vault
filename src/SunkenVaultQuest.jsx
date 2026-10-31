import React, { useState } from 'react';
import storyData from '../public/story_data.json';

export default function SunkenVaultQuest() {
  const [stationIdx, setStationIdx] = useState(0);
  const [activeCharIdx, setActiveCharIdx] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });
  const [customTexts, setCustomTexts] = useState({});
  const [viewMode, setViewMode] = useState('quest');

  const station = storyData.stations[stationIdx];
  const activeChar = storyData.characters[activeCharIdx];

  const getStationText = (id) => {
    if (customTexts[id] && customTexts[id].trim() !== '') return customTexts[id];
    const st = storyData.stations.find((s) => s.id === id);
    return st.options[selectedOptions[id] ?? 0].text;
  };

  const handleStationChange = (idx) => {
    setStationIdx(idx);
    if (idx === 0 || idx === 2) setActiveCharIdx(0);
    if (idx === 1 || idx === 3) setActiveCharIdx(1);
    if (idx === 4) setActiveCharIdx(2);
    setViewMode('quest');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="bg-slate-900 border border-teal-500/30 rounded-2xl p-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={activeChar.image} alt={activeChar.name} className="w-14 h-14 rounded-2xl object-cover border border-teal-400" />
            <div>
              <span className="text-xs uppercase px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-bold">
                Lobster First-Person POV Edition
              </span>
              <h1 className="text-2xl font-bold text-white mt-1">{storyData.title}</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setViewMode('quest')} className={`px-4 py-2 rounded-xl font-bold text-sm ${viewMode === 'quest' ? 'bg-teal-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
              Upgrade Stations
            </button>
            <button onClick={() => setViewMode('final')} className={`px-4 py-2 rounded-xl font-bold text-sm ${viewMode === 'final' ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-300'}`}>
              Final Story
            </button>
          </div>
        </header>

        {viewMode === 'quest' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-4 bg-slate-900 border border-teal-500/30 rounded-2xl p-5">
              <div className="flex gap-2">
                {storyData.stations.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => handleStationChange(idx)}
                    className={`flex-1 py-2 rounded-xl font-bold text-xs ${idx === stationIdx ? 'bg-teal-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}
                  >
                    Station {s.id}
                  </button>
                ))}
              </div>
              <h2 className="text-xl font-bold text-teal-300">{station.title}</h2>
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-sm italic text-slate-300">
                "{station.original}"
              </div>
              <div className="bg-amber-950/40 border border-amber-500/40 rounded-xl p-4 space-y-1">
                <div className="font-bold text-amber-300 text-sm">🕵️‍♂️ {station.glitch_name}</div>
                <ul className="list-disc list-inside text-xs text-amber-100 space-y-1">
                  {station.glitch_explanation.map((g, i) => <li key={i}>{g}</li>)}
                </ul>
              </div>
              <div className="space-y-3">
                {station.options.map((opt, oIdx) => (
                  <div
                    key={oIdx}
                    onClick={() => {
                      setSelectedOptions({ ...selectedOptions, [station.id]: oIdx });
                      const nextCustom = { ...customTexts };
                      delete nextCustom[station.id];
                      setCustomTexts(nextCustom);
                    }}
                    className={`p-4 rounded-xl border cursor-pointer ${selectedOptions[station.id] === oIdx && !customTexts[station.id] ? 'bg-teal-950/60 border-teal-400' : 'bg-slate-800/70 border-slate-700'}`}
                  >
                    <div className="font-bold text-xs text-teal-300 mb-1">{opt.label}</div>
                    <p className="text-sm text-white">{opt.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-900 border border-purple-500/30 rounded-2xl p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-white">Character Codex</h3>
                  <div className="flex gap-1">
                    {storyData.characters.map((c, i) => (
                      <button key={c.id} onClick={() => setActiveCharIdx(i)} className={`px-2 py-1 rounded text-xs font-bold ${activeCharIdx === i ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                        {c.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>
                <img src={activeChar.image} alt={activeChar.name} className="w-full h-72 object-cover rounded-xl" />
                <div className="text-sm font-bold text-teal-300">{activeChar.name} — {activeChar.role}</div>
                <p className="text-xs text-slate-300">{activeChar.desc}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900 border border-teal-400/40 rounded-2xl p-6 space-y-4">
            <h2 className="text-2xl font-bold text-teal-300">Upgraded Lobster POV Story</h2>
            {storyData.stations.map((s) => (
              <p key={s.id} className="text-base text-white leading-relaxed">{getStationText(s.id)}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
