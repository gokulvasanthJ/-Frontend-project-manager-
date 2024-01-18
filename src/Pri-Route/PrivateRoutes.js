import { Outlet, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoutes = () => {
  let auth = { token: false };

  if (!auth.token) {
    // Notify user with a toast message
    toast.error('You need to log in to access this page', {
      autoClose: 5000, // Close the toast after 5 seconds
    });

    // Redirect to login page
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
