import axios from "axios";

const postLogin = (loginForm,setAccess) => {
    axios
      .post("https://almiapi.herokuapp.com/api/login", loginForm)
      .then((res) => setAccess(res.data))
      .catch((err) => {
        console.log(err)
      });
};

export { postLogin };
