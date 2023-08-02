import './App.css';
import { Provider } from 'react-redux';
import CakeContainer from './components/cakeContainer';
import store from './store';
import UserContainer from './components/userContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
