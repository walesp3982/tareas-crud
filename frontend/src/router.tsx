import { Login } from './pages/Login'
import { createBrowserRouter, type LoaderFunctionArgs } from 'react-router'
import { Register } from './pages/Register'
import { Dashboard } from './pages/Dashboard'
import { Layout } from './layouts/Guest'
import { App } from './layouts/App'
import { redirect } from 'react-router'
import { getTokenAuth, validateToken } from './services/auth'


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
        loader: protectedLoader,
        children: [
            { index: true, Component: Dashboard },
        ]
    }
])

async function requireAuth(request: Request) {
    const token = getTokenAuth();

    if (!token) {
        const url = new URL(request.url)
        throw redirect(`/?from=${url.pathname}`)
    }

    try {
        await validateToken()
    } catch {
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
async function protectedLoader({ request }: LoaderFunctionArgs) {
    await requireAuth(request)
}


