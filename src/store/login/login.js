const login = {
  state: {
    isLogin: false
  },
  // 获取属性的状态
  getters: {
    //获取登录状态
    isLogin: state => state.isLogin
  },
  mutations: {
    //保存登录状态
    userStatus(state, flag) {
      state.isLogin = flag;
    }
  },

  actions: {
    userLogin({ commit }, flag) {
      commit("userStatus", flag);
    }
    // 用户名登录

    // 前端 登出
  }
};

export default login;
