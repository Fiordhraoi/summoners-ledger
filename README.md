# Summoner’s Ledger

A free Pathfinder First Edition summoning reference maintained by **Fiordhraoi**.

**[Use the website](https://fiordhraoi.github.io/summoners-ledger/)** · [Roll20 setup guide](https://fiordhraoi.github.io/summoners-ledger/roll20.html) · [Sources and licensing](https://fiordhraoi.github.io/summoners-ledger/license.html)

## Features

- Summon Monster and Summon Nature’s Ally I–IX, with expanded elemental types.
- Augment, Superior, Starlight, Moonlight, and Sunlight summoning options; celestial/fiendish templates where appropriate.
- 165 creature entries mapped to 120 normal-creature token images. Elemental sizes share artwork.
- Clickable token downloads, print views, and persistent light/dark themes.
- Companion Roll20 Mod for the Pathfinder by Roll20 official NPC sheet by Natha.

The utility calculates common changes. Conditional effects, special abilities, and unusual interactions still need source/GM review. Token artwork is AI-generated and is not official Paizo or Roll20 artwork.

## Run locally

This is a buildless static website. With Python installed, run `python -m http.server 8000` from this directory, then open `http://localhost:8000`. No dependencies, server database, API keys, or account connection are required for normal use. Preferences are stored in your browser.

## Publish

GitHub Pages publishes the root of `main`. Every push to that branch updates the public site through GitHub’s built-in Pages deployment. `.nojekyll` disables Jekyll processing. All internal assets use relative URLs for project-site hosting.

## Roll20

Use **Export to Roll20** for the import command and a separate **Download token** action. Install the companion `summoners-ledger-roll20.js` Mod once in a campaign that supports Mods. Tokens are uploaded and assigned manually in Roll20; the website does not connect to your Roll20 account. See `roll20.html` for instructions.

## Licenses

Original application code: **GPL-3.0-only**, copyright 2026 Fiordhraoi. Designated game content: **OGL v1.0a**. Token artwork and third-party notices have separate terms. Read **[LICENSING.md](LICENSING.md)** before redistribution. This repository does not grant ownership or a new license to Paizo’s or Roll20’s trademarks or proprietary material.

## Feedback

Report issues using this repository’s Issues tab. Public contact: **ogladmin@hiddenflame.net**.
