document.addEventListener('DOMContentLoaded', () => {
    // 監視対象の要素をすべて取得
    const observerElements = document.querySelectorAll('.scroll-fade');

    // スクロール検知のオプション設定
    const observerOptions = {
        root: null, // ビューポートを基準にする
        rootMargin: '0px 0px -100px 0px', // 画面下部から100px上がってきたら発火
        threshold: 0.15 // 要素の15%が見えたら発火
    };

    // 交差時の処理
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 画面内に入ったらクラスを付与
                entry.target.classList.add('is-visible');
                // 一度表示されたら監視を解除（1回だけ動く）
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 全ての要素を監視対象に登録
    observerElements.forEach(el => observer.observe(el));
});

// スポット追加用関数
function addSpot() {
    const container = document.getElementById('spot-container');
    if (!container) return;
    
    const newCard = document.createElement('div');
    newCard.className = 'card scroll-fade is-visible';
    newCard.innerHTML = `
        <img class="site-image" src="https://images.unsplash.com/photo-1540206395-68808572332f?w=800" alt="万座毛">
        <div class="content">
            <span class="tag">恩納村エリア</span>
            <h2>万座毛（まんざもう）</h2>
            <p>隆起サンゴ礁の断崖に広がる芝生と、象の鼻に似た奇岩が有名な景勝地。夕日の名所としても大人気です。</p>
        </div>
    `;
    container.appendChild(newCard);
}