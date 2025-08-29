import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Contact';
import ErrorPage from './Error';
import './index.css';
import { getContactsLoader } from './loader/contactsLoader';
import Root from './Root';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    children: [
      {
    path:"/contacts/:contactId", element:<Contact/>
  }
    ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router} />
  </StrictMode>,
)
