import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "./Timeline.styles.module.scss";
import { TimelineItemType } from "./Timeline.types";
import { confDayTimeline, nightTimeline } from "./data";

const TimelineItem = (props: TimelineItemType) => {
  const color = props.type === "icon" ? props?.color ?? "#3F3F46" : "#3F3F46";

  return (
    <div>
      <div>
        <div className={styles["box"]} style={{ border: `2px solid ${color}` }}>
          {props.type === "icon" ? (
            <div
              className="me-3 flex aspect-square w-8 items-center justify-center rounded"
              style={{ background: color }}
            >
              <Image src={props.icon} alt="icon" width={24} height={24} />
            </div>
          ) : (
            <div className="me-3">
              <Link href={props.link} target="_blank" rel="noopener noreferrer">
                <Image
                  className="rounded"
                  src={props.profile}
                  alt={props.speaker}
                  width={64}
                  height={64}
                />
              </Link>
            </div>
          )}
          <div className="flex-1">
            <span className="block">{props.title}</span>
            {props.type === "speaker" && (
              <Link href={props.link} target="_blank" rel="noopener noreferrer">
                <span className="block text-base font-light text-[#D4D4D8]">
                  {props.speaker}
                </span>
              </Link>
            )}
          </div>
          <div className="flex gap-4 text-[#D4D4D8]">
            <div>
              <div className="text-xs font-light">از</div>
              <div className="text-base font-normal">{props.start}</div>
            </div>
            <div>
              <div className="text-xs font-light">تا</div>
              <div className="text-base font-normal">{props.end}</div>
            </div>
          </div>
        </div>
        <div className="h-0.5 w-12" style={{ background: color }}></div>
        <div
          className="aspect-square h-6 rounded-full border-2 bg-[#18181B]"
          style={{ borderColor: color }}
        ></div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section className={clsx(styles["timeline"])} id="timeline">
      <div className="inline-block">
        <h2 className="rounded-lg border border-solid border-[#3F3F46] px-4 py-3">
          برنامه همایش
        </h2>
      </div>
      <div className={styles["items-container"]}>
        <div className="relative z-10 !flex justify-center py-8">
          <span className="inline-block rounded bg-[#22C55E] px-2 py-1 text-base font-normal text-[#18181B] shadow-[0px_25px_50px_-12px_rgba(17,24,39,0.25)]">
            ۰۹ اسفند ۱۴۰۲
          </span>
        </div>
        {nightTimeline.map((item, index) => (
          <TimelineItem {...item} key={index} />
        ))}
        <div className="relative z-10 !flex justify-center py-8">
          <span className="inline-block rounded bg-[#22C55E] px-2 py-1 text-base font-normal text-[#18181B] shadow-[0px_25px_50px_-12px_rgba(17,24,39,0.25)]">
            ۱۰ اسفند ۱۴۰۲
          </span>
        </div>
        {confDayTimeline.map((item, index) => (
          <TimelineItem {...item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
