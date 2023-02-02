class producto{
	constructor(nombre, precio) {
		this.nombre = nombre.toUpperCase();
		this.precio = parseInt(precio);
	}
}

const hamburguesa = [];
hamburguesa.push(new producto('cheddar', '860'));
hamburguesa.push(new producto('cebolla', '820'));
hamburguesa.push(new producto('criolla', '800'));

const papas = [];
papas.push(new producto('papas cheddar', '250'));
papas.push(new producto('papas cebolla', '200'));
papas.push(new producto('papas roquefort', '250'));

const bebida = [];
bebida.push(new producto('coca', '100'));
bebida.push(new producto('sprite', '100'));
bebida.push(new producto('fanta', '100'));




const formulario = document.getElementById('divFormulario');
const divPedido = document.getElementById('divPedido');
formulario.innerHTML = `
						<form>
  				<div class="mb-3">
    			<label class="form-label">Elige Hamburguesa</label>
    			<select id='hamburguesa' nombre='hamburguesa' class="form-select" >
				  	
				  <option value="${hamburguesa[0].nombre+' $'+hamburguesa[0].precio}">${hamburguesa[0].nombre+' $'+hamburguesa[0].precio}</option>
				  <option value="${hamburguesa[1].nombre+' $'+hamburguesa[1].precio}">${hamburguesa[1].nombre+' $'+hamburguesa[1].precio}</option>
				  <option value="${hamburguesa[2].nombre+' $'+hamburguesa[2].precio}">${hamburguesa[2].nombre+' $'+hamburguesa[2].precio}</option>
				</select>
  				</div>

  				<div class="mb-3">
    			<label class="form-label">Elige Papas</label>
    			<select id='papas' nombre='papas' class="form-select" >
				  
				  <option id="${papas[0].nombre+' $'+papas[0].precio}">${papas[0].nombre+' $'+papas[0].precio}</option>
				  <option id="${papas[1].nombre+' $'+papas[1].precio}">${papas[1].nombre+' $'+papas[1].precio}</option>
				  <option id="${papas[2].nombre+' $'+papas[2].precio}">${papas[2].nombre+' $'+papas[2].precio}</option>
				</select>
  				</div>

  				<div class="mb-3">
    			<label  class="form-label">Elige Bebida</label>
    			<select id='bebida' nombre='bebida' class="form-select" >
				  
				  <option id="${bebida[0].nombre+' $'+bebida[0].precio}">${bebida[0].nombre+' $'+bebida[0].precio}</option>
				  <option id="${bebida[1].nombre+' $'+bebida[1].precio}">${bebida[1].nombre+' $'+bebida[1].precio}</option>
				  <option id="${bebida[2].nombre+' $'+bebida[2].precio}">${bebida[2].nombre+' $'+bebida[2].precio}</option>
				</select>
  				</div>
  				
  				<button type="submit" class="btn btn-dark">Agregar a Pedido</button>
  				
							
			</form>
`
class PEDIDO{
	constructor(Hamburguesa, Papas, Bebida) {
		this.Hamburguesa = Hamburguesa.toUpperCase();
		this.Papas = Papas.toUpperCase();
		this.Bebida = Bebida.toUpperCase();
	}
}


const pedidos = []
const total = []
var regex = /(\d+)/g;
formulario.addEventListener('submit',(e) => {
	e.preventDefault();
	let pedidoHamburguesa = document.getElementById('hamburguesa').value
	let pedidoPapas = document.getElementById('papas').value
	let pedidoBebida = document.getElementById('bebida').value

	const compra = new PEDIDO(pedidoHamburguesa,pedidoPapas,pedidoBebida);

	pedidos.push(compra);
	total.push(parseInt(pedidoHamburguesa.match(regex)));
	total.push(parseInt(pedidoPapas.match(regex)));
	total.push(parseInt(pedidoBebida.match(regex)));
	console.log(pedidos);


	let totalCompra = total.reduce((acumulador, elemento) => acumulador + elemento, )
	divPedido.innerHTML = '';
	pedidos.forEach(compra => {
		divPedido.innerHTML += `



					<div id='${pedidos.length}' class="card" style="width: 18rem; margin:10px;">
					  <div class="card-body">
					    
					    <p class="card-text">HAMBURGUESA ${compra.Hamburguesa}</p>
					    <p class="card-text">${compra.Papas}</p>
					    <p class="card-text">BEBIDA ${compra.Bebida}</p>
					    <hr>
					
					  </div>
					</div>

				
`

	})

	

	divTotalCompra.innerHTML = '';
	divTotalCompra.innerHTML += `



					<div class="card" style="width: 18rem; text-align: center; margin:10px; background-color: gold;">
					  <div class="card-body">
					    <h5 class="card-title">Total Pedidos: ${pedidos.length}</h5>
					<ul class="list-group">
					  <li class="list-group-item" style="font-size: larger;font-weight: bold;">TOTAL COMPRA $${totalCompra}</li>
					</ul>
					  </div>
					</div>			
`
financiacion.innerHTML = '';
 totalCompra>=5000 ? financiacion.innerHTML += `



					<div class="card" style="width: 18rem; text-align: center; margin:10px; background-color: gold;">
					  <div class="card-body">
					 
					<ul class="list-group">
					  <li class="list-group-item" style="font-size: larger;font-weight: bold;">Puede financiar con Tarjeta</li>
					</ul>
					  </div>
					</div>`: null


	let ultCompra = [];
	ultCompra.push(totalCompra);
			localStorage.setItem('storagePedidos', JSON.stringify(ultCompra))
		console.log(ultCompra);

       
})

const btn = document.getElementById('btnReiniciar');

btn.addEventListener('click',()=>{

	swal({
  title: 'Estás seguro de reiniciar el pedido ?',
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Eliminaste todo man", {
      icon: "success",
    });
    divPedido.innerHTML = '';
    divTotalCompra.innerHTML = '';
    financiacion.innerHTML = '';
  } else {
    swal("Seguí comprando crack !");
  }
});

})
const divDolar = document.getElementById('divDolar')

setInterval(()=>{

divDolar.innerHTML = '';
fetch ('https://criptoya.com/api/dolar')
.then((response)=> response.json())
.then(({blue})=>{
		divDolar.innerHTML+=`
			
		<div class="card" style="width: auto; text-align: center; margin:1px; background-color: black;">
				<div class="card-body">
					<ul class="list-group">
					  <li class="list-group-item" style="font-size: larger;font-weight: bold;"><p>Dolar Blue: $${blue}</p>
					  <p>Nosotros te mantenemos el precio igual !</p>
						</li>
					</ul>
				</div>
		</div>

		`
})

}, 30000)

const boton = document.querySelector('#boton');
const prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.toggle('dark-theme');
} else if (currentTheme === 'light') {
    document.body.classList.toggle('light-theme');
}

boton.addEventListener('click', () => {
    let theme;
    if (prefresDarkScheme.matches) {
        document.body.classList.toggle('light-theme')
        theme = document.body.classList.contains('light-theme') ? 'light' : 'dark'
    } else {
        document.body.classList.toggle('dark-theme')
        theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
    }
    localStorage.setItem('theme', theme)
})


Toastify({
  text: "BIENVENIDO",
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
}).showToast();