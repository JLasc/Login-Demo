
$(document).ready(() => {

    $('#submit-btn').on('click', (event) => {
        event.preventDefault();

        var loginInfo = {
            username: $('#username').val().trim(),
            password: $('#password').val().trim()
        }

        console.log(loginInfo)

        $.post('/login', loginInfo)

        $('#username').val('')
        $('#password').val('')

    });

});