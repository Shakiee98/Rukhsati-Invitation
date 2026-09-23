:root {
  --royal-navy: #102235;
  --powder-blue: #6c91a8;
  --gold-accent: #c6a052;
  --gold-glow: #ffdf94;
  --parchment: #fdfcf9;
  --text-dim: #3a5065;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}

body {
  background: #cfdde6;
  color: var(--royal-navy);
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow-x: hidden;
}

.mobile-wrapper {
  width: 100%;
  max-width: 430px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #e6f0f5;
  box-shadow: 0 10px 40px rgba(16, 34, 53, 0.3);
}

.courtyard-video {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 430px;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  pointer-events: none;
}

/* Master Particle Canvas: Anchored Above UI */
#fxCanvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  pointer-events: none;
}

/* ========================================================
   SCREEN 1: ROYAL ENVELOPE STATIONERY
   ======================================================== */
.envelope-screen {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  position: relative;
  z-index: 30;
  background: rgba(215, 230, 238, 0.4);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.envelope-scene {
  width: 100%;
  max-width: 375px;
}

.envelope-card-wrapper {
  position: relative;
  width: 100%;
  background: var(--parchment);
  border-radius: 12px;
  box-shadow: 
    0 24px 50px rgba(16, 34, 53, 0.35),
    0 4px 12px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(198, 160, 82, 0.5);
  overflow: hidden;
  padding: 10px;
}

.envelope-card-wrapper::before {
  content: "";
  position: absolute;
  inset: 7px;
  border: 1.5px solid rgba(198, 160, 82, 0.65);
  border-radius: 8px;
  pointer-events: none;
  z-index: 5;
}
.envelope-card-wrapper::after {
  content: "";
  position: absolute;
  inset: 11px;
  border: 1px dashed rgba(198, 160, 82, 0.4);
  border-radius: 6px;
  pointer-events: none;
  z-index: 5;
}

.corner-filigree {
  position: absolute;
  font-size: 1rem;
  color: var(--gold-accent);
  z-index: 6;
  line-height: 1;
  pointer-events: none;
}
.top-left { top: 12px; left: 14px; }
.top-right { top: 12px; right: 14px; transform: scaleX(-1); }
.bottom-left { bottom: 12px; left: 14px; transform: scaleY(-1); }
.bottom-right { bottom: 12px; right: 14px; transform: scale(-1); }

.envelope-top-flap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 95px;
  background: linear-gradient(180deg, #f3f1ea 0%, #e4e2da 100%);
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  z-index: 3;
  box-shadow: 0 6px 16px rgba(16, 34, 53, 0.15);
  border-bottom: 1.5px solid rgba(198, 160, 82, 0.5);
  pointer-events: none;
}
.flap-bevel {
  position: absolute;
  inset: 0;
  clip-path: polygon(0 0, 100% 0, 50% 95%);
  background: linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 100%);
}

.envelope-body-inner {
  position: relative;
  z-index: 4;
  padding: 85px 16px 36px;
  text-align: center;
}

/* Sized & Contained Bismillah */
.gold-bismillah-container {
  width: 100%;
  max-width: 220px;
  margin: 0 auto;
}
.gold-bismillah-text {
  display: block;
  font-family: 'Amiri', serif;
  font-size: 1.55rem;
  font-weight: 700;
  color: var(--gold-accent);
  line-height: 1.25;
  text-shadow: 0 1px 4px rgba(198, 160, 82, 0.35);
}

.envelope-tag {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.92rem;
  letter-spacing: 3.5px;
  font-weight: 600;
  color: var(--powder-blue);
  margin: 6px 0 16px;
}

.guest-emboss-box {
  background: rgba(240, 246, 250, 0.85);
  border: 1px solid rgba(198, 160, 82, 0.45);
  border-left: 3px solid var(--gold-accent);
  border-right: 3px solid var(--gold-accent);
  border-radius: 6px;
  padding: 10px 14px;
  margin-bottom: 18px;
}
.guest-emboss-box small {
  display: block;
  font-size: 0.55rem;
  letter-spacing: 2px;
  color: var(--text-dim);
}
.guest-emboss-box strong {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.35rem;
  color: var(--royal-navy);
}

.seal-interactive-zone {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-top: 4px;
}

.guide-arrow-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: floatArrow 1.8s ease-in-out infinite;
  margin-bottom: 2px;
}
.guide-label {
  font-size: 0.62rem;
  letter-spacing: 2px;
  font-weight: 700;
  color: var(--gold-accent);
  text-transform: uppercase;
}
.gold-guide-arrow {
  width: 18px;
  height: 18px;
  color: var(--gold-accent);
  margin-top: 2px;
}

@keyframes floatArrow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}

.seal-ring {
  width: 135px;
  height: 135px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: sealPulse 2.8s infinite ease-in-out;
}
.seal-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 10px 22px rgba(16, 34, 53, 0.4));
  transition: transform 0.4s ease;
}

@keyframes sealPulse {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 6px 14px rgba(108, 145, 168, 0.45)); }
  50% { transform: scale(1.06); filter: drop-shadow(0 12px 24px rgba(198, 160, 82, 0.7)); }
}

/* ========================================================
   SCREEN 2: FLOATING INVITATION
   ======================================================== */
.invitation-flow {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 24px 14px 200px;
}
.invitation-flow.locked {
  display: none;
}

