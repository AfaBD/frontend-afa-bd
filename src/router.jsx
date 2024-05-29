import { createBrowserRouter } from 'react-router-dom'

import NotFound from './components/notFound/view'
import LoginView from './components/login/view'
import RegisterView from './components/register/view'
import HomeView from './components/home/view'
import QueryView from './components/home/query/view'
import ProtectedRoute from './components/protected/view'

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginView/>
    },
    {
        path: '/register',
        element: <RegisterView/>
    },
    {
        path: '/home',
        element: <ProtectedRoute component={HomeView}/>
    },
    {
        path: '/home/query/:id',
        element: <ProtectedRoute component={QueryView}/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router
