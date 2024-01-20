import {
  RiGithubLine,
  RiGlobalLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMicLine,
  RiTwitterXLine,
} from "react-icons/ri";

export default function Speakers() {
  return (
    <section className="py-6 lg:py-12">
      <div className="container">
        {/* head */}
        <div className="flex flex-col gap-3 items-center">
          <RiMicLine className="h-12 w-12 fill-orange-500" />
          <h3 className="text-2xl font-bold">سخنرانان همایش</h3>
        </div>
      </div>
    </section>
  );
}
