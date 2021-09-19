$('#submit-button').on('click', async function(event) {
    event.stopPropagation();

    let name = $('#form-name').val();
    let email = $('#form-email').val();
    let subject = $('#form-subject').val();
    let message = $('#form-message').val();

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    if (name && email && subject && message) {
        if (isValidEmail(email)) {
            const response = await fetch('/contactme', {
                method: 'POST',
                body: JSON.stringify({ name, email, subject, message }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                alert('Message sent!')
            } else {
                alert('Oops! Something went wrong.')
            }

        } else {
            alert('Please enter a valid email address')
        }
    } else {
        alert('Please do not leave any fields blank')
    }

})

$('#clear-button').on('click', function (event) {
    event.stopPropagation();

    $('#form-name').val('')
    $('#form-email').val('')
    $('#form-subject').val('')
    $('#form-message').val('')
})