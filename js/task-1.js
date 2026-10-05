const list = document.querySelectorAll('.item');
console.log(`Number of categories: ${list.length}`);

list.forEach(item => {
  const category = item.querySelector('h2').textContent;
  const number = item.querySelectorAll('li');
  console.log(`Category: ${category}`);

  console.log(`Elements: ${number.length}`);
});
