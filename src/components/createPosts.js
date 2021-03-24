// vista con cuadrito de text area y boton de publicar
export function createPosts(target) {
    const html = `<div><textarea placeholder="¿Cómo te sientes hoy de maravillos@?" id="publication" cols="25" rows="8" required></textarea>
                  <button id="btnPost">Publicar</button>
                  </div>`

    target.innerHTML = html;

    const btnPost = document.getElementById('btnPost');
    const publication = document.getElementById('publication');
    
    let postsActuales = JSON.parse(localStorage.getItem('publicaciones'));

    if(!postsActuales){
        postsActuales = [];           
    };

    btnPost.addEventListener('click', function (e) {
        e.preventDefault();
        let muro = [...postsActuales,
        {
            publicaciones: publication.value,
        }
        ];
        localStorage.setItem('publicaciones', JSON.stringify(muro))
        location.href = '/posts'
    });

    
};
