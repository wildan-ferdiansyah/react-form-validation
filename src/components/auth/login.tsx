import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { file } from "zod";

type FormLogin = {
  username: string;
  password: string;
};
export default function Login() {
  const { register, watch, handleSubmit } = useForm<FormLogin>();
  const onLogin: SubmitHandler<FormLogin> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-teal-500">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-zinc-700"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                {...register("username")}
                id="username"
                type="text"
                required
                autoComplete="username"
                className="block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-zinc-800 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-zinc-700"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                {...register("password")}
                id="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-zinc-800 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
}

const LoginWithController = () => {
  const { control, handleSubmit, formState: {errors} } = useForm<FormLogin>();
  const onLogin: SubmitHandler<FormLogin> = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-teal-500">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-zinc-700"
            >
              Username
            </label>
            <div className="mt-2">
              <Controller
                control={control}
                name="username"
                render={({ field }) => (
                  <input
                    {...field}
                    id="username"
                    type="text"
                    required
                    autoComplete="username"
                    className="block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-zinc-800 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                  />
                )}
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-zinc-700"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <Controller
                control={control}
                name="password"
                rules={{ 
                  required: "Password must be filled",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  }
                 }}
                render={({ field }) => (
                  <input
                    id="password"
                    {...field}
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-slate-100 px-3 py-1.5 text-base text-zinc-800 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"
                  />
                )}
              ></Controller>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
