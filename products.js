const products = [
  {
    id: 1,
    name: "Crema facial hidratante",
    image: "https://images.unsplash.com/photo-1629380108660-bd39c778a721?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 20.99
  },
  {
    id: 2,
    name: "Maquillaje base de alta cobertura",
    image: "https://plus.unsplash.com/premium_photo-1677175327065-3a517c925819?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 25.50
  },
  {
    id: 3,
    name: "Sérum revitalizante para el cabello",
    image: "https://images.unsplash.com/photo-1699373383910-6f9cf75ee50a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
    price: 15.75
  },
  {
    id: 4,
    name: "Paleta de sombras de ojos",
    image: "https://images.unsplash.com/photo-1526045405698-cf8b8acc4aaf?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 30.00
  },
  {
    id: 5,
    name: "Lápiz labial de larga duración",
    image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 12.99
  },
  {
    id: 6,
    name: 'Agua de Rosas Hidratante',
    image: 'https://images.unsplash.com/photo-1564277817182-ea6c78ffafe0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 25.99,
  },
  {
    id: 7,
    name: 'Labial Mate de Terciopelo',
    image: 'https://images.unsplash.com/photo-1631214524098-e6e900c1260d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 18.50,
  },
  {
    id: 8,
    name: 'Exfoliante Corporal Infusión Floral',
    image: 'https://plus.unsplash.com/premium_photo-1677849926218-15315e98fd1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 35.75,
  },
  {
    id: 9,
    name: 'Labial Mate de Larga Duración',
    image: 'https://plus.unsplash.com/premium_photo-1667520038871-224291f10f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dh',
    price: 12.99,
  },
  {
    id: 10,
    name: 'Máscara de Pestañas Voluminizadora',
    image: 'https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 9.99,
  },
  {
    id: 11,
    name: 'Mascarilla Rejuvenecedora de Oro',
    image: 'https://media.istockphoto.com/id/1300517513/es/foto/mujer-pelar-m%C3%A1scara-facial-de-oro-m%C3%A1scara-de-levantamiento-de-arrugas-antienvejecimiento-de.webp?b=1&s=170667a&w=0&k=20&c=gB7qsDJJzuqcIv0AckNfCCDF4zLVJ7o5hUmTrb1ARL4=',
    price: 39.50,
  },
  {
    id: 12,
    name: 'Delineador de Ojos Preciso',
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaW5lYWRvcnxlbnwwfHwwfHx8MA%3D%3D',
    price: 12.75,
  },
];

const cart = []

const container = document.getElementById('container');
const btnSearch = document.getElementById('btn-search');
const inputSearch = document.getElementById('input-search');
const btnAll = document.getElementById('btn-all')
const cartContainer = document.getElementById('cart-container')

//funcion encargada de mostrar los productos en pantalla
function showProducts(products) {
  container.innerHTML = ""
  
  products.forEach(product => {
    const html = `
    <article class="card shadow">
      <h3 class="card-title">${product.name}</h3>
      <img src="${product.image}" class="card-img-top" alt="${product.name}">
      <div class="card-body">
        <p class="card-text">Precio:$ ${product.price}</p>
        <button onClick="addProduct(${product.id})" class="btn btn-info">Agregar al carrito</button>
      </div>
    </article>
    `
    container.innerHTML += html
  });
}

showProducts(products)

//funcion encargada de agregar un producto al carrito
function addProduct(id) {
  const productFinded = products.find(product => product.id === id);
  cart.push(productFinded);

  appendAlert('Producto agregado al carrito!', 'success')
}

//manejador de eventos que se encarga de buscar productos
btnSearch.addEventListener('click', () => {
  const text = inputSearch.value.toLowerCase();
  const productFiltered = products.filter(product => product.name.toLowerCase().includes(text));

  if (productFiltered.length > 0) {
    showProducts(productFiltered);
  } else {
    container.innerHTML = '<h3 class="text-center mt-4">No se encontraron productos con esos datos...</h3>';
  }
});

//manejador de eventos que se encarga de mostrar todos los productos 
btnAll.addEventListener('click' , () => {
  showProducts(products)
})

//funcion encargada de mostrar el carrito
function showCart() {
  cartContainer.innerHTML = ""

  cart.forEach((product,index) => {
    const html = `
    <article class="card shadow">
      <h3 class="card-title">${product.name}</h3>
      <img src="${product.image}" class="card-img-top" alt="${product.name}">
      <div class="card-body">
        <p class="card-text">Precio:$ ${product.price}</p>
        <button onClick="removeProduct(${index})" class="btn btn-danger">Quitar</button>
      </div>
    </article>
    `
    cartContainer.innerHTML += html
  })
}

//funcion que elimina productos del carrito
function removeProduct(index) {
  cart.splice(index, 1)
  showCart()
}