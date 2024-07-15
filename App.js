
import FashionEvents from "./pages/FasionEvents/FashionEvents";
import Myhome from "./pages/Myhome/MyHome"
import InfluencerPage from "./pages/InfluencerPage/Influencer"

import Category from "./pages/Category/Category"
import FashionAdvise from "./pages/FashionAdvise/FashionAdvise"
import Userpage from "./pages/Userpage/Userpage"
import FavInfluencerPage from "./pages/FavInfluencerPage/favInfluencerPage";
import Reels from "../src/pages/Reels-page/Reels-page";
import Feed from "../src/pages/feed/Feed";
import Login from "../src/pages/Login/Login"
import { useContext } from "react";
import Register from "./pages/register/register";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  
} from "react-router-dom";
import { AuthContex } from "./components/context/AuthContext";


function App() {
  const {user}=useContext(AuthContex)
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
   <Route path="/" element={user ? <Myhome /> : <Register />} />
   <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
    
    <Route path="/userPage" element={<Userpage/>}></Route>
    <Route path="/inflPage" element={<InfluencerPage/>}></Route>
    
    <Route path="/category" element={<Category/>}></Route>
    <Route path="/fashionAdvise" element={<FashionAdvise/>}></Route>
    <Route path="/fashionEvents" element={<FashionEvents/>}></Route>
    <Route path="/favIn" element={<FavInfluencerPage/>}></Route>
    <Route path="/reels" element={<Reels/>}></Route>
    <Route path="/feed" element={<Feed />}></Route>
   
   </Routes>
   </BrowserRouter>
    
  );
}

export default App;
