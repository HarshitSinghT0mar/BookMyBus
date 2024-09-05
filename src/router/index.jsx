import { Route, Routes } from "react-router"
import { publicRoutes } from "./publicRoutes.data"

const Router = () => {
    return (
        <Routes>
            {publicRoutes?.map((route) => {
                return <Route key={route?.path} element={route?.component} />
            })}
        </Routes>
    )
}

export default Router