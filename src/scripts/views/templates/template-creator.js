import ENDPOINT from '../../globals/api-endpoints.js';

const createDishItemTemplate = (data) =>
  `<div id=${data.id} class='card__item'>
    <a href="${`/#/detail/${data.id}`}">
      <div class='card__image'>
      <picture>
      <source type="image/webp" srcset=${ENDPOINT.IMG.S}${data.pictureId}/>
      <source type="image/jpeg" srcset=${ENDPOINT.IMG.S}${data.pictureId}/>
      <img class ="lazyload" data-src=${ENDPOINT.IMG.S}${data.pictureId} alt=${
  data.name
} />
      </picture>
        <span class='card__imageLeft'>${data.city}</span>
        <span class='card__imageRight'>${data.rating}</span>
      </div>
      <div class='card__content'>
        <h3>${data.name}</h3>
        <p>${data.description}</p>
      </div>
    </a>
  </div>`;

const createDishDetailTemplate = (data) => `
  <div class="detail__header">
    <picture>
      <source type="image/webp" srcset=${ENDPOINT.IMG.M}${data.pictureId}/>
      <source type="image/jpeg" srcset=${ENDPOINT.IMG.M}${data.pictureId}/>
      <source media="(max-width: 600px)" srcset=${ENDPOINT.IMG.S}${
  data.pictureId
}>
      <img class="detail__poster lazyload" data-src=${ENDPOINT.IMG.M}${
  data.pictureId
} alt=${data.name}/>
    </picture>
    <h2 class="detail__title">${data.name.toUpperCase()}</h2>
  </div>
  <div class="detail__info">
    <h3>INFORMATION</h3>
    <p>City : ${data.city}</p>
    <p>Address : ${data.address}</p>
    <p>Rating : ${data.rating}⭐️</p>
    <div class="info__food">
      <h4>FOOD</h4>
      <ul>
        <li>${data.menus.foods[0].name}</li>
        <li>${data.menus.foods[1].name}</li>
        <li>${data.menus.foods[2].name}</li>
      </ul>
    </div>
    <div class="info__drinks">
      <h4>DRINKS</h4>
      <ul>
        <li>${data.menus.drinks[0].name}</li>
        <li>${data.menus.drinks[1].name}</li>
        <li>${data.menus.drinks[2].name}</li>
      </ul>
    </div>
    <div class="info__categories">
      <h4>CATEGORIES</h4>
      <span>${data.categories[0].name}</span>
      ${
        data.categories.length > 1 ?
          `<span>${data.categories[1].name}</span>` :
          ``
}
    </div>
  </div>
  <div class="detail__overview">
    <h3>Overview</h3>
    <p>${data.description}</p>
  </div>
  <div class="detail__reviews">
    <h3>Reviews</h3>
    <p>Oleh ${data.customerReviews[0].name} : </p>
    <p>${data.customerReviews[0].review}</p>
    <p>Pada ${data.customerReviews[0].date}</p>
  </div>
`;

const createLikeDishButtonTemplate = () => `
  <button aria-label="Favorite this dish" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeDishButtonTemplate = () => `
  <button aria-label="Unfavourite this dish" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createDishDetailTemplate,
  createDishItemTemplate,
  createLikeDishButtonTemplate,
  createUnlikeDishButtonTemplate,
};
