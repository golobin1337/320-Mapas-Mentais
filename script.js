const offerDateEl = document.getElementById('offerDate');
if (offerDateEl) {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  offerDateEl.textContent = `${dd}/${mm}/${d.getFullYear()}`;
}

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

document.querySelectorAll('.faq-item').forEach(item=>{
  item.querySelector('.faq-question').addEventListener('click',()=>{
    item.classList.toggle('open');
  });
});
