# 🎮 The Simmer's Playbook — PWA

A Progressive Web App for Sims 4 players. Includes a playstyle quiz, random prompts, and a story journal.

---

## 📁 Your Files

```
simmers-playbook/
├── index.html       ← Your entire app (edit colours here!)
├── manifest.json    ← Makes it installable as an app
├── sw.js            ← Makes it work offline
├── icon-192.png     ← App icon (small)
├── icon-512.png     ← App icon (large)
└── README.md        ← This file
```

---

## 🎨 How to Change Colours

Open `index.html` in any text editor. Near the top, find this block:

```css
:root {
  --teal:       #00b4a6;   ← main brand colour
  --teal-dark:  #008a7e;   ← nav bar, button shadows
  --yellow:     #ffe04b;   ← accent / plumbob
  --pink:       #ff7eb3;   ← pink accents
  --purple:     #9b6dff;   ← purple accents
  --orange:     #ff8c42;   ← chaos gremlin colour
  --green:      #52d68a;   ← builder colour
  --ink:        #1a2e2c;   ← main text colour
}
```

Change any hex value (e.g. `#00b4a6`) to whatever colour you like.
Use https://coolors.co to browse palettes and copy hex codes.

---

## 🚀 How to Go Live (Free, ~30 minutes)

### Step 1 — GitHub
1. Go to https://github.com and create a free account
2. Click "New repository" → name it `simmers-playbook` → set to Public
3. Click "Add file" → "Upload files"
4. Drag ALL files from this folder into the upload area
5. Click "Commit changes"

### Step 2 — Netlify (free hosting)
1. Go to https://netlify.com → sign up free
2. Click "Add new site" → "Import an existing project" → "GitHub"
3. Connect your GitHub account → select `simmers-playbook`
4. Leave all settings as default → click "Deploy site"
5. ✅ You'll get a live URL in about 60 seconds!

### Step 3 — Custom domain (optional, ~$12/year)
1. Buy a domain at https://porkbun.com (cheapest) e.g. `simmersplaybook.com`
2. In Netlify → Site settings → Domain management → Add custom domain
3. Follow Netlify's 3-step instructions to point the domain

---

## 📱 How the Install Banner Works

- **Android/Chrome**: After 3 seconds, a banner appears at the bottom asking if they want to install. If they tap "Install", it adds to their home screen automatically.
- **iPhone/iPad (Safari)**: A tip appears telling them to tap the Share button then "Add to Home Screen".
- **Already installed / dismissed**: The banner won't show again in the same session.
- **Desktop Chrome**: Also supports installation via the address bar icon.

The banner only appears once per session so it never feels annoying.

---

## 💡 What to Build Next

Once you have real users, consider adding:

| Feature | Tool | Cost |
|---|---|---|
| Save journal entries for real | Supabase | Free |
| User logins | Supabase Auth | Free |
| Charge for premium content | Gumroad | 10% fee |
| Email newsletter | ConvertKit | Free to 1k subs |

---

## 🌐 Share It!

Once live, post your link to:
- r/Sims4 on Reddit
- r/thesims on Reddit  
- Sims TikTok (tag #Sims4 #SimmerLife)
- Sims Discord servers

Good luck! 💚
