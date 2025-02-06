import { FunctionComponent } from "react";
import GroupComponent1 from "./GroupComponent1";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[7.437rem] box-border max-w-full text-center text-[3rem] text-white font-roboto mq925:pb-[4.813rem] mq925:box-border ${className}`}
    >
      <div className="flex-1 bg-darkslateblue-200 flex flex-col items-start justify-start py-[5rem] pl-[14.25rem] pr-[14.187rem] box-border gap-[5rem] max-w-full mq925:gap-[1.25rem] mq925:py-[3.25rem] mq925:pl-[3.563rem] mq925:pr-[3.5rem] mq925:box-border mq1350:gap-[2.5rem] mq1350:pl-[7.125rem] mq1350:pr-[7.063rem] mq1350:box-border">
        <div className="w-[120rem] h-[38.563rem] relative bg-darkslateblue-200 hidden max-w-full" />
        <h1 className="m-0 self-stretch relative text-inherit leading-[160%] font-bold font-[inherit] z-[1] mq450:text-[1.813rem] mq450:leading-[2.875rem] mq925:text-[2.375rem] mq925:leading-[3.813rem]">
          Tempk insulin Carrying Case is Trusted by Healthcare Professionals
        </h1>
        <div className="self-stretch flex flex-row items-start justify-center max-w-full text-left text-[1rem]">
          <div className="w-[75rem] flex flex-row items-start justify-center gap-[1.312rem] max-w-full mq1350:flex-wrap">
            <div className="flex-1 rounded-29xl bg-gray-200 border-gray-100 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-[2.5rem] pb-[3.25rem] pl-[2.5rem] pr-[1.25rem] gap-[1.343rem] min-w-[18.063rem] max-w-full z-[1]">
              <div className="w-[24.125rem] h-[18.75rem] relative rounded-29xl bg-gray-200 border-gray-100 border-[1px] border-solid box-border hidden max-w-full" />
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
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
                  src="/seriousdoctorwithcrossedarms-1@2x.png"
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
            <GroupComponent1 doctorPreparingConsult1="/doctorpreparingconsult-1@2x.png" />
            <GroupComponent1 doctorPreparingConsult1="/portraitmaledoctor-1@2x.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
