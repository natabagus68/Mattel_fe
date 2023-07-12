import React, { useState } from "react";
import { KeyIcon, OpenEyeIcon } from "../../common/components/icons";
import { Input } from "../../common/components/index.js";
import appLogo from "../../assets/app-logo.png";
import companyLogo from "../../assets/company-logo-no-background.png";
import { useLoginMutation } from "./authApiSlice.js";
import { ClosedEyeIcon } from "../../common/components/icons/index.js";

export const Login = () => {
  const [
    authenticate,
    { error: authenticateError, isLoading: authenticateLoading },
  ] = useLoginMutation();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const onClick = (e) => {
    e.preventDefault()
    authenticate(form);
  }

  return (
    <>
      <div className="hidden md:flex md:flex-[50%] bg-[#202325] flex-col justify-center items-center p-10">
        <img className="mb-[38px]" src={appLogo} alt="" />
        <div className="text-white-lightest text-[37px]">MATTEL APP</div>
      </div>
      <div className="flex-[50%] flex justify-center items-center md:p-10">
      <form onSubmit={onClick}>
        <div className="bg-white-lightest shadow-[0px_0px_13px_rgba(4_67_50_0.15)] rounded-xl border-[1px] border-gray-100 py-[92px] px-10 md:px-[74px] md:w-[479px]">
          <img className="w-[47px] h-[47px]" src={companyLogo} alt="" />
          <div className=" font-bold text-ink-base text-[34px]">
            Welcome back.
          </div>
          <div className=" text-ink-darker mb-[48px]">
            Log in to your account
          </div>
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
              className={`pl-10 w-[335px] ${
                authenticateError && "bg-error-light border-error-primary"
              }`}
              placeholder="input your email"
            />
          </div>
          <div className="mb-[25px]">
            <div className="relative">
              <div className="absolute h-full flex items-center pl-3">
                <KeyIcon />
              </div>
              <div
                className="absolute h-full flex right-3 items-center"
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
              >
                {showPassword ? <OpenEyeIcon /> : <ClosedEyeIcon />}
              </div>
              <Input
                value={form.password}
                onChange={(e) =>
                  setForm((form) => ({ ...form, password: e.target.value }))
                }
                type={showPassword ? "text" : "password"}
                className={`pl-10 w-[335px] ${
                  authenticateError && "bg-error-light border-error-primary"
                }`}
                placeholder="input password"
              />
            </div>
            {authenticateError && (
              <div className="flex flex-row gap-[8px] items-center my-[12px]">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_5326_792" fill="white">
                    <path d="M12 2.51367L1 21.5137H23L12 2.51367ZM12 6.51367L19.53 19.5137H4.47L12 6.51367ZM11 10.5137V14.5137H13V10.5137H11ZM11 16.5137V18.5137H13V16.5137" />
                  </mask>
                  <path
                    d="M12 2.51367L12.8654 2.01264L12 0.517808L11.1346 2.01264L12 2.51367ZM1 21.5137L0.134574 21.0126L-0.734447 22.5137H1V21.5137ZM23 21.5137V22.5137H24.7344L23.8654 21.0126L23 21.5137ZM12 6.51367L12.8653 6.01245L12 4.51854L11.1347 6.01245L12 6.51367ZM19.53 19.5137V20.5137H21.2649L20.3953 19.0125L19.53 19.5137ZM4.47 19.5137L3.60468 19.0125L2.73513 20.5137H4.47V19.5137ZM11 10.5137V9.51367H10V10.5137H11ZM11 14.5137H10V15.5137H11V14.5137ZM13 14.5137V15.5137H14V14.5137H13ZM13 10.5137H14V9.51367H13V10.5137ZM11 18.5137H10V19.5137H11V18.5137ZM13 18.5137V19.5137H14V18.5137H13ZM11.1346 2.01264L0.134574 21.0126L1.86543 22.0147L12.8654 3.01471L11.1346 2.01264ZM1 22.5137H23V20.5137H1V22.5137ZM23.8654 21.0126L12.8654 2.01264L11.1346 3.01471L22.1346 22.0147L23.8654 21.0126ZM11.1347 7.01489L18.6647 20.0149L20.3953 19.0125L12.8653 6.01245L11.1347 7.01489ZM19.53 18.5137H4.47V20.5137H19.53V18.5137ZM5.33532 20.0149L12.8653 7.01489L11.1347 6.01245L3.60468 19.0125L5.33532 20.0149ZM10 10.5137V14.5137H12V10.5137H10ZM11 15.5137H13V13.5137H11V15.5137ZM14 14.5137V10.5137H12V14.5137H14ZM13 9.51367H11V11.5137H13V9.51367ZM10 16.5137V18.5137H12V16.5137H10ZM11 19.5137H13V17.5137H11V19.5137ZM14 18.5137V16.5137H12V18.5137H14Z"
                    fill="#F04438"
                    mask="url(#path-1-inside-1_5326_792)"
                  />
                </svg>

                <span className="text-red-500">
                  {/*{authenticateError?.data?.message}*/}
                  Credential Invalid
                </span>
              </div>
            )}
          </div>
          <button
            type="submit"
            role="button"
            className="font-body font-bold bg-ink-base rounded text-white-lightest w-full py-2 px-5"
            disabled={authenticateLoading}
          >
            Login
          </button>
        </div>
        </form>
      </div>
    </>
  );
};
