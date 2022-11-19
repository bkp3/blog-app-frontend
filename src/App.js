import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Base from './components/Base';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Categories from './pages/Categories';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Services from './pages/Services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './pages/user-routes/UserDashboard';
import PrivateRoute from './components/PrivateRoute';
import ProfileInfo from './pages/user-routes/ProfileInfo';
import PostPage from './pages/PostPage';
import UserProvider from './context/UserProvider';
import UpdateBlog from './pages/UpdateBlog';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ToastContainer position='bottom-center' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/posts/:postId' element={<PostPage />} />
          <Route path='/categories/:categoryId' element={<Categories />} />

          <Route path='/user' element={<PrivateRoute />} >
            <Route path='dashboard' element={<UserDashboard />} />
            <Route path='profile-info' element={<ProfileInfo />} />
            <Route path='update-blog/:blogId' element={<UpdateBlog />} />
          </Route>


        </Routes>

      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
