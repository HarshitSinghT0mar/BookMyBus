import LoginForm from "../components/login"
import RegisterForm from "../components/registerForm"
import LandingPage from "../pages/landingPage"

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
    {
        path: '/',
        component: <LandingPage />,
        role: ['user'],
    },

]
