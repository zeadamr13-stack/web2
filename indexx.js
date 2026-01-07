

    const toggleBut = document.querySelector('.toggle-but')
    const toggleButIcon = document.querySelector('.toggle-but i')
    const drowpDownMenu = document.querySelector('.drowpdown-menu')

    toggleBut.onclick = function (){
    drowpDownMenu.classList.toggle('open');
    const isOpen = drowpDownMenu.classList.contains('open')

        toggleButIcon.classList = isOpen
        ?'fa-solid fa-xmark'
        :'fa-solid fa-bars'
    }


const xmm = document.getElementById('xmm');
xmm.onclick = function() {
indexx.classList.remove('add')
}



let indexx = document.querySelector('.indexx');
let imageind = document.querySelector('.imgind');
const cards = document.querySelectorAll('.card');
const viewer = document.querySelector('.imgind');
const viewerImg = document.getElementById('click');

cards.forEach(card => {
  card.addEventListener('click', () => {
    indexx.classList.toggle('add')
    const img = card.querySelector('img');
    imageind.src = img.src;
  });
});


const cartsData = [
    {
      img: "t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg",
      title: "Olive Werk Pants",
      price: "450 EGP"
    },
    {
      img: "t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg",
      title: "Black Werk Pants",
      price: "500 EGP"
    },{
      img: "t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg",
      title: "Black Werk Pants",
      price: "500 EGP"
    },
    {
      img: "t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg",
      title: "Olive Werk Pants",
      price: "450 EGP"
    },
    {
      img: "t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg",
      title: "Black Werk Pants",
      price: "500 EGP"
    },{
      img: "t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg",
      title: "Black Werk Pants",
      price: "500 EGP"
    },
    {
      img: "t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg",
      title: "Olive Werk Pants",
      price: "450 EGP"
    },
    {
      img: "t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg",
      title: "Black Werk Pants",
      price: "500 EGP"
    },{
      img: "t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg",
      title: "Black Werk Pants",
      price: "500 EGP"
    },
    {
      img: "t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg",
      title: "Olive Werk Pants",
      price: "450 EGP"
    },
    {
      img: "t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg",
      title: "Black Werk Pants",
      price: "500 EGP"
    },{
      img: "t1_werkpants_mens_olive_flat_lay_4825e693-f588-4813-bff0-1d4c46ce82ce.jpg",
      title: "Black Werk Pants",
      price: "500 EGP"
    },
  ];

  const cartsContainer = document.querySelector(".carts");

  cartsData.forEach(item => {
    const orderCart = document.createElement("div");
    orderCart.classList.add("ordercart");

    orderCart.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="con_order">
        <p>${item.title}</p>
        <span>${item.price}</span>
      </div>
    `;

    cartsContainer.appendChild(orderCart);
  });


  const closebut = document.querySelector('.close_but');
  closebut.onclick = function() {
  cartcon.classList.remove('flex')
}


  const container = document.querySelectorAll('.card-list');
  const cartcon = document.querySelector('.cart')

  container.forEach(container => {
  container.addEventListener('click', () => {
    cartcon.classList.toggle('flex')
  });
});

