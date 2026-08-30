// スポット追加関数
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

// 厳格なスクロール位置判定関数
function handleScroll() {
    const targets = document.querySelectorAll('.scroll-fade');
    const triggerPoint = window.innerHeight - 150; // 画面下から150px上がってきた位置で判定

    targets.forEach(target => {
        const top = target.getBoundingClientRect().top;

        if (top < triggerPoint) {
            target.classList.add('is-visible');
        }
    });
}

// スクロール時および画面ロード完了時に判定実行
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
    // ページトップへ強制スクロールして初期状態を保持
    setTimeout(handleScroll, 100);
});