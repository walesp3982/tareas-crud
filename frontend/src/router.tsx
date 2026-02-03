import { Login } from './pages/Login'
import { createBrowserRouter, type LoaderFunctionArgs } from 'react-router'
import { Register } from './pages/Register'
import { Dashboard } from './pages/Dashboard'
import { Layout } from './layouts/Guest'
import { App } from './layouts/App'
import { redirect } from 'react-router'
import { getTokenAuth, removeTokenAuth, validateToken } from './services/auth'
import { InfoProyect } from './pages/InfoProyect'


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Login,
                loader: async () => {
                    await requireGuest()
                    return null
                }
            },
            {
                path: "register",
                Component: Register,
                loader: async () => {
                    await requireGuest()
                    return null
                }
            }

        ]
    },
    {
        path: "app",
        Component: App,
        loader: async () => {
            await requireAuth()
            return null
        },
        children: [
            { index: true, Component: Dashboard },
            {
                path: "proyects/:proyectId",
                loader: async ({ params }: LoaderFunctionArgs) => {
                    const proyectId = params.proyectId
                    return { proyectId: proyectId }
                },
                Component: InfoProyect
            }
        ]
    }
])

async function requireAuth() {
    const token = getTokenAuth();
    if (!token) {
        throw redirect("/")
    }

    try {
        await validateToken()
    } catch {
        removeTokenAuth()
        throw redirect("/")
    }
}

async function requireGuest() {
    const token = getTokenAuth();

    if (token) {
        throw redirect("/app")
    }

    return null
}
