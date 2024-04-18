import { useContext } from 'react';
import ThemeSwitcher from '~/components/ThemeSwitcher';
import ThemeContext from '~/context/theme';
import './style.scss';

export interface ILayoutProps {}

const DefaultLayout = ({ children }: React.PropsWithChildren<ILayoutProps>) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`theme-${theme} layout`}>
      <ThemeSwitcher />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
