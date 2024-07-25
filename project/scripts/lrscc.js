document.addEventListener('DOMContentLoaded', () => {
    const navigation = document.querySelector('nav');
    const page = document.querySelector('main');
    const heading = document.querySelector('#header-title');
    const feedbackElement = document.getElementById('feedback');
    const formElement = document.forms[0];
    

    if (formElement) {
        formElement.addEventListener('submit', function(e) {
            e.preventDefault();
            feedbackElement.innerHTML = 'Hello ' + formElement.user_name.value + '! Thank you for your message. We will get back with you as soon as possible!';
            feedbackElement.style.display = "block";
            document.body.classList.toggle('moveDown');
        });
    }
});
