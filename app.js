const buttons = document.querySelectorAll('.button');
const screen=document.querySelector('.display')

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    text=event.target.innerText;
    // This log is for testing purposes to verify we're getting the correct value
    console.log(text);
    // Future logic to capture the button's value would go here...
    if (screen.innerText==0 && !'-=+*C'.includes(text)){
      screen.innerText=text
    }
    else if (!'='.includes(text)){
      screen.innerText+=text
    }
    if (text==="="){
      screen.innerText=eval(screen.innerText)
    }
    if (text==="C"){
      screen.innerText='0'
    }
  });
});
