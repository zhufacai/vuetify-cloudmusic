import axios from "../api";

// 手机登录
function cellphone(phone, password, countrycode = "86") {
    return axios
        .post("/login/cellphone", {
            phone,
            password,
            countrycode
        })
        .then(res => {
            let code = 2;
            switch (res.code) {
                case 502: // 密码错误
                    code = 0;
                    break;
                case 200: // 登录成功
                    code = 1;
                    break;
                case 250: // 登录失败
                    code = 2;
                    break;
                case 509: // 密码错误超过限制
                    code = 3;
                    break;
            }
            return Promise.resolve(code);
        });
}

export default cellphone;
