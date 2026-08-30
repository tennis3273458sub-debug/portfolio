// スポット追加処理
function addSpot() {
    const container = document.getElementById('spot-container');
    
    const newCard = document.createElement('div');
    newCard.className = 'card scroll-fade is-visible'; // 追加時は即表示
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

// スクロール監視の処理（画面に入ったらふわっと表示）
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".scroll-fade");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible"); // 画面に入ったら表示
            }
        });
    }, {
        threshold: 0.2 // 要素が20%見えたら発火
    });

    fadeElements.forEach((el) => observer.observe(el));
});