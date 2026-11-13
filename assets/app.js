document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.mobile-menu'),nav=document.querySelector('.nav-links');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));}
 const current=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
 const theme=document.querySelector('.theme-toggle');
 if(theme){const saved=localStorage.getItem('alexia-theme');if(saved==='dark')document.body.classList.add('dark-theme');theme.textContent=document.body.classList.contains('dark-theme')?'☀':'☾';theme.addEventListener('click',()=>{document.body.classList.toggle('dark-theme');const dark=document.body.classList.contains('dark-theme');localStorage.setItem('alexia-theme',dark?'dark':'light');theme.textContent=dark?'☀':'☾';});}
 const form=document.querySelector('#contact-form');
 if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent(data.get('subject')||'Contato pelo portfólio');const body=encodeURIComponent('Nome: '+data.get('name')+'\nE-mail: '+data.get('email')+'\n\n'+data.get('message'));location.href='mailto:alexiaamendesdev@outlook.com?subject='+subject+'&body='+body;});}
});