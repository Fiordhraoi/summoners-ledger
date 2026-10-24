/* SPDX-License-Identifier: GPL-3.0-only
 * Copyright (C) 2026 Fiordhraoi
 * Application code only. Embedded/designated Open Game Content and legal texts
 * retain their separate licenses; see LICENSING.md and license.html.
 */
/* Apply the stored choice before styles paint; no account or server state. */
(function(){'use strict';const key='summoners-ledger-theme';let theme='light';try{const saved=localStorage.getItem(key);if(saved==='dark'||saved==='light')theme=saved;}catch{}function apply(value){theme=value==='dark'?'dark':'light';document.documentElement.dataset.theme=theme;const select=document.getElementById('theme-choice');if(select)select.value=theme;}apply(theme);document.addEventListener('DOMContentLoaded',()=>{const header=document.querySelector('header');if(!header)return;const label=document.createElement('label');label.className='themecontrol';label.innerHTML='<span>Theme</span><select id="theme-choice" aria-label="Color theme"><option value="light">Light</option><option value="dark">Dark</option></select>';const print=header.querySelector('button');header.insertBefore(label,print);const select=label.querySelector('select');select.value=theme;select.addEventListener('change',()=>{apply(select.value);try{localStorage.setItem(key,theme);}catch{}});});window.addEventListener('storage',event=>{if(event.key===key)apply(event.newValue);});})();
