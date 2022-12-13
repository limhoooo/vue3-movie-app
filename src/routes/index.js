import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
export default createRouter({
    // Hash mode, History mode 두가지로 구분됨

    // https://google.com/#/search
    history: createWebHashHistory(), // Hash mode
    // pages
    routes: [
        {
         path: '/',
         component: Home
        },
        {
            path: '/movie',
            component: Movie
        },
        {
         path: '/about',
         component: About
        },
        
    ]
})