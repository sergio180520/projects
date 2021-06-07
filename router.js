import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';
import Filme from './pages/Filme';
import MeusFilmes from './pages/MeusFilmes';
import Erro from './pages/Erro';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path:'/filme/:id',
            component: Filme,
            props: true,
        },
        {
            path: '/salvos',
            component: MeusFilmes
        },
        {
            path: '*',
            component: Erro
        }
    ]
});

export default router;