import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";

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

    if (email && password) login(email, password);
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <section className="relative w-full h-full bg-[#f2f2f2] ">
        <NavBar />

        <div className="w-full h-screen flex justify-center items-center relative">
          <div className="relative w-full max-w-[1300px] h-[33rem] bg-white flex justify-center items-center rounded-[3rem] top-[-3rem] shadow-2xl">
            <form
              className="w-full h-screen flex justify-center items-center"
              onSubmit={handleSubmit}
            >
              <div
                className="w-[22rem] h-[25rem] bg-green-600 shadow-2xl
          rounded-[3rem] flex flex-col p-6 relative justify-evenly"
              >
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

                {error && <Error />}

                <div className="flex justify-end">
                  <button className=" p-3 bg-gray-900 w-[13rem] h-[3rem] rounded-2xl text-white font-bold hover:bg-gray-950 transition-all ease-in duration-300 hover:shadow-2xl">
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
