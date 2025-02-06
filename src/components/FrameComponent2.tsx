import { FunctionComponent } from "react";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end max-w-full text-left text-[1.5rem] text-mediumslateblue-100 font-roboto ${className}`}
    >
      <div className="w-[25rem] shadow-[0px_40px_80px_12px_rgba(30,_48,_118,_0.25)] rounded-3xl [background:linear-gradient(180deg,_#fff,_#e3e9ff)] flex flex-col items-start justify-start pt-[2rem] pb-[2.5rem] pl-[2rem] pr-[1.25rem] box-border gap-[0.75rem] max-w-full z-[1]">
        <div className="w-[25rem] h-[12.5rem] relative shadow-[0px_40px_80px_12px_rgba(30,_48,_118,_0.25)] rounded-3xl [background:linear-gradient(180deg,_#fff,_#e3e9ff)] hidden max-w-full" />
        <div className="flex flex-row items-start justify-start gap-[0.75rem]">
          <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[1.444rem] h-[1.438rem] relative shrink-0 z-[1]"
              alt=""
              src="/group-150.svg"
            />
          </div>
          <h3 className="m-0 relative text-inherit leading-[160%] font-bold font-[inherit] shrink-0 z-[1] mq450:text-[1.188rem] mq450:leading-[1.938rem]">
            Superior Cooling Capacity
          </h3>
        </div>
        <div className="relative text-[1rem] leading-[160%] text-mediumslateblue-200 z-[1]">
          Equipped with large-capacity gel ice packs, it can keep insulin safely
          cooled at 2-26°C for up to 52 hours
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
