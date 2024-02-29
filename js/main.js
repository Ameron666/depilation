$(".filter-box ul").on("click", "li", function () {
  $(".filter-box ul li").each(function () {
    $(this).removeClass("activeListCheck");
  });

  $(this).addClass("activeListCheck");

  let blockName = $(this).text();

  $(".galery_imgs__img").each(function () {
    if (blockName == "Все") {
      $(this).show();
    } else if ($(this).attr("data_tag") == blockName) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

// ----------------------------------------------------------------

$(document).ready(function() {
  $(".dropbtn").click(function() {
    $(".dropdown-content").toggle();
  });

  $(".dropdown-content li").click(function() {
    $(".dropdown-content li").removeClass("activeListCheck");
    $(this).addClass("activeListCheck");
    $(".dropbtn").text($(this).text());
    $(".dropdown-content").hide();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const dropdownLinks = document.querySelectorAll('.dropdown-link');

  dropdownLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const dropdownMenu = this.nextElementSibling;
          dropdownMenu.classList.toggle('show');
      });
  });
});


// $(".filter-box .dropdown-content").on("click", "li", function () {
//   $(".filter-box .dropdown-content li").each(function () {
//     $(this).removeClass("activeListCheck");
//   });

//   $(this).addClass("activeListCheck");

//   let blockName = $(this).text();

//   $(".galery_imgs__img").each(function () {
//     if (blockName == "Все" || $(this).attr("data_tag") == blockName) {
//       $(this).show();
//     } else {
//       $(this).hide();
//     }
//   });

//   // Закрываем выпадающий список после выбора
//   $(".filter-box .dropdown-content").hide();
// });

// $(".filter-box .dropbtn").on("click", function () {
//   $(".filter-box .dropdown-content").toggle();
// });

// // Закрыть выпадающий список при клике вне него
// $(document).on("click", function (e) {
//   if (!$(e.target).closest(".filter-box").length) {
//     $(".filter-box .dropdown-content").hide();
//   }
// });


// ----------------------------------------------------------------


$(document).ready(function () {
  $(".tabs a").click(function (e) {
    e.preventDefault();
    $(".tabs a").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").removeClass("active");
    let tabId = $(this).attr("href");
    $(tabId).addClass("active");
  });

  $(document).on("click", ".galery_imgs .galery_imgs__img img", function (e) {
    e.stopPropagation();
    const imageUrl = $(this).attr("src");
    showModal(imageUrl);
    disablePageScroll(); // Отключаем прокрутку страницы при открытии модального окна
  });

  $(".modal").click(function (e) {
    if (
      !$(e.target).is("#modalImage") &&
      !$(e.target).closest(".modal-content").length
    ) {
      $(this).hide();
      enablePageScroll(); // Включаем прокрутку страницы при закрытии модального окна
    }
  });

  $(".close").click(function () {
    $(".modal").hide();
    enablePageScroll(); // Включаем прокрутку страницы при закрытии модального окна
  });

  function showModal(imageUrl) {
    $("#modalImage").attr("src", imageUrl);
    $(".modal").show();
  }

  function disablePageScroll() {
    $("body").addClass("modal-open");
  }

  function enablePageScroll() {
    $("body").removeClass("modal-open");
  }
});


