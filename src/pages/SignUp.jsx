
function SignUp({handleCreateUser, handleOnChangeUsername, handleOnChangePass, handleCancel,lleno, passLleno,disable}){
    

    return(
        <div>
            <input onChange={handleOnChangeUsername} placeholder="Ingresa un usuario"></input>
            {lleno==false && <p>llene el campo username</p>}
            <input onChange={handleOnChangePass} placeholder="Ingresa una contraseña"></input>
            {passLleno==false && <p>la contraseña debe tener 8 caracteres</p>}
            <button disabled={disable} onClick={handleCreateUser}> Crear usuario </button>
            <a onClick={handleCancel} >Ya tienes cuenta? login</a>
        </div>
    )
}

export { SignUp }