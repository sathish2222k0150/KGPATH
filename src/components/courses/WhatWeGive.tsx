// CourseBenefits.tsx
import { Course, coursesData } from "../Data/coursesData";

interface Props {
  courseId: number;
}

const CourseBenefits = ({ courseId }: Props) => {
  const course: Course | undefined = coursesData.find(c => c.id === courseId);
  if (!course) return null;

  const firstRowBenefits = course.Benefit.slice(0, 3);
  const secondRowBenefits = course.Benefit.slice(3);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 grid gap-12 lg:grid-cols-4">
        {/* Left Text Column */}
        <div>
          <span className="uppercase text-sm tracking-widest font-semibold text-orange-500">
            What we give
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900">
            What do You <br /> <span className="text-teal-600">Get From Us</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-xs">
           Expert mentors, industry certifications, hands-on projects, career support, mock interviews, real-world skills, community access.
          </p>
        </div>

        {/* First Row (3 columns next to text) */}
        <div className="lg:col-span-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {firstRowBenefits.map(({ id, icon: Icon, title, description, highlighted }) => (
            <div
              key={id}
              className={`rounded-xl p-6 border transition ${
                highlighted
                  ? "bg-orange-500 text-white shadow-lg border-orange-500"
                  : "bg-white text-gray-900 hover:shadow-md hover:shadow-teal-200"
              }`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
                  highlighted ? "bg-white/20" : "bg-orange-100"
                }`}
              >
                <Icon className={`h-6 w-6 ${highlighted ? "text-white" : "text-orange-500"}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Full Width */}
      {secondRowBenefits.length > 0 && (
  <div className="mx-auto max-w-7xl px-4 lg:px-6 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {secondRowBenefits.map(({ id, icon: Icon, title, description, highlighted }, index) => {
      const isCenterCard =
        secondRowBenefits.length >= 3 && index === 1; // middle card in 3-card row
      const applyHighlight = isCenterCard ? false : highlighted;

      return (
        <div
          key={id}
          className={`rounded-xl p-6 border transition ${
            applyHighlight
              ? "bg-orange-500 text-white shadow-lg border-orange-500"
              : "bg-white text-gray-900 hover:shadow-md hover:shadow-teal-200"
          }`}
        >
          <div
            className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
              applyHighlight ? "bg-white/20" : "bg-orange-100"
            }`}
          >
            <Icon
              className={`h-6 w-6 ${applyHighlight ? "text-white" : "text-orange-500"}`}
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      );
    })}
  </div>
)}
    </section>
  );
};


export default CourseBenefits;
