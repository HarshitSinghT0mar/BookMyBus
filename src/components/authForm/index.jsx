import { useState } from 'react';
import LoginForm from '../login';
import RegisterForm from '../registerForm';


const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {isLogin ? <LoginForm onToggle={toggleForm} /> : <RegisterForm onToggle={toggleForm} />}
        </div>
    );
};

export default AuthForm;
