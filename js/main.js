const button = document.querySelector('#button')
const input = document.querySelector('#input')
const inputValue = input.value.toString()
const error = document.querySelector('#error')


button.addEventListener('click', (event)=>{
    event.preventDefault()
 let regX=/^\S+@\S+$/;


//  if(regX.test(inputValue)){
//      alert('great');
//  }else{
//      input.classList.add('invalid')
//      error.innerHTML='Provide a valid email address'
//  }
   alert(regX.test(inputValue))
})