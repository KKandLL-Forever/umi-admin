// @ts-ignore
import { useOutlet } from 'umi';

const Outlet = useOutlet()
const Layout = () => {
  return (
    <div>
      <h1>公共layout</h1>
      {Outlet}
    </div>
  );
};

export default Layout;
