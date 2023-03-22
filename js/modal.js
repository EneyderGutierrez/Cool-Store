let prod = document.querySelector('.prod');

let deleted = document.querySelector('.delete');
let addslide = document.querySelector('.addslide');
let prod1 = document.querySelector('.prod1');
function addhtml(slide,  title, description, price) {
  return `  
  
  <div id="mainSlider" class=" carousel slide" data-ride="carousel">
        <div class="carousel-inner" >
          <div class="carousel-item active">
            <img src="${slide}
            " class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item ">
            <img src="{{departamento_detail.slide1.url}}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="{{departamento_detail.slide2.url}}" class="d-block w-100" alt="...">
          </div>
        </div>
          <ul class="nav nav-tabs">
  
  <li class="nav-item">
    <a class="nav-link" href="{% url 'departamemtos_detail_rest' departamento_detail.departamento %}">${title}</a>
  </li>
</ul>
    </div><!-- CAROUSEL-->
    <ol class=" list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">${description}</div>
    </div>

  </li>
</ol>
    <div class="list-group">

<a href="#" class="list-group-item list-group-item-action">
<strong>Precio:</strong> ${price}</a>

<a href="#" class="list-group-item  btn btn-dark text-center btn-outline-primary">
<strong class="tar">Comprar</strong></a>

</div>
    `
}

let nav = document.querySelector('.navbar')


{
/*<div id="mainSlider" class=" carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item ">
            <img src="{{departamento_detail.slide.url}}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item active">
            <img src="{{departamento_detail.slide1.url}}" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="{{departamento_detail.slide2.url}}" class="d-block w-100" alt="...">
          </div>
        </div>
          <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="{% url 'departamemtos_detail' departamento_detail.departamento %}">Turismo</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="{% url 'departamemtos_detail_hotel' departamento_detail.departamento %}">Hoteles</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="{% url 'departamemtos_detail_rest' departamento_detail.departamento %}">Restaurantes</a>
  </li>
</ul>
    </div>`*/



//let formmodal = document.querySelector('.formmodal');


}

function pago() {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/index.css">
  <title>Formulario de pagos</title>
</head>

<body>
  <div class="pay-form">
    <div class="name-form">
      <img src="./images/Logo.png" width="48px" height="48px">
      <h1>Informacion de pago</h1>
    </div>
    <form id="form-pago" class="form-pago">
      <div class="nombre">
        <p>Nombre completo</p>
        <input type="text" placeholder="Anielka Ruíz" autocomplete="off">
      </div>
      <div class="numero-tarjeta">
        <p>Numero de Tarjeta de Credito</p>
        <input type="text" placeholder="1234 1234 1234 1234" maxlength="16" autocomplete="off">
      </div>
      <div class="date-tarjeta">
        <div class="exp-form">
          <p>Fecha de vencimiento</p>
          <input type="text" placeholder="MM/YY" maxlength="4" autocomplete="off">
        </div>
        <div class="cvv-form">
          <p>CVV</p>
          <input type="text" placeholder="***" maxlength="3" autocomplete="off">
        </div>
      </div>
      <div class="direccion-tarjeta">
        <p>Direccion</p>
        <input type="text" placeholder="Av.Bolognesi #234" autocomplete="off">
      </div>
      <button> Confirmar pago</button>
    </form>
    <h6>Verificas que esta informacion es correcta</h6>
  </div>
</body>

</html>`
}

html = addhtml('img/gira1.jpg','kele', 'uwue','Camisa', 'Girasol', 'ueueue')


prod.addEventListener("click", (e) => {
 deleted.classList.add('d-none');
 addslide.innerHTML = '';
 addslide.innerHTML += html;
  
});

prod1.addEventListener("click", (e) => {
  deleted.classList.add('d-none');
  addslide.innerHTML = '';
  addslide.innerHTML += addhtml('img/manu.jpg', 'Florero con girasoles','El girasol es una flor que automáticamente nos remite al Sol, quien regala estas flores envía también un cálido mensaje de luz y de amor profundo.', 'C$ 80')
   let tar = document.querySelector('.tar');
   
tar.addEventListener("click", (e) => {
  addslide.innerHTML = pago()
  nav.classList.add('d-none')
})
});

