import "./Home.css";
import TopNav from "../../components/topnav/topnav";
import Bottomnav from '../../components/bottomnav/Bottomnav';
// import FashionEvents from "../../components/fashionEvents/FashionEvents";
import  Share from "../../components/share/share";
import Post from "../../components/post/Post";
import Stories from "../../components/stories/Stories";

export default function Home() {
  return (
    <>
    <TopNav/>
    <Bottomnav/>
    <div className="home-container">
      <Share/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Stories/>

      
    </div>
    

    </>
  )
}
