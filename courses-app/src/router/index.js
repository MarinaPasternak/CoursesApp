import Vue from 'vue';
import VueRouter from 'vue-router';
import CoursesPage from '../views/courses-page/CoursesPage.vue';
import CoursePage from '../views/course-page/CoursePage.vue';
import NotFound from '../components/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'courses',
        component: CoursesPage
    }, {
        path: '/courses',
        name: 'courses',
        component: CoursesPage,
    }, {
        path: '/course/:courseId',
        name: 'course',
        component: CoursePage,
        props: true
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