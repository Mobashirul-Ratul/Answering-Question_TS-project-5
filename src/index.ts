const myQuestions = document.querySelectorAll(
  '.my_question',
) as NodeListOf<Element>;;
let length = myQuestions.length;

const btn1 = document.querySelectorAll('.btn1') as NodeListOf<Element>;
const inputAll = document.querySelectorAll('input') as NodeListOf<Element>;;

btn1.forEach((e:any) => (e.disabled = true));
const arr:string[] = [];
inputAll.forEach((e:any) => (!arr.includes(e.name) ? arr.push(e.name) : e));

let count = 0;
let answer:string[] = [];

function enableButton(count = 0) {
  let currentRadios = document.querySelectorAll(`input[name="${arr[count]}"]`);

  currentRadios.forEach(radio => {
    radio.addEventListener(`change`, event => {
      let target = event.target as HTMLInputElement;
      answer[count] = target.value;
      if (target.checked) {
        (document.querySelector(`.${target.id}`) as HTMLInputElement).disabled =
          false;
      }
    });
  });
}

enableButton();

function displayForm() {
  let index:number = 0;
  (myQuestions[index] as HTMLDivElement).style.display = 'block';
  document.querySelectorAll('.form').forEach(form => {
    form.addEventListener(`submit`, e => {
      e.preventDefault();
      count++;
      if (count == length - 1) {
        finalResult(answer);
        (myQuestions[length - 1] as HTMLDivElement).style.display = 'block';
      }
      enableButton(count);

      index++;

      if (index > length - 1) {
        index = 0;
        (myQuestions[length - 1] as HTMLDivElement).style.display = 'none';
      } else {
        (myQuestions[index - 1] as HTMLDivElement).style.display = 'none';
      }
     (myQuestions[index] as HTMLDivElement).style.display = 'block';
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

const correctly_answered = document.getElementById('correctly_answered') as HTMLDivElement;

let result = [];
function finalResult(answer:string[]) {
  for (let i = 0; i < solution.length; i++) {
    if (solution[i] === answer[i]) {
      result.push(solution[i]);
    }
  }

 correctly_answered.innerText = String(result.length) ;
}

(document.getElementById('reload') as HTMLButtonElement).addEventListener(`click`, () => {
  window.location.reload();
  (myQuestions[length - 1] as HTMLDivElement).style.display = 'none';
});
