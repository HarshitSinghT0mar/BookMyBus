import { useState } from "react";
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Initial_User = {
    email: '',
    password: '',
    fullName: ''
}

export const useRegisterFormController = () => {
    const [isRegistering, setIsRegistering] = useState(false)
    const [registerFormData, setRegisterFormData] = useState(Initial_User)
    const handleUserInput = (e) => {
        const { name, value } = e.target
        setRegisterFormData(prev => ({ ...prev, [name]: value }))
    }

    const registerUser = async (e) => {
        e.preventDefault()
        const { email, password, fullName } = registerFormData;
        setIsRegistering(true)
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password, fullName)
            localStorage.setItem('userData', JSON.stringify(user))
        } catch (error) {
            console.log(error);
            setIsRegistering(false)
        }
        setRegisterFormData(Initial_User)
        setIsRegistering(false)
    }

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = async () => {
        try {
            const user = await signInWithPopup(auth, provider)
            console.log({ user });

        } catch (error) {
            console.log(error);
        }

    };

    return {
        registerFormData,
        registerUser,
        setRegisterFormData,
        handleUserInput,
        signInWithGoogle,
        isRegistering
    }
}