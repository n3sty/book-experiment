import { login, signup } from "@/app/dashboard/actions";

export default function LoginPage() {
  return (
    <>
      <div className="flex min-h-[80vh] text-base-content bg-base-100">
        <div className="p-6 mx-auto">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title">Join the club!</h2>
              <form>
                <label className="input input-bordered flex items-center gap-2 my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="grow"
                    placeholder="Email"
                    required
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="grow"
                    placeholder="Password"
                    required
                  />
                </label>
                <div className="flex flex-row w-full">
                  <button
                    formAction={login}
                    className="btn btn-primary hover:font-black mx-auto hover:text-4xl transition-all hover:btn-secondary"
                  >
                    Log in
                  </button>
                  <button
                    formAction={signup}
                    className="btn btn-secondary btn-outline hover:font-black mx-auto hover:text-4xl transition-all hover:btn-primary hover:btn-active"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
