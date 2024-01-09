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

$(document).ready(function () {
  $(".tabs a").click(function (e) {
    e.preventDefault();
    $(".tabs a").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").removeClass("active");
    let tabId = $(this).attr("href");
    $(tabId).addClass("active");
  });
});

$(document).ready(function () {
  $(".galery_imgs").on("click", ".galery_imgs__img img", function (e) {
    e.stopPropagation();
    const imageUrl = $(this).attr("src");
    showModal(imageUrl);
  });

  $(".modal").click(function (e) {
    if (
      !$(e.target).is("#modalImage") &&
      !$(e.target).closest(".modal-content").length
    ) {
      $(this).hide();
    }
  });

  $(".close").click(function () {
    $(".modal").hide();
  });

  function showModal(imageUrl) {
    $("#modalImage").attr("src", imageUrl);
    $(".modal").show();
  }
});
