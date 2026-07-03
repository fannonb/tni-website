import { Navigate, useLocation } from 'react-router-dom';
import { ServicePageLayout } from '../components/ServicePageLayout';
import { getServiceByPath } from '../data/allServices';

export default function ServicePageRoute() {
  const { pathname } = useLocation();
  const service = getServiceByPath(pathname);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return <ServicePageLayout service={service} />;
}
