> [!NOTE]
> **[Android Bug Hunter's Handbook is live on GitHub Pages](https://jojin1709.github.io/BUG-HUNTER-S-HANDBOOK/)**

<div align="center">

# ⚡ Android Bug Hunter's Handbook (v3.5 Master Edition)

![Android Security](https://img.shields.io/badge/Platform-Android_13%2B_%2F_14-emerald?style=for-the-badge&logo=android)
![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS-38bdf8?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)

An interactive, modern, and comprehensive field guide & security portal for Android Security Researchers, Bug Bounty Hunters, and Penetration Testers. <br />
It covers reverse engineering, dynamic instrumentation, IPC component attacks, and API exploitation with live hands-on tools.

**Developed by [JOJIN JOHN](https://github.com/jojin1709)**

---

<a href="https://github.com/jojin1709/BUG-HUNTER-S-HANDBOOK"><img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" height="40" alt="GitHub Repository"></a>
<a href="https://jojin1709.github.io/BUG-HUNTER-S-HANDBOOK/"><img src="https://img.shields.io/badge/Live_Portal-GitHub_Pages-22c55e?style=for-the-badge&logo=githubpages" height="40" alt="Live Portal"></a>

---
</div>

> [!TIP]
> **Quick Start for Security Researchers:** Clone this repository and open `index.html` in any modern browser, or view the live portal hosted on GitHub Pages.

---

## Table of Contents

- [Overview](#overview)
- [Key Capabilities & Modules](#key-capabilities--modules)
- [22+ Tool Repository](#22-tool-repository)
- [Step-by-Step Methodology Roadmap](#step-by-step-methodology-roadmap)
- [Framework-Specific Testing](#framework-specific-testing)
- [Interactive Audit Checklist & CVSS Estimator](#interactive-audit-checklist--cvss-estimator)
- [Quick Start & Local Usage](#quick-start--local-usage)
- [PC Hardware & AVD Recommendations](#pc-hardware--avd-recommendations)
- [Safety, Scope, and Boundaries](#safety-scope-and-boundaries)
- [License and Author](#license-and-author)

---

## Overview

**Android Bug Hunter's Handbook** is an autonomous, comprehensive reference portal for mobile security assessments. It brings together decompilation workflows, dynamic hooks, component attack vectors, and API assessment guides in a unified, premium dark-themed interface.

### Why This Handbook Exists

Android application security requires mastering multiple tools (JADX, APKTool, Frida, Objection, Drozer, Burp Suite) across different execution environments. This handbook streamlines that workflow into a structured, step-by-step methodology with copyable terminal snippets, live calculators, and framework-specific pipelines.

---

## Key Capabilities & Modules

- **Proof-by-Exploitation Commands**: Ready-to-execute `adb`, `objection`, `frida`, and `drozer` command parameters.
- **Interactive CVSS v3.1 & Bounty Estimator**: Live calculator computing rating scores, vector strings, and estimated payout ranges ($500 — $15,000+).
- **Automated Recon Pipeline (`recon.sh`)**: Downloadable bash script combining `apkid`, `apktool`, `apkleaks`, and `jadx`.
- **Framework-Specific Pipelines**: Dedicated workflows for React Native (Hermes bundle extraction), Flutter (`blutter` & `reFlutter`), and Cordova apps.
- **Interactive Checklist**: 12 vulnerability categories with OWASP MASVS tags and `localStorage` progress tracking.
- **Curated Video Guides**: Direct YouTube video walkthroughs for Frida SSL pinning, JADX decompilation, Burp CA cert installation, and Drozer exploitation.

---

## 22+ Tool Repository

| Tool Class | Indexed Tools | Direct Action |
| --- | --- | --- |
| **Static Analysis** | JADX, APKTool, MobSF, apkleaks, TruffleHog, QARK | 1-Click Copy Install & Run Commands |
| **Dynamic & Frida** | Frida, Objection, PlayIntegrityFix (Magisk) | Hook Script Templates & Commands |
| **Network Traffic** | Burp Suite, mitmproxy | CA Cert Installation Workflows |
| **IPC & Components** | Drozer, ADB | Component Query & Path Traversal |
| **Reverse Engineering** | Ghidra, radare2/r2frida, blutter, reFlutter | Native ARM64 `.so` Reversing |
| **Utilities & Patching** | scrcpy, apksigner, zipalign, Waydroid, Corellium | Device Control & APK Signing |

---

## Step-by-Step Methodology Roadmap

```text
┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
│  01. Recon & APKID   │ ───► │ 02. Static & Secrets │ ───► │  03. Dynamic & Frida │
└──────────────────────┘      └──────────────────────┘      └──────────┬───────────┘
                                                                       │
                                                                       ▼
┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
│  06. Drozer Component│ ◄─── │ 05. GraphQL & Rate   │ ◄─── │  04. SSL Pinning     │
│      Attacks         │      │     Limit APIs       │      │      Bypass          │
└──────────┬───────────┘      └──────────────────────┘      └──────────────────────┘
           │
           ▼
┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
│  07. Storage &      │ ───► │ 08. Native ARM64     │ ───► │  09. Submission      │
│      WebView Audit   │      │     Memory Patching  │      │      Report Studio   │
└──────────────────────┘      └──────────────────────┘      └──────────────────────┘
```

---

## Framework-Specific Testing

Standard Java/Kotlin decompilation fails on non-native frameworks. Use these tailored pipelines:

- **React Native**: Extract `assets/index.android.bundle` -> decompile Hermes bytecode via `hermes-dec` -> format with `js-beautify`.
- **Flutter (Dart AOT)**: Extract `lib/arm64-v8a/libapp.so` -> reconstruct Dart classes via **blutter** -> patch SSL pinning via **reFlutter**.
- **Cordova**: Unpack APK via `apktool d` -> audit HTML5 assets & plugin bridges under `assets/www/`.

---

## Interactive Audit Checklist & CVSS Estimator

The portal includes an interactive audit checklist covering top OWASP Mobile Top 10 vulnerabilities:
- Exported components without permission checks
- Insecure local data storage (`/data/data/`)
- WebView JS interface injection (`addJavascriptInterface`)
- Defeatable SSL certificate pinning
- Insecure deep links & intent redirection
- Production `allowBackup` & `debuggable` flags
- Hardcoded API keys & secrets
- Firebase / Firestore open database rules
- Broken API authorization (IDOR / BOLA)
- Tapjacking & overlay abuse
- Task hijacking (StrandHogg)
- Clipboard data leakage

---

## Quick Start & Local Usage

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari).
- Optional: Python 3 for running a local development server.

### Local Server Setup

```bash
# Clone the repository
git clone https://github.com/jojin1709/BUG-HUNTER-S-HANDBOOK.git

# Navigate to directory
cd BUG-HUNTER-S-HANDBOOK

# Serve locally
python3 -m http.server 8000
```

Open `http://localhost:8000` in your web browser.

---

## PC Hardware & AVD Recommendations

Optimized configuration for mid-range testing hardware (e.g., **Intel Core i5-12500H & 16GB RAM**):

- **Device Model**: Pixel 6 or Pixel 5
- **System Image**: Android 13.0 (API Level 33) **Google APIs (x86_64)** — *Do NOT select Google Play to preserve root access (`adb root`).*
- **RAM Allocation**: `4096 MB` (4 GB)
- **CPU Cores**: `4 Cores`
- **Graphics**: `Hardware - GLES 2.0`

---

## Safety, Scope, and Boundaries

> [!WARNING]
> Always conduct mobile security testing strictly within authorized bug bounty program boundaries or explicit written penetration testing scope. Do not test unauthorized backends or production infrastructure.

---

## License and Author

**Developed by [JOJIN JOHN](https://github.com/jojin1709)**  
Licensed under the [MIT License](LICENSE).
