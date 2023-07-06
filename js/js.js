document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})


let loader = $('#loader');
let submit = $('#submit');


submit.click(function () {
    let textarea = $('#textarea');
    let name = $('#name');
    let phone = $('#phone');
    let hasError = false;
    let inputRed = $('.input');
    inputRed.css('border-color', 'rgb(130, 19, 40)');

    $('.error-input').hide();

    if (!textarea.val()) {
        textarea.next().show();
        textarea.css('border-color', 'red');
        hasError = true;
    }
    if (!name.val()) {
        name.next().show();
        name.css('border-color', 'red');
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        phone.css('border-color', 'red');
        hasError = true;
    }

    if (!hasError) {
        loader.css('display', 'flex');

        $.ajax({
            method: "POST",
            url: " https://testologia.site/checkout",
            data: { name: name.val(), phone: phone.val(), textarea: textarea.val() }
        })
            .done(function( msg ) {
                loader.hide();
                if ( msg.success === 1) {
                    $('#successful').css('display', 'block');
                } else {
                    $('#unsuccessful').css('display', 'block');
                }
                console.log(msg);
            });
        $('#form').remove();
    }
});


