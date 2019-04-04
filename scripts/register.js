$(document).ready(() => {
    $('#submit-btn').on('click', event => {
        event.preventDefault();

        var newUserData = {
            email: $('#registerEmail').val().trim(),
            user: $('#registerUser').val().trim(),
            password: $('#registerPassword').val().trim()
        };

        console.log(newUserData)

        $.post('/register/users', newUserData)

        $('#registerEmail').val('')
        $('#registerUser').val('')
        $('#registerPassword').val('')
    })
})