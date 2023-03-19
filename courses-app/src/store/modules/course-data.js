import axios from 'axios';
import store from '@/store';

export default {
    state: {
        course: null,
        courseError: null,
        courseLoading: false,
    },
    mutations: {
        setCourse(state, course) {
            state.course = course;
        },
        setLoading(state, loading) {
            state.courseLoading = loading;
        },
        setError(state, error) {
            state.courseError = error;
        }
    },
    actions: {
        async fetchCourseDataById({ commit }, courseId) {
            if (!store.state.token.authToken) {
                await store.dispatch('getToken')
            }
  
            const token = store.state.token.authToken;
              
            commit('setLoading', true);
            try {
                  const response = await axios.get(`https://api.wisey.app/api/v1/core/preview-courses/${courseId}`, {
                      headers: {
                          'Authorization': `Bearer ${token}`
                      }
                  });
                  commit('setLoading', false);
                  commit('setCourse', response.data);
            } catch (error) {
                  commit('setError', error.message);
                  commit('setLoading', false);
            }
        } 
    },
   
}
