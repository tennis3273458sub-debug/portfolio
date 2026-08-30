// スポット追加関数
function addSpot() {
    const container = document.getElementById('spot-container');
    
    const newCard = document.createElement('div');
    newCard.className = 'card fade-in-target visible'; // 最初から表示状態にする
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

// スクロール検知アニメーションの初期化
document.addEventListener("DOMContentLoaded", function() {
    const targets = document.querySelectorAll(".fade-in-target");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.1
    });

    targets.forEach(target => observer.observe(target));
});