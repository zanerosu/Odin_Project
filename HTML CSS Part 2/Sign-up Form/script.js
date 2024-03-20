const form = document.querySelector('#main-form');


form.addEventListener('submit', (event) => {
    alert("Account created! (Not really!) Thank you!")
})

function check_pass() {
    const password = document.querySelector('#password').value;
    const password_conf = document.querySelector('#password-conf').value;
    const message = document.querySelector('#message');
    const create_btn = document.querySelector('#create_btn');

    if (password == password_conf){
        create_btn.disabled = false;
        message.textContent = ""
    } else {
        create_btn.disabled = true;
        message.textContent = "Passwords do not match!"
    }
}