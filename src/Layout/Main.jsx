import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import AnimatedCursor from "react-animated-cursor"


const Main = () => {
    return (
        <div>
           <AnimatedCursor
  innerSize={8}
  outerSize={30}
  innerScale={1}
  outerScale={1.5}
  outerAlpha={0}
  trailingSpeed={6}
  outerStyle={{
    border: '2px solid cyan'
  }}
  innerStyle={{
    backgroundColor: '#fff'
  }}
/>

            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;