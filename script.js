document.addEventListener("DOMContentLoaded", () => {
    // Random date between Unix epoch and Y2K38 on every refresh
    const dateBox = document.querySelector('.date-box');
    if (dateBox) {
        const dates = [
            0, 31536000, 63072000, 94668400,
            315532800, 631152000, 946684800,
            978307200, 1009843200, 1041379200,
            1072915200, 1136073600, 1199145600,
            1230768000, 1262304000, 1293840000,
            1325376000, 1356998400, 1388534400,
            1420070400, 1451606400, 1483228800,
            1514764800, 1546300800, 1577836800,
            1609459200, 1640995200, 1672531200,
            1704067200, 1735689600, 1767225600,
            1798761600, 1830297600, 1861920000,
            1893456000, 1924992000, 1956528000,
            1988064000, 2019686400, 2051222400,
            2082758400, 2114294400, 2145916800,
            2147483647
        ];
        const ts = dates[Math.floor(Math.random() * dates.length)];
        const date = new Date(ts * 1000);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        dateBox.textContent = date.toLocaleDateString('en-US', options);
        if (ts === 0 || ts === 2147483647) {
            dateBox.style.color = '#d63333';
        }
    }

    const derezText = document.querySelector('.derezzing');
    const glitchTexts = document.querySelectorAll('.glitch-text');
    const body = document.body;
    const allElements = document.querySelectorAll('p, h1, h2, li, a, .text-block, .date-box, .author, .red-link, .entry');
    
    // 1. More obvious glitch on .derezzing
    if (derezText) {
        setInterval(() => {
            const yShift = Math.random() * 4 - 2;

            if (Math.random() > 0.5) {
                const rX = Math.random() * 8 - 4;
                const gX = Math.random() * 8 - 4;
                const bX = Math.random() * 8 - 4;
                derezText.style.textShadow = `
                    ${rX}px ${yShift}px 0 rgba(255,0,0,0.9),
                    ${gX}px ${yShift}px 0 rgba(0,255,0,0.7),
                    ${bX}px ${yShift * -1}px 0 rgba(0,0,255,0.7)
                `;
                derezText.style.transform = `skewX(${Math.random() * 6 - 3}deg) scale(${1 + Math.random() * 0.08})`;
                derezText.style.clipPath = `inset(${Math.random() * 20}% 0 ${Math.random() * 20}% 0)`;
            } else {
                derezText.style.textShadow = 'none';
                derezText.style.transform = 'none';
                derezText.style.clipPath = 'none';
            }
        }, 80);
    }

    // 1b. Subtle glitch on .glitch-text elements
    if (glitchTexts.length) {
        setInterval(() => {
            glitchTexts.forEach(el => {
                if (Math.random() > 0.85) {
                    const x = Math.random() * 4 - 2;
                    el.style.textShadow = `${x}px 0 0 rgba(255,0,0,0.6), ${-x}px 0 0 rgba(0,255,255,0.4)`;
                    el.style.transform = `skewX(${Math.random() * 3 - 1.5}deg)`;
                    setTimeout(() => {
                        el.style.textShadow = '';
                        el.style.transform = '';
                    }, 60);
                }
            });
        }, 200);
    }

    // 2. Site-wide random glitches
    setInterval(() => {
        const r = Math.random();

        if (r > 0.6) {
            const randomEl = allElements[Math.floor(Math.random() * allElements.length)];
            if (randomEl) {
                randomEl.style.opacity = '0.6';
                randomEl.style.transform = `translate(${Math.random() * 6 - 3}px, ${Math.random() * 3 - 1.5}px) skewX(${Math.random() * 2 - 1}deg)`;
                randomEl.style.color = Math.random() > 0.5 ? '#ff4444' : '#44ff44';
                setTimeout(() => {
                    randomEl.style.opacity = '';
                    randomEl.style.transform = '';
                    randomEl.style.color = '';
                }, 60 + Math.random() * 80);
            }
        }

        if (r > 0.75) {
            const scanlines = document.querySelector('.scanlines');
            if (scanlines) {
                scanlines.style.opacity = '0.2';
                scanlines.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
                setTimeout(() => {
                    scanlines.style.opacity = '1';
                    scanlines.style.filter = 'none';
                }, 40 + Math.random() * 60);
            }
        }

        if (r > 0.82) {
            const line = document.createElement('div');
            line.style.cssText = `
                position: fixed; top: ${Math.random() * 100}vh; left: 0;
                width: 100vw; height: ${Math.random() * 5 + 1}px;
                background: ${['rgba(0,255,0,0.4)', 'rgba(255,0,0,0.3)', 'rgba(0,255,255,0.2)'][Math.floor(Math.random() * 3)]};
                z-index: 9998; pointer-events: none;
            `;
            document.body.appendChild(line);
            setTimeout(() => line.remove(), 50 + Math.random() * 120);
        }

        if (r > 0.92) {
            body.style.backgroundColor = Math.random() > 0.5 ? '#0a0505' : '#050a05';
            body.style.filter = `brightness(${1 + Math.random() * 0.3})`;
            setTimeout(() => {
                body.style.backgroundColor = '';
                body.style.filter = '';
            }, 30 + Math.random() * 50);
        }

        if (r > 0.88) {
            const container = document.querySelector('.desktop-container');
            if (container) {
                container.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 2 - 1}px)`;
                setTimeout(() => {
                    container.style.transform = '';
                }, 40);
            }
        }
    }, 150);

    // 3. Error popup every 60 seconds
    const errorMessages = [
        "SYSTEM ERROR: Memory corruption at 0xDEADBEEF",
        "FATAL: Sector not found - 0x00000000",
        "WARNING: Unstable pixel matrix detected",
        "CRITICAL: Display driver has stopped responding",
        "ERROR: Invalid page fault in non-paged area",
        "SYSTEM CRASH: Derezzing process failed",
        "KERNEL PANIC: Unable to mount root filesystem",
        "SEGFAULT: The void is leaking into address space",
        "HALT: Stack overflow at 0xFFF0",
        "ABORT: CRC mismatch - data corruption detected"
    ];

    function showErrorPopup() {
        const existing = document.querySelector('.error-popup-overlay');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.className = 'error-popup-overlay';

        const dialog = document.createElement('div');
        dialog.className = 'error-dialog';

        const titleBar = document.createElement('div');
        titleBar.className = 'error-title-bar';
        titleBar.textContent = '⚠ System Error';

        const content = document.createElement('div');
        content.className = 'error-content';

        const msg = document.createElement('span');
        msg.className = 'error-message';
        msg.textContent = errorMessages[Math.floor(Math.random() * errorMessages.length)];

        const dismissBtn = document.createElement('button');
        dismissBtn.className = 'error-dismiss-btn';
        dismissBtn.textContent = 'OK';
        dismissBtn.addEventListener('click', () => overlay.remove());

        content.appendChild(msg);
        dialog.appendChild(titleBar);
        dialog.appendChild(content);
        dialog.appendChild(dismissBtn);
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
    }

    setTimeout(showErrorPopup, 10000);
    setInterval(showErrorPopup, 60000);
});
