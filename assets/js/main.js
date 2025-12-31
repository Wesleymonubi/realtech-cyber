document.addEventListener('DOMContentLoaded', function(){
  // nav toggle
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const expanded = nav.style.display === 'flex';
      nav.style.display = expanded ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
    });
  }

  // basic client-side form validation/UX
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      // simple validation for required fields
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');
      if(!name.value.trim() || !email.value.trim() || !message.value.trim()){
        e.preventDefault();
        alert('Please fill in name, email and message.');
        return false;
      }
      // optionally show a loading state
      const btn = form.querySelector('button[type="submit"]');
      if(btn){ btn.disabled = true; btn.textContent = 'Sending...' }
    });
  }
});