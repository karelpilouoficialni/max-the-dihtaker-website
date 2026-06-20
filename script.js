document.addEventListener("DOMContentLoaded", () => {
    const dateBox = document.querySelector('.date-box');
    if (dateBox) {
        const dates = [
            0, 2147483647,
            28857600, 50976000, 77587200,
            125280000, 159408000, 191548800,
            283996800, 315532800, 356832000,
            499132800, 568080000, 631152000,
            757382400, 820454400, 883526400,
            946684800, 1020211200, 1078963200,
            1136160000, 1199145600, 1262304000,
            1301587200, 1352073600, 1404604800,
            1451606400, 1509580800, 1559347200,
            1609459200, 1661990400, 1719792000,
            1767225600, 1820361600, 1877904000,
            1924992000, 1975680000, 2032156800,
            2082758400, 2136441600
        ];
        const ts = dates[Math.floor(Math.random() * dates.length)];
        const date = new Date(ts * 1000);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        dateBox.textContent = date.toLocaleDateString('en-US', options);
        if (ts === 0 || ts === 2147483647) {
            dateBox.classList.add('red-date');
        }
    }

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
    let popupInterval = setInterval(showErrorPopup, 60000);

    window.__forget = function() {
        clearInterval(popupInterval);
        const existing = document.querySelector('.error-popup-overlay');
        if (existing) existing.remove();
        console.log('%c[system] error handler silenced.', 'color: #5a8a5a; font-style: italic;');
    };
});