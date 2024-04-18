import { Provider } from 'react-redux';
import { store } from '../ducks';
export interface StoreProviderProps {}

const StoreProvider = ({ children }: React.PropsWithChildren<StoreProviderProps>) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
