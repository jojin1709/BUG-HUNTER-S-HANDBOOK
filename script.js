document.addEventListener('DOMContentLoaded', () => {

  // ---- Toast Notification Engine ----
  const toastContainer = document.getElementById('toastContainer');
  function showToast(message, type = 'success') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast-msg pointer-events-auto px-4 py-3 rounded-xl border text-xs font-mono font-medium shadow-2xl flex items-center gap-2 ${
      type === 'success' 
        ? 'bg-slate-900/95 border-emerald-500/40 text-emerald-400' 
        : 'bg-slate-900/95 border-teal-500/40 text-teal-300'
    }`;
    toast.innerHTML = `
      <span class="w-2 h-2 rounded-full ${type === 'success' ? 'bg-emerald-400' : 'bg-teal-400'}"></span>
      <span>${escapeHtml(message)}</span>
    `;
    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2200);
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ---- CVSS & Bounty Estimator Logic ----
  const cvssSelect = document.getElementById('cvssVulnSelect');
  const impactBtns = document.querySelectorAll('.impact-btn');
  const scoreText = document.getElementById('cvssScoreText');
  const vectorText = document.getElementById('cvssVectorText');
  const bountyText = document.getElementById('cvssBountyText');

  let currentImpact = 'user';

  const cvssData = {
    rce: {
      user: { score: '8.8 HIGH', vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:H/A:H', bounty: '$2,500 — $6,000' },
      all: { score: '9.8 CRITICAL', vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H', bounty: '$5,000 — $15,000+' }
    },
    idor: {
      user: { score: '6.5 MEDIUM', vector: 'CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N', bounty: '$750 — $2,000' },
      all: { score: '8.6 HIGH', vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N', bounty: '$3,000 — $8,000' }
    },
    storage: {
      user: { score: '5.5 MEDIUM', vector: 'CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N', bounty: '$500 — $1,500' },
      all: { score: '7.5 HIGH', vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N', bounty: '$2,000 — $5,000' }
    },
    exported: {
      user: { score: '6.1 MEDIUM', vector: 'CVSS:3.1/AV:L/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:N', bounty: '$500 — $1,200' },
      all: { score: '7.8 HIGH', vector: 'CVSS:3.1/AV:L/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N', bounty: '$1,500 — $4,000' }
    },
    deeplink: {
      user: { score: '6.1 MEDIUM', vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:H/I:N/A:N', bounty: '$500 — $1,500' },
      all: { score: '8.1 HIGH', vector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:N', bounty: '$2,000 — $6,000' }
    },
    pinning: {
      user: { score: '4.8 LOW', vector: 'CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:L/I:L/A:N', bounty: 'Informational / Low ($100 — $300)' },
      all: { score: '5.9 MEDIUM', vector: 'CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:H/I:N/A:N', bounty: '$300 — $800' }
    },
    backup: {
      user: { score: '3.3 LOW', vector: 'CVSS:3.1/AV:L/AC:L/PR:L/UI:N/S:U/C:L/I:N/A:N', bounty: 'Low ($100 — $250)' },
      all: { score: '5.3 MEDIUM', vector: 'CVSS:3.1/AV:L/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N', bounty: '$300 — $750' }
    }
  };

  function updateCVSS() {
    if (!cvssSelect || !scoreText || !vectorText || !bountyText) return;
    const vuln = cvssSelect.value;
    const res = cvssData[vuln] ? cvssData[vuln][currentImpact] : cvssData['rce']['all'];

    scoreText.textContent = res.score;
    vectorText.textContent = res.vector;
    bountyText.textContent = res.bounty;

    if (res.score.includes('CRITICAL')) scoreText.className = 'text-4xl font-extrabold font-mono text-rose-400';
    else if (res.score.includes('HIGH')) scoreText.className = 'text-4xl font-extrabold font-mono text-amber-400';
    else if (res.score.includes('MEDIUM')) scoreText.className = 'text-4xl font-extrabold font-mono text-teal-400';
    else scoreText.className = 'text-4xl font-extrabold font-mono text-emerald-400';
  }

  if (cvssSelect) {
    cvssSelect.addEventListener('change', updateCVSS);
  }

  impactBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      impactBtns.forEach(b => {
        b.classList.remove('active', 'bg-emerald-500', 'text-slate-950', 'border-emerald-400');
        b.classList.add('bg-slate-950', 'text-slate-400', 'border-slate-800');
      });
      btn.classList.add('active', 'bg-emerald-500', 'text-slate-950', 'border-emerald-400');
      btn.classList.remove('bg-slate-950', 'text-slate-400', 'border-slate-800');
      currentImpact = btn.dataset.impact;
      updateCVSS();
    });
  });
  updateCVSS();

  // ---- Keyboard Shortcut (Cmd/Ctrl + K) for Search ----
  const toolSearchInput = document.getElementById('toolSearchInput');
  const globalSearchBtn = document.getElementById('globalSearchBtn');

  if (globalSearchBtn && toolSearchInput) {
    globalSearchBtn.addEventListener('click', () => {
      toolSearchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      toolSearchInput.focus();
    });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (toolSearchInput) {
        toolSearchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        toolSearchInput.focus();
      }
    }
  });

  // ---- Mobile Sidebar Drawer Toggle ----
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.getElementById('sidebar');

  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
    });
  }

  document.querySelectorAll('#sidebar nav a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024 && sidebar) {
        sidebar.classList.add('-translate-x-full');
      }
    });
  });

  // ---- Terminal Simulation ----
  const lines = [
    {t:'$ ', p:true, cmd:'adb devices'},
    {t:'List of devices attached', out:true},
    {t:'emulator-5554\tdevice (Android 13 / API 33)', out:true},
    {t:''},
    {t:'$ ', p:true, cmd:'./recon.sh target.apk'},
    {t:'[+] Fingerprinting framework with APKID...', out:true},
    {t:'[+] Extracting API keys and secret URIs...', out:true},
    {t:'[!] Found API Key: AIzaSyD9xK...', out:true},
    {t:''},
    {t:'$ ', p:true, cmd:'objection --g com.target.app explore'},
    {t:'[+] Agent loaded successfully.', out:true},
    {t:'[+] SSL certificate pinning disabled.', out:true},
    {t:''},
    {t:'root@kali:~#', warn:true, cmd:' target acquired. ready for interception.'},
  ];

  const termBody = document.getElementById('termBody');
  let li = 0;

  function typeLine() {
    if (!termBody) return;
    if (li >= lines.length) {
      const c = document.createElement('span');
      c.className = 'cursor-blink ml-1';
      termBody.appendChild(c);
      return;
    }
    const row = lines[li];
    const div = document.createElement('div');
    div.className = 'term-line';
    termBody.appendChild(div);

    let full = '';
    if (row.p) full = row.t + row.cmd;
    else if (row.warn) full = row.t + row.cmd;
    else full = row.t;

    if (!full) {
      li++;
      setTimeout(typeLine, 100);
      return;
    }

    let i = 0;
    function typeChar() {
      if (i <= full.length) {
        if (row.p) {
          div.innerHTML = `<span class="text-emerald-400 font-semibold">${escapeHtml(full.slice(0, i))}</span>`;
        } else if (row.warn) {
          div.innerHTML = `<span class="text-rose-400 font-semibold">${escapeHtml(full.slice(0, i))}</span>`;
        } else {
          div.innerHTML = `<span class="text-slate-300">${escapeHtml(full.slice(0, i))}</span>`;
        }
        i++;
        setTimeout(typeChar, row.out ? 4 : 18);
      } else {
        li++;
        setTimeout(typeLine, row.out ? 80 : 220);
      }
    }
    typeChar();
  }
  typeLine();

  // Copy Terminal Output
  const copyTerminalBtn = document.getElementById('copyTerminalBtn');
  if (copyTerminalBtn && termBody) {
    copyTerminalBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(termBody.innerText).then(() => {
        showToast('Terminal logs copied to clipboard!', 'info');
      }).catch(() => {});
    });
  }

  // ---- Copy Command Buttons ----
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.previousElementSibling ? btn.previousElementSibling.innerText : '';
      if (!code) return;
      navigator.clipboard.writeText(code).then(() => {
        showToast(`Copied snippet to clipboard!`, 'success');
      }).catch(() => {});
    });
  });

  // ---- Copy Report Template Button ----
  const copyReportBtn = document.getElementById('copyReportBtn');
  const reportTemplateText = document.getElementById('reportTemplateText');
  if (copyReportBtn && reportTemplateText) {
    copyReportBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(reportTemplateText.innerText).then(() => {
        showToast('Report Markdown template copied to clipboard!', 'success');
      }).catch(() => {});
    });
  }

  // ---- Tool Search & Category Filter ----
  const filterBtns = document.querySelectorAll('#catFilter .filter-btn');
  const toolCards = document.querySelectorAll('#toolGrid .tool-card');

  let activeCategory = 'all';
  let searchQuery = '';

  function filterTools() {
    toolCards.forEach(card => {
      const catMatches = (activeCategory === 'all' || card.dataset.cat === activeCategory);
      const textContent = card.innerText.toLowerCase();
      const searchMatches = (!searchQuery || textContent.includes(searchQuery));

      if (catMatches && searchMatches) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-emerald-500', 'text-slate-950', 'shadow-md');
        b.classList.add('bg-slate-900', 'text-slate-400', 'border-slate-800');
      });
      btn.classList.add('active', 'bg-emerald-500', 'text-slate-950', 'shadow-md');
      btn.classList.remove('bg-slate-900', 'text-slate-400', 'border-slate-800');
      activeCategory = btn.dataset.cat;
      filterTools();
    });
  });

  if (toolSearchInput) {
    toolSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterTools();
    });
  }

  // ---- Vulnerability Checklist LocalStorage Persistence & Progress ----
  const checks = document.querySelectorAll('#vulnList input[type=checkbox]');
  const fill = document.getElementById('progressFill');
  const pct = document.getElementById('progressPct');

  function refreshProgress() {
    if (!fill || !pct) return;
    const total = checks.length;
    const done = Array.from(checks).filter(c => c.checked).length;
    const percentage = total > 0 ? Math.round((done / total) * 100) : 0;
    fill.style.width = percentage + '%';
    pct.textContent = `${done} / ${total}`;
  }

  checks.forEach(cb => {
    const saved = localStorage.getItem('abb-' + cb.id);
    if (saved === '1') {
      cb.checked = true;
      cb.closest('.vitem').classList.add('checked');
    }
    cb.addEventListener('change', () => {
      localStorage.setItem('abb-' + cb.id, cb.checked ? '1' : '0');
      cb.closest('.vitem').classList.toggle('checked', cb.checked);
      refreshProgress();
      if (cb.checked) {
        showToast('Checklist item updated', 'info');
      }
    });
  });
  refreshProgress();

  // ---- Active Sidebar Nav Link Scrollspy & Click Handler ----
  const navLinks = document.querySelectorAll('.navlink');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetSec = document.querySelector(targetId);
        if (targetSec) {
          e.preventDefault();
          targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (window.innerWidth < 1024 && sidebar) {
            sidebar.classList.add('-translate-x-full');
          }
        }
      }
    });
  });

  function onScroll() {
    const scrollPos = window.scrollY + 180;
    let currentActive = null;

    navLinks.forEach(link => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const sec = document.querySelector(targetId);
        if (sec && sec.offsetTop <= scrollPos) {
          currentActive = link;
        }
      }
    });

    navLinks.forEach(l => l.classList.remove('active'));
    if (currentActive) {
      currentActive.classList.add('active');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
