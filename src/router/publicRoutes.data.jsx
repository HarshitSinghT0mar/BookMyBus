import LoginForm from "../components/login"
import RegisterForm from "../components/registerForm"
import BusDetailsAndSeatSelection from "../pages/busDetails"
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
    {
        path: '/:routeId',
        component: <LandingPage />,
        role: ['user'],
    },
    {
        path: '/:routeId/:busId',
        component: <BusDetailsAndSeatSelection />,
        role: ['user'],
    },

]
