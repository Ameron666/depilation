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
        let dataArray = Object.values(data);

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

// const url_services = new URL(window.location.href);
// const queryParams_services = url_services.searchParams;
// const id_services = queryParams_services.get("id_services");
// getData("services").then((response) => {
//   let block = $("#services").empty();

//   response.forEach((element) => {
//     block.append(`
//             <div class="service-block">
//                 <div class="img_service leftRadius">
//                     <img src="admin/img/${
//                       stringToImageArray(element.img)[0]
//                     }" alt="">
//                 </div>
//                 <div class="text-service">
//                     <div class="service-title">
//                         <h1>${element.id}</h1>
//                         <a href="womenHaircuts.html?id_services=${
//                           element.id
//                         }">${element.title}</a>
//                     </div>
//                     <p>
//                         ${element.text}
//                     </p>
//                     <h2>ОТ ${element.price} Р.</h2>
//                     <a href="womenHaircuts.html"><button>Записаться</button></a>
//                 </div>
//             </div>
//         `);
//   });
// });

// Услуги

const url_services = new URL(window.location.href);
const queryParams_services = url_services.searchParams;
const id_services = queryParams_services.get("id_services");
getData("services").then((response) => {
  let block = $("#services").empty();
  let isEven = true; // Переменная для отслеживания четности/нечетности блока

  response.forEach((element, index) => {
    // Определите классы и порядок отображения на основе четности/нечетности
    const imgClass = isEven ? "rightRadius" : "leftRadius";
    const rowClass = isEven ? "row_reverse" : "row_block";
    const titleNumber = String(index + 1).padStart(2, "0"); // Преобразование числа в формат "01"

    block.append(`
      <div class="service-block ${rowClass}">
          <div class="img_service ${imgClass}">
              <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="">
          </div>
          <div class="text-service">
              <div class="service-title">
                  <h1>${titleNumber}</h1>
                  <a href="womenHaircuts.html?id_services=${element.id}">${
      element.title
    }</a>
              </div>
              <p>${element.text}</p>
              <h2>ОТ ${element.price} Р.</h2>
              <a href="womenHaircuts.html?id_services=${
                element.id
              }"><button class="service_button">Записаться</button></a>
          </div>
      </div>
    `);

    isEven = !isEven; // Инвертируем значение переменной для следующего блока
  });
});

// Страница услуги

if (id_services) {
  getData("services", id_services, "admin").then((response) => {
    var service_title = response[1];
    // console.log(service_title);
    $(".aboutService_left__title").text(response[1]);
    $(".aboutService_left__text").html(response[2]);
    $(".aboutService_right").html(`

        <div class="aboutService_right__img">
            <img src="admin/img/${stringToImageArray(response[4])[0]}" alt="">
        </div>
    
    `);

    for (let i = 0; i < stringToImageArray(response[4]).length; i++) {
      $(".examplesService").append(`

        <div class="examplesService_img">
            <img src="admin/img/${stringToImageArray(response[4])[i]}" alt="">
        </div>

    `);
    }

    getData("pricelist").then((response) => {
      let block = $("#this_service_price").empty();
      for (let i = 0; i < response.length; i++) {
        if (response[i].title === service_title) {
          block.append(`
               <li>
                    <div>
                        <p>${response[i].name}</p>
                        <p>${response[i].type}</p>
                    </div>
                    <h2>${response[i].price} Р.</h2>
                </li>
            `);
        } else {
          $(".price-list").empty();
        }
      }
    });
  });
}

// Акции

getData("shares").then((response) => {
  let block = $("#shares_main").empty();
  if (response.length > 0) {
    response.forEach((element) => {
      block.append(`
        <div class="shares-card">
        <img src="admin/img/${stringToImageArray(element.img)}" alt="">
        <h2><span>${element.oldprice} Р.</span> ${element.newprice} Р.</h2>
        <p> ${element.title} </p>
        <button class="service_button">Подробнее</button>
        </div>
        `);
    });
  } else {
    $(".shares_section").empty();
  }
});

