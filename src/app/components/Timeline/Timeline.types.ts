export type TimelineItemCommonProps = {
  title: string;
  start: string;
  end: string;
  type: "speaker" | "icon";
};

export type TimelineItemConditionalProps =
  | {
      profile: string;
      speaker: string;
      link: string;
      type: "speaker";
    }
  | {
      color?: string;
      icon: string;
      type: "icon";
    };

export type TimelineItemType = TimelineItemCommonProps &
  TimelineItemConditionalProps;
