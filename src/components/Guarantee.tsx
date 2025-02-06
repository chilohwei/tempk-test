import { FunctionComponent } from "react";

export type GuaranteeType = {
  className?: string;
};

const Guarantee: FunctionComponent<GuaranteeType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-seagreen flex flex-row items-end justify-center pt-[3.625rem] pb-[3.687rem] pl-[22.5rem] pr-[4.937rem] box-border relative gap-[5rem] max-w-full z-[2] text-left text-[2rem] text-white font-roboto mq925:gap-[1.25rem] mq925:pl-[5.625rem] mq925:box-border mq1350:gap-[2.5rem] mq1350:pl-[11.25rem] mq1350:pr-[2.438rem] mq1350:box-border mq1800:flex-wrap ${className}`}
    >
      <div className="h-[15rem] w-[120rem] relative bg-seagreen hidden max-w-full z-[0]" />
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] min-w-[45.563rem] max-w-full mq1350:min-w-full">
        <h1 className="m-0 relative text-inherit leading-[160%] font-bold font-[inherit] z-[3] mq450:text-[1.188rem] mq450:leading-[1.938rem] mq925:text-[1.625rem] mq925:leading-[2.563rem]">
          100% Satisfaction Guarantee or Your Money Back + 30 Day No Hassle
          Returns
        </h1>
        <div className="relative text-[1.25rem] leading-[160%] z-[3] mq450:text-[1rem] mq450:leading-[1.625rem]">
          We believe you'll love your Oodie, just like our 3.5 millions+
          customers.In case you aren't satisfied, our returns are easy and 100%
          free!
        </div>
      </div>
      <div className="h-[6.313rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.312rem] box-border">
        <div className="flex-1 rounded-lg border-white border-[2px] border-solid flex flex-row items-start justify-start pt-[0.75rem] pb-[0.687rem] pl-[3.437rem] pr-[3.062rem] gap-[1.25rem] z-[3] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
          <div className="h-[5rem] w-[17.5rem] relative rounded-lg border-white border-[2px] border-solid box-border hidden" />
          <b className="relative leading-[160%] z-[1] mq450:text-[1.188rem] mq450:leading-[1.938rem] mq925:text-[1.625rem] mq925:leading-[2.563rem]">
            Buy Now
          </b>
          <div className="flex flex-col items-start justify-start pt-[0.937rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[1.5rem] h-[1.206rem] relative object-contain z-[1]"
              alt=""
              src="/group-120@2x.png"
            />
          </div>
        </div>
      </div>
      <img
        className="h-[11rem] w-[11.031rem] absolute !m-[0] bottom-[1.938rem] left-[6.563rem] object-contain z-[4]"
        loading="lazy"
        alt=""
        src="/20250102-141334-1-1-2@2x.png"
      />
    </section>
  );
};

export default Guarantee;
