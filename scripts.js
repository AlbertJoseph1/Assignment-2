document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('All fields are required.');
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});

function toggleMenu() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
}

function changeTheme() {
    document.body.classList.toggle('dark-theme');
}

window.onload = function() {
    var today = new Date();
    var dateElement = document.createElement('p');
    dateElement.textContent = 'Today\'s Date: ' + today.toDateString();
    document.body.appendChild(dateElement);
};
