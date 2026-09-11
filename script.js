const progress=document.getElementById('progressBar');
window.addEventListener('scroll',()=>{const h=document.documentElement;progress.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'});
const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
