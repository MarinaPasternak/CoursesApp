import Vue from 'vue';
import VueRouter from 'vue-router';
import CoursesPage from '../views/courses-page/CoursesPage.vue';
import VideosPage from '../views/videos-page/VideosPage.vue';
import NotFound from '../components/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'courses',
        component: CoursesPage
    }, {
        path: '/courses',
        name: 'posts',
        component: CoursesPage
    }, {
        path: '/videos',
        name: 'videos',
        component: VideosPage
    }, {
        path: '*',
        name: 'Not Found',
        component: NotFound
      }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;