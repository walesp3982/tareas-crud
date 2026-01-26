import { Login } from './pages/Login'
import { createBrowserRouter } from 'react-router'
import { Register } from './pages/Register'
import { Dashboard } from './pages/Dashboard'
import { Layout } from './layouts/Guest'
import { App } from './layouts/App'

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            { index: true, Component: Login },
            { path: "register", Component: Register }
        ]
    },
    {
        path: "/app",
        Component: App,
        children: [
            { index: true, Component: Dashboard }
        ]
    }
])