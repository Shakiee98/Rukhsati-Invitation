// Ensure Safari Video Autoplay Without Play Button Overlay
const bgVideo = document.getElementById('bgVideo');
if (bgVideo) {
  bgVideo.muted = true;
  const playPromise = bgVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      document.addEventListener('touchstart', () => bgVideo.play(), { once: true });
    });
  }
}

// Particle Physics Engine for Wax Seal Burst
const fxCanvas = document.getElementById('fxCanvas');
const fxCtx = fxCanvas.getContext('2d');
let particles = [];

function resizeFx() {
  fxCanvas.width = window.innerWidth;
  fxCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeFx);
resizeFx();

function createGoldBurst(x, y) {
  const colors = ['#f5d77f', '#d4af37', '#e8c15a', '#ffffff', '#e3a857'];
  for (let i = 0; i < 65; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 3;
    particles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 2,
      size: Math.random() * 5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.02 + 0.015,
      rotation: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.2
    });
  }
  requestAnimationFrame(updateParticles);
}

function updateParticles() {
  fxCtx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.18; // gravity
    p.alpha -= p.decay;
    p.rotation += p.spin;

    if (p.alpha <= 0) {
      particles.splice(i, 1);
      continue;
    }

    fxCtx.save();
    fxCtx.globalAlpha = p.alpha;
    fxCtx.translate(p.x, p.y);
    fxCtx.rotate(p.rotation);
    fxCtx.fillStyle = p.color;
    fxCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    fxCtx.restore();
  }
  if (particles.length > 0) {
    requestAnimationFrame(updateParticles);
  }
}

// Guest Parameter Resolution
const queryParams = new URLSearchParams(window.location.search);
const rawGuest = queryParams.get('guest');
const guestResolved = rawGuest ? decodeURIComponent(rawGuest).trim() : 'Our Cherished Guest';

document.getElementById('guestFront').textContent = guestResolved;
document.getElementById('guestInside').textContent = guestResolved;
document.getElementById('guestFooter').textContent = guestResolved;

// Wax Seal Break & Unveil Sequence
const sealButton = document.getElementById('sealButton');
const sealImg = document.getElementById('sealImg');
const envelopeScreen = document.getElementById('envelopeScreen');
const envelopeCard = document.getElementById('envelopeCard');
const invitationContent = document.getElementById('invitationContent');

let unveiled = false;
function openInvitation(e) {
  if (unveiled) return;
  unveiled = true;

  // Haptic pulse on mobile
  if (navigator.vibrate) navigator.vibrate([40, 50, 40]);

  // Launch gold burst from seal center
  const rect = sealImg.getBoundingClientRect();
  createGoldBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);

  if (bgVideo) bgVideo.play().catch(() => {});

  sealImg.style.transform = 'scale(0.85)';
  envelopeCard.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease';
  envelopeCard.style.transform = 'scale(1.08) translateY(-14px)';
  envelopeCard.style.opacity = '0';

  setTimeout(() => {
    envelopeScreen.style.opacity = '0';
  }, 450);

  setTimeout(() => {
    envelopeScreen.style.display = 'none';
    invitationContent.classList.remove('locked');
    initScratchCanvas(); // Initialize canvas once container is mounted and visible
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, 850);
}

sealButton.addEventListener('click', openInvitation);
sealButton.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openInvitation(e);
  }
});

// Countdown (19 October 2026, 20:00 IST)
const eventTimestamp = new Date('2026-10-19T20:00:00+05:30').getTime();

function updateCountdown() {
  let delta = eventTimestamp - Date.now();
  if (delta < 0) delta = 0;

  const d = Math.floor(delta / 86400000);
  delta %= 86400000;
  const h = Math.floor(delta / 3600000);
  delta %= 3600000;
  const m = Math.floor(delta / 60000);
  const s = Math.floor((delta % 60000) / 1000);

  document.getElementById('cdDays').textContent = String(d).padStart(2, '0');
  document.getElementById('cdHours').textContent = String(h).padStart(2, '0');
  document.getElementById('cdMinutes').textContent = String(m).padStart(2, '0');
  document.getElementById('cdSeconds').textContent = String(s).padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Retina-Calibrated Heart Scratch Canvas
let scratchInitialized = false;
function initScratchCanvas() {
  if (scratchInitialized) return;
  scratchInitialized = true;

  const canvas = document.getElementById('scratchCanvas');
  const box = document.getElementById('heartScratchBox');
  const ctx = canvas.getContext('2d');

  // Scale canvas resolution to device pixel ratio (crisp on iPhone 15 Pro)
  const dpr = window.devicePixelRatio || 1;
  const w = box.clientWidth;
  const h = box.clientHeight;

  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  // Draw Powder-Blue Brushed Foil Fill
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#98b8cb');
  grad.addColorStop(0.3, '#d8e7ef');
  grad.addColorStop(0.7, '#8caec3');
  grad.addColorStop(1, '#6f94ab');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Position Scratch Prompt within Upper Cavity
  ctx.fillStyle = '#102235';
  ctx.font = '600 11px Montserrat';
  ctx.textAlign = 'center';
  ctx.fillText('SCRATCH HERE', w / 2, 94);

  let scratching = false;
  let scratchedCount = 0;

  function getPoint(e) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  function erase(e) {
    if (!scratching) return;
    const pt = getPoint(e);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 22, 0, Math.PI * 2);
    ctx.fill();
    scratchedCount++;

    if (scratchedCount > 35) {
      canvas.style.opacity = '0';
      canvas.style.transition = 'opacity 0.4s ease';
      setTimeout(() => { canvas.style.display = 'none'; }, 400);
    }
  }

  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId);
    scratching = true;
    erase(e);
  });
  canvas.addEventListener('pointermove', erase);
  canvas.addEventListener('pointerup', (e) => {
    try { canvas.releasePointerCapture(e.pointerId); } catch(err) {}
    scratching = false;
  });
  canvas.addEventListener('pointercancel', () => { scratching = false; });
}

// Calendar (.ics) Download
document.getElementById('calendarBtn').addEventListener('click', () => {
  const icsData = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//SakiruddinRuna//Rukhsati//EN',
    'BEGIN:VEVENT',
    'UID:sakiruddin-runa-rukhsati-20261019@invite.me',
    'DTSTAMP:20260916T000000Z',
    'DTSTART:20261019T143000Z',
    'DTEND:20261019T180000Z',
    'SUMMARY:Rukhsati Ceremony — Sakiruddin Shaikh & Runa Shaikh',
    'LOCATION:C-3, Alhamdo Park Society, Jaspur Road, Padra',
    'DESCRIPTION:Rukhsati Ceremony of Sakiruddin Shaikh and Runa Shaikh. Venue Map: https://maps.google.com/?q=22.246782,73.080925',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Sakiruddin-Runa-Rukhsati.ics';
  a.click();
  URL.revokeObjectURL(a.href);
});

// Share Invite
document.getElementById('shareBtn').addEventListener('click', async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Sakiruddin & Runa — Rukhsati Ceremony',
        text: 'You are warmly invited to the Rukhsati Ceremony of Sakiruddin & Runa on 19 October 2026.',
        url: window.location.href
      });
    } catch (err) {}
  } else {
    await navigator.clipboard?.writeText(window.location.href);
    alert('Invitation link copied to clipboard!');
  }
});
