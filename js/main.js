$(document).ready(() => {
  $(".menu-item").click((e) => {
    let currentElement = $(e.target);
    $(".menu-item").removeClass("active-menu-item");
    currentElement.addClass("active-menu-item");
  });

  $(".menu").on("click", ".menu-item.landing", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута hre
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якор
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мc
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  $("#blog-carousel").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $("#reviews-carousel").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $("#accordion").accordion({
    collapsible: true,
    active: false,
  });

  $(".portfolio-card").on("click", function () {
    var dataId = $(this).attr("data-id");
    $(dataId).fadeIn();
    $(dataId).show();
    $("#portfolio-cards").fadeOut();
    $("#portfolio-cards").hide();
    $(".general-button.return").on("click", function () {
      $("#portfolio-cards").fadeIn();
      $("#portfolio-cards").show();
      $(dataId).fadeOut();
      $(dataId).hide();
    });
  });

  //Form submit validation
  $(".page-form-submit").click(() => {
    let name = $(".oder-form-container .form form input:nth-child(1)");
    let phone = $(".oder-form-container .form form input:nth-child(2)");
    let last_name = $(".oder-form-container .form form input:nth-child(3)");
    let email = $(".oder-form-container .form form input:nth-child(4)");
    let middle_name = $(".form form input:nth-child(5)");
    let date = $(".form form input:nth-child(6)");
    let checkbox = $(".form-action .checkbox");
    if (
      name.val() &&
      phone.val() &&
      last_name.val() &&
      email.val() &&
      checkbox.prop("checked")
    ) {
      $(".form-content .form .error-message").hide();
      $.ajax({
        type: "post",
        url: "order-wedding.php",
        data:
          "name=" +
          name.val() +
          "&phone=" +
          phone.val() +
          "&last_name=" +
          last_name.val() +
          "&email=" +
          email.val() +
          "&middle_name=" +
          middle_name.val() +
          "&date=" +
          date.val(),
        success: () => {
          $(".form-content .form-submit-success").css("display", "flex");
          $(".order .order-container .oder-form-container .section-title").css(
            "text-align",
            "center"
          );
          $(".order .order-container .oder-form-container .section-title").html(
            "Спасибо за заявку!"
          );
          $(".form-content .form").hide();
        },
        error: () => {
          alert(
            "Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона."
          );
        },
      });
    } else {
      $(".form-content .form .error-message").show();
      if (!name.val()) {
        name.addClass("required");
      } else {
        name.removeClass("required");
      }
      if (!phone.val()) {
        phone.addClass("required");
      } else {
        phone.removeClass("required");
      }
      if (!last_name.val()) {
        last_name.addClass("required");
      } else {
        last_name.removeClass("required");
      }
      if (!email.val()) {
        email.addClass("required");
      } else {
        email.removeClass("required");
      }
      if (!checkbox.prop("checked")) {
        $(".form-action .privacy-input-container .checkbox-custom").addClass(
          "required"
        );
      } else {
        $(".form-action .privacy-input-container .checkbox-custom").removeClass(
          "required"
        );
      }
    }
  });
  //Form popup submit validation
  $(".page-form-submit").click(() => {
    let name = $(".form.popup form input:nth-child(1)");
    let phone = $(".form.popup form input:nth-child(2)");
    let last_name = $(".form.popup form input:nth-child(3)");
    let email = $(".form.popup form input:nth-child(4)");
    let middle_name = $(".form.popup form input:nth-child(5)");
    let date = $(".form.popup form input:nth-child(6)");
    let checkbox_popup = $(".form.popup .form-action .checkbox");
    if (
      name.val() &&
      phone.val() &&
      last_name.val() &&
      email.val() &&
      checkbox_popup.prop("checked")
    ) {
      $(".form-content .form.popup .error-message").hide();
      $.ajax({
        type: "post",
        url: "order-wedding.php",
        data:
          "name=" +
          name.val() +
          "&phone=" +
          phone.val() +
          "&last_name=" +
          last_name.val() +
          "&email=" +
          email.val() +
          "&middle_name=" +
          middle_name.val() +
          "&date=" +
          date.val(),
        success: () => {
          $(".form-content .form-submit-success span").css(
            "margin-bottom",
            "100px"
          );
          $(".form-content .form-submit-success").css("display", "flex");
          $(".oder-form-container .section-title").css("text-align", "center");
          $(".oder-form-container .section-title").html("Спасибо за заявку!");
          $(".oder-form-container .section-title").html("Спасибо за заявку!");
          $(".popup-container .oder-form-container").css("width", "768px");
          $(".form-content .form").hide();
        },
        error: () => {
          alert(
            "Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона."
          );
        },
      });
    } else {
      $(".form-content .form.popup .error-message").show();
      if (!name.val()) {
        name.addClass("required");
      } else {
        name.removeClass("required");
      }
      if (!phone.val()) {
        phone.addClass("required");
      } else {
        phone.removeClass("required");
      }
      if (!last_name.val()) {
        last_name.addClass("required");
      } else {
        last_name.removeClass("required");
      }
      if (!email.val()) {
        email.addClass("required");
      } else {
        email.removeClass("required");
      }
      if (!checkbox_popup.prop("checked")) {
        $(".form-action .privacy-input-container .checkbox-custom").addClass(
          "required"
        );
      } else {
        $(
          ".form.popup .form-action .privacy-input-container .checkbox-custom"
        ).removeClass("required");
      }
    }
  });

  //Order call form submit validation
  $("#order-call-btn").click(() => {
    let name = $("#order-call div.form > form > input:nth-child(1)");
    let phone = $("#order-call div.form > form > input:nth-child(2)");
    let checkbox_call_popup = $(
      "#order-call .privacy-input-container .checkbox"
    );
    if (name.val() && phone.val() && checkbox_call_popup.prop("checked")) {
      $("#order-call > div > div > div.form > div.error-message").hide();
      $.ajax({
        type: "post",
        url: "order-call.php",
        data: "name=" + name.val() + "&phone=" + phone.val(),
        success: () => {
          $(".form-content .form-submit-success span").css(
            "margin-bottom",
            "100px"
          );
          $("#order-call .form-container .form-submit-success").css(
            "display",
            "flex"
          );
          $("#order-call .section-title").css("text-align", "center");
          $("#order-call .section-title").html("Спасибо за заявку!");
          $("#order-call .order-call-popup").css("width", "768px");
          $("#order-call .form-container .form").hide();
        },
        error: () => {
          alert(
            "Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона."
          );
        },
      });
    } else {
      $("#order-call > div > div > div.form > div.error-message").show();
      if (!checkbox_call_popup.prop("checked")) {
        $("#order-call .privacy-input-container .checkbox-custom").addClass(
          "required"
        );
      } else {
        $("#order-call .privacy-input-container .checkbox-custom").removeClass(
          "required"
        );
      }
      if (!name.val()) {
        name.addClass("required");
      } else {
        name.removeClass("required");
      }
      if (!phone.val()) {
        phone.addClass("required");
      } else {
        phone.removeClass("required");
      }
    }
  });

  //Back to top button
  $("#back-to-top-btn").on("click", function (event) {
    $("body,html").animate({ scrollTop: 0 }, 800);
  });

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      $("#back-to-top-btn").fadeIn();
      $("#back-to-top-btn").css("display", "flex");
      $("#back-to-top-btn").fadeIn();
    } else {
      $("#back-to-top-btn").fadeOut();
    }
  }
  //Open order request popup
  $(".general-button.order-popup").click(() => {
    $("#order-popup").css("display", "flex");
    $("body").addClass("modal-open");
  });
  $(".close-popup").click(() => {
    $("#order-popup").css("display", "none");
    $("body").removeClass("modal-open");
  });
  //Open order call popup
  $(".order-call-button").click(() => {
    $("#order-call").css("display", "flex");
    $("body").addClass("modal-open");
  });
  $("#order-call .close-popup").click(() => {
    $("#order-call").css("display", "none");
    $("body").removeClass("modal-open");
  });
  //Burger Menu
  $("#burger").click(() => {
    $("#burger-popup").css("display", "flex");
    $("body").addClass("modal-open");
    console.log(1);
  });
  $("#burger-popup .close-popup").click(() => {
    $("#burger-popup").css("display", "none");
    $("body").removeClass("modal-open");
  });
  $("#burger-popup .burger-menu .order-call-button").click(() => {
    $("#burger-popup").css("display", "none");
  });
  $("#burger-popup .burger-menu .menu-container .menu .menu-item").click(() => {
    $("#burger-popup").css("display", "none");
    $("body").removeClass("modal-open");
  });
  $(".ui-accordion .ui-accordion-content").css("height", "auto");
});
