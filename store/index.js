const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  env: {}
});

export const mutations = {
  SET_ENV(state, env) {
    state.env = env
  }
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    // if (process.server) {
    //   commit('SET_ENV', {
    //     API_URL: process.env.API_URL,
    //     BASE_URL: process.env.BASE_URL,
    //     APP_NAME: process.env.APP_NAME,
    //     APP_DESCRIPTION: process.env.APP_DESCRIPTION
    //   })
    // }
    console.log('nuxtServerInit')
    let herriak = null

    if (req && req.headers) {
      if (req.headers.cookie) {
        try {
          const parsed = cookieparser.parse(req.headers.cookie);
          if (parsed.herriak) {
            herriak = JSON.parse(parsed.herriak);
            //commit('authentication/SET_AUTH', auth, { root: true });
          }
        } catch (err) {
          console.log('error');
          console.log(err);
        }
      }
    }
  }
};
