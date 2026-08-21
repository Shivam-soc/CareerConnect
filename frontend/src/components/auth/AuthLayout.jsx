import AuthBanner from "./AuthBanner";

function AuthLayout({
  children,
  width = "md",
}) {
  const formWidth = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
  };

  return (
    <main className="grid min-h-screen lg:grid-cols-2">

      {/* Left */}

      <section className="flex items-center justify-center bg-white px-8 py-10">

        <div className={`w-full ${formWidth[width]}`}>
          {children}
        </div>

      </section>

      {/* Right */}

      <section className="hidden lg:block">

        <AuthBanner />

      </section>

    </main>
  );
}

export default AuthLayout;