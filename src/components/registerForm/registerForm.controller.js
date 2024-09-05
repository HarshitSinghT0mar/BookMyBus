import { useState } from "react";
import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Initial_User = {
    email: '',
    password: '',
    fullName: ''
}

export const useRegisterFormController = () => {

    const [registerFormData, setRegisterFormData] = useState(Initial_User)
    const handleUserInput = (e) => {
        const { name, value } = e.target
        setRegisterFormData(prev => ({ ...prev, [name]: value }))
    }

    const registerUser = async (e) => {
        e.preventDefault()
        const { email, password, fullName: displayName } = registerFormData;
        console.log({registerFormData});
        
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password, displayName)
            console.log({ user });

        } catch (error) {
            console.log(error);
        }

    }

    return {
        registerFormData,
        registerUser,
        setRegisterFormData,
        handleUserInput
    }
}