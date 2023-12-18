import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";

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
    }, 2000);
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
          <div className="relative top-[-3rem] grid h-[28rem] w-full max-w-[1300px]  grid-cols-3 items-center justify-between gap-6 rounded-[3rem] bg-white p-12 shadow-2xl max-xl:gap-3 max-lg:grid-cols-6 max-md:h-[25rem] max-md:p-6">
            <article className="col-start-1 col-end-3 flex h-full w-full flex-col justify-evenly rounded-[3rem] bg-gray-900 p-6 shadow-2xl max-lg:col-end-5 max-lg:hidden">
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
