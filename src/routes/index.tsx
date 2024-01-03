import { createBrowserRouter } from "react-router-dom";
import Activity from '../pages/Activity'

export const router = createBrowserRouter([{
    path: '/',
    // element: <Activity />,
    // errorElement: <></>,
    // loader: 
    children: [
        {
            path: 'activity',
            element: <Activity />
        }
    ]
}])

