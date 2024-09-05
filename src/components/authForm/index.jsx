import { useState } from 'react';
import LoginForm from '../login';
import RegisterForm from '../registerForm';


const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md border border-solid">
            {isLogin ? <LoginForm onToggle={toggleForm} /> : <RegisterForm onToggle={toggleForm} />}
        </div>
    );
};

export default AuthForm;
