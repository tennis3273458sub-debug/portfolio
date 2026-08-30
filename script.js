// スポット追加処理
function addSpot() {
    const container = document.getElementById('spot-container');
    
    const newCard = document.createElement('div');
    newCard.className = 'card scroll-fade is-visible';
    newCard.innerHTML = `
        <img class="site-image" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" alt="新スポット">
        <div class="content">
            <span class="tag">追加スポット</span>
            <h2>新しいおすすめスポット</h2>
            <p>追加された新しい観光スポット情報です。</p>
        </div>
    `;
    
    container.appendChild(newCard);
}

// スクロール検知処理
function checkScroll() {
    const fadeElements = document.querySelectorAll('.scroll-fade');
    const triggerBottom = window.innerHeight - 80; // 画面下から80px入った位置

    fadeElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add('is-visible');
        }
    });
}

// スクロール時と読み込み時にチェック実行
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);