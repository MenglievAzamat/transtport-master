<?php
if (isset($_POST["address"]) || isset($_POST["location_from"]) || isset($_POST["name"]) || isset($_POST["name-modal"])) {
    $to = "galeev.group@gmail.com";
    $subject = "Новая заявка :: AllionLogistic";

    if (isset($_POST["address"])) {
        $message = "Из: ".$_POST["address"]."\nВ: ".$_POST["address2"]."\nМасса груза: ".$_POST["mass"]."\nКонтакты: ".$_POST["contact"];
    } else {
        if (isset($_POST["location_from"])) {
            $message =
                "Вид транспорта: ".$_POST["vehicle_type"].
                "\t || Температурный режим: ".$_POST["q1-bool"].
                "\nВид груза: ".$_POST["material_type"].
                "\nТип упаковки: ".$_POST["pack_type"].
                "\nТип погрузки: ".$_POST["carriage_type"].
                "\nИз: ".$_POST["location_from"].
                "\t || Больше одной точки: ".$_POST["q5-bool"].
                "\nВ: ".$_POST["location_to"].
                "\t || Больше одной точки: ".$_POST["q6-bool"].
                "\nСрочность: ".$_POST["delivery_time"].
                "\nТип организации: ".$_POST["company_type"].
                "\nКонтакты: ".$_POST["contact_phone"];
        } else {
            if (isset($_POST["name"])) {
                $message = "\nИмя: ".$_POST["name"].
                    "\nКонтакты: ".$_POST["phone-no"];
            } else {
                if (isset($_POST["name-modal"])) {
                    $message = "\nИмя: ".$_POST["name-modal"].
                        "\nКонтакты: ".$_POST["phone-no-modal"];
                }
            }
        }
    }

    mail($to, $subject, $message);
}
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="ru">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Allionlogistic</title>

    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.min.css">
    <link rel="stylesheet" href="css/ttf/stylesheet.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="shortcut icon" type="image/png" href="img/favicon.png" />

    <!-- Yandex.Metrika counter -->
      <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

           ym(54368398, "init", {
             clickmap:true,
             trackLinks:true,
             accurateTrackBounce:true,
             webvisor:true
           });
      </script>
      <noscript><div><img src="https://mc.yandex.ru/watch/54368398" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->

    <meta name="yandex-verification" content="a7b1ecba85f0b81e" />
    <meta name="google-site-verification" content="WWvmfzYt-kejCBUSbiFV21bOuJ-7B9yExh-m_Uk-KPk" />
</head>

<body>
<header id="header" style="position:relative;">
    <div class="container-fluid">
        <div class="row header-position">
            <div class="col-sm-3">
                <img src="img/logo.svg" alt="">
            </div>
            <div class="col-sm-9 main-header-info">
                <div class="my-auto" style="margin-right: 2rem;">
                    <span class="align-middle text-type-header" style="color: #3a3a3a;">Режим работы: Пн-Пт с 10:00 до 19:00</span>
                </div>
                <div class="my-auto">
                    <span class="align-middle text-type-header" style="color: #3a3a3a;">hello@allionlogistic.com</span>
                </div>
                <div class="my-auto" style="margin-left:0; margin-right: 2rem;">
                    <svg id="icon" style="width: 14px; height: 14px; fill: #3a3a3a"
                         enable-background="new 0 0 25.625 25.625" version="1.1"
                         viewBox="0 0 25.625 25.625" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
	                    <path d="m22.079 17.835c-1.548-1.324-3.119-2.126-4.648-0.804l-0.913 0.799c-0.668 0.58-1.91 3.29-6.712-2.234-4.801-5.517-1.944-6.376-1.275-6.951l0.918-0.8c1.521-1.325 0.947-2.993-0.15-4.71l-0.662-1.04c-1.102-1.713-2.302-2.838-3.827-1.515l-0.824 0.72c-0.674 0.491-2.558 2.087-3.015 5.119-0.55 3.638 1.185 7.804 5.16 12.375 3.97 4.573 7.857 6.87 11.539 6.83 3.06-0.033 4.908-1.675 5.486-2.272l0.827-0.721c1.521-1.322 0.576-2.668-0.973-3.995l-0.931-0.801z"/>
                    </svg>
                    <a class="header-phone" id="phone" href="tel:+79123456789" style="color: #3a3a3a">+7 912 345 67
                        89</a>
                </div>
                <div class="my-auto">
                    <button type="button" name="button" class="btn-custom-inverted">
                        Заказать звонок
                    </button>
                </div>
            </div>
        </div>
    </div>
</header>
<section>
    <div class="success">
        <div class="icon">
            <img src="img/circletick.svg" alt="tick">
        </div>
        <div class="content">
            <h1>Готово!</h1>
            <h4>Заявка принята, и наши менеджеры
                свяжутся с Вами в ближайшее время. </h4>
            <p>Вы будете автоматически перенаправлены обратно на сайт через <span id="return_time">5 секунд…</span></p>
            <a href="index.html">Вернутся прямо сейчас</a>
        </div>
    </div>
</section>

<script type="text/javascript" src="js/jquery.min.js"></script>
<script src="js/resize.min.js"></script>
<script>
    var time = parseInt($("#return_time").text());
    setTimeout(function () {
        time--;
        $("#return_time").text(time + " секунд...");
    }, 1000);
    setTimeout(function () {
        time--;
        $("#return_time").text(time + " секунд...");
    }, 2000);
    setTimeout(function () {
        time--;
        $("#return_time").text(time + " секунд...");
    }, 3000);
    setTimeout(function () {
        time--;
        $("#return_time").text(time + " секунд...");
    }, 4000);
    setTimeout(function () {
        console.log("bye");
        location.href = "index.html";
    }, 5000);
</script>
</body>

</html>
