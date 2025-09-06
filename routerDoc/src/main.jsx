import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createContactAction, editContactAction } from './actions/contactsActions';
import Contact from './Contact';
import EditContact from './EditContact';
import ErrorPage from './Error';
import "./index.css";
import { getContactLoader, getContactsLoader } from './loaders/contactsLoader';
import Root from './Root';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action:createContactAction,
    children: [
      {
        path: "/contacts/:contactId", element: <Contact />,
        loader: getContactLoader
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactLoader,
        action:editContactAction
    
      }
    ]
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router} />
  </StrictMode>,
)
