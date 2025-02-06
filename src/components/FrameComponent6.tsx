import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import GroupComponent from "./GroupComponent";
import FrameComponent2 from "./FrameComponent2";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[3.75rem] pb-[7.5rem] box-border max-w-full text-left text-[3rem] text-midnightblue-100 font-roboto mq925:pb-[2.063rem] mq925:box-border mq1350:pl-[1.875rem] mq1350:pr-[1.875rem] mq1350:pb-[3.188rem] mq1350:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[4.5rem] max-w-full mq450:gap-[1.125rem] mq925:gap-[2.25rem]">
        <FrameComponent1
          videosPostedBy="Videos posted by "
          socialMediaAccounts="social media accounts"
          discoverUnmatchedPortability="Discover unmatched portability with the Tempk Insulin Cooler Travel Case, the best insulin travel case with "
        />
        <div className="self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[3rem] box-border max-w-full mq450:pb-[1.25rem] mq450:box-border mq925:pb-[1.938rem] mq925:box-border">
          <div className="w-[75rem] flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq925:gap-[1.25rem]">
            <div className="self-stretch h-[41.875rem] relative">
              <img
                className="absolute top-[0rem] left-[0rem] rounded-xl w-full h-full object-cover"
                alt=""
                src="/20250106-141842-1@2x.png"
              />
              <img
                className="absolute top-[17.188rem] left-[33.75rem] w-[7.5rem] h-[7.5rem] z-[1]"
                loading="lazy"
                alt=""
                src="/group-179.svg"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
              <img
                className="h-[1rem] w-[8rem] relative"
                loading="lazy"
                alt=""
                src="/group-180.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl bg-lavender-100 flex flex-col items-start justify-start py-[5rem] px-[6.25rem] box-border gap-[5.062rem] max-w-full text-mediumslateblue-100 mq450:gap-[1.25rem] mq925:gap-[2.5rem] mq925:py-[2.125rem] mq925:px-[1.563rem] mq925:box-border mq1350:py-[3.25rem] mq1350:px-[3.125rem] mq1350:box-border">
          <div className="w-[112.5rem] h-[63.313rem] relative rounded-xl bg-lavender-100 hidden max-w-full" />
          <div className="flex flex-row items-start justify-start py-[0rem] pl-[31.875rem] pr-[31.812rem] box-border max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq925:pl-[7.938rem] mq925:pr-[7.938rem] mq925:box-border mq1350:pl-[15.938rem] mq1350:pr-[15.875rem] mq1350:box-border">
            <h1 className="m-0 relative text-inherit leading-[160%] font-bold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#0066ff,_#003686)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1] mq450:text-[1.813rem] mq450:leading-[2.875rem] mq925:text-[2.375rem] mq925:leading-[3.813rem]">
              What Make us Different?
            </h1>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[5rem] max-w-full text-[1.5rem] mq450:gap-[1.25rem] mq925:gap-[2.5rem]">
            <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[1.25rem] mq1800:flex-wrap">
              <div className="w-[37.5rem] flex flex-col items-start justify-start gap-[7.062rem] max-w-full mq450:gap-[1.75rem] mq925:gap-[3.5rem]">
                <GroupComponent />
                <FrameComponent2 />
              </div>
              <div className="h-[33.438rem] w-[14.938rem] relative text-[12.5rem] text-lavender-200">
                <div className="absolute top-[30.938rem] left-[0rem] [filter:blur(60px)] rounded-[50%] bg-darkslateblue-100 w-[13.5rem] h-[2.063rem] z-[1]" />
                <div className="absolute top-[30.25rem] left-[1.875rem] [filter:blur(8px)] rounded-[50%] bg-darkslateblue-400 w-[9.75rem] h-[2.75rem] z-[2]" />
                <div className="absolute top-[0rem] left-[0.25rem] w-[14.375rem] flex flex-row items-start justify-start">
                  <h1 className="!m-[0] absolute top-[5.313rem] left-[calc(50%_-_821px)] text-inherit leading-[160%] font-bold font-[inherit] whitespace-nowrap z-[1] mq450:text-[3.125rem] mq450:leading-[8rem] mq925:text-[5rem] mq925:leading-[12rem]">
                    Insulin Pen Cooler
                  </h1>
                  <img
                    className="h-[33.438rem] flex-1 relative max-w-full overflow-hidden object-cover z-[3]"
                    loading="lazy"
                    alt=""
                    src="/image-7@2x.png"
                  />
                </div>
              </div>
              <div className="w-[37.438rem] flex flex-col items-start justify-start gap-[7.062rem] max-w-full mq450:gap-[1.75rem] mq925:gap-[3.5rem]">
                <FrameComponent2 />
                <GroupComponent />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[41.25rem] text-[2rem] text-white mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq925:pl-[10.313rem] mq925:pr-[10.313rem] mq925:box-border mq1350:pl-[20.625rem] mq1350:pr-[20.625rem] mq1350:box-border">
              <div className="flex-1 rounded-21xl bg-midnightblue-100 flex flex-row items-start justify-start pt-[0.937rem] pb-[0.875rem] pl-[4.812rem] pr-[4.75rem] z-[1] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                <div className="h-[5rem] w-[17.5rem] relative rounded-21xl bg-midnightblue-100 hidden" />
                <b className="relative leading-[160%] z-[1]">Buy Now</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
