import { FunctionComponent } from "react";

export type FrameComponent3Type = {
  className?: string;
  closeUpPhotoFriendlyFairHaired?: string;
  image79?: string;
  image77?: string;
  image78?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  closeUpPhotoFriendlyFairHaired,
  image79,
  image77,
  image78,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[11.25rem] max-w-full text-left text-[1rem] text-midnightblue-100 font-roboto mq450:gap-[1.375rem] mq925:gap-[2.813rem] mq1350:gap-[5.625rem] ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[1.25rem]">
        <img
          className="h-[5rem] w-[5rem] relative rounded-lg object-cover"
          loading="lazy"
          alt=""
          src={closeUpPhotoFriendlyFairHaired}
        />
        <div className="flex flex-col items-start justify-start">
          <div className="relative text-[1.25rem] leading-[160%] font-extrabold inline-block min-w-[7.063rem] mq450:text-[1rem] mq450:leading-[1.625rem]">
            Liana Nicole
          </div>
          <div className="relative leading-[160%] inline-block min-w-[5.438rem] z-[1]">
            Color：Blue
          </div>
          <div className="relative leading-[160%] text-midnightblue-300 z-[2]">
            2024 - 12 - 31
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.75rem] min-w-[32.813rem] max-w-full mq925:min-w-full">
        <div className="flex flex-row items-start justify-start gap-[1.25rem] max-w-full mq450:flex-wrap">
          <div className="relative leading-[200%] font-extrabold">
            This Cooler is well insulated and provides
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
            <div className="flex flex-row items-start justify-start gap-[0.325rem]">
              <img
                className="h-[1rem] w-[1.044rem] relative"
                alt=""
                src="/vector-4.svg"
              />
              <img
                className="h-[1rem] w-[1.044rem] relative"
                alt=""
                src="/vector-5.svg"
              />
              <img
                className="h-[1rem] w-[1.044rem] relative"
                alt=""
                src="/vector-6.svg"
              />
              <img
                className="h-[1rem] w-[1.044rem] relative"
                alt=""
                src="/vector-7.svg"
              />
              <img
                className="h-[1rem] w-[1.131rem] relative"
                alt=""
                src="/group-125-8.svg"
              />
            </div>
          </div>
        </div>
        <div className="relative leading-[200%]">
          This Cooler is well insulated and provides the necessary temperature
          for my insulin medication.I’m glad I decided to invest. It Has made my
          life just a little easier.Once the gel bottle gets to maximum coldness
          it lasts for several hours. Enough for a days work shift.I love its
          modern design. It resembles a water bottle but is heavier like a
          thermos.
        </div>
        <div className="flex flex-row items-start justify-start gap-[0.75rem]">
          <img
            className="h-[6.25rem] flex-1 relative max-w-full overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src={image79}
          />
          <img
            className="h-[6.25rem] flex-1 relative max-w-full overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src={image77}
          />
          <img
            className="h-[6.25rem] flex-1 relative max-w-full overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src={image78}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
