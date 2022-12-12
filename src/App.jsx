import { Test } from "../src/components/Test";
import { useData } from "./hooks/useData";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

import "./App.css";

function App() {
  const {
    logged,
    handleLogin,
    handleLogOut,
    body,
    handleCreateUser,
    handleOnChangeUsername,
    handleOnChangePass,
    handleCancel,
    lleno,
    passLleno,
    disable,
    inputPass,
    inputUserName,
    handleCreateUserLogin,
    userFull,
    passFull,
    handleOnChangeUsernameLogin,
    handleOnChangePassLogin,
    access,
  } = useData();

  return (
    <div className="App">
      {!logged ? (
        <Login
          handleLogOut={handleLogOut}
          handleLogin={handleLogin}
          handleCreateUserLogin={handleCreateUserLogin}
          handleOnChangeUsername={handleOnChangeUsername}
          handleOnChangePass={handleOnChangePass}
          userFull={userFull}
          passFull={passFull}
          handleOnChangeUsernameLogin={handleOnChangeUsernameLogin}
          handleOnChangePassLogin={handleOnChangePassLogin}
          access={access}
        />
      ) : (
        <SignUp
          body={body}
          handleCreateUser={handleCreateUser}
          handleOnChangeUsername={handleOnChangeUsername}
          handleOnChangePass={handleOnChangePass}
          handleCancel={handleCancel}
          lleno={lleno}
          passLleno={passLleno}
          disable={disable}
          inputPass={inputPass}
          inputUserName={inputUserName}
        />
      )}
    </div>
  );
}

export default App;
