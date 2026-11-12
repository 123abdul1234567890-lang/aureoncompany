const menuButton=document.getElementById('menuButton');
const nav=document.getElementById('navLinks');
menuButton.addEventListener('click',()=>{const opened=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!opened));menuButton.setAttribute('aria-label',opened?'Open navigation':'Close navigation');nav.classList.toggle('open',!opened)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
const leadForm=document.getElementById('leadForm');
leadForm.addEventListener('submit',e=>{e.preventDefault();if(!leadForm.reportValidity())return;const d=new FormData(leadForm);const msg=["Hi Aureon, I'd like to discuss a project.",`Name: ${d.get('name')}`,`Email: ${d.get('email')}`,`Business: ${d.get('business')||'Not specified'}`,`Interested in: ${d.get('service')}`,`Project details: ${d.get('message')||'Not specified'}`].join('\n');const url=`https://wa.me/923354903317?text=${encodeURIComponent(msg)}`;document.getElementById('formStatus').textContent='Opening WhatsApp with your enquiry. Press Send there to complete it.';const opened=window.open(url,'_blank','noopener,noreferrer');if(!opened)window.location.href=url;});
