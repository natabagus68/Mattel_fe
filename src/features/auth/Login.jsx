import React, { useState } from "react";
import { AppNameText, KeyIcon } from "../../common/components/icons";
import { Input } from "../../common/components/input/Input";
import appLogo from "./../../assets/app-logo.png";
import {
  useGetAuthenticatedUserQuery,
  // useLoginMutation,
} from "../../app/services/authService";
import { useLoginMutation } from "./authApiSlice.js";

export const Login = () => {
  // const [
  //   authenticate,
  //   { error: authenticateError, isLoading: authenticateLoading },
  // ] = useLoginMutation();
  const [
    authenticate,
    { error: authenticateError, isLoading: authenticateLoading },
  ] = useLoginMutation();
  const { data: auth, isLoading, isError } = useGetAuthenticatedUserQuery();
  const [form, setForm] = useState({
    email: "admin2@gmail.com",
    password: "password",
  });

  function onClick() {
    // console.log(form);
    authenticate(form);
  }
  return (
    <>
      <div className="hidden md:flex md:flex-[50%] bg-green-500 flex-col justify-center items-center p-10">
        <img className="mb-[38px]" src={appLogo} alt="" />
        <AppNameText />
      </div>
      <div className="flex-[50%] flex justify-center items-center md:p-10">
        {/*<form*/}
        {/*// onSubmit={(e) => {*/}
        {/*//   e.preventDefault();*/}
        {/*//   authenticate(form);*/}
        {/*// }}*/}
        {/*// >*/}
        <div className="bg-white shadow-[0px_0px_13px_rgba(4_67_50_0.15)] rounded-xl border-[1px] border-gray-100 py-[92px] px-10 md:px-[74px] md:w-[479px]">
          <div className=" font-bold text-green-500 text-4xl">
            Welcome back.
          </div>
          <div className=" text-gray-400 mb-[48px]">Log in to your account</div>
          <div className="relative mb-[25px]">
            <div className="absolute h-full flex items-center pl-3">
              <svg
                width={20}
                height={15}
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3333 0.417969C18.4571 0.420466 18.5746 0.443103 18.6919 0.498901C18.8129 0.556772 18.9194 0.643967 18.9999 0.751302C19.0527 0.829963 19.0404 0.806358 18.9999 0.751302C19.1079 0.895221 19.1666 1.07145 19.1666 1.2513C19.1663 1.20691 19.1644 1.18765 19.1666 1.2513V13.7513C19.1666 14.2115 18.7935 14.5846 18.3333 14.5846H1.66659C1.20635 14.5846 0.833252 14.2115 0.833252 13.7513V1.2513C0.833252 1.10211 0.873724 0.953975 0.949855 0.826027C1.105 0.564618 1.37371 0.423873 1.66659 0.417969H18.3333ZM17.4999 2.91797L10.4999 8.16797C10.2333 8.36797 9.87658 8.38797 9.59192 8.22797L9.49992 8.16797L2.49992 2.91797V12.918H17.4999V2.91797ZM4.16658 2.08464L9.99992 6.45964L15.8333 2.08464H4.16658Z"
                  fill="#5C5E61"
                />
              </svg>
            </div>
            <Input
              value={form.email}
              onChange={(e) =>
                setForm((form) => ({ ...form, email: e.target.value }))
              }
              type="email"
              className="pl-10 w-[225px]"
              placeholder="input your email"
            />
          </div>
          <div className="mb-[25px]">
            <div className="relative">
              <div className="absolute h-full flex items-center pl-3">
                <KeyIcon />
              </div>
              <Input
                value={form.password}
                onChange={(e) =>
                  setForm((form) => ({ ...form, password: e.target.value }))
                }
                type="password"
                className="pl-10 w-[225px]"
                placeholder="input password"
              />
            </div>
            {authenticateError && (
              <span className="text-red-700">
                {authenticateError?.data?.message}
              </span>
            )}
          </div>
          <button
            // type="submit"
            className="font-body font-bold bg-green-500 rounded text-white w-full py-2 px 5"
            disabled={authenticateLoading}
            onClick={onClick}
          >
            Login
          </button>
        </div>
        {/*</form>*/}
      </div>
    </>
  );
};
