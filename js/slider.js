var myFullpage = new fullpage('#fullpage', {
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    sectionsColor: ['#f2f2f2', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
    resize: false,
    animateAnchor: true,
    autoScrolling: true,
    responsive: 900,
    fitSection: false,
    menu: '#myMenu',
    navigationPosition: 'right',
    continuousVertical: false,
    paddingTop: '20px',
    onLeave: function (origin, destination, direction) {
        if (destination.anchor === "firstPage") {
            document.getElementById('header').style.color = "#ffffff";
            document.getElementById('myMenu').style.color = "#ffffff";
            document.getElementById('phone').style.color = "#ffffff";
            document.getElementById('href1').style.color = "#ffffff";
            document.getElementById('href2').style.color = "#ffffff";
            document.getElementById('href3').style.color = "#ffffff";
            document.getElementById('href4').style.color = "#ffffff";
            document.getElementById('href5').style.color = "#ffffff";
            document.getElementById('icon').style.fill = "#ffffff";
            document.getElementById('bottom-text').style.color = "#ffffff";
            document.getElementsByClassName("text-type-header")[0].style.color = "#ffffff";
            document.getElementsByClassName("text-type-header")[1].style.color = "#ffffff";
            document.getElementsByClassName("header-phone")[0].style.color = "#ffffff!important";

            $("#htl").addClass("header-transition-left");
        }
        if (destination.anchor === "secondPage" || destination.anchor === "thirdPage" || destination.anchor === "fourthPage" || destination.anchor === "lastPage") {
            document.getElementById('header').style.color = "#3a3a3a";
            document.getElementById('myMenu').style.color = "#3a3a3a";
            document.getElementById('phone').style.color = "#3a3a3a";
            document.getElementById('href1').style.color = "#3a3a3a";
            document.getElementById('href2').style.color = "#3a3a3a";
            document.getElementById('href3').style.color = "#3a3a3a";
            document.getElementById('href4').style.color = "#3a3a3a";
            document.getElementById('href5').style.color = "#3a3a3a";
            document.getElementById('icon').style.fill = "#3a3a3a";
            document.getElementById('bottom-text').style.color = "#3a3a3a";
            document.getElementsByClassName("text-type-header")[0].style.color = "#3a3a3a";
            document.getElementsByClassName("text-type-header")[1].style.color = "#3a3a3a";
            document.getElementsByClassName("header-phone")[0].style.color = "#3a3a3a";

            if (destination.anchor === "secondPage") {
                $("#section1").find(".header-text").addClass("header-transition-left");
                $("#section1").find(".rectangle-call").addClass("header-transition-left");
                $("#section1").find(".s2b-scale").addClass("s2b-transition-scale");
            }

            if (destination.anchor === "thirdPage") {
                $("#s2ht").addClass("fade-out");
                $("#s2q").addClass("fade-out");
            }

            if (destination.anchor === "fourthPage") {
                $("#section3").addClass("fade-out-2");
            }
        }
    }
});


