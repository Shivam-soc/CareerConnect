import { FaStar, FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    rating: 5,
    review:
      "Amazing work culture with excellent learning opportunities. The team is supportive and the projects are challenging.",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Frontend Developer",
    rating: 4,
    review:
      "Great work-life balance and modern tech stack. Lots of opportunities to grow professionally.",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Cloud Engineer",
    rating: 5,
    review:
      "Excellent compensation, amazing colleagues, and one of the best places to build your career.",
  },
];

function CompanyReviews() {
  return (
    <section className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Employee Reviews
        </h2>

        <p className="mt-2 text-slate-500">
          Hear what employees say about working here.
        </p>
      </div>

      <div className="space-y-6">

        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-2xl border border-slate-200 bg-[#F8FAF8] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2E8B78] hover:bg-[#E8F7F3] hover:shadow-lg"
          >
            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                <FaUserCircle className="text-4xl text-[#2E8B78]" />
              </div>

              <div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {review.name}
                </h3>

                <p className="text-slate-500">
                  {review.role}
                </p>

                <div className="mt-2 flex gap-1">

                  {[...Array(review.rating)].map((_, index) => (
                    <FaStar
                      key={index}
                      className="text-yellow-400"
                    />
                  ))}

                </div>

              </div>

            </div>

            <p className="mt-5 leading-7 text-slate-600 italic">
              "{review.review}"
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CompanyReviews;