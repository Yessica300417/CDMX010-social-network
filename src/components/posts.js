// leer los post de local storage
export function posts(target) {
  const template = `<div class="container">
                    <button type="submit" class="miniboton" id="createBtn">Crear Publicación</button></div>
                    <h2>Muro</h2>
                    <div id="printPosts">
                    </div>
                    </div>
                      `;

  target.innerHTML = template

  const boton = document.querySelector('.miniboton');
  const printPosts= document.querySelector('#printPosts');
  let postsActuales = JSON.parse(localStorage.getItem('publicaciones'));
  if(!postsActuales){
     printPosts.innerHTML= `<span>No hay publicaciones</span>`
  }else {
    let html= '';
    postsActuales.forEach(lapublicación => {
        html += setHtml(lapublicación)
    });
    printPosts.innerHTML= html
  }

  console.log(postsActuales,'Yesseeei')

  
  boton.addEventListener('click', () => {
    
    location.href = '/createPosts'
  });
};

function setHtml (infoPost) {
  return `<div class="post">
          <p>${infoPost.publicaciones}</p>
          </div>`

}

