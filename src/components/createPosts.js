// vista con cuadrito de text area y boton de publicar
export function createPosts(target) {
    const html = `<div><textarea placeholder="¿Cómo te sientes hoy de maravillos@?" id="publication" cols="25" rows="8" required></textarea>
                  <button id="btnPost">Publicar</button>
                  </div>`

    target.innerHTML = html;

    const btnPost = document.getElementById('btnPost');
    const publication = document.getElementById('publication');
    
    let postsActuales = JSON.parse(localStorage.getItem('publications'));

    if(!postsActuales){
        postsActuales = [];           
    };

    btnPost.addEventListener('click', function (e) {
        e.preventDefault();
        const identifier=(Math.random()*1000).toFixed(0)
        let wall = [...postsActuales,
        {
            id: identifier,
            message: publication.value,
        } 
        ];
        localStorage.setItem('publications', JSON.stringify(wall))
        location.href = '/posts'
    });

    
};
