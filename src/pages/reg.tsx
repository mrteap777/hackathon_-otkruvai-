import { classicNameResolver } from "typescript"
import classes from "../Styles/components/reg.module.scss"
import { useState } from "react"
import UIInput from "../components/UIInput"
import UIButton from "../components/UIButton"
import { TfiClose } from "react-icons/tfi"
import { useNavigate } from "react-router-dom"
import router from "next/router"


const Reg = () => {

  const [reg, setReg] = useState(true);

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    return(
        <div className={classes["Reg"]}>
            <div className={classes["Reg__Window"]}>
            {reg ? <h1 className={classes["Reg__Window-h1"]}>Зарегистрироваться</h1> : <h1 className={classes["Reg__Window-h1"]}>Войти</h1>}
                <TfiClose className={classes["Reg__Window-close"]} onClick={() => router.push("/")} />
                <div className={classes["Reg__Window-input"]}>
                    <UIInput
                    text={"Логин"}
                    value={login}
                    setValue={(e) => setLogin(e.currentTarget.value)}
                    type={"name"}/>
                    <UIInput
                    text={"Пароль"}
                    value={password}
                    setValue={(e) => setPassword(e.currentTarget.value)}
                    type={"discription"}/>
                </div>
                
                <UIButton type='number' children="Войти"/>
                {reg ? (
                    <p>
                    Have an account?{" "}
                    <a className={classes["setreg"]} onClick={() => setReg(!reg)}>
                    Log in
                    </a>
                    </p>
                ) : (
                    <p>
                    Don`t have an account?{" "}
                    <a className={classes["setreg"]} onClick={() => setReg(!reg)}>
                    Sign in
                    </a>
                    </p>
                )}
            </div>
            
        </div>
    )
}

export default Reg