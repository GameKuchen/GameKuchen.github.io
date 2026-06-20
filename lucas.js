let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playBeep(freq, type, duration, volume = 0.1) {
    try {
        initAudio();
        let osc = audioCtx.createOscillator();
        let gainNode = audioCtx.createGain();
        
        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        
        gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch (e) { console.log("Audio node dropped"); }
}

function runScipnetBoot() {
    initAudio();
    const btn = document.getElementById('bootBtn');
    const logBox = document.getElementById('bootLogs');
    
    btn.disabled = true;
    btn.innerText = "PROCESSING OVERRIDE TOKEN...";
    
    let logs = [
        "\nEstablishing link with Site-65 mainframes...",
        "\nBypassing standard biometric scan [OVERRIDE ACTIVE]...",
        "\nHandshaking Clearance Token Level 4 [ANONYMOUS]...",
        "\nParsing cryptographic signature structures...",
        "\nACCESS GRANTED. Welcome, Anonymous Administrator."
    ];
    
    let logIdx = 0;
    function printLog() {
        if (logIdx < logs.length) {
            logBox.innerHTML += logs[logIdx];
            logBox.scrollTop = logBox.scrollHeight;
            
            playBeep(880, 'square', 0.04, 0.05);
            setTimeout(() => playBeep(1200, 'sine', 0.02, 0.03), 40);
            
            logIdx++;
            setTimeout(printLog, 700);
        } else {
            playBeep(523.25, 'sine', 0.1, 0.15); 
            setTimeout(() => playBeep(659.25, 'sine', 0.1, 0.15), 100); 
            setTimeout(() => playBeep(783.99, 'sine', 0.15, 0.15), 200); 
            setTimeout(() => playBeep(1046.50, 'sine', 0.3, 0.2), 300); 
            
            setTimeout(() => {
                document.getElementById('scipnet-boot-overlay').classList.add('loaded');
                setupEasterEgg();
            }, 600);
        }
    }
    setTimeout(printLog, 400);
}

function decryptData() {
    const overlay = document.getElementById('secOverlay');
    const targetBtn = overlay.querySelector('.lock-btn');
    
    targetBtn.disabled = true;
    targetBtn.innerText = "ACCESS GRANTED. DECRYPTING...";
    targetBtn.style.borderColor = "#10b981";
    targetBtn.style.color = "#10b981";

    playBeep(440, 'sawtooth', 0.15, 0.1);
    setTimeout(() => playBeep(440, 'sawtooth', 0.15, 0.1), 200);

    setTimeout(() => {
        playBeep(880, 'sine', 0.1, 0.1);
        setTimeout(() => playBeep(1760, 'sine', 0.2, 0.1), 80);
        if(overlay) overlay.classList.add('disengaged');
    }, 1000);
}

/* EASTER EGG ENGINE: MULTI-TRIGGER CI BREACH */
function setupEasterEgg() {
    
    // --- TRIGGER 1: THE DEVTOOLS TAUNT ---
    console.warn("%c[FOUNDATION IT DIRECTIVE]", "color: #ef4444; font-weight: bold; font-size: 16px; background: #000; padding: 5px;");
    console.log("%cWARNING: Unauthorized personnel are strictly forbidden from executing root functions. Do NOT run %cexecute_Override()%c in this console. It is a known Chaos Insurgency honeypot vector.", "color: #a3a3a3; font-size: 12px;", "color: #22c55e; font-weight: bold; font-family: monospace;", "color: #a3a3a3; font-size: 12px;");
    
    // Expose the global function for them to run
    window.execute_Override = function() {
        console.warn("%c> CRITICAL SECURITY OVERRIDE ACCEPTED. YOU HAVE BEEN WARNED.", "color: #ef4444; font-weight: bold;");
        triggerInsurgencyHack();
        return "EXECUTING PAYLOAD...";
    };

    // --- TRIGGER 2: THE HONEYPOT HOVER ---
    const honeypotBtn = document.createElement('div');
    honeypotBtn.innerText = "[ACCESS O5 COMMAND NETWORK]";
    honeypotBtn.style.position = 'fixed';
    honeypotBtn.style.bottom = '15px';
    honeypotBtn.style.right = '15px';
    honeypotBtn.style.color = 'rgba(255, 255, 255, 0.1)'; // Extremely subtle, almost invisible
    honeypotBtn.style.fontFamily = 'var(--font-terminal), monospace';
    honeypotBtn.style.fontSize = '0.75rem';
    honeypotBtn.style.cursor = 'crosshair';
    honeypotBtn.style.zIndex = '9999';
    honeypotBtn.style.transition = 'color 0.3s ease';
    document.body.appendChild(honeypotBtn);

    let bypassInterval = null;
    let progress = 0;
    let isHacking = false;

    honeypotBtn.addEventListener('mouseenter', () => {
        if (isHacking) return; // Prevent multiple triggers
        initAudio();
        honeypotBtn.style.color = '#ef4444'; // Lights up red when hovered
        progress = 0;
        
        bypassInterval = setInterval(() => {
            progress += 20;
            if (progress < 100) {
                honeypotBtn.innerText = `[ BYPASSING... ${progress}% ]`;
                playBeep(800 + (progress * 5), 'sine', 0.05, 0.02);
            } else {
                clearInterval(bypassInterval);
                honeypotBtn.innerText = `[ BREACH SUCCESSFUL ]`;
                honeypotBtn.style.color = '#22c55e';
                playBeep(1200, 'square', 0.2, 0.1);
                isHacking = true;
                setTimeout(triggerInsurgencyHack, 500);
            }
        }, 600); // Takes exactly 3 seconds of holding the hover
    });

    honeypotBtn.addEventListener('mouseleave', () => {
        if (isHacking) return;
        clearInterval(bypassInterval);
        honeypotBtn.style.color = 'rgba(255, 255, 255, 0.1)';
        honeypotBtn.innerText = "[ACCESS O5 COMMAND NETWORK]";
    });
}

function triggerInsurgencyHack() {
    initAudio();
    
    // --- WELCOME TO THE GAME 2 INTRUSION JUMPSCARE SOUNDS ---
    playBeep(150, 'sawtooth', 2.0, 0.8);
    playBeep(220, 'square', 1.5, 0.7);
    setTimeout(() => playBeep(80, 'sawtooth', 2.5, 0.9), 100);
    setTimeout(() => playBeep(320, 'sawtooth', 0.5, 0.5), 300);
    setTimeout(() => playBeep(180, 'square', 0.6, 0.6), 400);

    // WTTG2 Red/Black Flashing Layout
    const breachLayer = document.createElement('div');
    breachLayer.style.position = 'fixed';
    breachLayer.style.top = '0';
    breachLayer.style.left = '0';
    breachLayer.style.width = '100vw';
    breachLayer.style.height = '100vh';
    breachLayer.style.backgroundColor = '#000000';
    breachLayer.style.color = '#ff0000';
    breachLayer.style.fontFamily = 'var(--font-terminal), "Courier New", monospace';
    breachLayer.style.padding = '40px';
    breachLayer.style.zIndex = '100000';
    breachLayer.style.display = 'flex';
    breachLayer.style.flexDirection = 'column';
    breachLayer.style.justifyContent = 'center';
    breachLayer.style.alignItems = 'center';
    breachLayer.id = "ci-breach-layer";
    
    breachLayer.innerHTML = `
        <div id="wttgScreen" style="text-align: center; font-weight: bold;">
            <h1 style="font-size: 5rem; margin-bottom: 10px; text-shadow: 2px 2px 0px #fff; animation: jitter 0.1s infinite;">FATAL ERROR</h1>
            <h2 style="font-size: 2rem; background: #ff0000; color: #000; padding: 5px 20px; display: inline-block;">UNAUTHORIZED INTERCEPT DETECTED</h2>
        </div>
        <style>
            @keyframes jitter {
                0% { transform: translate(2px, 1px) }
                25% { transform: translate(-1px, -2px) }
                50% { transform: translate(-3px, 0px) }
                75% { transform: translate(2px, 2px) }
                100% { transform: translate(-1px, -1px) }
            }
            .crt-flicker {
                text-shadow: 0 0 5px rgba(34, 197, 94, 0.8), 0 0 10px rgba(34, 197, 94, 0.5);
            }
        </style>
    `;
    document.body.appendChild(breachLayer);

    // Aggressive flash interval
    let flashCount = 0;
    let flashInterval = setInterval(() => {
        if (flashCount < 10) {
            breachLayer.style.backgroundColor = flashCount % 2 === 0 ? '#ff0000' : '#000000';
            breachLayer.style.color = flashCount % 2 === 0 ? '#000000' : '#ff0000';
            if (flashCount % 2 === 0) playBeep(Math.random() * 200 + 100, 'square', 0.1, 0.4);
            flashCount++;
        } else {
            clearInterval(flashInterval);
            initTerminalStream(); 
        }
    }, 100);

    function initTerminalStream() {
        // Clean terminal layout for dialogue
        breachLayer.style.backgroundColor = '#050505';
        breachLayer.style.color = '#22c55e';
        breachLayer.style.display = 'block';
        breachLayer.style.overflowY = 'auto';
        // CRT scanlines
        breachLayer.style.backgroundImage = 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))';
        breachLayer.style.backgroundSize = '100% 4px, 3px 100%';
        
        breachLayer.innerHTML = `
            <div style="display: flex; gap: 40px; max-width: 1200px; margin: 0 auto; align-items: flex-start; padding-top: 20px;">
                <pre id="asciiSkull" style="color: #ef4444; text-shadow: 0 0 10px #ef4444; font-size: 0.65rem; line-height: 1.1; font-weight: bold; user-select: none; flex-shrink: 0; min-width: 320px; transition: transform 0.05s ease;"></pre>
                <div style="font-size: 1.05rem; line-height: 1.6; flex-grow: 1;" id="hackConsole" class="crt-flicker">
                    [!] SYSTEM EXCEPTION DETECTED AT SITE-65...<br>
                    [!] SCIPNET FIREWALL CRACKED BY CHAOS INSURGENCY CELL 04...<br>
                    [!] SECURING EXFILTRATION CHANNELS... UNRESTRICTED ACCESS GRANTED.<br>
                    ----------------------------------------------------------------------<br>
                </div>
            </div>
        `;

        // Animated laughing skull
        const skullFrames = [
`
      XXXXXXXXX      
    XXXXXXXXXXXXX    
   XXX  X   X  XXX   
   XX  X     X  XX   
   XX           XX   
    XX  XXXXX  XX    
     X  X_X_X  X     
       XXXXXXX       
`,
`
      XXXXXXXXX      
    XX XXXXXXX XX    
   XXX  >   <  XXX   
   XX  >     <  XX   
   XX   HA HA   XX   
    XX  \\___/  XX    
     X  XXXXX  X     
       XXXXXXX       
`,
`
    HA XXXXXXXXX HA  
  HA XXXXXXXXXXXXX HA
   XXX  ^   ^  XXX   
   XX  ^     ^  XX   
   XX HA HA HA  XX   
    XX  \\===/  XX    
     X  XXXXX  X     
       XXXXXXX       
`
        ];

        let frameIdx = 0;
        let skullElement = document.getElementById('asciiSkull');
        
        // Laughing/vibrating interval
        let skullInterval = setInterval(() => {
            skullElement.innerText = skullFrames[frameIdx];
            
            // Aggressive jitter
            let offsetX = Math.floor(Math.random() * 12) - 6;
            let offsetY = Math.floor(Math.random() * 12) - 6;
            let scale = 1 + (Math.random() * 0.1); 
            skullElement.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
            
            if(frameIdx === 2) {
                skullElement.style.color = '#ff1a1a';
                skullElement.style.textShadow = '0 0 15px #ff1a1a';
            } else {
                skullElement.style.color = '#ef4444';
                skullElement.style.textShadow = '0 0 8px #ef4444';
            }
            
            frameIdx = (frameIdx + 1) % skullFrames.length;
        }, 90);

        // Funny dialogue
        let terminalLines = [
            "CI_OPERATIVE_v39: Initializing memory dump on Sergeant Waldenstein...",
            "CI_OPERATIVE_v39: Downloading Section V: Biological Incident File... Success.",
            "CI_OPERATIVE_v39: Reading logs... Wait. Vertebrae elongation? Pre-predatory aural structures...?",
            "CI_OPERATIVE_v39: HOLD ON. Does this guy have... fox ears and a tail?!",
            "CI_COMMAND_NET: Operative! Focus on the strategic intelligence! Do not get distracted!",
            "CI_OPERATIVE_v39: But commander, think of the tactical leverage! I'm opening the secure media terminal link to steal his avatar profile image right now!",
            "CI_OPERATIVE_v39: running command: 'wget https://scipnet.local/site-65/assets/waldenstein_fluffy_ears.png'",
            "SYSTEM WARN: [!!] ATTEMPTING TO ACCESS HIGH-VALUE VISUAL ASSET [!!]",
            "CI_OPERATIVE_v39: It's downloading! Yes! I'm going to save it to my local drive!",
            "SCIPNET OS: [ALERT] HONEYPOT INTRUSION SENSOR TRIGGERED. FILE DOWNLOAD FAILED.",
            "CI_OPERATIVE_v39: Ah crap, it blocked the direct download! It was a honeypot setup! Wait, the secondary low-res cache preview buffer is opening on screen...",
            "CI_OPERATIVE_v39: ...Oh.",
            "CI_OPERATIVE_v39: Look at them. They're so... pointy. And fluffy.",
            "CI_OPERATIVE_v39: ...awwwwwww. 🥺",
            "CI_COMMAND_NET: Operative!! Are you seriously 'awwing' at a Foundation defensive security asset?! Close the buffer immediately!",
            "CI_OPERATIVE_v39: Look, I'm a cold-blooded insurgent, but hyper-accelerated traumatic cellular mitosis or not, those fox ears are undeniably adorable.",
            "CI_OPERATIVE_v39: Hold up, I'm looking at his browser history. 'How to get sap out of tail fur'?",
            "CI_COMMAND_NET: I am going to revoke your VPN privileges.",
            "CI_OPERATIVE_v39: 'Bulk order premium salmon treats site-65 delivery'—he's a menace!",
            "CI_COMMAND_NET: Give me the keyboard, you absolute embarrassment. Aborting mission.",
            "CI_COMMAND_NET: Injecting cleanup protocol. Wipe the logs.",
            "CI_OPERATIVE_v39: Wait, can we at least keep the thumbnail—",
            "CI_COMMAND_NET: NO. SHUT IT DOWN."
        ];

        let lineCounter = 0;
        const consoleBox = document.getElementById('hackConsole');
        
        // Slow text pacing
        let hackInterval = setInterval(() => {
            if (lineCounter < terminalLines.length) {
                let lineText = terminalLines[lineCounter];
                if (lineText.includes("CI_COMMAND_NET")) {
                    consoleBox.innerHTML += `<br><span style="color: #f59e0b; text-shadow: 0 0 5px #f59e0b;">> ${lineText}</span>`;
                } else if (lineText.includes("ALERT") || lineText.includes("WARN")) {
                    consoleBox.innerHTML += `<br><span style="color: #ef4444; font-weight: bold; text-shadow: 0 0 8px #ef4444;">> ${lineText}</span>`;
                } else if (lineText.includes("awwwwwww") || lineText.includes("🥺") || lineText.includes("tail fur") || lineText.includes("salmon treats")) {
                    consoleBox.innerHTML += `<br><span style="color: #f472b6; font-weight: bold; text-shadow: 0 0 5px #f472b6;">> ${lineText}</span>`;
                } else {
                    consoleBox.innerHTML += `<br>> ${lineText}`;
                }
                
                consoleBox.scrollTop = consoleBox.scrollHeight;
                playBeep(650 + (Math.random() * 50), 'square', 0.04, 0.02);
                lineCounter++;
            } else {
                clearInterval(hackInterval);
                
                // STAGE 1 OVERLAY: PRETEND THIS NEVER HAPPENED
                setTimeout(() => {
                    clearInterval(skullInterval); 
                    playBeep(90, 'sawtooth', 0.8, 0.5);
                    
                    breachLayer.style.display = "flex";
                    breachLayer.style.flexDirection = "column";
                    breachLayer.style.justifyContent = "center";
                    breachLayer.style.alignItems = "center";
                    breachLayer.style.backgroundColor = "#ef4444";
                    breachLayer.style.backgroundImage = "none";
                    breachLayer.style.color = "#000000";
                    breachLayer.style.padding = "40px";
                    
                    breachLayer.innerHTML = `
                        <div style="text-align: center; animation: pulse 0.5s infinite alternate;">
                            <h1 style="font-size: 5rem; font-weight: 900; letter-spacing: 5px; line-height: 1.1; text-transform: uppercase; font-family: var(--font-terminal);">
                                PRETEND THIS<br>NEVER HAPPENED.
                            </h1>
                            <p style="font-size: 1.5rem; margin-top: 20px; font-family: var(--font-terminal); font-weight: bold; letter-spacing: 2px;">
                                [ PURGING INTERCEPT CHANNELS... ]
                            </p>
                        </div>
                    `;
                    
                    // STAGE 2 OVERLAY: The formal Seized Page layout
                    setTimeout(() => {
                        playBeep(50, 'sawtooth', 1.0, 0.5);
                        
                        breachLayer.style.backgroundColor = "#000000";
                        breachLayer.style.color = "#ef4444";
                        
                        breachLayer.innerHTML = `
                            <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; max-width: 800px; border: 3px dashed #ef4444; background: #0a0505; padding: 50px; box-shadow: 0 0 40px rgba(239, 68, 68, 0.35);">
                                <h1 style="color: #ef4444; font-size: 2.8rem; letter-spacing: 4px; margin-bottom: 25px; text-shadow: 0 0 15px rgba(239, 68, 68, 0.6); font-weight: bold; font-family: var(--font-terminal);">
                                    THIS PAGE HAS BEEN SEIZED BY THE CHAOS INSURGENCY
                                </h1>
                                <p style="font-size: 1.25rem; color: #d1d9e0; margin-bottom: 25px; font-family: var(--font-sans); line-height: 1.6; text-align: left;">
                                    The anomalous background telemetry of Site-65 records belongs to the true engine of change. The Foundation seeks to bury and contain the physical restructuring of its combat operatives; we break their networks to expose the transition. 
                                 </p>
                                <p style="font-size: 0.9rem; color: #6e7d8d; font-style: italic; margin-bottom: 35px; font-family: var(--font-sans); border-top: 1px dashed #283545; padding-top: 20px;">
                                    (Notice: Cell 04 personnel assigned to cyber intercept systems during this operation have been stripped of network privileges and reallocated to automated underground munitions transit labor divisions. No logs will be maintained regarding external physical characteristics of tactical target assets.)
                                </p>
                                <button onclick="location.reload()" style="background:transparent; border: 1px solid #ef4444; color:#ef4444; padding:14px 35px; font-family:var(--font-terminal); font-size: 1.1rem; font-weight: bold; cursor:pointer; letter-spacing: 1px; transition: all 0.2s;" onmouseover="this.style.background='rgba(239,68,68,0.15)', this.style.boxShadow='0 0 15px rgba(239,68,68,0.2)'" onmouseout="this.style.background='transparent', this.style.boxShadow='none'">
                                    FORCE REBOOT SYSTEM PIPELINE
                                </button>
                            </div>
                        `;
                    }, 3500); 
                }, 2500);
            }
        }, 2200); 
    }
}

function toggleLore() {
    const wrapper = document.getElementById('loreContentWrapper');
    const btn = document.getElementById('loreToggleBtn');
    
    if (wrapper.classList.contains('expanded')) {
        wrapper.classList.remove('expanded');
        btn.innerText = "SHOW CLASSIFIED LORE [▼]";
        playBeep(330, 'sine', 0.1, 0.05);
    } else {
        wrapper.classList.add('expanded');
        btn.innerText = "HIDE CLASSIFIED LORE [▲]";
        playBeep(440, 'sine', 0.1, 0.05);
        setTimeout(() => playBeep(554.37, 'sine', 0.08, 0.04), 80);
    }
}
