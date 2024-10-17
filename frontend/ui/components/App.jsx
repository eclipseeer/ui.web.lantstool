import { useStoreEffect } from '@react-vault';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Topbar } from '@components/Topbar/Topbar.jsx';
import { useLoader } from '@frontend/ui/hooks/useLoader.js';
import { useManageRouting } from '@components/useManageRouting.js';
import cn from './App.module.scss';

export const App = () => {
  const navigate = useNavigate();
  const params = useParams();
  const initApp = useStoreEffect((store) => store.initApp);

  const [isLoading] = useLoader(initApp, { navigate, params });
  useManageRouting();

  if (isLoading) return null;

  return (
    <div className={cn.app}>
      <Topbar />
      <Outlet />
    </div>
  );
};
