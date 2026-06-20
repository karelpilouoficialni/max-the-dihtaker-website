document.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio('ambience.wav');
    audio.loop = true;
    audio.volume = 0.8;
    const tryPlay = () => { audio.play().catch(() => {}); };
    tryPlay();
    document.addEventListener('click', tryPlay, { once: true });

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
        "ERROR: Can't find the file 'reality.sys'",
        "SYSTEM CRASH: The universe has stopped working",
        "KERNEL PANIC: Unable to find soul",
        "SEGFAULT: The void is leaking into address space",
        "HALT: Stack overflow at 0xFFF0",
        "uh oh! data corruption detected!"
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

    let errorTimeout = setTimeout(showErrorPopup, 10000);
    let popupInterval = setInterval(showErrorPopup, 180000);

    window.__forget = function() {
        clearTimeout(errorTimeout);
        clearInterval(popupInterval);
        clearInterval(adInterval);
        document.querySelectorAll('.error-popup-overlay, .popup-ad').forEach(a => a.remove());
        console.log('%c[system] error handler silenced.', 'color: #5a8a5a; font-style: italic;');
    };

    const ads = [
        { title: "FREE RAM DOWNLOAD", body: "⚠ YOUR COMPUTER IS RUNNING LOW ON MEMORY!<br>Click here to download 512MB FREE RAM!<br><br><span style='color:#ff0000;font-weight:bold;'>ONLY 2 DOWNLOADS LEFT!</span>", link: "#" },
        { title: "YOU ARE VISITOR #0!", body: "Congratulations! You are the <b>0th</b> visitor!<br><br>Click here to claim your FREE PRIZE!<br><span style='color:#cc6600;'>★ PRIZE MAY NOT EXIST ★</span>", link: "#" },
        { title: "HOT BYTES IN YOUR AREA", body: "Single .exe files near YOU want to connect!<br><br>✓ No strings attached<br>✓ 100% malware<br>✓ Your IP is already visible<br><br><a href='#' style='color:#0000ff;'>Click to meet them now!</a>", link: "#" },
        { title: "FREE AOL 2000 HOURS!", body: "Get 2000 FREE hours of AOL!<br>No dialup required!<br><br><img src='imgs/image.png' style='width:40px;height:40px;float:left;margin-right:8px;border:2px ridge #888;'>America Online 2000 Edition<br>Now with 56K support!<br><br><b style='color:#00ff00;'>CLICK HERE TO INSTALL</b>", link: "#" },
        { title: "YOUR COMPUTER HAS VIRUS!", body: "⚠ WARNING: 147 viruses detected!<br>⚠ WARNING: Your IP: 127.0.0.1<br>⚠ WARNING: All data will be deleted!<br><br><span style='color:#cc0000;font-size:1.1rem;font-weight:bold;'>DOWNLOAD ANTIVIRUS NOW →</span><br><br><small>this is not a scam. this is real. we are worried about you.</small>", link: "#" },
        { title: "MAKE MONEY FROM HOME!!!", body: "Earn $9,999/hr working from your Compaq!<br><br>✓ No experience needed<br>✓ No internet required<br>✓ Just send us your social security number<br><br><b style='color:#cc6600;'>START TODAY!!!</b>", link: "#" },
        { title: "CLICK HERE TO DIE", body: "just kidding lol<br><br>but seriously click here<br><br><span style='font-size:0.8rem;color:#666;'>this ad knows what you did</span>", link: "#" },
        { title: "FREE IPHONE 1!", body: "You are the 999,999,999th visitor!<br><br><span style='color:#cc6600;font-size:1.5rem;font-weight:bold;'>★ YOU WIN ★</span><br><br>Claim your free iPhone 1 (2007 edition)<br>Battery may be dead. Screen may be cracked.<br>Phone may not exist.<br><br><span style='color:#006600;font-weight:bold;'>CLICK TO CLAIM →</span>", link: "#" },
        { title: "ARE YOU A ROBOT?", body: "Prove you are not a robot:<br><br><span style='font-size:2rem;'>🐧 ☂ ★ ∇</span><br><br>Click all squares containing<br>a soul. [0/0] correct.", link: "#" },
        { title: "NUDES", body: "________________________________<br><br>just kidding it's just another ad<br>for something you don't need<br><br>but you already clicked didn't you", link: "#" },
        { title: "HOT WOMEN IN YOUR AREA", noLink: true, body: `
            <div style="padding:16px;text-align:center;">
                <div style="font-size:1.3rem;font-weight:bold;color:#000000;margin-bottom:14px;">
                    HOT <span style="color:#ff0066;">WOMEN</span> IN YOUR AREA
                </div>
                <div style="display:flex;justify-content:center;gap:12px;margin-bottom:16px;">
                    <div style="text-align:center;">
                        <img src="imgs/ashley24.jpg" style="width:80px;height:80px;border:2px ridge #ff88bb;margin:0 auto 6px;display:block;object-fit:cover;">
                        <div style="font-weight:bold;color:#000000;font-size:0.8rem;">Ashley, 24</div>
                    </div>
                    <div style="text-align:center;">
                        <img src="imgs/becky22.jpg" style="width:80px;height:80px;border:2px ridge #ffaa66;margin:0 auto 6px;display:block;object-fit:cover;">
                        <div style="font-weight:bold;color:#000000;font-size:0.8rem;">Becky, 22</div>
                    </div>
                    <div style="text-align:center;">
                        <img src="imgs/stacey20.jpg" style="width:80px;height:80px;border:2px ridge #66aaff;margin:0 auto 6px;display:block;object-fit:cover;">
                        <div style="font-weight:bold;color:#000000;font-size:0.8rem;">Stacey, 20</div>
                    </div>
                </div>
                <div class="ad-join-btn" style="background:linear-gradient(180deg,#ff3377,#cc0044);border:2px outset #ff6699;padding:8px 32px;color:#ffffff;font-weight:bold;font-size:0.95rem;text-transform:uppercase;letter-spacing:2px;display:inline-block;cursor:pointer;">
                    JOIN NOW
                </div>
            </div>
        `, link: "#" }
    ];

    function spawnAd() {
        const existingOverlay = document.querySelector('.error-popup-overlay');
        if (existingOverlay) return;

        const ad = ads[Math.floor(Math.random() * ads.length)];
        const left = 10 + Math.random() * 60;
        const top = 5 + Math.random() * 50;

        const wrapper = document.createElement('div');
        wrapper.className = 'popup-ad';
        wrapper.style.cssText = `position:fixed;left:${left}vw;top:${top}vh;z-index:9997;max-width:320px;font-family:"Times New Roman",serif;`;

        const bar = document.createElement('div');
        bar.style.cssText = `background:linear-gradient(90deg,#000088,#0000cc,#000088);color:#ffffff;padding:4px 8px;font-size:0.75rem;font-weight:bold;text-transform:uppercase;letter-spacing:1px;border:2px ridge #4444aa;border-bottom:none;display:flex;justify-content:space-between;align-items:center;cursor:move;`;

        const barText = document.createElement('span');
        barText.textContent = ad.title.substring(0, 20);

        const closeBtn = document.createElement('span');
        closeBtn.textContent = '✕';
        closeBtn.style.cssText = `cursor:pointer;color:#ff6666;font-weight:bold;font-size:0.9rem;padding:0 4px;`;
        closeBtn.onclick = () => wrapper.remove();

        bar.appendChild(barText);
        bar.appendChild(closeBtn);

        const bodyDiv = document.createElement('div');
        bodyDiv.style.cssText = `background:#ffffff;border:2px ridge #888888;border-top:none;padding:12px;font-size:0.85rem;color:#000000;text-align:center;`;

        let bodyHtml = '<div style="display:block;margin-bottom:8px;font-size:0.7rem;color:#ff0000;font-weight:bold;">✦ SPONSORED CONTENT ✦</div>';
        bodyHtml += ad.body;
        bodyDiv.innerHTML = bodyHtml;

        const showDeadLink = (e) => {
            e.preventDefault();
            const confirmOverlay = document.createElement('div');
            confirmOverlay.style.cssText = `position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.6);z-index:10001;display:flex;align-items:center;justify-content:center;font-family:"Times New Roman",serif;`;
            const confirmBox = document.createElement('div');
            confirmBox.style.cssText = `background:linear-gradient(180deg,#2a2a2a,#0a0a0a);border:3px ridge #666;padding:20px;text-align:center;max-width:350px;color:#ffffff;`;
            confirmBox.innerHTML = `<div style="font-size:2rem;margin-bottom:10px;">🚫</div><p style="margin-bottom:14px;">This page cannot be displayed.<br>The link has been dead since 2004.</p><button onclick="this.parentElement.parentElement.remove()" style="padding:4px 20px;background:linear-gradient(180deg,#444,#222);border:2px outset #666;color:#fff;cursor:pointer;font-family:'Courier New',monospace;">OK</button>`;
            confirmOverlay.appendChild(confirmBox);
            document.body.appendChild(confirmOverlay);
        };

        const joinBtn = bodyDiv.querySelector('.ad-join-btn');
        if (joinBtn) {
            joinBtn.onclick = showDeadLink;
        }

        if (!ad.noLink) {
            const adLink = document.createElement('a');
            adLink.href = ad.link;
            adLink.style.cssText = `display:block;margin-top:10px;color:#0000ff;font-weight:bold;font-size:0.85rem;text-align:center;text-decoration:underline;cursor:pointer;font-family:"Times New Roman",serif;`;
            adLink.textContent = 'CLICK HERE';
            adLink.onclick = showDeadLink;
            bodyDiv.appendChild(adLink);
        }
        wrapper.appendChild(bar);
        wrapper.appendChild(bodyDiv);
        document.body.appendChild(wrapper);
    }

    const adInterval = setInterval(() => {
        if (Math.random() > 0.3) spawnAd();
    }, 18000);

    setTimeout(spawnAd, 3000);
});