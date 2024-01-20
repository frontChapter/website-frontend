import { RiFlagLine } from "react-icons/ri";

export default function ConferenceLocation() {
  return (
    <section className="py-6 lg:py-12">
      <div className="container space-y-16">
        {/* head */}
        <div className="flex flex-col items-center gap-2">
        <RiFlagLine className="size-12 fill-green-500 lg:size-16" />
          <h3 className="text-2xl font-bold lg:text-3xl">محل برگزاری همایش</h3>
        </div>
        {/* body */}
        <div>

        </div>
      </div>
    </section>
  );
}