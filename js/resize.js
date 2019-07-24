$(document).ready(function () {
    let dflt = 16;
    let dflt_width = 1440;
    let mobile_width = 575;
    let current_width = window.outerWidth;
    let set = (current_width * dflt) / dflt_width;

    if (current_width <= 575) {
        set = (current_width * dflt) / mobile_width;
    }

    $("html").css("font-size", set + "px");
});

$(window).resize(function () {
    let dflt = 16;
    let dflt_width = 1440;
    let mobile_width = 575;
    let current_width = window.outerWidth;
    let set = (current_width * dflt) / dflt_width;

    if (current_width <= 575) {
        set = (current_width * dflt) / mobile_width;
    }

    $("html").css("font-size", set + "px");
});

$(".modal_trigger").on("click", function () {
    $(".modal_window").css("visibility", "visible").css("opacity", 1);
});

if(window.outerWidth <= 575) {
    $(".payment_info--block.modal_trigger").off("click");
}

$(".cross").on("click", function () {
    $(".modal_window").css("opacity", 0).css("visibility", "hidden");
});

$(".radio_wrap").on("click", function () {
    $("#" + $(this).attr("for")).click();
    $(".quiz-slide__image").css("background-image", "url('img/" + $(this).attr("for") + ".webp')");
    $("#next").removeAttr("disabled");
});

$(".quiz-slide__content label").on("click", function () {
    $("#next").removeAttr("disabled");
});

$(".checkbox_wrap").on("click", function () {
    $("#" + $(this).attr("for")).click();
});

$("#next").on("click", function () {
    let count = parseInt($("#counter__current").html());


    if (this.type === "submit") {
        $(this).submit();
        console.log("submit");
    } else {
        $("#slide_" + count).css("display", "none");
        $("#slide_" + ++count).css("display", "flex");
        $("#counter__current").html(count);
        $("#next").attr("disabled", true);
        if (count === 9) {
            $("#next").html("Узнать стоимость").attr("type", "submit");
        }
    }
});

$("input[type='text']").on("input", function () {
    $("#next").removeAttr("disabled");

    if (this.value === "") {
        $("#next").attr("disabled", true);
    }
});

$("form.original-form").on("submit", function () {
    let address = $("#address").val() !== "";
    let address2 = $("#address2").val() !== "";
    let mass = $("#mass").val() !== "";
    let contact = $("#contact").val() !== "";

    if (!(address && address2 && contact && mass)) {
        return false;
    }
});

$("form.mobile-form").on("submit", function () {
    let address = $("#address-m").val() !== "";
    let address2 = $("#address2-m").val() !== "";
    let mass = $("#mass-m").val() !== "";
    let contact = $("#contact-m").val() !== "";

    if (!(address && address2 && contact && mass)) {
        return false;
    }
});

$("form#footer_form").on("submit", function () {
    let name = $("#name").val() !== "";
    let phoneNo = $("#phone-no").val() !== "";

    if (!(name && phoneNo)) {
        return false;
    }
});

$("#mobile .icon").on("click", function () {
    $("#mobile").find("nav").css("opacity", 1).css("left", 0);
});

$("#mobile .nav_cross").on("click", function () {
    $("#mobile").find("nav").css("left", "100vw").css("opacity", 0);
});

$("#mobile .nav_links .link a").on("click", function () {
    $("#mobile").find("nav").css("left", "100vw").css("opacity", 0);
});

var current_input = 1;
var context = $(".mobile_inputs");

$("#mbl-next").on("click", function () {
    current_input++;
    context.find("input").css("display", "none");
    $("." + current_input).css("display", "block");

    if (current_input === 4) {
        $("#mbl-next").off("click").css("display", "none");
        $(".submit").css("display", "block");
    }
});
