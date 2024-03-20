
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Register from './Auth/Register';
import Home from './Pages/Home';
import Login from './Auth/Login';

function App() {
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/login',
    element:<Login/>
  },

])
  return (
    <div className="App">
     <RouterProvider router={router}/>
      
    </div>
  );
}

export default App;
