import { useState } from "react";
import { useSelector } from "react-redux";

const data2 = () => {
  return (
    <div>
      <div className="card glass w-96">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
      <div className="card glass w-96">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
      <div className="card glass w-96">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Home() {
  const { user } = useSelector((state) => state.user);
  const [data, setdata] = useState(false);
  console.log(user);
  return (
    <div className="mx-20 mt-10">
      <div>
        {user ? (
          <div>
            {/* <h1 className="text-3xl mb-2">Recipe</h1> */}
            <div className="">
            <div className="card glass w-full text-center">
                {/* <div className="card-actions justify-end p-2">
                  <button className="btn btn-square btn-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div> */}
                <figure>
                  <img
                    src={user.photoURL}
                    alt="car!"
                    className="w-96 h-96 object-cover"
                  />
                </figure>
                <div className="card-body text-center">
                  <h2 className=" text-3xl text-center">name: {user.displayName}</h2>
                  <p className="text-2xl">gmail: {user.email}</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full place-items-center">
            <h1 className="text-9xl text-slate-200 place-items-center justify-center m-auto top-40 absolute left-[450px]">
              No recipe
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;


// providerData[
// 0 {
// displayName :  "ha"
// email :  "a@gmail.com"
// phoneNumber :  null
// photoURL :  "https://picsum.photos/200/300"
// providerId :  "password"
// uid : "a@gmail.com"
// length:  1
// }]