

const myQuestions = document.querySelectorAll('.my_question');
let length = myQuestions.length;

const btn1 = document.querySelectorAll('.btn1')
const inputAll = document.querySelectorAll('input')



btn1.forEach(e => (e.disabled = true));
const arr = [];
inputAll.forEach(e => (!arr.includes(e.name) ? arr.push(e.name) : e));



let count = 0;
let answer = [];

function enableButton(count=0) {
  
  
  let currentRadios = document.querySelectorAll(`input[name="${arr[count]}"]`);
  
  
   currentRadios.forEach(radio => {
    radio.addEventListener(`change`, event => {
      
        answer[count] = event.target.value;
      if (event.target.checked) {
        document.querySelector(`.${event.target.id}`).disabled = false;
      }
    });
   });
  

  
}

enableButton();
  


function displayForm() {
    let index = 0;
    myQuestions[index].style.display = 'block';
    document.querySelectorAll('.form').forEach(form => {
      form.addEventListener(`submit`, e => {
        e.preventDefault();
        count++;
        if (count == length-1) {
          finalResult(answer);
          myQuestions[length - 1].style.display = 'block';
        }
        enableButton(count);
        
        index++;

        if (index > length - 1) {
          index = 0;
          myQuestions[length - 1].style.display = 'none';
        } else {
          myQuestions[index - 1].style.display = 'none';
        }
        myQuestions[index].style.display = 'block';
      });
    });
}
displayForm();





const solution = [
  'javascript',
  'For Styling',
  'Hypertext Markup Language',
  '1995',
];



const correctly_answered = document.getElementById('correctly_answered');

let result = [];
function finalResult(answer) {
  
    for (let i = 0; i < solution.length; i++) {
      if (solution[i] === answer[i]) {
   
        result.push(solution[i]);
      }
  }
  
  correctly_answered.innerText= result.length;
}




document.getElementById('reload').addEventListener(`click`, () => {
  window.location.reload();
  myQuestions[length - 1].style.display = 'none';
})



