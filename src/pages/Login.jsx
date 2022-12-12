

function Login({handleLogOut, handleLogin, handleCreateUserLogin, handleOnChangeUsernameLogin, handleOnChangePassLogin, disableLogin, userFull, passFull, access}){
    return(
        <div>
            <input onChange={handleOnChangeUsernameLogin} placeholder="Ingresa username" ></input>
            {userFull==false && <p>llene el campo username</p>}
            <input onChange={handleOnChangePassLogin} placeholder="Ingresa contraseña" ></input>
            {passFull==false && <p>la contraseña debe tener 8 caracteres</p>}
            {access.logged == false && <p>{access.message}</p>}
            {access.logged == true && <p>Bienvenido {access.username}</p>}
            <button  onClick={handleCreateUserLogin}>Login</button>
            <button onClick={handleLogOut} >Crear Cuenta</button>
        </div>
    )
}

export { Login }