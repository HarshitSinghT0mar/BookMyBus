import LoginForm from "../components/login"
import RegisterForm from "../components/registerForm"

export const publicRoutes = [
    {
        path: '/login',
        component: <LoginForm />,
        role: ['user'],
    },
    {
        path: '/signup',
        component: <RegisterForm />,
        role: ['user'],
    },
]
