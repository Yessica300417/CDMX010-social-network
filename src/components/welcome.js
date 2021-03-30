// aqui exportaras las funciones que necesites

export function bienvenida(target) {
  const html = `<h1 id="titleBC">Beauty Culture</h1>
               <div id="dates">
               <p id="textWelcome">Podrás encontrar tips, reseñas y más.<br>
                  ¡Comienza ahora!, no esperes más.</p>
               <button type="submit" id="home">Comenzar</button>
               </div>`

  target.innerHTML = html;

  const entry = document.getElementById('home');

  entry.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = '/logIn'
  });

};