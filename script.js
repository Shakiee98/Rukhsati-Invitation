// Ensure Background Video Plays Without Pause Button on Safari
const bgVideo = document.getElementById('bgVideo');
if (bgVideo) {
  bgVideo.muted = true;
  const playPromise = bgVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay fallback for touch interaction
      document.addEventListener('touchstart', () => bgVideo.play(), { once: true });
    });
  }
}

// Personalized Guest Parameter Handling
const guestDatabase = {
  'nawaz-selection': 'Nawaz Selection',
  'maulana-yahya': 'Maulana Yahya (Shaikh Sahab)',
  'shabina-lashkar': 'Shabina Lashkar',
  'ashiana-munshi': 'Ashiana Munshi',
  'kutubuddin-shaikh': 'Kutubuddin Shaikh',
  'shamsuddin-shaikh': 'Shamsuddin Shaikh'
};

const queryParams = new URLSearchParams(window.location.search);
const guestKey = (queryParams.get('guest') || '').toLowerCase().trim();
const guestResolved = guestDatabase[guestKey] || (queryParams.get('guest') || '').trim() || 'Our Cherished Guest';

document.getElementById('guestFront').textContent = guestResolved;
document.getElementById('guestInside').textContent = guestResolved;
document.getElementById('guestFooter').textContent = guestResolved;

// Authentic Multi-Stage Envelope Opening Animation
const sealButton = document.getElementById('sealButton');
const envelopeWrapper = document.getElementById('envelopeWrapper');
const envelopeScreen = document.getElementById('envelopeScreen');
const invitationContent = document.getElementById('invitationContent');
const tapHint = document.getElementById('tapHint');

let opened = false;
function openEnvelope() {
  if (opened) return;
  opened = true;

  if (tapHint) tapHint.style.opacity = '0';
  if (bgVideo) bgVideo.play().catch(() => {});

  // Step 1 & 2: Crack seal and flip flap in 3D perspective
  envelopeWrapper.classList.add('opening');

  // Step 3: Transition to full floating invitation
  setTimeout(() => {
    envelopeScreen.style.opacity = '0';
    envelopeScreen.style.transform = 'scale(1.04)';
  }, 1050);

  setTimeout(() => {
    envelopeScreen.style.display = 'none';
    invitationContent.classList.remove('locked');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, 1600);
}

sealButton.addEventListener('click', openEnvelope);
sealButton.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openEnvelope();
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

// Precise Heart-Shaped Scratch Canvas Overlay
const canvas = document.getElementById('scratchCanvas');
const ctx = canvas.getContext('2d');

function initHeartCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.save();
  ctx.beginPath();
  // Calibrated heart curve matching the center cavity of IMG_9403.png
  const cx = 138;
  const cy = 115;
  ctx.moveTo(cx, cy + 62);
  ctx.bezierCurveTo(cx - 70, cy + 22, cx - 74, cy - 34, cx - 36, cy - 50);
  ctx.bezierCurveTo(cx - 14, cy - 60, cx, cy - 38, cx, cy - 28);
  ctx.bezierCurveTo(cx, cy - 38, cx + 14, cy - 60, cx + 36, cy - 50);
  ctx.bezierCurveTo(cx + 74, cy - 34, cx + 70, cy + 22, cx, cy + 62);
  ctx.closePath();
  ctx.clip();

  // Powder-Blue Brushed Foil Surface
  const grad = ctx.createLinearGradient(cx - 60, cy - 50, cx + 60, cy + 50);
  grad.addColorStop(0, '#8eb0c4');
  grad.addColorStop(0.3, '#d8e7ef');
  grad.addColorStop(0.6, '#a4c2d3');
  grad.addColorStop(1, '#7a9eb3');
  ctx.fillStyle = grad;
  ctx.fill();

  // Subtle Metallic Scratch Prompt
  ctx.fillStyle = '#122538';
  ctx.font = '600 10px Montserrat';
  ctx.textAlign = 'center';
  ctx.fillText('SCRATCH TO REVEAL', cx, cy + 4);
  ctx.restore();
}
initHeartCanvas();

let scratching = false;
let scratchedCount = 0;

function getPoint(e) {
  const rect = canvas.getBoundingClientRect();
  const cx = e.touches ? e.touches[0].clientX : e.clientX;
  const cy = e.touches ? e.touches[0].clientY : e.clientY;
  return {
    x: (cx - rect.left) * (canvas.width / rect.width),
    y: (cy - rect.top) * (canvas.height / rect.height)
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

canvas.addEventListener('pointerdown', (e) => { scratching = true; erase(e); });
canvas.addEventListener('pointermove', erase);
window.addEventListener('pointerup', () => { scratching = false; });

// Calendar .ics Download
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
