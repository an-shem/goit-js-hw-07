const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulGalleryRef = document.querySelector('#gallery');

const arrLiRef = images.map(obj => {
  const liGalleryRef = document.createElement('li');
  const imgGalleryRef = document.createElement('img');
  imgGalleryRef.src = obj.url;
  imgGalleryRef.alt = obj.alt;
  liGalleryRef.appendChild(imgGalleryRef);
  return liGalleryRef;
});

ulGalleryRef.append(...arrLiRef);

// console.log(liGalleryRef);

// Вариант через insertAdjacentHTML()

// const ulGalleryRef = document.querySelector('#gallery');
// const newUlGalleryRef = document.createElement('ul');

// images.forEach(obj => {
//   newUlGalleryRef.insertAdjacentHTML(
//     'beforeend',
//     `<li><img src="${obj.url}" alt="${obj.alt}"></li>`,
//   );
// });

// newUlGalleryRef.setAttribute('id', 'gallery');
// ulGalleryRef.replaceWith(newUlGalleryRef);
