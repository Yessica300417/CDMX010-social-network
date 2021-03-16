//
export function sesion (target){
   const html= `<div id="admin">
                <h1>Iniciar sesión</h1>
                <form class="form" id="form">
                <p>Ingresa tu correo electrónico y contraseña</p>
                <h4>Correo electrónico</h4>
                <input type="email" class="form-control" id="useremail" placeholder="Ej: usuario@servidor.com" required>
                <h4>Contraseña</h4>
                <input type="password" class="form-control" id="password" placeholder="Ingrese contraseña:" required>
                <h5>¿Olvidaste tu contraseña?</h5>
                <button type="submit" class="btn btn-outline-success" id=btnSesion>Iniciar</button>
                <p>ó ingresa con</p>
                <button>Goggle</button>
                <p>¿No tienes una cuenta?</p>
                <h5 id="register">Registrate</h5>
                </div>`

         target.innerHTML= html;
                 
   const btn= document.getElementById('btnSesion');
   const useremail= document.getElementById('useremail');
   const password= document.getElementById('password');
   const register= document.getElementById('register');

    let currentUsers= JSON.parse (localStorage.getItem('text'));

        btn.addEventListener ('click', function (e){
          e.preventDefault();
          let users= [...currentUsers,
            {
              correo: useremail.value,
              contraseña: password.value,
            }
          ];
          localStorage.setItem ('text', JSON.stringify (users));
          location.href='/posts'
        }); 

        register.addEventListener('click', function (e){
            e.preventDefault();
            location.href= '/signUp'
        });

};