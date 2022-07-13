import styles from './index.less';
import LoginPage from "@/pages/login/Login";

export default function IndexPage(props) {
  if (props.location.pathname === '/login') {
    return <LoginPage></LoginPage>
  }else {
    return (
      <div>
        <h1 className={styles.title}>
          Page index

        </h1>
        <div>
          { props.children }
        </div>
      </div>
    );
  }

}
