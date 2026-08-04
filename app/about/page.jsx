export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <section className="text-center">
          <h1 className="text-4xl font-bold">About KaarYab Afghanistan</h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            KaarYab Afghanistan is an opportunity finder platform designed to
            help people discover jobs, internships, scholarships, training
            programs, and other professional and educational opportunities.
          </p>
        </section>

        {/* Mission */}
        <section className="mt-16 rounded-xl border bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <h2 className="text-2xl font-bold">Our Mission</h2>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
            Our mission is to make useful opportunities easier to find and
            access. KaarYab brings different types of opportunities together in
            one simple platform so users can search, filter, save, and explore
            opportunities more easily.
          </p>
        </section>

        {/* What we offer */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">What We Offer</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">Jobs</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Find full-time, part-time, and contract job opportunities.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">Internships</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Discover internship opportunities for gaining professional
                experience.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">Scholarships</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Explore educational and scholarship opportunities for further
                study.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold">Training & Courses</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Find courses and training programs to improve your skills.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-16 rounded-xl border bg-blue-50 p-8 dark:border-gray-700 dark:bg-gray-800">
          <h2 className="text-2xl font-bold">Why KaarYab?</h2>

          <ul className="mt-5 space-y-3 text-gray-700 dark:text-gray-300">
            <li>✓ Easy opportunity search and filtering</li>
            <li>✓ Save opportunities for later</li>
            <li>✓ View detailed opportunity information</li>
            <li>✓ Simple and accessible user interface</li>
            <li>✓ Light and dark mode support</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
