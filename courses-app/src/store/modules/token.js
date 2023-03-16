import axios from 'axios';

export default {
    state: {
       authToken: null,
    },
    mutations: {
        setToken(state, token) {
          state.authToken = token;
        },
    },
    actions: {
        async getToken({ commit }) {
            try {
               const response = await axios.get(
                "https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions"
              );
                commit("setToken", response.data.token);
            } catch (error) {
                console.log(error)
            }
        }
    },
};
  