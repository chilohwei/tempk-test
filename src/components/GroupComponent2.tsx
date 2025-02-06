import { FunctionComponent } from "react";

export type GroupComponent2Type = {
  className?: string;
};

const GroupComponent2: FunctionComponent<GroupComponent2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch bg-white flex flex-row items-start justify-start py-[1.437rem] px-[16.25rem] box-border gap-[32.812rem] max-w-full z-[2] text-left text-[0.875rem] text-white font-roboto mq450:gap-[4.125rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq925:gap-[8.188rem] mq925:pl-[4.063rem] mq925:pr-[4.063rem] mq925:box-border mq1350:gap-[16.375rem] mq1350:pl-[8.125rem] mq1350:pr-[8.125rem] mq1350:box-border mq1800:flex-wrap mq1800:justify-center ${className}`}
    >
      <div className="h-[5rem] w-[120rem] relative bg-white hidden opacity-[0] max-w-full" />
      <div className="flex flex-col items-start justify-start pt-[0.562rem] px-[0rem] pb-[0rem] box-border max-w-full">
        <div className="relative whitespace-pre-wrap z-[1]">
          Copyright © 2024 GitMind. All Rights Reserved. Terms | Privacy |
          Cookies Policy | Sedex Certification
        </div>
      </div>
      <div className="flex flex-row items-start justify-start pt-[0.437rem] pb-[0.5rem] pl-[0.625rem] pr-[0.5rem] relative gap-[0.5rem] z-[1] text-[1rem]">
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded bg-gray-400" />
        <div className="h-[1.188rem] w-[1.125rem] flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border">
          <img
            className="w-[1.125rem] h-[1.125rem] relative z-[1]"
            alt=""
            src="/group-56.svg"
          />
        </div>
        <a className="[text-decoration:none] h-[1.188rem] w-[3.063rem] relative tracking-[-0.04em] text-[inherit] inline-block shrink-0 z-[1]">
          English
        </a>
        <div className="h-[0.75rem] w-[0.438rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
          <img
            className="w-[0.438rem] h-[0.25rem] relative z-[1]"
            alt=""
            src="/mask-group.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent2;
