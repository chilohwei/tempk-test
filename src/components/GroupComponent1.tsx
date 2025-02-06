import { FunctionComponent } from "react";

export type GroupComponent1Type = {
  className?: string;
  doctorPreparingConsult1?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  doctorPreparingConsult1,
}) => {
  return (
    <div
      className={`flex-1 rounded-29xl bg-gray-200 border-gray-100 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[2.5rem] pb-[3.25rem] pl-[2.5rem] pr-[1.25rem] gap-[1.343rem] min-w-[18.063rem] max-w-full z-[1] text-left text-[1rem] text-white font-roboto ${className}`}
    >
      <div className="w-[24.125rem] h-[18.75rem] relative rounded-29xl bg-gray-200 border-gray-100 border-[1px] border-solid box-border hidden max-w-full" />
      <div className="flex flex-row items-start justify-start gap-[0.468rem]">
        <img
          className="h-[1.438rem] w-[1.5rem] relative z-[1]"
          alt=""
          src="/vector-20.svg"
        />
        <img
          className="h-[1.438rem] w-[1.5rem] relative z-[1]"
          alt=""
          src="/vector-20.svg"
        />
        <img
          className="h-[1.438rem] w-[1.5rem] relative z-[1]"
          alt=""
          src="/vector-20.svg"
        />
        <img
          className="h-[1.438rem] w-[1.5rem] relative z-[1]"
          alt=""
          src="/vector-20.svg"
        />
        <img
          className="h-[1.438rem] w-[1.625rem] relative z-[1]"
          loading="lazy"
          alt=""
          src="/group-125-4.svg"
        />
      </div>
      <div className="w-[19.125rem] relative leading-[160%] inline-block z-[1]">
        <p className="m-0">{`Former Director of Device Evaluation at the FDA , Senior VP Global Regulatory `}</p>
        <p className="m-0">affairsat Medtronic.</p>
      </div>
      <div className="flex flex-row items-start justify-start gap-[1.125rem] text-[1.25rem] mq450:flex-wrap">
        <img
          className="h-[3.75rem] w-[3.75rem] relative rounded-11xl object-cover z-[1]"
          loading="lazy"
          alt=""
          src={doctorPreparingConsult1}
        />
        <div className="flex flex-col items-start justify-start">
          <div className="relative leading-[160%] font-extrabold z-[1] mq450:text-[1rem] mq450:leading-[1.625rem]">
            SUSAN ALPERT
          </div>
          <div className="relative text-[0.875rem] leading-[160%] z-[1]">
            Chief Regulatory Advisor
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
