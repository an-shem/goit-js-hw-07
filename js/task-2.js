const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const liArrey = ingredients.map(ingredient => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  return liRef;
});

const ulRef = document.querySelector('#ingredients');
ulRef.append(...liArrey);

// document.querySelector('#ingredients').append(...liArrey);
