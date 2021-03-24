//
import {bienvenida} from './components/welcome.js'
import {sesion} from './components/logIn.js'
import {newusers} from './components/signUp.js'
import {posts} from './components/posts.js'
import {createPosts} from './components/createposts.js'
import {profile} from './components/profile.js'


const appElement =document.getElementById('app')

// router
const routes = {
    '/' : bienvenida,
    '/logIn' : sesion,
    '/signUp' : newusers,
    '/posts' : posts,
    '/createPosts' : createPosts,
    '/profile' : profile,
  };

const welcomeComponent = routes[window.location.pathname];
welcomeComponent(appElement)

  function onNavigate(pathname){
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )

    const component = routes[pathname] 
    component(appElement)
  };
