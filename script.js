const levelEmpty = document.getElementById('levelEmpty');

document.querySelectorAll('.level-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.level-tab').forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    if (levelEmpty) levelEmpty.style.display = 'none';
    const lv = tab.getAttribute('data-level');
    document.querySelectorAll('.level-panel').forEach(p=>{
      p.style.display = (p.getAttribute('data-panel')===lv) ? 'block' : 'none';
    });
  });
});
