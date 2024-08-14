import { useState } from "react";
import { useForm } from "react-hook-form";
import FormErrors from "../FormErrors";
import { useNavigate } from "react-router-dom";
import WrongCredentials from "../WrongCredentials";

// import styled from "styled-components";
// import Button from "../ui/Reuseable_Ui/Button";

// const RegisterSectionStyles = styled.fieldset({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: "15px 15px 0px 15px",
// });

// const DivSection = styled.div({
//   margin: " 5px",
//   lineHeight: "23px",
// });

// const InputStyle = styled.input({
//   width: "260px",
//   padding: "2px",
//   border: "1px solid #d2d2d2",
//   borderRadius: "3px",
// });

// const TextArea = styled.textarea({
//   padding: "1px",
//   border: "1px solid #d2d2d2",
//   borderRadius: "3px",
// });

// const LogIn = styled.div({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: "15px",
// });

//todo this is the register component

const RegisterAccount = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState("");
  const [admin, setAdmin] = useState(false);

  const navigate = useNavigate();

  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function handleClickLogin() {
    setShowLogin(true);
    reset();
  }

  function handleClickAdmin() {
    setAdmin(true);
    setShowLogin(true);
  }

  function handleSubmitLogin(data) {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!userData)
      setWrongCredentials(
        "You do not have an account yet. Please register your account"
      );
    else if (
      data.userEmail === userData.userEmail &&
      data.password === userData.password
    ) {
      navigate("/dashboard");
      setWrongCredentials("");

      //we then hide the dropdown
    } else {
      setWrongCredentials(
        "Wrong credentials. User email or password is incorrect"
      );
    }
  }

  function handleRegister({ userEmail, password, userNumber, firstName }) {
    const user = localStorage.getItem("userData");

    const data = { userEmail, password, userNumber, firstName };

    if (!user) {
      navigate("/dashboard");
      localStorage.setItem("userData", JSON.stringify(data));

      //now we need to hide the dropdown form
    } else {
      setShowLogin(true);
    }
  }

  return (
    <>
      {!showLogin ? (
        <form
          key="register"
          className="text-lg p-4 flex flex-col gap-4 "
          onSubmit={handleSubmit(handleRegister)}
        >
          <h1 className="text-center">Register Account</h1>
          <div className="grid grid-cols-[1fr_2fr_1fr]  items-center">
            <label htmlFor="firstName" className="capitalize ">
              first name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              {...register("firstName", {
                required: " Required field",
              })}
              className="ml-auto  focus:outline-none border-2 border-stone-200 rounded-md px-2 py-1  focus:border-red-200  w-full"
            />
            {errors?.firstName && (
              <FormErrors>{errors.firstName.message}</FormErrors>
            )}
          </div>

          <div className="grid grid-cols-[1fr_2fr_1fr]  items-center">
            <label htmlFor="lastName" className="capitalize ">
              last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="ml-auto  focus:outline-none border-2 border-stone-200 rounded-md px-2 py-1  focus:border-red-200  w-full"
            />
          </div>

          <div className="grid grid-cols-[1fr_2fr_1fr]  items-center">
            <label htmlFor="userEmail" className="capitalize ">
              Email
            </label>
            <input
              type="email"
              id="userEmail"
              name="email"
              {...register("userEmail", {
                required: "Required field",
              })}
              className="ml-auto focus:outline-none border-2 border-stone-200 rounded-md px-2 py-1  focus:border-red-200 w-full "
            />
            {errors?.userEmail && (
              <FormErrors>{errors.firstName.message}</FormErrors>
            )}
          </div>

          <div className="grid grid-cols-[1fr_2fr_1fr]  items-center">
            <label htmlFor="userNumber" className="capitalize ">
              Phone number
            </label>
            <input
              type="tel"
              id="userNumber"
              name="userNumber"
              {...register("userNumber", {
                required: "Required field",
              })}
              className="ml-auto focus:outline-none border-2 border-stone-200 rounded-md px-2 py-1  focus:border-red-200 w-full "
            />
            {errors?.userNumber && (
              <FormErrors>{errors.firstName.message}</FormErrors>
            )}
          </div>

          <div className="grid grid-cols-[1fr_2fr_1fr]  items-center">
            <label htmlFor="userPassword" className="capitalize ">
              password
            </label>
            <input
              type="password"
              id="userPassword"
              name="password"
              {...register("password", {
                required: "Required field",
              })}
              className="ml-auto focus:outline-none border-2 border-stone-200 rounded-md px-2 py-1  focus:border-red-200 w-full "
            />
            {errors?.password && (
              <FormErrors>{errors.firstName.message}</FormErrors>
            )}
          </div>

          <div>
            <span>Already have an account? </span>
            <span
              className="text-red-500 hover:underline cursor-pointer"
              onClick={handleClickLogin}
            >
              Log in
            </span>
            <br />
            <span>Dashboard log in: </span>
            <span
              className="text-green-600 hover:underline cursor-pointer"
              onClick={handleClickAdmin}
            >
              Admin only
            </span>
          </div>

          <button className="text-stone-100 bg-red-500 w-1/3 rounded-md">
            sign up
          </button>
        </form>
      ) : (
        <form
          key="login"
          className="text-lg p-4 flex flex-col gap-5 "
          onSubmit={handleSubmit(handleSubmitLogin)}
        >
          <h1 className="text-lg text-center font-bold">
            Log into your account
          </h1>
          <div className="grid grid-cols-[1fr_2fr_1fr] items-center ">
            <label htmlFor="userEmail" className="capitalize font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="userEmail"
              name="email"
              {...register("userEmail", {
                required: "Required field",
              })}
              className="ml-auto focus:outline-none border-2 border-stone-200 rounded-md px-2 py-1  focus:border-red-200  w-full"
            />
            {errors?.userEmail && (
              <FormErrors>{errors.userEmail.message}</FormErrors>
            )}
          </div>

          <div className="grid grid-cols-[1fr_2fr_1fr]  items-center">
            <label htmlFor="userPassword" className="capitalize font-semibold">
              password :
            </label>
            <input
              type="password"
              id="userPassword"
              name="password"
              {...register("password", {
                required: "Required field",
              })}
              className="ml-auto focus:outline-none border-2 border-stone-200 rounded-md px-2 py-1  focus:border-red-200 w-full"
            />
            {errors?.password && (
              <FormErrors>{errors.password.message}</FormErrors>
            )}
          </div>

          {/* //todo i have added this one field for admin, which is the state operation */}

          {admin && (
            <div className="grid grid-cols-[1fr_2fr_1fr]  items-center">
              <label
                htmlFor="userPassword"
                className="capitalize font-semibold"
              >
                State:
              </label>
              <input
                type="password"
                id="userPassword"
                name="password"
                {...register("password", {
                  required: "Required field",
                })}
                className="ml-auto focus:outline-none border-2 border-stone-200 rounded-md px-2 py-1  focus:border-red-200 w-full"
              />
              {errors?.password && (
                <FormErrors>{errors.password.message}</FormErrors>
              )}
            </div>
          )}

          {wrongCredentials && (
            <WrongCredentials>{wrongCredentials}</WrongCredentials>
          )}
          <button className="text-stone-100 bg-red-500 w-1/3">Log in</button>
        </form>
      )}
    </>
    // >>>>>>> 7f0fb741b90dc0e713df819053e057ef8f778a4e
  );
};

export default RegisterAccount;
