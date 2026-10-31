# Tudor's Sunken Vault Story Quest (Antigravity Bundle)

## Included Assets & Files
- `index.html`: Zero-build standalone interactive web app. Double-click or run with any static server (`npx serve .` or Live Server) — all 3 generated character images and worksheet scans load locally from `./public/assets/`.
- `public/story_data.json`: Structured JSON manifest containing Tudor's original sentences, the 5 upgrade stations, kid-friendly "Game Glitch Detector" notes, and the 3 first-person Lobster POV options per station.
- `public/assets/`:
  - `scene1_vault_explosion.jpg` — Deep ocean compass-shaped stone vault explosion & iron switch activation
  - `scene2_monster_staredown.jpg` — Murky deep-sea staredown between Purple Lobster and Colossal Kelp Monster
  - `scene3_lobster_powerup.jpg` — Armour power-up sequence with mist clouds and razor-sharp growing claws
  - `scene4_lightning_clash.jpg` — Epic boss fight: sonic underwater lightning bolt deflecting off lobster's armoured shell
  - `scene5_turquoise_victory.jpg` — Level 99 Turquoise Evolution climax with lightning claws and ancient open vault
  - `purple_lobster_lvl1.png` (1024x1024) — Level 1 Mythical Gloomy Purple Lobster with emerald eyes
  - `kelp_monster_boss.png` (1024x1024) — Colossal Green Kelp Monster with amber glowing eyes and underwater lightning
  - `turquoise_lobster_lvl99.png` (1024x1024) — Evolved Level 99 Glowing Turquoise Lobster with needle-sharp lightning claws
  - `worksheet_page1_img1.jpg` — High-res extraction of Tudor's marked text with teacher's blue-pen annotations
  - `worksheet_page2_img1.jpg` — High-res extraction of the Week 1 Creative Writing prompt sheet ("Prompt A: The Sunken Vault")
  - `original_worksheet_and_draft.pdf` — Original 2-page PDF
- `src/SunkenVaultQuest.jsx`: Clean React component wired to `story_data.json` for importing into an existing Vite/Next project.
