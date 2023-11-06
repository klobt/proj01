function onload() {
    document.querySelector('#contact-submit').addEventListener('click', function (event) {
        document.querySelector('#contact-email').value = '';
        document.querySelector('#contact-message').value = '';
        document.querySelector('#contact-thankyou').innerText = 'Dziękujemy za feedback!';
        setTimeout(function () {
            document.querySelector('#contact-thankyou').innerText = '';
        }, 1000)
    });
}