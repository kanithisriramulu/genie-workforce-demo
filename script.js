document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const menu = document.getElementById('menu');
  const nav = document.getElementById('nav');
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.textContent='☰';
  }));
  const form = document.getElementById('enquiryForm');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent('Staffing enquiry - ' + data.get('sector'));
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nStaff required: ${data.get('sector')}\n\nRequirements:\n${data.get('message') || 'Please contact me to discuss requirements.'}`);
    window.location.href = `mailto:info@genieworkforce.co.uk?subject=${subject}&body=${body}`;
  });
});
