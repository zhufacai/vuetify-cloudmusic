import axios from "../api";

// 返回登录状态等信息
function status() {
  return new Promise((resolve, reject) => {
    axios
      .get("/login/status")
      .then(response => {
        if (response.data.account === null) {
          resolve({
            islogin: false
          });
        } else {
          axios
            .get("/user/detail", {
              params: {
                uid: response.data.account.id
              }
            })
            .then(response => {
              resolve({
                islogin: true,
                userId: response.profile.userId,
                level: response.level,
                avatarUrl: response.profile.avatarUrl
              });
            })
            .catch(error => error);
        }
      })
      .catch(error => error);
  });
}

export default status;
