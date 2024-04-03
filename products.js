const products = [
  { 
    id: 1,
    name: 'Radiante Esencia', 
    image: 'https://images.unsplash.com/photo-1614267861476-0d129972a0f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: 2,
    name: 'Colores Celestiales', 
    image: 'https://images.unsplash.com/photo-1667242196594-9f7229736796?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  { 
    id: 3,
    name: 'Labios de Seda', 
    image: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  {
    id: 4,
    name: 'Kit de Luminosidad Única',
    image: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    name: 'Aromas del Paraíso',
    image: 'https://images.unsplash.com/photo-1622866027662-14e3c5ee67e7?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const container = document.getElementById('container')

products.forEach(product => {
  const html = `
  <article>
    <h3>${product.name}</h3>
    <img src="${product.image}"> 
    <button onClick="addProduct(${product.id})" class="button-add">Add</button>
  </article>
  `
  container.innerHTML += html
});

function addProduct(id) {
  const productFinded = products.find(product => product.id ==id)
  products.push(productFinded)

  console.log(products);
}