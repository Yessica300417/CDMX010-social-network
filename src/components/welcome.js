// aqui exportaras las funciones que necesites

export function bienvenida(target) {
  const html = `<h1>Beauty Culture</h1>
               <div id="dates">
               <p></p>
               <br><br><button type="submit" class="btn btn-outline-success" id="home">Comenzar</button>
               </div>`

  target.innerHTML = html;

  const entry = document.getElementById('home');

  entry.addEventListener('click', function () {
    location.href = '/logIn'
  });

};