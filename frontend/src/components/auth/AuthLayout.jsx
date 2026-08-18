function AuthLayout({ banner, children }) {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="mx-auto flex min-h-screen max-w-7xl">

        {/* Left Side */}

        <div className="hidden w-[45%] lg:flex">

          {banner}

        </div>

        {/* Right Side */}

        <div className="flex w-full items-center justify-center px-6 py-8 lg:w-[55%]">

          <div className="w-full max-w-[500px]">

            {children}

          </div>

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;