fetch('quiz.json')
.then (function(response) {
   return response.json ()
})
.then(function(data){
   console.log(data)
   
   let score = 0
    
   console.log(data)
   // trier les questions random
   const test = data.sort((a, b) => 0.5 - Math.random()).splice(0,10);     
   
   const btn_validate = document.querySelector(".answers__items")
   //  séléctionner les réponse
   const infoComp = document.getElementById('info_comp')
    
   
   function displayQuestion (data) { 
      const answer_0 = document.querySelector(".quest_0");
      answer_0.classList.remove("valid", "invalid");
      ;
      const answer_1 = document.querySelector(".quest_1");
      answer_1.classList.remove("valid", "invalid");
      const answer_2 = document.querySelector(".quest_2");
      answer_2.classList.remove("valid", "invalid");
      const answer_3 = document.querySelector(".quest_3");
      answer_3.classList.remove("valid", "invalid");
      
      const answer_0_input = document.querySelector("#answer_0");
      const answer_1_input = document.querySelector("#answer_1");
      const answer_2_input = document.querySelector("#answer_2");
      const answer_3_input = document.querySelector("#answer_3");
      
      // Je remplace la réponse par celle du json
      answer_0.textContent = data.answers[0];
      answer_0_input.value = 0;
      answer_0_input.checked = false
      // Je remplace la réponse par celle du json
      answer_0.textContent = data.answers[0];
      answer_0_input.value = 0;
      answer_1.textContent = data.answers[1];
      answer_1_input.value = 1;
      answer_1_input.checked = false
      answer_2.textContent = data.answers[2];
      answer_2_input.value = 2;
      answer_2_input.checked = false
      answer_3.textContent =data.answers[3];   
      answer_3_input.value = 3;
      answer_3_input.checked = false
      
      infoComp.textContent = data.details
      infoComp.style.display ="none"
      const nbrPage = document.querySelector ('.header_title') 
      nbrPage.textContent = "score : "+ score +"/25" 
      

      //  séléctionner la question 
      const newQuestion = document.querySelector(".question");
      //  je remplace la question par celui du json 
      newQuestion.textContent = data.question;
      btn_validate.addEventListener("submit", norefresh, {once : true})
      
     
   }
   
   
   let current_question = 0
   displayQuestion(test [current_question])
   
   // je recupere le bouton btn primary 
   
   // je donne la valeur event default au bouton btn primary
   function norefresh (event) {
      event.preventDefault();
      valider()
         
      // const valider = btn_validate
      function valider() {
         btn_validate.addEventListener("submit", nextQuestion,{once : true})
         function nextQuestion (event){
            event.preventDefault();
            console.log(current_question,test.length)
            if (current_question == test.length) {
               
               // stocker le score et le nom dans le local storage
               document.getElementById('gameName')
               let gameName = document.getElementById('inputName')
               const scores = [
                  {"nom": gameName, "score": score}
              ];
               localStorage.setItem ("scores", JSON.stringify(scores))

               window.location.assign("halloffame.html")
               return;
            }
            displayQuestion(test [current_question])
            
         }
         const selected = document.querySelector('input:checked');
         const labelSelected = document.querySelector('input:checked + label');
         
         if (selected.value == test[current_question].rightAnswers) {
            labelSelected.classList.add('valid')
            score++
         } else {
            labelSelected.classList.add('invalid')
         }
         ++current_question;
         infoComp.style.display = "block"
         if (current_question == test.length) {
            let gameName = document.getElementById('inputName')
            gameName.classList.remove('hidden')
         }
                  
      }
   }  

     
})



