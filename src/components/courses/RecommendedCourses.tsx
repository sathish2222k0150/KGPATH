import { useRef, useState } from "react";
import { coursesData } from "../Data/coursesData";
import { Link } from "react-router-dom";

export default function RecommendedCourses() {
  const recommended = coursesData.filter((c) => c.popular || c.new).slice(0, 6);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (el) {
      const cardWidth =
        el.firstChild instanceof HTMLElement ? el.firstChild.offsetWidth + 16 : 300;
      const index = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (el) {
      const cardWidth =
        el.firstChild instanceof HTMLElement ? el.firstChild.offsetWidth + 16 : 300;
      el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full mt-10 mb-12 bg-white ">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        You May Also Like
      </h2>

      {/* Carousel Scroll Area */}
     <div className="max-w-6xl mx-auto">
  <div
    ref={scrollRef}
    onScroll={handleScroll}
    style={{ scrollbarWidth: "none" }}
    className="flex space-x-10 overflow-x-auto px-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
  >
    {recommended.map((course) => (
      <div
  key={course.id}
  className="group relative snap-center min-w-[280px] sm:min-w-[300px] md:min-w-[320px] bg-white rounded-xl p-4 shadow-md flex-shrink-0 overflow-hidden"
>
  <img
    src={course.image}
    alt={course.title}
    className="w-full h-32 object-cover rounded-lg"
  />
  <h5 className="mt-3 font-semibold text-base text-gray-900 truncate">
    {course.title}
  </h5>
  <p className="text-orange-600 font-bold text-sm">{course.fee}</p>
  <p className="text-sm text-gray-700 mt-1 truncate">{course.eligibility}</p>
  <p className="text-xs text-gray-500">{course.mode}</p>
  <span className="inline-block mt-1 text-[11px] text-blue-600 font-medium">
    {course.category}
  </span>

  {/* View Button Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
    <Link
        to={`/courses/${course.id}`}
        className="px-4 py-2 bg-white text-teal-700 font-semibold text-sm rounded-md shadow hover:bg-teal-600 hover:text-white transition"
      >
      View
    </Link>
  </div>
  </div>
    ))}
  </div>
</div>


      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2 mb-6">
        {Array.from({ length: Math.ceil(recommended.length - 2) }).map((_, i) => (
            <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === i ? "bg-teal-600" : "bg-gray-300"
            }`}
            ></button>
        ))}
        </div>
    </section>
  );
}
