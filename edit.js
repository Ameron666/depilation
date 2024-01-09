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

//Выгрузка всех новостей в новости
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

const url_services = new URL(window.location.href);
const queryParams_services = url_services.searchParams;
const id_services = queryParams_services.get("id_services");
getData("services").then((response) => {
  let block = $("#services").empty();
  let isEven = true; // Переменная для отслеживания четности/нечетности блока

  response.forEach((element) => {
    // Определите классы и порядок отображения на основе четности/нечетности
    const imgClass = isEven ? "rightRadius" : "leftRadius";
    const rowClass = isEven ? "row_reverse" : "row_block";
    const titleNumber = String(element.id).padStart(2, "0"); // Преобразование числа в формат "01"

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
              <a href="womenHaircuts.html"><button>Записаться</button></a>
          </div>
      </div>
    `);

    isEven = !isEven; // Инвертируем значение переменной для следующего блока
  });
});

//Редактирование новости
if (id_services) {
  getData("services", id_services, "admin").then((response) => {
    var service_title = response[1];
    console.log(service_title);
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
      for (let i = 0; i < response.length; i++) {
        if (response[i].title === service_title) {
          console.log(response[i], service_title);
          $("#this_service_price").append(`
               <li>
                    <div>
                        <p>${response[i].name}</p>
                        <p>${response[i].type}</p>
                    </div>
                    <h2>${response[i].price} Р.</h2>
                </li>
            `);
        }
      }
    });
  });
}

getData("shares").then((response) => {
  let block = $("#shares_main").empty();
  response.forEach((element) => {
    block.append(`
        <div class="shares-card">
        <img src="admin/img/${stringToImageArray(element.img)}" alt="">
        <h2><span>${element.oldprice} Р.</span> ${element.newprice} Р.</h2>
        <p> ${element.title} </p>
        <button>Подробнее</button>
        </div>
        `);
  });
});

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

getData("comment").then((response) => {
  let block = $(".feedback-box").empty();
  response.forEach((element) => {
    block.append(`
        <div class="card">
            <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="">
            <h2>${element.title}</h2>
            
                ${element.text}
            
        </div>
    `);
  });
});

getData("comment").then((response) => {
  const maxItemsToShow = 3;
  let block = $(".card-list").empty();
  // response.forEach((element) => {
  response.slice(0, maxItemsToShow).forEach((element) => {
    block.append(`
        <div class="card">
            <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="">
            <h2>${element.title}</h2>
                ${element.text}
        </div>
    `);
  });
});

//

// export async function getGaleryData() {
//     const response = await getData("galery");
//     return response;
//   }

//   export function displayImagesByTags(images, selectedTags) {
//     let block = $(".galery_imgs").empty();

//     images.forEach((element) => {
//       const imageTags = element.tags_next.split(",");
//       const hasSelectedTags = selectedTags.every(tag => imageTags.includes(tag));

//       if (hasSelectedTags || selectedTags.length === 0) {
//         block.append(`
//           <div class="galery_imgs__img">
//             <img src="admin/img/${stringToImageArray(element.img)[0]}" alt="">
//           </div>
//         `);
//       }
//     });
//   }

//Выгрузка всех новостей на главную
// getData("news").then((response) => {
//   let block = $("#news_show_main_page").empty();
//   const maxCharacters = 100;

//   let value = 6;
//   let length = response.length;

//   if (value > length) {
//     value = length;
//   }

//   for (let i = 0; i < value; i++) {
//     block.append(`
//             <div class="events_block">
//                 <div class="events_block__top">
//                     <img src="admin/img/${
//                       stringToImageArray(response[i].img)[0]
//                     }" alt="" />
//                 </div>
//                 <div class="events_block__bottom">
//                 <div class="events_block__bottom___line">
//                     <img src="img/forEvent.png" alt="" />
//                 </div>
//                 <div class="events_block__bottom___title">
//                     ${response[i].title.slice(0, maxCharacters)}...
//                 </div>
//                 <div class="events_block__bottom___dops">
//                     <div class="events_block__bottom___dops____date">${
//                       response[i].date
//                     }</div>
//                     <a href="new.html?id_new=${
//                       response[i].id
//                     }" class="events_block__bottom___dops____readMore">
//                         Читать дальше >>
//                     </a>
//                 </div>
//                 </div>
//             </div>
//         `);
//   }
// });

// ---------------------------------------------------------

//выгрузка всех слайдов в слайдер
// $(document).ready(function () {
//   getData("slider").then((response) => {
//     let slides = "";
//     response.forEach((element) => {
//       slides += `
//                     <div class="swiper-slide slider">
//                         <div class="slider_left">
//                             <img src="admin/img/${
//                               stringToImageArray(element.img)[0]
//                             }" alt="" />
//                         </div>
//                         <div class="slider_right">
//                             <p class="slider_right__title">
//                                 ${element.title}
//                             </p>
//                             <p class="slider_right__desc">
//                                 ${element.text}
//                             </p>
//                             <a href="${
//                               element.link
//                             }" class="slider_right__button">Узнать больше</a>
//                         </div>
//                     </div>
//                 `;
//     });

//     const swiperHtml = `
//                 <swiper class="mySwiper" pagination="true">
//                     <div class="swiper-wrapper">
//                         ${slides}
//                     </div>
//                     <div class="swiper-pagination"></div>
//                 </swiper>
//             `;

//     $("#slider_all_show").html(swiperHtml);

//     if ($("#slider_all_show").length) {
//       const swiper = new Swiper(".mySwiper", {
//         // Опциональные параметры
//         direction: "horizontal",
//         loop: true,
//         pagination: {
//           el: ".swiper-pagination",
//         },
//         autoplay: {
//           delay: 5000,
//         },
//       });
//     }
//   });
// });

// ---------------------------------------------------------
