import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './newRoutes/layouts/dashboard';
import LogoOnlyLayout from './newRoutes/layouts/LogoOnlyLayout';
//
import Login from './pages/Login';

import DashboardApp from './newRoutes/pages/DashboardApp';
import Affilliate from './newRoutes/pages/Affilliate';
import Vendor from './newRoutes/pages/Vendor';
import NotFound from './newRoutes/pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },

        { path: 'Vendor', element: <Vendor /> },
        { path: 'Affilliate', element: <Affilliate /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
