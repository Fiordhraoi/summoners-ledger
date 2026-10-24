/* SPDX-License-Identifier: GPL-3.0-only
 * Copyright (C) 2026 Fiordhraoi
 * Application code only. Embedded/designated Open Game Content and legal texts
 * retain their separate licenses; see LICENSING.md and license.html.
 */
document.getElementById('copy-script').onclick=async()=>{const status=document.getElementById('script-status');try{const response=await fetch('summoners-ledger-roll20.js');if(!response.ok)throw Error('Download unavailable');const text=await response.text();try{await navigator.clipboard.writeText(text);status.textContent='Copied. Paste the whole script into the Roll20 Mod editor.';}catch{const area=document.getElementById('script-fallback');area.hidden=false;area.value=text;area.focus();area.select();status.textContent='Script selected. Press Ctrl+C (Cmd+C on Mac).';}}catch{status.textContent='Use the Download companion Mod link to save and open the script.';}};
