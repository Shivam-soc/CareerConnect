import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default Layout;