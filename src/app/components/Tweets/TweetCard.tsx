import { RiTwitterXFill } from 'react-icons/ri';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TweetCard = () => {
  return (
    <div className="flex w-[17rem] flex-col gap-3 rounded-xl bg-zinc-800 p-4">
      <div className="flex justify-between">
        <span>
          <RiTwitterXFill className="text-zinc-400" />{' '}
        </span>
        <div className="flex gap-2">
          <div
            className="flex flex-col items-start justify-end"
            style={{ direction: 'ltr' }}
          >
            <h4 className="text-base font-bold">Saleh Shojaei</h4>
            <a
              className="text-sm text-zinc-300"
              target="_blank"
              href="https://twitter.com/roxaleh"
            >
              @roxaleh
            </a>
          </div>

          {/* Avatar Component shadcn */}
          <Avatar>
            <AvatarImage src={""} alt="X | twitter avatar" />
            <AvatarFallback>avatar</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div>
        <p className="text-right text-sm font-normal text-zinc-300">
          رفقا می‌تونید با رزرو زودتر بلیط اقامتگاهتون، راحت‌تر توی همایش شرکت
          کنید #frontchapter1402
        </p>
      </div>
    </div>
  );
};

export default TweetCard;
