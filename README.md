# ⚡ Android Bug Hunter's Handbook (v3.5 Master Edition)

> An interactive, modern, and comprehensive field guide & security portal for Android Security Researchers, Bug Bounty Hunters, and Penetration Testers.

![Android Security](https://img.shields.io/badge/Platform-Android_13%2B_%2F_14-emerald?style=for-the-badge&logo=android)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38bdf8?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)

---

## 🌟 Key Features & Modules

- **🛠️ 22+ Indexed Security Tools**: JADX, APKTool, MobSF, apkleaks, TruffleHog, QARK, Frida, Objection, PlayIntegrityFix, Burp Suite, mitmproxy, Drozer, ADB, Ghidra, radare2, scrcpy, apksigner, blutter, reFlutter, and more. Complete with 1-click copy installation (`apt`, `pip`, `docker`) and execution flags.
- **⚡ Interactive CVSS & Bounty Estimator**: Live calculator computing CVSS v3.1 rating scores, vector strings, and estimated bounty payout ranges ($500 — $15,000+).
- **🚀 Automated Recon Script (`recon.sh`)**: Single bash script pipeline executing `apkid`, `apktool`, `apkleaks`, and `jadx` automatically against target APKs.
- **🧩 Framework-Specific Testing Pipelines**: Specialized reverse engineering workflows for React Native (Hermes JS bundles), Flutter (Dart AOT `libapp.so` via `blutter` & `reFlutter`), and Cordova apps.
- **📋 Interactive Audit Checklist**: 12 vulnerability classes with OWASP MASVS tags, risk ratings, and automatic `localStorage` progress tracking.
- **📱 Tailored Lab Hardware Guide**: Recommended AVD phone setups (Pixel 6/5, Android 13 API 33 Google APIs x86_64, 4GB RAM, 4 CPU cores) optimized for PC hardware.
- **🔗 Deep Link & Custom Scheme Fuzzing**: Extraction workflows and `adb shell am start` intent injection commands.
- **🤖 Android 13+ & 14 Security Protections**: Technical coverage of `RECEIVER_NOT_EXPORTED` flags, granular media permissions, and accessibility service blocks.
- **📖 Advanced Native Hooks & Cheat Sheets**: Objection command reference, custom Frida Java method overrides, Drozer ContentProvider path traversal, and ARM64 memory patching (`Memory.protect`).
- **📝 Submission Studio**: Copyable Markdown bug report template formatted for HackerOne and Bugcrowd.
- **📺 Curated Video Walkthroughs**: Instant YouTube video guides for Frida SSL pinning, JADX decompilation, Burp CA cert installation, and Drozer exploitation.

---

## 🚀 Quick Setup & Live GitHub Pages

This project is built as a pure, lightweight front-end web portal (HTML, CSS, JS + Tailwind CSS CDN).

### Enable GitHub Pages
1. Go to repository **Settings** -> **Pages**.
2. Under **Source**, select **Deploy from a branch**.
3. Choose branch `main` and root `/`, then click **Save**.
4. Your live handbook will be accessible at:  
   `https://jojin1709.github.io/BUG-HUNTER-S-HANDBOOK/`

---

## 💻 Local Usage

Simply clone the repository and open `index.html` in any web browser:

```bash
git clone https://github.com/jojin1709/BUG-HUNTER-S-HANDBOOK.git
cd BUG-HUNTER-S-HANDBOOK
# Open index.html in your browser or run via live-server
python3 -m http.server 8000
```

---

## 📂 Project Structure

```text
BUG-HUNTER-S-HANDBOOK/
├── index.html         # Main Application Markup & Interactive UI Components
├── style.css          # Dark slate theme styling, animations, and custom scrollbars
├── script.js          # Interactive engines (CVSS calculator, search shortcuts, terminal simulator)
└── README.md          # Project Documentation
```

---

## 📜 License & Legal Disclaimer

This repository and handbook are intended solely for **educational purposes** and **authorized security research / bug bounty hunting**. Always test within the explicit scope of bug bounty programs and authorized penetration testing engagements.

MIT License © 2026 [jojin1709](https://github.com/jojin1709)
