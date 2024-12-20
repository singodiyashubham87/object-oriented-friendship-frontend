const Register = () => {
  return (
    <div className="font-primary w-full min-h-screen flex justify-center items-center bg-kali bg-blend-darken">
      <div className="bg-secondary-dark-80 border-2 border-primary-silver min-w-[400px]  w-1/3 max-w-[466px] rounded-custom-s">
        <div className="w-full px-10 py-12 flex flex-col items-center gap-4">
          <img
            src="/public/images/oof-logo.png"
            alt="logo"
            width={"148px"}
            height={"60px"}
          />
          <div className="inputs flex flex-col gap-4 my-4 w-full">
            <input
              type="email"
              placeholder="EMAIL"
              className="bg-transparent text-secondary-silver font-semibold text-s border-2 border-primary-silver p-2 pl-5 w-full rounded-custom-xs outline-none"
            />
            <input
              type="password"
              placeholder="PASSWORD"
              className="bg-transparent text-secondary-silver font-semibold text-s border-2 border-primary-silver p-2 pl-5 w-full rounded-custom-xs outline-none"
            />
            <input
              type="password"
              placeholder="CONFIRM PASSWORD"
              className="bg-transparent text-secondary-silver font-semibold text-s border-2 border-primary-silver p-2 pl-5 w-full rounded-custom-xs outline-none"
            />
            <input
              type="text"
              placeholder="FULL NAME"
              className="bg-transparent text-secondary-silver font-semibold text-s border-2 border-primary-silver p-2 pl-5 w-full rounded-custom-xs outline-none"
            />
          </div>
          <button className="bg-primary-silver w-full text-secondary-dark text-md uppercase font-semibold py-2 rounded-custom-xs border-2 border-primary-dark hover:border-primary-silver hover:text-primary-silver hover:bg-secondary-dark">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
