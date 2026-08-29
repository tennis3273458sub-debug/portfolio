function addSpot() {
    const container = document.getElementById('spot-container');
    
    // 追加する新しいカードの要素を作成
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerHTML = `
        <img class="site-image" src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800" alt="マザー牧場">
        <div class="content">
            <span class="tag">富津エリア</span>
            <h2>マザー牧場</h2>
            <p>花と動物たちのエンターテイメントメディア。広い敷地内で動物たちとのふれあいや季節の花々を楽しめます。</p>
        </div>
    `;
    
    // コンテナ内にカードを追加
    container.appendChild(newCard);
}