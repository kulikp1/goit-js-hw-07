const categoriesList = document.getElementById('categories');
  const categoriesItems = categoriesList.querySelectorAll('.item');

  console.log(`Number of categories: ${categoriesItems.length}`);

  categoriesItems.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryItems}`);
  });