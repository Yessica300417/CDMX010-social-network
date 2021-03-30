// leer los post de local storage
export function posts(target) {
  const template = `<div class="container">
                    <button type="submit" class="miniboton" id="createBtn">Crear Publicación</button></div>
                    <h2>Muro</h2>
                    <div id="printPosts">
                    </div>
                    <button type="button "id="close">Cerrar sesión</button>
                    </div>
                      `;

  target.innerHTML = template

  const boton = document.querySelector('.miniboton');
  const closeUI= document.getElementById('close')
  const printPostsUI= document.getElementById('printPosts');
  let arrayActivities= []; 

    const printUI= () =>{
    console.log(printUI);
    printPostsUI.innerHTML= '';

    arrayActivities= JSON.parse(localStorage.getItem('publications'));

    if(!arrayActivities){
      arrayActivities.innerHTML= `<span id="noPosts">No hay publicaciones.</span>`
   }else {
     arrayActivities.forEach(thePublication => {
         printPostsUI.innerHTML += setHtml(thePublication)
     });
   };
   console.log('ya funciona');
  };

  const saveUI= () =>{
    localStorage.setItem('publications', JSON.stringify(arrayActivities));
    printUI();
  }
 
  const deleteUI= (publications) =>{
    let identifierUI;
     arrayActivities.forEach((thePublication, identifier) =>{
       if(thePublication.publications === publications){
         identifierUI= identifier;
       }
     });
     arrayActivities.splice(identifierUI,1);
     saveUI();
     console.log('ya elimina'); 
  };

  const editUI= (publications) =>{
    let indexUI= postsActuales.findIndex((thePublication)=>{
    return thePublication.publications === publications});
    console.log(indexUI);
  }


  
  boton.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = '/createPosts'
  });

  document.addEventListener('DOMContentLoaded', printUI);

  printPostsUI.addEventListener('click', (e) =>{
    e.preventDefault();
    
    if(e.target.innerHTML === 'create' || e.target.innerHTML === 'delete'){
      let text= (e.path[2].childNodes[1].innerHTML);
      if(e.target.innerHTML === 'delete'){
        //Acción de eliminar
        deleteUI(text)
      }
      if(e.target.innerHTML === 'create'){
        //Acción de editar
        editUI(text)
      }
    }
    

  })

  closeUI.addEventListener('click', (e) =>{
    e.preventDefault();
    location.href='/'
  });
};

function setHtml (infoPost) {
  console.log(infoPost);
  return `<div class="post" role="alert">
          <div>
          <p class="infoPost">${infoPost.message}</p>
          <span>
          <i class="material-icons" id="${infoPost.id}">create</i>
          <i class="material-icons" id="${infoPost.id}">delete</i>
          <i class="material-icons">favorite</i>
          </span>
          </div>
          </div>`
}

