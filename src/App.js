import logo from './logo.svg';
import './App.css';
import router from './routes';
import { RouterProvider } from 'react-router-dom';
import store from './store';
import {Provider} from "react-redux"

function App() {
  return (
    <>
    <Provider store={store} >
      <RouterProvider router={router} ></RouterProvider>

    </Provider>
    </>
  );
}

export default App;
