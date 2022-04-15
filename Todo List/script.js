const name=document.querySelector("#name");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const form=document.querySelector("form");
 
form.addEventListener("submit", function ( event){
    event.preventDefault();
    inputCheck()
})
 function inputCheck(){
     const nameValue=name.value.trim();
     const emailValue=email.value.trim();
     const passwordValue=password.value.trim();
if (nameValue==="") {
    errorMessage(name,'name can\'t be blank!');
    
} else  if(nameValue.length <5){
    errorMessage(name,' name must be more 5 letter')
 
}else{
    successMessage(name)
}
 }
function errorMessage(input,message){
    const pe=input.parentElement;
    const smallmessage=pe.querySelector('small')
    smallmessage.innerHTML=message
    pe.classList.add('error')
    pe.classList.remove('success')
}
function successMessage(input){
    const pe=input.parentElement;
    pe.classList.add('success')
    pe.classList.remove('error')
}