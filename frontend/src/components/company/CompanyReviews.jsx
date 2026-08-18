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
    <section className="rounded-3xl bg-white p-8 shadow-sm">

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
            className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:shadow-lg"
          >

            <div className="flex items-center gap-4">

              <FaUserCircle className="text-5xl text-blue-600" />

              <div>

                <h3 className="text-xl font-semibold">
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

            <p className="mt-5 leading-7 text-slate-600">
              "{review.review}"
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CompanyReviews;