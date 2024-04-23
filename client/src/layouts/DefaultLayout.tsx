import { useContext } from 'react';
import ThemeSwitcher from '~/components/ThemeSwitcher';
import ThemeContext from '~/context/theme';
import './style.scss';
import LoginButton from '~/components/LoginButton';

export interface ILayoutProps {}

const DefaultLayout = ({ children }: React.PropsWithChildren<ILayoutProps>) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`theme-${theme} layout`}>
      <ThemeSwitcher />
      <LoginButton />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