// Фотографии на главную

getData("galery").then((response) => {
  let block = $(".galery_imgs__main").empty();
  const maxImagesToShow = 6;
  response.slice(0, maxImagesToShow).forEach((element) => {
    block.append(`
        <div class="galery_imgs__img item" data_tag="${element.tags_next}">
          <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="">
        </div>
      `);
    // }
  });
});

// Фотографии на страницу фотографий

getData("galery").then((response) => {
  let block = $(".galery_imgs__full").empty();
  response.forEach((element) => {
    for (let i = 0; i < stringToImageArray(element.img).length; i++) {
      block.append(`
        <div class="galery_imgs__img item" data_tag="${element.tags_next}">
            <img src="admin/img/${stringToImageArray(element.img)[i]}" alt="">
        </div>
    `);
    }
  });
});

// Ограничение количества отображаемых картинок (необходима доработка)

// getData("galery").then((response) => {
//   let itemsToShow = 6;
//   let totalImages = getTotalImageCount(response);
//   console.log(totalImages);

//   showItemsGalery(response, itemsToShow);

//   $(".imgCont").after('<button id="showMoreBtnGalery">Показать ещё</button>');
//   const $showMoreBtnGalery = $("#showMoreBtnGalery");
//   const $imgContainer = $(".galery_imgs__full");
//   let currentItemsShown = itemsToShow;

//   $showMoreBtnGalery.click(function () {
//     currentItemsShown += itemsToShow;
//     showItemsGalery(response, currentItemsShown);
//     if (currentItemsShown >= totalImages) {
//       $showMoreBtnGalery.hide();
//     }
//   });
// });

// function showItemsGalery(data, count) {
//   let block = $(".galery_imgs__full").empty();
//   let totalShown = 0;

//   for (let i = 0; i < data.length && totalShown < count; i++) {
//     const element = data[i];
//     const imagesToShow = stringToImageArray(element.img);
//     const remainingCount = count - totalShown;
//     const shownImages = imagesToShow.slice(0, remainingCount);

//     for (let j = 0; j < shownImages.length; j++) {
//       block.append(`
//         <div class="galery_imgs__img item" data_tag="${element.tags_next}">
//           <img src="admin/img/${shownImages[j]}" alt="">
//         </div>
//       `);
//       totalShown++;
//     }
//   }
// }

// function getTotalImageCount(data) {
//   let total = 0;
//   for (let i = 0; i < data.length; i++) {
//     total += stringToImageArray(data[i].img).length;
//   }
//   return total;
// }

// ----------------------------------------------------------------

// Коментарии на страницу коментариев

getData("comment").then((response) => {
  let itemsToShow = 6;
  let totalItems = 0;
  totalItems = response.length;

  showItemsComment(response, itemsToShow);

  $(".feedback-box").after(
    '<button id="showMoreBtnComment">Показать ещё</button>'
  );

  $("#showMoreBtnComment").click(function () {
    itemsToShow += 6;
    showItemsComment(response, itemsToShow);
    if (itemsToShow >= totalItems) {
      $("#showMoreBtnComment").hide();
    }
  });
});

function showItemsComment(data, count) {
  let block = $(".feedback-box").empty();
  data.slice(0, count).forEach((element) => {
    block.append(`
      <div class="card">
        <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="">
        <h2>${element.title}</h2>
        <div class="card_text">${element.text}</div>
      </div>
    `);
  });
}

// Коментарии на главную

getData("comment").then((response) => {
  const maxItemsToShow = 3;
  let block = $(".card-list").empty();
  // response.forEach((element) => {
  if (response.length > 0) {
    response.slice(0, maxItemsToShow).forEach((element) => {
      block.append(`
        <div class="card">
            <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="">
            <h2>${element.title}</h2>
            <div class="card_text">${element.text}</div>
        </div>
    `);
    });
  } else {
    $(".feedback_section").empty();
  }
});

//
