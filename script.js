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
}
