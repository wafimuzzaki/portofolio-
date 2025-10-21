
/* script.js - controls for audio and small UI interactions */

document.addEventListener('DOMContentLoaded', function(){
  const audio = document.getElementById('bgAudio');
  const btn = document.getElementById('audioBtn');
  const icon = btn.querySelector('.icon');
  const label = btn.querySelector('.label');
  let playing = false;

  // Prevent autoplay: audio.load() not invoked.
  btn.addEventListener('click', async function(){
    try {
      if (!playing) {
        // play
        await audio.play();
        playing = true;
        btn.setAttribute('aria-pressed','true');
        icon.textContent = '⏸';
        label.textContent = 'Pause Music';
      } else {
        audio.pause();
        playing = false;
        btn.setAttribute('aria-pressed','false');
        icon.textContent = '▶';
        label.textContent = 'Play Music';
      }
    } catch (err) {
      console.warn('Unable to play audio. Replace assets/ambient.mp3 with a valid file or user interaction required.', err);
    }
  });

  // Nice small typed-effect for subtitle
  const typedEl = document.getElementById('typed');
  const text = typedEl.textContent.trim();
  typedEl.textContent = '';
  let ti = 0;
  setInterval(()=>{
    ti = (ti + 1) % (text.length + 20);
    typedEl.textContent = text.slice(0, ti);
  }, 90);

  // Smooth nav highlight (basic)
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(a=>a.addEventListener('click', ()=>{
    // close actions could go here for mobile later
  }));
});
