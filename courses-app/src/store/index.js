import Vue from 'vue'
import Vuex from 'vuex'
import courses from './modules/courses'
import courseData from './modules/course-data'
import token from './modules/token'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        token,
        courses,
        courseData
    }
})