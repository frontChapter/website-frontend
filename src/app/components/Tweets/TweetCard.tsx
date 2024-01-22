import { RiTwitterXFill } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Saleh from "@/assets/images/tweets/saleh.png";

const TweetCard = () => {
  return (
    <article className="flex w-[17rem] flex-col gap-3 rounded-xl bg-zinc-800 p-4">
      <header className="flex justify-between">
        <RiTwitterXFill className="text-2xl text-zinc-400" />
        <div className="flex gap-2">
          <div className="flex flex-col items-end">
            <h4 className="font-bold lg:text-lg">Saleh Shojaei</h4>
            <Link
              className="text-xs text-zinc-300"
              target="_blank"
              href="https://twitter.com/roxaleh"
            >
              @roxaleh
            </Link>
          </div>

          <Avatar>
            <AvatarImage src={Saleh.src} alt="X | twitter avatar" />
            <AvatarFallback>avatar</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div>
        <p className="whitespace-pre-wrap text-xs text-zinc-300 lg:text-sm">
          رفقا می‌تونید با رزرو زودتر بلیط اقامتگاهتون، راحت‌تر توی همایش شرکت
          کنید.
          <br />
          #front_chapter
        </p>
      </div>
    </article>
  );
};

export default TweetCard;
