import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../data/getData";
import { postCreateUser } from "../data/postCreateUser";
import { postLogin } from "../data/postLogin";

const useData = () => {
  const [a, setA] = useState();
  //inputs
  //sign up
  const [inputUserName, setInputUsername] = useState("");
  const [inputPass, setInputPass] = useState("");
  //login
  const [inputUserNameLogin, setInputUsernameLogin] = useState("");
  const [inputPassLogin, setInputPassLogin] = useState("");

  const [postData, setPostData] = useState([]);
  const [logged, setLogged] = useState(false);
  const [count, setCount] = useState(0);
  const [lleno, setLleno] = useState(true);
  const [passLleno, setPassLleno] = useState(true);
  const [userFull, setUserFull] = useState(true);
  const [passFull, setPassFull] = useState(true);
  const [access,setAccess] = useState({"":""});

  const [disable, setDisable] = useState(false);
  const [loginForm, setLoginForm] = useState({"":""});
  const [body, setBody] = useState({ "": "" });

  function createUserObject() {
    const logger = {
      method : "POST",
      username : inputUserName,
      password : inputPass,
      header: {
        "Access-Control-Allow-Origin": "*"
      }
    }
    setLoginForm(logger)
  }

  function handleGetData() {
    getData(setPostData);
  }

  function handleLogin() {
    setLogged(true);
    console.log("handle login used");
    console.log("el valor de logged es: " + logged);
  }

  function handleCount() {
    setCount(count + 1);
  }

  function handleLogOut() {
    setLogged(true);
  }

  function handleCancel() {
    setLogged(false);
    resetInputs()
  }

  function lanzarCrear() {
    setLogged(false);
    postCreateUser(body);
    setLleno(true);
    setPassLleno(true);
  }

  function resetInputs(){
    setInputUsername('')
    setInputPass('')
    setLleno(true)
    setPassLleno(true)
  }

  function handleCreateUser() {
    if (inputUserName === "") {
      setLleno(false);
    } else if (inputPass.length < 8) {
      setLleno(true)
      setPassLleno(false);
    } else {
      lanzarCrear()
      resetInputs()
    }
  }

  function lanzarLogin(){
    postLogin(loginForm,setAccess)
    setUserFull(true)
    setPassFull(true)
    if(access.logged == true){
      resetInputs()
    }
  }

  function handleCreateUserLogin(){
    if(inputUserNameLogin === ''){
      setUserFull(false)
    }else if(inputPassLogin.length < 8){
      setUserFull(true)
      setPassFull(false)
    } else {
      lanzarLogin()
    }
  }

  //handleonchangeInputs
  //login
  function handleOnChangeUsernameLogin(evt) {
    setInputUsernameLogin(evt.target.value);
  }

  function handleOnChangePassLogin(evt) {
    setInputPassLogin(evt.target.value);
  }

  //signup
  function handleOnChangeUsername(evt) {
    setInputUsername(evt.target.value);
  }

  function handleOnChangePass(evt) {
    setInputPass(evt.target.value);
  }

  useEffect(() => {
    const userLogin = {
      method: "POST",
      username: inputUserNameLogin,
      password: inputPassLogin,
      header: {
        "Access-Control-Allow-Origin": "*"
      }
    };
    const user = {
      method: "POST",
      username: inputUserName,
      password: inputPass,
      header: {
        "Access-Control-Allow-Origin": "*"
      }
    };
    setBody(user)
    setLoginForm(userLogin)
  }, [inputPass, inputUserName,inputUserNameLogin,inputPassLogin]);

  return {
    a,
    setA,
    postData,
    setPostData,
    handleGetData,
    handleLogin,
    count,
    handleCount,
    logged,
    handleLogOut,
    body,
    setBody,
    handleCreateUser,
    handleOnChangeUsername,
    handleOnChangePass,
    createUserObject,
    handleCancel,
    lleno,
    passLleno,
    disable,
    handleCreateUserLogin,
    userFull,
    passFull,
    handleOnChangeUsernameLogin,
    handleOnChangePassLogin,
    access
  };
};

export { useData };
