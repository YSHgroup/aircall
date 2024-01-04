import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Activity from '../pages/Activity'

export const router = createBrowserRouter([{
    path: '/',
    element: <Root />,
    errorElement: <h2>Oops</h2>,
    // loader: 
    children: [
        {
            // index: true,
            path: 'activity',
            element: <Activity />,
            errorElement: <h2>Not founded</h2>
        }
    ]
}])

