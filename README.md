# Tudor's Sunken Vault Story Quest (Antigravity Bundle)

## Included Assets & Files
- `index.html`: Zero-build standalone interactive web app. Double-click or run with any static server (`npx serve .` or Live Server) — all 3 generated character images and worksheet scans load locally from `./public/assets/`.
- `public/story_data.json`: Structured JSON manifest containing Tudor's original sentences, the 5 upgrade stations, kid-friendly "Game Glitch Detector" notes, and the 3 first-person Lobster POV options per station.
- `public/assets/`:
  - `purple_lobster_lvl1.png` (1024x1024) — Level 1 Mythical Gloomy Purple Lobster with emerald eyes
  - `kelp_monster_boss.png` (1024x1024) — Colossal Green Kelp Monster with amber glowing eyes and underwater lightning
  - `turquoise_lobster_lvl99.png` (1024x1024) — Evolved Level 99 Glowing Turquoise Lobster with needle-sharp lightning claws
  - `worksheet_page1_img1.jpg` — High-res extraction of Tudor's marked text with teacher's blue-pen annotations
  - `worksheet_page2_img1.jpg` — High-res extraction of the Week 1 Creative Writing prompt sheet ("Prompt A: The Sunken Vault")
  - `original_worksheet_and_draft.pdf` — Original 2-page PDF
- `src/SunkenVaultQuest.jsx`: Clean React component wired to `story_data.json` for importing into an existing Vite/Next project.
