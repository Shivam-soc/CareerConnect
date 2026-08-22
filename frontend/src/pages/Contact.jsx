import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50">

        {/* Hero */}

        <section className="border-b border-slate-200 bg-white">

          <div className="mx-auto max-w-7xl px-6 py-20 text-center">

            <span className="rounded-full bg-[#E8F7F3] px-4 py-2 text-sm font-medium text-[#2E8B78]">
              Contact Us
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-900">
              We'd Love to Hear From You
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Have questions, feedback, or partnership inquiries? Our team is
              always ready to help you.
            </p>

          </div>

        </section>

        {/* Contact Section */}

        <section className="mx-auto max-w-7xl px-6 py-20">

          <div className="grid gap-10 lg:grid-cols-3">

            {/* Left */}

            <div className="space-y-6">

              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-[#E8F7F3] p-3">

                    <Mail
                      className="text-[#2E8B78]"
                      size={22}
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-900">
                      Email
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      support@careerconnect.com
                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-[#E8F7F3] p-3">

                    <Phone
                      className="text-[#2E8B78]"
                      size={22}
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-900">
                      Phone
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      +91 98765 43210
                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-[#E8F7F3] p-3">

                    <MapPin
                      className="text-[#2E8B78]"
                      size={22}
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-900">
                      Office
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Pune, Maharashtra, India
                    </p>

                  </div>

                </div>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-[#E8F7F3] p-3">

                    <Clock
                      className="text-[#2E8B78]"
                      size={22}
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-900">
                      Working Hours
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Mon - Fri | 9:00 AM - 6:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Contact Form */}

            <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-8">

              <h2 className="text-2xl font-semibold text-slate-900">
                Send us a Message
              </h2>

              <p className="mt-2 text-slate-500">
                Fill out the form below and we'll get back to you soon.
              </p>

              <form className="mt-8 space-y-6">

                <div className="grid gap-6 md:grid-cols-2">

                  <div>

                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none transition focus:border-[#2E8B78]"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none transition focus:border-[#2E8B78]"
                    />

                  </div>

                </div>

                <div>

                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="h-12 w-full rounded-xl border border-slate-200 px-4 outline-none transition focus:border-[#2E8B78]"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full rounded-xl border border-slate-200 p-4 outline-none transition focus:border-[#2E8B78]"
                  />

                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-xl bg-[#2E8B78] px-6 py-3 font-medium text-white transition hover:opacity-90"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;