$(function () {
    $("#mass").mask("9?99999999", {placeholder: ""});
    $("#mass-m").mask("9?99999999", {placeholder: ""});
    $("#contact").mask("+7 (999) 999-99-99");
    $("#contact-m").mask("+7 (999) 999-99-99");
    $("#q9_contact").mask("+7 (999) 999-99-99", {
        completed: function () {
            $("#next").removeAttr("disabled");
        }
    });
    $("#phone-no-modal").mask("+7 (999) 999-99-99");
    $("#phone-no").mask("+7 (999) 999-99-99");
});
