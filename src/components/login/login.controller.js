import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../services/firebase"
import { useNavigate } from "react-router"

const Initial_Login_Data = {
    email: '',
    password: ''
}

export const useLoginController = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [loginData, setLoginData] = useState(Initial_Login_Data)
    const navigate = useNavigate()

    const handleUserInput = (e) => {
        const { name, value } = e.target
        setLoginData(prev => ({ ...prev, [name]: value }))
    }
    const loginUser = async (e) => {
        e.preventDefault()
        const { email, password } = loginData;
        setIsLoading(true)
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
            localStorage.setItem('userData', JSON.stringify(user))
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
        setLoginData(Initial_Login_Data)
        setIsLoading(false)
    }
    return {
        isLoading,
        handleUserInput,
        loginData,
        loginUser
    }
}