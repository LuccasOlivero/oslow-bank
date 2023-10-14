import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";

function Login() {
  const location = useLocation();

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

  useEffect(() => {
    const isLoginPage = location.pathname === "/login";
    const body = document.querySelector("body");

    if (isLoginPage) {
      body.style.overflow = "hidden"; // hidden scrollbar
    }

    return () => (body.style.overflow = "auto"); // return to initial scroll
  }, [location]);

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      if (email && password) {
        login(email, password);
        setIsLoading(false);
      }
    }, 2000);
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <section className="relative w-full h-full bg-[#f2f2f2]">
        {isLoading && <Loader />}
        <NavBar />

        <div className="w-full h-screen flex justify-center items-center relative px-12">
          <div className="relative w-full max-w-[1300px] h-[28rem] bg-white grid  grid-cols-3 justify-between items-center rounded-[3rem] top-[-3rem] shadow-2xl p-12 gap-6 max-xl:gap-3 max-lg:grid-cols-6 max-md:p-6 max-md:h-[25rem]">
            <article className="p-6 bg-gray-900 rounded-[3rem] w-full h-full flex flex-col justify-evenly shadow-2xl col-start-1 col-end-3 max-lg:col-end-5 max-lg:hidden">
              <h2 className="text-4xl font-semibold text-white">
                Welcome to <span className="text-green-600">Oslo</span>: your
                passport to a modern financial future.
              </h2>
              <p className="text-xl font-base text-white">
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
              className="h-full flex justify-center items-center relative col-start-3 w-full max-lg:col-start-2 max-lg:col-end-6 max-md:col-start-1 max-md:col-end-7"
              onSubmit={handleSubmit}
            >
              <div
                className="w-[22rem] h-full bg-green-600 shadow-2xl
             rounded-[3rem] flex flex-col p-6 relative justify-evenly"
              >
                {error && <Error />}
                <p className="text-white relative text-3xl font-bold">
                  Email address
                  <span className="absolute w-[8rem] h-[3px] bg-gray-900 left-[0] top-[2.2rem]"></span>
                </p>
                <input
                  type="email"
                  className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none rounded-lg shadow-lg bg-[#f2f2f2]"
                  placeholder="admin@admin.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <p className="text-white relative text-3xl font-bold">
                  Password
                  <span className="absolute w-[5rem] h-[3px] bg-gray-900 left-[0] top-[2.2rem]"></span>
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none rounded-lg shadow-lg bg-[#f2f2f2]"
                  placeholder="admin"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                <div className="flex justify-end">
                  <button className=" p-3 bg-gray-900 w-full h-[3rem] rounded-2xl text-white font-bold hover:bg-gray-950 transition-all ease-in duration-300 hover:shadow-2xl">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
