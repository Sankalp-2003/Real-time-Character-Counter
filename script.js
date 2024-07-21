const textareaEl = document.getElementById('textarea');
const totalCounter = document.getElementById('total-counter');
const remaining = document.getElementById('remaining-counter');

textareaEl.addEventListener('keyup',()=>{
  console.log('key is pressed');
  updateCounter();
})

updateCounter();

function updateCounter(){
  totalCounter.innerText = textareaEl.value.length;
  remaining.innerText = textareaEl.getAttribute('maxLength') - textareaEl.value.length;
}