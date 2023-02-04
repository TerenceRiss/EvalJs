// je récupère les scores dans le localstorage
const scores =  JSON.parse(localStorage.getItem("scores")) ?? [];

// je récupère le <ol> qui contiendra les scores
const olElt = document.getElementById("leaderboard");

// je fais un boucle sur les score
for(let scoreIndex = 0; scoreIndex < scores.length; scoreIndex++) {
    let html = `
    <li class="leaderboard_item">
        <div class="leaderboard_item_content">
            <div class="leaderboard_item_player">${scores[scoreIndex].nom}</div>
            <div class="leaderboard_item_score">${scores[scoreIndex].score}/25 pts</div>
        </div>
    </li>
    `;

    olElt.innerHTML += html;
}