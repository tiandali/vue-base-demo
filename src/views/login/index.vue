<template>
  <div>
    {{title}}
    <el-row>
      <el-button @click="submitLoginData" type="success">成功按钮</el-button>
    </el-row>
    <div
      v-if="isShow"
      v-loading="socialLoading"
      class="login-container"
      :element-loading-text="'现在进行'+currentPath+'第三方登录,请稍等'"
    >
      <div class="login-right">
        <div class="title-container">
          <h3 class="title">PRE 权限后台系统登录</h3>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane name="loginForm">
            <span slot="label">
              <i slot="prefix" class>
                <svg-icon icon-class="user" />
              </i> 用户名登录
            </span>
            <el-form
              ref="loginForm"
              :model="loginForm"
              :rules="loginRules"
              class="login-form"
              label-position="left"
            >
              <el-form-item prop="username">
                <el-input
                  v-model="loginForm.username"
                  placeholder="账号"
                  name="username"
                  type="text"
                  autocomplete="off"
                >
                  <i slot="prefix" class>
                    <svg-icon icon-class="user1" />
                  </i>
                </el-input>
              </el-form-item>

              <el-form-item prop="password">
                <el-input
                  v-model="loginForm.password"
                  placeholder="密码"
                  name="password"
                  type="password"
                >
                  <i slot="prefix" class>
                    <svg-icon icon-class="密码" />
                  </i>
                </el-input>
              </el-form-item>

              <el-button
                :loading="loading"
                type="primary"
                style="width:100%;"
                @click.native.prevent="submitLoginData"
              >登录</el-button>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { getLoginData } from "../../api/login";
export default {
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 2) {
        callback(new Error("The password can not be less than 6 digits"));
      } else {
        callback();
      }
    };
    return {
      title: "这是登录页面",
      activeName: "loginForm",
      isShow: true,
      loginForm: {
        username: "admin",
        password: "123456",
        code: "",
        token: "",
        key: ""
      },
      loginRules: {
        username: [{ required: true, trigger: "blur" }],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },
  created() {},
  methods: {
    submitLoginData() {
      getLoginData().then(res => {
        console.log("res: ", res);
        if (res.data.code !== "10000") {
          this.$message("登录失败");
        } else {
          this.$store.dispatch("userLogin", true);
          //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
          //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
          localStorage.setItem("Flag", "isLogin");
          //iViewUi的友好提示
          this.$message(res.data.message);
          //登录成功后跳转到指定页面
          this.$router.push("/search");
        }
        this.title = res.data;
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  /*background: red;*/
  background-size: cover;

  .login-right {
    width: 30%;
    padding: 50px;
    border-radius: 6px;
    background: #ffffff;

    .title {
      margin: 0 auto 30px auto;
      text-align: center;
      color: #505458;
    }

    .login-form {
      height: 50%;
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    .other-login {
      margin-top: 3vh;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .other-icon {
      cursor: pointer;
      margin-left: 5px;
      fill: rgba(0, 0, 0, 0.2);
    }

    .other-icon:hover {
      fill: rebeccapurple;
    }

    .other-login .other-way {
      font-size: 14px;
      color: #515a6e;
      width: calc(100% - 56px);
    }

    .register {
      float: right;
      color: #1ab2ff;
      font-size: 14px;
      cursor: pointer;
      text-align: right;
    }

    .login-select {
      margin-left: 100px;
      margin-bottom: 13px;

      input {
        color: #333;
        font-size: 14px;
        font-weight: 400;
        border: none;
      }
    }
  }
}
</style>