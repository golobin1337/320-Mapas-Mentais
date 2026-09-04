document.querySelectorAll('.level-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.level-tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    const lv = tab.getAttribute('data-level');
    document.querySelectorAll('.level-panel').forEach(p=>{
      p.style.display = (p.getAttribute('data-panel')===lv) ? 'block' : 'none';
    });
  });
});
