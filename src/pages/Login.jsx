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
      </section>
    </>
  );
}

export default Login;
