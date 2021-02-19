const categoriesRef = document.querySelector('#categories');
const arrCategories = [...categoriesRef.children];
const numberCategories = arrCategories.length;

console.log(`В списке ${numberCategories} категории.`);
console.log(' ');

arrCategories.forEach(item => {
  const titel = item.querySelector('h2');
  const amount = item.querySelector('ul').children.length;
  console.log(`Категория: ${titel.textContent}`);
  console.log(`Количество элементов: ${amount}`);
  console.log(' ');
});
