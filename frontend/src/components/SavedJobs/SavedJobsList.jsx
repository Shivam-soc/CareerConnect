import SavedJobCard from "./SavedJobCard";

function SavedJobsList({ jobs }) {
  return (
    <section>

      {jobs.length > 0 ? (

        <div className="space-y-5">

          {jobs.map((job) => (

            <SavedJobCard
              key={job.id}
              job={job}
            />

          ))}

        </div>

      ) : (

        <div
          className="
            rounded-2xl
            border
            border-dashed
            border-slate-300
            bg-white
            px-8
            py-16
            text-center
          "
        >

          <h3 className="text-xl font-semibold text-slate-900">
            No Saved Jobs
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Save jobs you're interested in and they'll appear here.
          </p>

        </div>

      )}

    </section>
  );
}

export default SavedJobsList;