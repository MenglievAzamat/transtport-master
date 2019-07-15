$(document).ready(function() {
    let dflt = 16;
    let dflt_width = 1440;
    let current_width = $(window).outerWidth();
    let set = (current_width * dflt) / dflt_width;

    $("html").css("font-size", set + "px");
});

$(window).resize(function () {
    let dflt = 16;
    let dflt_width = 1440;
    let current_width = $(window).outerWidth();
    let set = (current_width * dflt) / dflt_width;

    $("html").css("font-size", set + "px");
});

$(".modal_trigger").on("click", function() {
    $(".modal_window").css("visibility", "visible").css("opacity", 1);
});

$(".cross").on("click", function() {
    $(".modal_window").css("opacity", 0).css("visibility", "hidden");
});

$(".radio_wrap").on("click", function() {
    $("#" + $(this).attr("for")).click();
    $(".quiz-slide__image").css("background-image", "url('img/" + $(this).attr("for") + ".webp')");
    $("#next").removeAttr("disabled");
});

$(".quiz-slide__content label").on("click", function() {
    $("#next").removeAttr("disabled");
});

$(".checkbox_wrap").on("click", function() {
    $("#" + $(this).attr("for")).click();
});

$("#next").on("click", function() {
    let count = parseInt($("#counter__current").html());


    if(this.type === "submit") {
        $(this).submit();
        console.log("submit");
    } else {
        $("#slide_" + count).css("display", "none");
        $("#slide_" + ++count).css("display", "flex");
        $("#counter__current").html(count);
        $("#next").attr("disabled", true);
        if(count === 9) {
            $("#next").html("Узнать стоимость").attr("type", "submit");
        }
    }
});

$("input[type='text']").on("input", function() {
    $("#next").removeAttr("disabled");

    if(this.value === "") {
        $("#next").attr("disabled", true);
    }
});

$("form.header-position-body").on("submit", function() {
    let address = $("#address").val() !== "";
    let address2 = $("#address2").val() !== "";
    let mass = $("#mass").val() !== "";
    let contact = $("#contact").val() !== "";

    if(!(address && address2 && contact && mass)) {
        return false;
    }
});

$("form#footer_form").on("submit", function() {
    let name = $("#name").val() !== "";
    let phoneNo = $("#phone-no").val() !== "";

    if(!(name && phoneNo)) {
        return false;
    }
});
