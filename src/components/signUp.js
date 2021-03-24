//
export function newusers (target ){
    const html= `<div id="account">
                <h2>Registrate</h2>
                <form class="" id="">
                <p>Ingrese sus datos para continuar.</p>
                <h4>Usuario</h4>
                <input type="text" class="form-control" id="newUser" placeholder="Ej: Joaquín Gzl." required>
                <h4>Correo electrónico</h4>
                <input type="email" class="form-control" id="newEmail" placeholder="Ej: usuario@servidor.com" required>
                <h4>Contraseña</h4>
                <input type="password" class="form-control" id="newPassword" placeholder="Ingrese contraseña:" required>
                <p>Al continuar, acepta nuestros Términos de Servicio y Policia de Privacidad.</p>
                <button type="submit" class="btn btn-outline-success" id=btnRegister>Registrar</button>
                <p>¿Ya tienes una cuenta?</p>
                <h5 id="sesionUser">Iniciar sesión</h5>
                </div>`

         target.innerHTML= html;

            const btnAccount= document.getElementById('btnRegister');
            const newUser= document.getElementById('newUser');
            const newEmail= document.getElementById ('newEmail');
            const newPassword= document.getElementById ('newPassword');
            const sesionUser= document.getElementById('sesionUser');

            let currentRecords= JSON.parse (localStorage.getItem('text'))
          
                  btnAccount.addEventListener ('click', function (e){
                  e.preventDefault();
                   let registration= [...currentRecords,
                    {
                       usuario: newUser.value,
                       correo: newEmail.value,
                       contraseña: newPassword.value,
                    }
                   ];
                      localStorage.setItem ('text', JSON.stringify (registration));
                      location.href='/posts'
                 }); 

                  sesionUser.addEventListener('click', function (e){
                  e.preventDefault();
                  location.href= '/logIn'
                 });

};