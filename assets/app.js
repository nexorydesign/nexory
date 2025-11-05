// === NEXORY — app.js ===
// Subtle 3D tilt on mouse move (hero/title reacts)
(function(){
  const hero = document.querySelector('.hero');
  const inner = document.querySelector('.hero-inner');
  const title = document.querySelector('.live-title');
  if(!hero || !inner || !title) return;

  let rafId = null;
  const strength = 10; // degrees

  function handle(e){
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;  // 0..1
    const y = (e.clientY - r.top) / r.height;  // 0..1
    const rx = (y - 0.5) * -strength;
    const ry = (x - 0.5) * strength;

    inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    title.style.transform = `translateZ(40px)`;
  }

  function reset(){
    inner.style.transform = 'none';
    title.style.transform = 'none';
  }

  hero.addEventListener('mousemove', (e)=>{
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(()=> handle(e));
  });
  hero.addEventListener('mouseleave', ()=>{
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(reset);
  });
})();

// Gentle entry animation for CTA & socials
(function(){
  const cta = document.querySelector('.cta');
  const socials = document.querySelectorAll('.social');
  if(cta){
    cta.style.opacity = 0;
    cta.style.transform = 'translateY(10px)';
    requestAnimationFrame(()=>{
      setTimeout(()=>{
        cta.style.transition = 'all .6s ease';
        cta.style.opacity = 1;
        cta.style.transform = 'translateY(0)';
      }, 250);
    });
  }
  socials.forEach((el, i)=>{
    el.style.opacity = 0; el.style.transform += ' translateY(10px)';
    setTimeout(()=>{
      el.style.transition = 'all .5s ease';
      el.style.opacity = 1;
      el.style.transform = el.style.transform.replace(' translateY(10px)','');
    }, 350 + i*90);
  });
})();
<script>
// --- NEXORY Loader Language Fix ---
const loader = document.getElementById("loader");
const langSelect = document.getElementById("langSelect");

// Ako je jezik već izabran, preskače loader i izbor jezika
if (sessionStorage.getItem("langChosen")) {
  loader?.remove();
  langSelect?.remove();
}

// Ako nije, čeka da se klikne dugme i pamti izbor
document.querySelectorAll(".nx-btn-lang").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const lang = btn.textContent.trim();
    sessionStorage.setItem("langChosen", lang);
    if (lang === "EN") window.location.href = "index-en.html";
    else window.location.href = "index.html";
  });
});
</script>

