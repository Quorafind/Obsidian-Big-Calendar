import react, { useEffect } from 'react';
import {Store} from './createStore';
import useState from 'react-usestateref';


interface Props {
  children: React.ReactElement;
  store: Store<any, any>;
  context: React.Context<any>;
}

/**
 * Toy-Redux Provider
 * Just for debug with the app store
 */
const Provider: React.FC<Props> = (props: Props) => {
  const {children, store, context: Context} = props;
  const [appState, setAppState, appStateRef] = useState(store.getState());
  console.log(appStateRef.current);
  console.log("render 5th");

  useEffect(() => {
    const unsubscribe = store.subscribe((ns) => {
      setAppState(ns);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <Context.Provider value={appState}>{children}</Context.Provider>;
};

export default Provider;
