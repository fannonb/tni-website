import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SiteLayout } from './components/Layout';
import Home from './pages/Home';
import Conditions from './pages/Conditions';
import ServicePageRoute from './pages/ServicePageRoute';
import ForAttorneys from './pages/ForAttorneys';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { ALL_SERVICES } from './data/allServices';
import './styles/fonts.css';
import './styles/global.css';
import './index.css';

const serviceRoutes = ALL_SERVICES.map((service) => ({
  path: service.path,
  element: <ServicePageRoute />,
}));

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/conditions', element: <Conditions /> },
      { path: '/services', element: <Services /> },
      ...serviceRoutes,
      { path: '/for-attorneys', element: <ForAttorneys /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
