import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import SignPage from "./pages/SignPage/SignPage";
import Navbar from "./components/Navbar/Navbar";
import ContactPage from "./pages/ContactPage/ContactPage"
import ErrorPage from "./pages/ErrorPage"
import Footer from "./components/Footer/Footer";
import { Logout } from "./pages/Logout";
import ServicePage from "./pages/ServicePage/ServicePage";

function App() {
  const [count, setCount] = useState(0);
  const divStyle: React.CSSProperties = {
    backgroundImage:
      "url('https://img.freepik.com/free-photo/realistic-phone-studio-social-media-concept_23-2151459542.jpg?t=st=1720115498~exp=1720119098~hmac=55eff35a935566097f335048f3c266f7a7cc64f904de5defdf37b7df22d1bc36&w=1380')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    opacity: 0.8,
    borderRadius: "40px",
  };
  console.log("I refreshed");

  return (
    <>
      <div className="lg:w-full ">
        
        {/* -------- Login Form --------
          <div className="m-10 w-full rounded-[40px] bg-gray-500  ">
            <div className="" style={divStyle} >
              <form className="flex flex-col gap-3 p-16" onSubmit={(e)=>{
                e.preventDefault();
              }}>

              <div className="flex  justify-between items-center">
                  <label htmlFor="email" className="">Email</label>
                  <input className="lg:min-w-96 min-w-60 p-2 rounded-md" type="text" name="email" />
                  
                </div>
                <div className="flex  justify-between items-center">
                  <label htmlFor="fname" className="">First Name</label>
                  <input className="lg:min-w-96 min-w-60 p-2 rounded-md" type="text" name="fname" />
                </div>
                <div className="flex justify-between items-center" >
                  <label htmlFor="fname" className="">Last Name</label>
                  <input className="lg:min-w-96 min-w-60  p-2 rounded-md" type="text" name="fname" />
                </div>
                
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="">Password</label>
                  <input className="lg:min-w-96 min-w-60  p-2 rounded-md" type="password" name="password" />
                  
                </div>
                <div className="flex justify-end mt-12">
                  <div className="flex items-center mr-32"><p className="justify-center">Not Signed in ? <a href="">Click here</a></p></div>
                  
                <button className="w-1/3" type="submit">Submit</button>
                </div>
              </form>
            </div>
        </div> */}

        <Router>
        <Navbar />

          <Routes>
            <Route path="/"  element={<HomePage />} />
            
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/service" element={<ServicePage />} />
            {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </>
  );
}

export default App;
