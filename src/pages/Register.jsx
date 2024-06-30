import React, { useEffect } from "react";
import { Form, Link, useActionData } from "react-router-dom";
import { FormInput } from "../components";
import useRegister from "../hooks/useRegister";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  let photoURL = formData.get("photoURL");
  let displayName = formData.get("displayName");
  return { email, password, photoURL, displayName };
};

function Register() {
  const userData = useActionData();

  const { register, isPending } = useRegister();
  useEffect(() => {
    if (userData) {
      register(
        userData.email,
        userData.password,
        userData.displayName,
        userData.photoURL
      );
    }
  }, [userData]);

  return (
    <div>
      <div className="grid grid-cols-1 min-h-screen relative">
        <video
          autoPlay
          muted
          loop
          className="w-full fixed bg-cover place-items-center bg-orange-50 bg-center h-screen object-cover"
        >
          <source src="/olovli.mp4" />
        </video>
        <div className="h-full  justify-center bg-slate-500 grid place-items-center bg-[url('./olovli.mp4')]">
          <div className="card bg-base-100 w-96 shadow-x1 p-8">
            <Form
              method="post"
              className="flex flex-col items-center gap-5"
              action=""
            >
              <h1 className="text-3x1 font-semibold">Register</h1>
              <FormInput type="text" label="displayName" name="displayName" />
              <FormInput type="url" label="photoURL" name="photoURL" />
              <FormInput type="email" label="email" name="email" />
              <FormInput type="password" label="password" name="password" />
              <div className="w-full">
                {!isPending && (
                  <button className="btn btn-primary btn-block">
                    Register
                  </button>
                )}
                {isPending && (
                  <button disabled className="btn btn-primary btn-block">
                    Loading...
                  </button>
                )}
              </div>
            </Form>
            <div className="w-full mt-5">
              <button className="btn btn-secondary btn-block">Google</button>
            </div>
            <h5 className=" mt-5 text-center">
            If you are registered:
            <Link className="ml-2 link link-hover link-primary capitalize" to="/login">Login</Link>
          </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
