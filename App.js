import './App.css';
// import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IcecreamContainer from './Components/IcecreamContainer';
import CookieContainer from './Components/CookieContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HooksCakeContainer />
        <IcecreamContainer />
        <CookieContainer />
      </div>
    </Provider>
  );
}

export default App;
