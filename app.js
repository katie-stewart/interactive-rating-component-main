$('.card').on('click', function() {
    $('.card').toggleClass('flipped');
    console.log('hey')
});


registerForm.addEventListener('submit,' (event) => {
            event.preventDefault();
            if choices.value === confirm.Choices.value {
                registerForm.submit();
                else {
                    console.log('Please select a rating');
                }

            });

        $("button[type=submit]")