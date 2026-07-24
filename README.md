> [!NOTE]
> **[Android Bug Hunter's Handbook is live on GitHub Pages](https://jojin1709.github.io/BUG-HUNTER-S-HANDBOOK/)**

<div align="center">

# ⚡ Android Bug Hunter's Handbook

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
- [Disclosed HackerOne Reports & Writeups](#disclosed-hackerone-reports--writeups)
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

## Disclosed HackerOne Reports & Writeups

Curated disclosed real-world vulnerability writeups and research blogs to build an exploitation mindset:

### Hardcoded Credentials
- [Disclosure of all uploads via hardcoded API secret](https://hackerone.com/reports/351555)

### WebView & Deep Links
- [Android security checklist: WebView (Oversecured)](https://blog.oversecured.com/Android-security-checklist-webview/)
- [Path traversal in deeplink query parameter (#2553411)](https://hackerone.com/reports/2553411)
- [Account Takeover Via DeepLink (#855618)](https://hackerone.com/reports/855618)
- [Sensitive information disclosure (#401793)](https://hackerone.com/reports/401793)

### RCE / ACE & Code Execution
- [Why dynamic code loading could be dangerous for your apps (Oversecured)](https://blog.oversecured.com/Why-dynamic-code-loading-could-be-dangerous-for-your-apps-a-Google-example/)
- [CVE-2020-8913: Persistent arbitrary code execution in Google Play Core library](https://blog.oversecured.com/Oversecured-automatically-discovers-persistent-code-execution-in-the-Google-Play-Core-Library/)
- [TikTok: Three persistent arbitrary code executions](https://blog.oversecured.com/Oversecured-detects-dangerous-vulnerabilities-in-the-TikTok-Android-app/)

### File Theft & Content Providers
- [SQL Injection in Content Provider (#291764)](https://hackerone.com/reports/291764)
- [Android security checklist: theft of arbitrary files](https://blog.oversecured.com/Android-security-checklist-theft-of-arbitrary-files/)
- [Vulnerable to local file steal, Javascript injection, Open redirect (#499348)](https://hackerone.com/reports/499348)
- [Token leakage due to stolen files via unprotected Activity (#288955)](https://hackerone.com/reports/288955)

### Auth & Bypasses
- [Accidental $70k Google Pixel Lock Screen Bypass](https://bugs.xdavidhu.me/google/2022/11/10/accidental-70k-google-pixel-lock-screen-bypass/)
- [Bypass of biometrics security functionality (#637194)](https://hackerone.com/reports/637194)
- [Two-factor authentication bypass due to vuln endpoint (#202425)](https://hackerone.com/reports/202425)

### Conference Talks & Courses
- [Android App Reverse Engineering 101 (Maddie Stone)](https://maddiestone.github.io/AndroidAppRE/)
- [Pwning Android Apps at Scale (DEF CON)](https://www.youtube.com/watch?v=24MwHjqMjRk)
- [Hacking Mobile Applications with Frida (David Coursey)](https://www.youtube.com/watch?v=xwyXgykedzk)
- [Adoption of Anti-Debugging and Anti-Tampering Protections (Paper)](https://stefanoberlato.it/publications/pdf/JISA20.pdf)

### Online APK Scanners & Decompilers
- [Guardsquare AppSweep Mobile Security Scanner](https://www.guardsquare.com/appsweep-mobile-application-security-testing)
- [Online Java APK Decompiler](http://www.javadecompilers.com/apk)
- [BeVigil Mobile App Security OSINT Scanner](https://bevigil.com/osint-api)
- [BlackDex - Unpack DEX Dump Tool](https://github.com/CodingGay/BlackDex)

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

## 🛠️ Drozer Master Command Reference

| Command | Description | Example / Notes |
| --- | --- | --- |
| `help` / `list` | Show help menu or list available modules | `dz> list` |
| `run app.package.list` | List installed packages | `run app.package.list` |
| `run app.package.attacksurface -a <pkg>` | Show attack surface (exported components) | `run app.package.attacksurface -a com.example.app` |
| `run app.package.info -a <pkg>` | Show detailed info about a package | `run app.package.info -a com.example.app` |
| `run app.activity.info -a <pkg>` | List activities of an app | `run app.activity.info -a com.example.app` |
| `run app.provider.info -a <pkg>` | List content providers | `run app.provider.info -a com.example.app` |
| `run app.service.info -a <pkg>` | List services | `run app.service.info -a com.example.app` |
| `run app.broadcast.info -a <pkg>` | List broadcast receivers | `run app.broadcast.info -a com.example.app` |
| `run app.activity.start -a <pkg> -n <act>` | Start a specific activity | `run app.activity.start -a com.example.app -n MainActivity` |
| `run scanner.provider.injection -a <pkg>` | Check for SQL injection in content providers | `run scanner.provider.injection -a com.example.app` |
| `run scanner.provider.access -a <pkg>` | Check for content provider access issues | `run scanner.provider.access -a com.example.app` |
| `run scanner.misc.debuggable -a <pkg>` | Check if app is debuggable | `run scanner.misc.debuggable -a com.example.app` |
| `run scanner.misc.exportedcomponents -a <pkg>` | Check for exported components | `run scanner.misc.exportedcomponents -a com.example.app` |
| `run scanner.permissions.findleaks -a <pkg>` | Find permission leaks | `run scanner.permissions.findleaks -a com.example.app` |
| `run exploit.reinvokeactivity -a <pkg> -n <act>` | Exploit activity re-invocation | `run exploit.reinvokeactivity -a com.example.app -n MainActivity` |
| `run exploit.sharedprefs.read -a <pkg> -p <path>` | Read shared preferences file | `run exploit.sharedprefs.read -a com.example.app -p /data/.../config.xml` |
| `run exploit.sharedprefs.write -a <pkg> -p <path>` | Modify shared preferences | `run exploit.sharedprefs.write -a com.example.app -p /data/.../config.xml -k isAdmin -v true` |
| `run file.download -p <path>` | Download file from device | `run file.download -p /data/data/com.example.app/databases/db.sqlite` |
| `run scanner.webview.javascript` | Detect vulnerable WebView JavaScript interfaces | `run scanner.webview.javascript` |

---

## 🔒 Burp Suite System CA Cert & ADB Commands

### Convert & Install Burp Certificate into System Store (`/system/etc/security/cacerts/`)

```bash
# 1. Convert .der to .pem
openssl x509 -inform DER -in burp.der -out burp.pem

# 2. Get subject hash (example: abcd1234)
openssl x509 -inform PEM -subject_hash_old -in burp.pem | head -1

# 3. Rename and push to system trust store
mv burp.pem abcd1234.0
adb root && adb remount
adb push abcd1234.0 /system/etc/security/cacerts/
adb shell chmod 644 /system/etc/security/cacerts/abcd1234.0
adb reboot
```

### Quick Commands Reference

| Category | Command | Description |
| --- | --- | --- |
| **Emulator** | `emulator -list-avds` | List available Android Virtual Devices |
| **Emulator** | `emulator -avd Pixel4_API33 -writable-system -no-snapshot` | Start emulator with writable system |
| **MobSF** | `docker run -it --rm -p 8000:8000 opensecurity/mobile-security-framework-mobsf:latest` | Start MobSF container |
| **ADB** | `adb shell pm list packages -3` | List 3rd party packages |
| **ADB** | `adb shell getprop ro.product.cpu.abi` | Get device CPU architecture |
| **Frida** | `frida-ps -Uia` | List running apps on USB device |
| **Frida** | `frida --codeshare masbog/frida-android-unpinning-ssl -f <package> -U` | Inject SSL unpinning script |
| **Objection** | `objection -g <package> explore` | Explore target app |
| **Objection** | `android sslpinning disable` | Disable SSL certificate pinning |
| **Objection** | `android root disable` | Disable root detection |

---

## ⚡ Automated Grep-Sensitive-Words Script (`Grep-Sensitive-Words.sh`)

Recursively search decompiled APK source code for secret keys, tokens, AES ciphers, and hardcoded URLs into isolated results files:

```bash
#!/usr/bin/env bash
# Grep-Sensitive-Words.sh - Automated Secret Key Extraction
if [ -z "$1" ]; then echo "Usage: ./Grep-Sensitive-Words.sh <APK_Decompiled_Folder>"; exit 1; fi
SEARCH_DIR="$1"
mkdir -p grep_results
KEYWORDS=("accesskey" "admin" "aes" "api_key" "apikey" "checkClientTrusted" "crypt" "http:" "https:" "password" "pinning" "secret" "SHA256" "SharedPreferences" "superuser" "token" "X509TrustManager" "insert into")

for keyword in "${KEYWORDS[@]}"; do
  SAFE_KEY=$(echo "$keyword" | sed 's/[: ]/_/g')
  grep -EHirn --include=\*.{smali,xml,java,txt} "$keyword" "$SEARCH_DIR" > "grep_results/${SAFE_KEY}.txt"
done
echo "[+] Scan completed! Results stored in grep_results/"
```

---

## 📱 Focused PIDCAT Logcat Filtering

Capture clean, focused logs from a single target package ID:

```bash
# Clone pidcat repository
git clone https://github.com/JakeWharton/pidcat.git
cd pidcat

# Filter logcat live for target package
python pidcat.py -s emulator-5554 com.target.app
```

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
