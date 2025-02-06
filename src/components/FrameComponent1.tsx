import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  className?: string;
  videosPostedBy?: string;
  socialMediaAccounts?: string;
  discoverUnmatchedPortability?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  videosPostedByContainerTextAlign?: CSSProperties["textAlign"];
  videosPostedByContainerFlex?: CSSProperties["flex"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  frameDivPadding,
  frameDivAlignSelf,
  videosPostedByContainerTextAlign,
  videosPostedByContainerFlex,
  videosPostedBy,
  socialMediaAccounts,
  discoverUnmatchedPortability,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivPadding, frameDivAlignSelf]);

  const videosPostedByContainerStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: videosPostedByContainerTextAlign,
      flex: videosPostedByContainerFlex,
    };
  }, [videosPostedByContainerTextAlign, videosPostedByContainerFlex]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.312rem] pr-[1.25rem] box-border max-w-full text-left text-[3rem] text-midnightblue-100 font-roboto ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
        <div
          className="flex flex-row items-start justify-start py-[0rem] px-[2.25rem]"
          style={frameDiv1Style}
        >
          <h1
            className="m-0 relative text-inherit leading-[160%] font-bold font-[inherit] mq450:text-[1.813rem] mq450:leading-[2.875rem] mq925:text-[2.375rem] mq925:leading-[3.813rem]"
            style={videosPostedByContainerStyle}
          >
            <span>{videosPostedBy}</span>
            <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#0066ff,_#003686)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              {socialMediaAccounts}
            </span>
          </h1>
        </div>
        <div className="self-stretch relative text-[1.25rem] leading-[160%] text-midnightblue-300 text-center mq450:text-[1rem] mq450:leading-[1.625rem]">
          {discoverUnmatchedPortability}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
