const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const error_message = document.getElementById('error-message')
form.addEventListener('submit', (e) => {
    //e.preventDefault//
    let errors = []
    if(firstname_input){
        errors = getSignupFormErrors(firstname_input.Value, email_input.Value, password_input.value)
    }
    else{
        errors = getLoginFoemErrors(email_input.value, password_input.value)
    }
    if(errors.lenght > 0){
        e.preventDefault()
        error_message.innerText = errord.join(". ")
    }
})
function getSignupFormErrors(firstname, email, password){
    let errors = []
    if(firstname === '' || firstname === null ){
        errors.push('first name required')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || firstname === null ){
        errors.push('email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || firstname === null ){
        errors.push('password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    if( passwprd.length < 7 ){
        errors.push('password must have atleast 7 character')
        password_input.parentElement.classList.add('incorrect')
    }
    return errors;

}
const allInputs = {firstname_input, email_input, password_input}
allInouts.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ' '
        }
    })
})
