let fadeInTarget = document.querySelectorAll('.fade');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++){
    const rect = fadeInTarget[i].getBoundingClientRect().top; // ビューポートに対する位置を取得
    const scroll = window.pageYOffset || document.documentElement.scrollTop; // スクロール量を取得
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeInTarget[i].classList.add('scroll-in');
    }
  }
});