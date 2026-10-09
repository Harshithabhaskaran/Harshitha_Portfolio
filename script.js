const nav=document.querySelector('.site-nav');
const menu=document.querySelector('.mobile-menu');
if(menu){menu.addEventListener('click',()=>{nav.classList.toggle('open')})}
const theme=document.querySelector('.theme');
if(theme){theme.addEventListener('click',()=>document.body.classList.toggle('soft'))}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});
document.querySelectorAll('section,.project-card,.skill-card,.research-list article,.timeline article,.education-list article').forEach(el=>{el.style.transition='opacity .7s ease,transform .7s ease';el.style.opacity='0';el.style.transform='translateY(22px)';observer.observe(el)});
const style=document.createElement('style');style.textContent='.visible{opacity:1!important;transform:none!important}.site-nav.open nav{display:flex}.soft{--bg:#080b14}';document.head.appendChild(style);
document.querySelectorAll('.echo-thumb').forEach(btn=>btn.addEventListener('click',()=>{
  const main=document.querySelector('.echo-main-image img');
  if(!main)return;
  main.src=btn.dataset.src;
  document.querySelectorAll('.echo-thumb').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}));
