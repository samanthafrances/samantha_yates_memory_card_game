const menuLinks = [
    {text: 'The Cause', href: 'index.html' },
    {text: 'Play Game', href: 'game.html' },
  ];
  const mainEl = document.querySelector('main'); 
  mainEl.classList.add('flex-ctr');
  
  const MenuEl = document.querySelector('#menu');
  if (MenuEl) {
  MenuEl.style.height = '100%';
  MenuEl.classList.add('flex-around');
  }
  
  menuLinks.forEach(link => {
    const a = document.createElement('A');
    a.href = link.href;
    a.textContent = link.text;
    MenuEl.appendChild(a);
  
  });