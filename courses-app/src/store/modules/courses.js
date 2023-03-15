import axios from 'axios';

export default {
    state: {
        courses: [],
        error: null,
        loading: false,
      },
      mutations: {
        setCourse(state, courses) {
          state.courses = courses;
        },
        setLoading(state, loading) {
          state.loading = loading;
        },
        setError(state, error) {
            state.error = error;
        }
      },
      actions: {
        async fetchCourses({ commit }) {
            let apiKey = null;
            try {
               const token = await fetch(
                "https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions"
              );
              apiKey = await token.json();
            } catch {
                console.log("Error get token");
            }
            try {
              const response = await axios.get(`https://api.wisey.app/api/v1/core/preview-courses`, {
                headers: {
                    'Authorization': `Bearer ${apiKey.token}`
                }
              })
              commit('setCourse', response.data.courses)
            } catch (error) {
              commit('setError', error)
            }
          }
      }
  };
  