.glass-sheet {
  background: rgba(255, 255, 255, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 14px;
  padding: 26px 16px;
  text-align: center;
  box-shadow: 0 10px 32px rgba(16, 34, 53, 0.08);
}

.crest-mark {
  color: var(--gold-accent);
  font-size: 1.1rem;
}

.salute-text {
  font-size: 0.8rem;
  color: var(--text-dim);
}
.salute-text strong {
  color: var(--royal-navy);
}

.main-event-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.85rem;
  font-weight: 600;
  color: var(--royal-navy);
  letter-spacing: 1.2px;
  margin: 6px 0;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.95), 0 0 14px rgba(255, 255, 255, 0.9);
}

.names-calligraphy {
  font-family: 'Great Vibes', cursive;
  font-size: 3.7rem;
  color: var(--royal-navy);
  line-height: 1.05;
  margin: 10px 0 14px;
  text-shadow: 0 1px 4px rgba(255, 255, 255, 0.95), 0 0 16px rgba(255, 255, 255, 0.9);
}
.names-calligraphy .amp {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  font-style: italic;
  color: var(--gold-accent);
  display: block;
  margin: -6px 0;
}

.family-lineage {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 8px 0;
}
.person-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--royal-navy);
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.9);
}
.parent-line {
  font-size: 0.8rem;
  color: var(--text-dim);
}
.family-lineage .knot {
  color: var(--gold-accent);
  font-size: 0.75rem;
  margin: 2px 0;
}

.short-ayah {
  margin: 14px 0;
  padding: 8px 4px;
  border-top: 1px solid rgba(198, 160, 82, 0.45);
  border-bottom: 1px solid rgba(198, 160, 82, 0.45);
}
.short-ayah blockquote {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 1.22rem;
  color: var(--royal-navy);
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.95);
}
.short-ayah cite {
  display: block;
  font-size: 0.72rem;
  color: var(--text-dim);
  margin-top: 4px;
}

/* ========================================================
   DECORATED HEART SCRATCH CARD
   ======================================================== */
.heart-scratch-wrapper {
  display: flex;
  justify-content: center;
  margin: 18px 0 14px;
}

.heart-frame-ornament {
  position: relative;
  width: 260px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Arabesque Accents Resting on Top Curves */
.heart-accent {
  position: absolute;
  font-size: 1rem;
  color: var(--gold-accent);
  z-index: 5;
  pointer-events: none;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
}
.left-accent { top: 2px; left: 42px; transform: rotate(-25deg); }
.right-accent { top: 2px; right: 42px; transform: rotate(25deg) scaleX(-1); }

.heart-scratch-box {
  position: relative;
  width: 250px;
  height: 230px;
  clip-path: path("M 125,215 C 10,140 0,70 42,26 C 84,-15 125,26 125,26 C 125,26 166,-15 208,26 C 250,70 240,140 125,215 Z");
  filter: drop-shadow(0 12px 24px rgba(16, 34, 53, 0.28));
  box-shadow: 0 0 0 3px rgba(198, 160, 82, 0.6) inset;
}

/* State B: Revealed Plate */
.scratch-reveal {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, #ffffff 0%, #f6f8fa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 14px 10px;
}

.reveal-inner-border {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px dashed rgba(198, 160, 82, 0.5);
  border-radius: 50%;
  padding: 10px;
}

.reveal-tag {
  font-size: 0.65rem;
  letter-spacing: 2px;
  color: var(--gold-accent);
  font-weight: 700;
  text-transform: uppercase;
}
.reveal-date {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.45rem;
  color: var(--royal-navy);
  margin: 3px 0;
}
.reveal-time {
  font-size: 0.72rem;
  color: var(--text-dim);
}

#scratchCanvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  touch-action: none;
}

/* Countdown */
.countdown-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  margin-top: 14px;
}
.time-cell {
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid rgba(198, 160, 82, 0.4);
  border-radius: 6px;
  padding: 8px 2px;
}
.time-cell b {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.28rem;
  color: var(--royal-navy);
}
.time-cell span {
  font-size: 0.58rem;
  letter-spacing: 1px;
  color: var(--text-dim);
}

/* Venue Section */
.sub-heading {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.35rem;
  color: var(--royal-navy);
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.detail-cell {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.65);
  padding: 10px 14px;
  border-radius: 6px;
  margin-bottom: 8px;
  text-align: left;
  border: 1px solid rgba(198, 160, 82, 0.35);
}
.detail-cell .icon {
  font-size: 1.2rem;
  color: var(--gold-accent);
}
.detail-cell small {
  display: block;
  font-size: 0.6rem;
  letter-spacing: 1px;
  color: var(--text-dim);
}
.detail-cell strong {
  font-size: 0.9rem;
  color: var(--royal-navy);
}
.detail-cell span {
  font-size: 0.75rem;
  color: var(--text-dim);
}

.button-stack {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 14px;
}

.navy-btn {
  display: inline-block;
  width: 100%;
  padding: 12px;
  background: var(--royal-navy);
  color: #ffffff;
  font-weight: 500;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(16, 34, 53, 0.25);
}
.navy-btn.outline {
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid var(--royal-navy);
  color: var(--royal-navy);
  box-shadow: none;
}
.navy-btn.share {
  margin-bottom: 12px;
}

.footer-block {
  margin-top: 16px;
}
.arabic-closing {
  font-family: serif;
  font-size: 0.95rem;
  color: var(--royal-navy);
  margin-bottom: 8px;
}
.personal-footer {
  font-size: 0.72rem;
  color: var(--text-dim);
}
.personal-footer strong {
  color: var(--royal-navy);
}
