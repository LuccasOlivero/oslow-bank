import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import NavBar from "../components/NavBar";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

function Login() {
  const {
    login,
    isAuthenticated,
    error,
    email,
    setEmail,
    password,
    setPassword,
    setIsLoading,
    isLoading,
  } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      if (email && password) {
        login(email, password);
        setIsLoading(false);
      }
    }, 1000);
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const inputStyles = `w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none rounded-lg shadow-lg bg-[#f2f2f2]`;

  return (
    <>
      <section className="relative h-full w-full bg-[#f2f2f2]">
        {isLoading && <Loader />}
        {error && <Error />}
        <NavBar />

        <div className="relative flex h-screen w-full items-center justify-center px-12">
          <div className="relative top-[-1rem] grid h-[34rem] w-full max-w-[1300px] grid-cols-3 items-center justify-between gap-4 rounded-[2rem] bg-white p-9 shadow-2xl max-xl:gap-3 max-lg:grid-cols-6 max-md:h-[25rem] max-md:p-6">
            <article className="col-start-1 col-end-3 flex h-full w-full flex-col justify-evenly rounded-[2rem] bg-gray-900 p-6 shadow-2xl max-lg:col-end-5 max-lg:hidden">
              <h2 className="text-4xl font-semibold text-white">
                Welcome to <span className="text-green-600">Oslo</span>: your
                passport to a modern financial future.
              </h2>
              <p className="font-base text-xl text-white">
                Join today for a modern banking experience like no other. With
                secure access to your accounts, innovative financial tools, and
                exclusive benefits,{" "}
                <strong className="text-green-600">Oslo</strong> is your gateway
                to a brighter financial future. Register now and start your
                journey to financial freedom. Welcome to the future of banking
                with <strong className="text-green-600">Oslo</strong>!
              </p>
            </article>
            <form
              className="relative col-start-3 flex h-full w-full items-center justify-center max-lg:col-start-2 max-lg:col-end-6 max-md:col-start-1 max-md:col-end-7"
              onSubmit={handleSubmit}
            >
              <div
                className="relative flex h-full w-[22rem]
             flex-col justify-evenly rounded-[2rem] bg-green-600 p-6 shadow-2xl"
              >
                <p className="relative text-3xl font-bold text-white">
                  Email address
                  <span className="absolute left-[0] top-[2.2rem] h-[3px] w-[8rem] bg-gray-900"></span>
                </p>
                <input
                  type="email"
                  className={inputStyles}
                  placeholder="admin@admin.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <p className="relative text-3xl font-bold text-white">
                  Password
                  <span className="absolute left-[0] top-[2.2rem] h-[3px] w-[5rem] bg-gray-900"></span>
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className={inputStyles}
                  placeholder="admin"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                <div className="flex justify-end">
                  <button className=" h-[3rem] w-full rounded-[1rem] bg-gray-900 p-3 font-bold text-white transition-all duration-300 ease-in hover:bg-gray-950 hover:shadow-2xl">
                    Login
                  </button>
                </div>
              </div>
            </form>
            <div className="col-span-3 flex h-full w-full rounded-[1rem] bg-slate-700 p-6 text-white">
              Accessing our online banking service signifies your agreement to
              the terms and conditions outlined by Oslo. Unauthorized use is
              prohibited. Please review our Privacy Policy and Electronic
              Communications Disclosure. Transaction fees and limits apply as
              per our Fee Schedule. For further details, consult our Online
              Banking Agreement. Contact customer support at 12341234234.
              Copyright © 2024 Oslo. All rights reserved.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
