export function loadContact(){
    
    const mainContent = document.querySelector("#content");

    const contact = document.createElement("div");
    contact.id = "contact"

    const contact_Header = document.createElement("h1");
    contact_Header.id = "contact-header";
    contact_Header.textContent = "Contact Us";
    contact.appendChild(contact_Header);

    const contact_Form = document.createElement("form");
    contact_Form.action = "POST";
    contact_Form.id = "contact-form";

    const name_Input = document.createElement("input");
    name_Input.type = "text";
    name_Input.placeholder = "Your Name*";
    name_Input.id = "name";
    contact_Form.appendChild(name_Input);

    const email_Input = document.createElement("input");
    email_Input.type = "email";
    email_Input.placeholder = "Your e-mail*";
    email_Input.id = "email";
    contact_Form.appendChild(email_Input);

    const phone_Input = document.createElement("input");
    phone_Input.type = "tel";
    phone_Input.placeholder = "Your phone";
    phone_Input.id = "phoneNum";
    contact_Form.appendChild(phone_Input);

    const message_Textarea = document.createElement("textarea");
    message_Textarea.cols = "30";
    message_Textarea.rows = "10";
    message_Textarea.placeholder = "Message*";
    message_Textarea.id = "message";
    contact_Form.appendChild(message_Textarea);

    const send_Button = document.createElement("button");
    send_Button.textContent = "Send Message";
    contact_Form.appendChild(send_Button);

    send_Button.addEventListener('click', (event) => {
        event.preventDefault();
        const nameValue = name_Input.value.trim();
        const emailValue = email_Input.value.trim();
        const phoneValue = phone_Input.value.trim();
        const messageValue = message_Textarea.value.trim();

        if (nameValue === "" || emailValue === "" || messageValue === "") {
            alert("Please fill out all required fields.");
            return;
        }

        sendMessage(nameValue, emailValue, phoneValue, messageValue);
        contact_Form.reset();
    })

    function sendMessage(name, email, phone, message) {
        console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
    }

    contact.appendChild(contact_Form);

    mainContent.appendChild(contact);
}