function getData(tableName, id) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: "admin/includes/CRUD/getDataFromDB.php",
      type: "POST",
      data: {
        id: id,
        tableName: tableName,
      },
      dataType: "json",
      success: function (data) {
        // function compareDates(a, b) {
        //     const dateA = new Date(a.date);
        //     const dateB = new Date(b.date);

        //     // Сравниваем даты
        //     if (dateA > dateB) {
        //         return -1;
        //     } else if (dateA < dateB) {
        //         return 1;
        //     } else {
        //         return 0;
        //     }
        // }

        let dataArray = Object.values(data);

        //resolve(dataArray.sort(compareDates));
        resolve(dataArray);
      },
      error: function (xhr, status, error) {
        console.error("Error:", xhr, status, error);
        reject(error);
      },
    });
  });
}

function stringToImageArray(imageString) {
  return imageString.split(",").map((image) => image.trim());
}

function getFileExtension(filename) {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

//выгрузка всех слайдов в слайдер
$(document).ready(function () {
  getData("slider").then((response) => {
    let slides = "";
    response.forEach((element) => {
      slides += `
            <div class="swiper-slide">
                <div class="graduates_item">
                    <div class="graduates_item__img">
                        <img src="admin/img/${
                          stringToImageArray(element.img)[0]
                        }" alt="#">
                    </div>
                    <div class="titleName">
                        <div class="titleName1">${element.title} </div>
                        <div class="titleName2">${element.year} </div>
                        <div class="titleName3">${element.description} </div>
                    </div>
                </div>
            </div>
                `;
    });

    const swiperHtml = `
                <swiper class="swiper swiper_main">
                    <div class="swiper-wrapper">
                        ${slides}
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </swiper>
            `;

    $("#main_slider").html(swiperHtml);

    if ($("#main_slider").length) {
      const swiper = new Swiper(".swiper_main", {
        slidesPerView: 3,
        spaceBetween: 10,
        direction: "horizontal",
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  });
});

$(document).ready(function () {
  getData("services").then((response) => {
    let slides1 = "";
    response.forEach((element) => {
      if (element.title == "Лазерная эпиляция") {
        slides1 += `
            <div class="swiper-slide">
                <div class="graduates_item">
                <div style="font-size:40px;text-align:center;font-family: var(--literature);margin-bottom:40px;">До </div>
                    <div class="graduates_item__img">
                        <img src="admin/img/${
                          stringToImageArray(element.img)[0]
                        }" alt="#">
                    </div>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="graduates_item">
                <div style="font-size:40px;text-align:center;font-family: var(--literature);margin-bottom:40px;">После </div>
                    <div class="graduates_item__img">
                        <img src="admin/img/${
                          stringToImageArray(element.img)[1]
                        }" alt="#">
                    </div>
                </div>
            </div>
                `;

        const swiperHtml = `
                <swiper class="swiper swiper_laser">
                    <div class="swiper-wrapper">
                        ${slides1}
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </swiper>
            `;

        $("#laser_slider").html(swiperHtml);

        if ($("#laser_slider").length) {
          const swiper1 = new Swiper(".swiper_laser", {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
            direction: "horizontal",
            loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        }
      }
    });
  });
});
$(document).ready(function () {
  getData("services").then((response) => {
    let slides2 = "";
    response.forEach((element) => {
      if (element.title === "Шугаринг") {
        slides2 += `
              <div class="swiper-slide">
                  <div class="graduates_item">
                  <div style="font-size:40px;text-align:center;font-family: var(--literature);margin-bottom:40px;">До </div>
                      <div class="graduates_item__img">
                          <img src="admin/img/${
                            stringToImageArray(element.img)[0]
                          }" alt="#">
                      </div>
                  </div>
              </div>
              <div class="swiper-slide">
                  <div class="graduates_item">
                  <div style="font-size:40px;text-align:center;font-family: var(--literature);margin-bottom:40px;">После </div>
                      <div class="graduates_item__img">
                          <img src="admin/img/${
                            stringToImageArray(element.img)[1]
                          }" alt="#">
                      </div>
                  </div>
              </div>
                  `;

        const swiperHtml = `
                  <swiper class="swiper swiper_shugar">
                      <div class="swiper-wrapper">
                          ${slides2}
                      </div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                  </swiper>
              `;

        $("#shugar_slider").html(swiperHtml);

        if ($("#shugar_slider").length) {
          const swiper2 = new Swiper(".swiper_shugar", {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
            direction: "horizontal",
            loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        }
      }
    });
  });
});

$(document).ready(function () {
  getData("services").then((response) => {
    let slides3 = "";
    response.forEach((element) => {
      if (element.title === "Восковая депиляция") {
        slides3 += `
              <div class="swiper-slide">
                  <div class="graduates_item">
                  <div style="font-size:40px;text-align:center;font-family: var(--literature);margin-bottom:40px;">До </div>
                      <div class="graduates_item__img">
                          <img src="admin/img/${
                            stringToImageArray(element.img)[0]
                          }" alt="#">
                      </div>
                  </div>
              </div>
              <div class="swiper-slide">
                  <div class="graduates_item">
                  <div style="font-size:40px;text-align:center;font-family: var(--literature);margin-bottom:40px;">После </div>
                      <div class="graduates_item__img">
                          <img src="admin/img/${
                            stringToImageArray(element.img)[1]
                          }" alt="#">
                      </div>
                  </div>
              </div>
                  `;

        const swiperHtml = `
                  <swiper class="swiper swiper_wax">
                      <div class="swiper-wrapper">
                          ${slides3}
                      </div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                  </swiper>
              `;

        $("#wax_slider").html(swiperHtml);

        if ($("#wax_slider").length) {
          const swiper3 = new Swiper(".swiper_wax", {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
            direction: "horizontal",
            loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        }
      }
    });
  });
});

// ---------------------------------------------------------
$(document).ready(function () {
  getData("feed").then((response) => {
    let slides = "";
    response.forEach((element) => {
      slides += `
            <div class="swiper-slide">
                <div class="graduates_item">
                    <div class="graduates_item__img">
                        <img src="admin/img/${
                          stringToImageArray(element.img)[0]
                        }" alt="#">
                    </div>
                    <div class="titleName">
                        <div class="titleName1">${element.title} </div>
                        <div class="titleName2">${element.text} </div>
                    </div>
                </div>
            </div>
                `;
    });

    const swiperHtml = `
                <swiper class="swiper swiper_feed">
                    <div class="swiper-wrapper">
                        ${slides}
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </swiper>
            `;

    $("#feedback").html(swiperHtml);

    if ($("#feedback").length) {
      const swiper_feed = new Swiper(".swiper_feed", {
        slidesPerView: 3,
        spaceBetween: 10,
        direction: "horizontal",
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  });
});