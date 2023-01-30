import { Route, Routes } from 'react-router-dom';
 import Home from './components/Home';
 import Profile from './components/Profile';
 import Posts from './components/Posts';
 import Navbar from './components/Navbar';
 import Signup from './components/Signup';
 import Login from './components/Login';
 import SinglePost from './components/SinglePost';
 function App() {
  return (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/posts/:id" element={<SinglePost />} />
      <Route path="posts" element={<Posts />} />
    </Routes>
  </div>
  );
 }

 export default App;