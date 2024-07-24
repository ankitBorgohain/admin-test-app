import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";

const HomePage: React.FC = () => {
 const  {user} = useAuth()
  return (
    <section>
      <main>
        <div className="w-full ">
          <div className="grid lg:grid-cols-2 mb-20">
            <div className=" image-container-home w-fit">
              <img
                src="/images/Home-About.png"
                className="sm:h-2 lg:h-[690px] hidden lg:block"
                style={{ height: "600px"}}
              />
              <div className="mt-2  w-fit h-fit mx-auto text-xl ">
                <h1 className="font-extrabold">
                  Easy <span className="text-blue-400 font-normal">&</span>{" "}
                  Efficient
                </h1>
              </div>
            </div>

            <div className="home-info  ">
              
              <div>
                <h2 className="ml-2 m-8 text-5xl lg:mb-20"> Welcome, <span className="font-extrabold text-4xl text-[#FE7062]">{user.name}</span> to our website</h2>
              </div>

              <div>
                <p className="text-wrap mx-2 lg:mb-24">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                  accusamus adipisci dignissimos ratione. Consequatur pariatur
                  voluptatem cupiditate impedit unde provident voluptas dolore
                  ad? Porro minus animi, in tempore eaque debitis?
                </p>
              </div>

              <div className="flex justify-around mt-8">
                <div className="bg-blue-100 rounded-3xl ">
                  <img
                    src="/images/aim.png"
                    className="sm:h-2 lg:h-[690px]"
                    style={{ height: "300px" }}
                    alt="man aims at a target"
                  />
                </div>
                <div className="bg-blue-100 rounded-3xl ">
                  <img
                    src="/images/Question-image-transparent.png"
                    className="sm:h-22 lg:h-[690px]"
                    style={{ height: "300px" }}
                    alt="man in question"
                  />
                </div>
              </div>

              <div className="">
                
                <div className="h-fit p-4 mt-4">
                  <NavLink to='/service'><button className="bg-[#4244E6] w-[150px] text-white mx-56 lg:mx-auto lg:my-8 lg:min-h16 lg:w-80 lg:text-2xl">View Menu 🔧</button></NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HomePage;
