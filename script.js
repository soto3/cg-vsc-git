let tocHtml = '';

// 見出しにidを付与し、ページ内リンク付きの目次項目を生成する
document.querySelectorAll('h2').forEach((el, index) => {
  const id = `toc-${index + 1}`;
  tocHtml += `<li><a href="#${id}">${el.textContent}</a></li>`;
  el.setAttribute('id', id);
});

// 目次をmain要素内の先頭に挿入する
if (tocHtml) {
  const ol = document.createElement('ol');
  ol.classList.add('toc');
  ol.innerHTML = tocHtml;
  document.querySelector('main').prepend(ol);
  toHamburgerMenu(ol);
}

// ★追加: ハンバーガーメニュー化する関数
function toHamburgerMenu(menu) {
  menu.classList.add('hamburger-menu');
  const menuOpener = document.createElement('button');
  menuOpener.classList.add('hamburger');
  menuOpener.innerHTML = `<span></span><span></span><span></span>`;
  document.querySelector('header').prepend(menuOpener);
  const el = document.querySelector('.hamburger');
  el.addEventListener('click', () => {
    el.classList.toggle('active');
    if (el.classList.contains('active')) menu.classList.add('active');
    else menu.classList.remove('active');
  });
}