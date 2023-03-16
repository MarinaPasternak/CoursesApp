import axios from 'axios';
import store from '@/store';

export default {
    state: {
        courses: [],
        coursesError: null,
        coursesLoading: false,
    },
    mutations: {
        setCourse(state, courses) {
            state.courses = courses;
        },
        setLoading(state, loading) {
            state.coursesLoading = loading;
        },
        setError(state, error) {
            state.coursesError = error;
        }
      },
      actions: {
        async fetchCourses({ commit }) {
            if (!store.state.token.authToken) {
              await store.dispatch('getToken')
            }

            const token = store.state.token.authToken;
            
            commit('setLoading', true);
            try {
                const response = await axios.get(`https://api.wisey.app/api/v1/core/preview-courses`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                commit('setLoading', false);
                commit('setCourse', response.data.courses);
            } catch (error) {
                commit('setError', error.message);
                commit('setLoading', false);
            }
          } 
      }
  };
  