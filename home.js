// changement de page 
let btnopenquiz = document.getElementById('btnQuiz');
let my_url_quiz = "file:///home/riss/Bureau/eval%20Js%20/quiz.html";
let btnOpenLeadboard = document.getElementById ('btnLeadboard');
let my_url_leadboard = "halloffame.html";

btnopenquiz.addEventListener('click', ()=> {
    window.location.replace("file:///home/riss/Bureau/eval%20Js%20/quiz.html")
})

btnOpenLeadboard.addEventListener('click',() =>{
    window.location.replace ("halloffame.html")
})
