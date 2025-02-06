import { FunctionComponent } from "react";

export type Component1Type = {
  className?: string;
};

const Component1: FunctionComponent<Component1Type> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-darkslateblue-200 flex flex-row items-end justify-between py-[1.5rem] px-[2.5rem] box-border top-[0] z-[99] sticky gap-[1.25rem] max-w-full text-left text-[1.25rem] text-white font-roboto ${className}`}
    >
      <div className="h-[5rem] w-[120rem] relative bg-darkslateblue-200 hidden max-w-full" />
      <div className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.75rem]">
        <img
          className="self-stretch h-[2rem] relative max-w-full overflow-hidden shrink-0 z-[1]"
          alt=""
          src="/ic-logo.svg"
        />
      </div>
      <div className="w-[48.25rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.25rem] box-border max-w-full">
        <div className="self-stretch h-[1.438rem] relative">
          <a className="[text-decoration:none] absolute top-[0rem] left-[0rem] text-[inherit] inline-block w-[5.125rem] h-[1.438rem] min-w-[5.125rem] z-[1]">
            Products
          </a>
          <a className="[text-decoration:none] absolute top-[0rem] left-[9.063rem] text-[inherit] inline-block w-[5.375rem] h-[1.438rem] min-w-[5.375rem] z-[1]">
            Company
          </a>
          <a className="[text-decoration:none] absolute top-[0rem] left-[26.813rem] text-[inherit] inline-block w-[5.938rem] h-[1.438rem] min-w-[5.938rem] z-[1]">
            Resources
          </a>
          <a className="[text-decoration:none] absolute top-[0rem] left-[36.688rem] text-[inherit] inline-block w-[4.688rem] h-[1.438rem] min-w-[4.688rem] z-[1]">
            Reviews
          </a>
          <a className="[text-decoration:none] absolute top-[0rem] left-[45.313rem] text-[inherit] inline-block w-[3rem] h-[1.438rem] min-w-[3rem] z-[1]">
            Store
          </a>
          <a className="[text-decoration:none] absolute top-[0rem] left-[18.375rem] text-[inherit] inline-block w-[4.5rem] h-[1.438rem] min-w-[4.5rem] z-[1]">
            Support
          </a>
        </div>
      </div>
      <div className="w-[7.875rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.187rem] box-border">
        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
          <img
            className="h-[1.625rem] w-[1.625rem] relative object-cover z-[1]"
            alt=""
            src="/@2x.png"
          />
          <img
            className="h-[1.625rem] w-[1.625rem] relative z-[1]"
            alt=""
            src="/ic-account.svg"
          />
          <img
            className="h-[1.625rem] w-[1.625rem] relative z-[1]"
            alt=""
            src="/ic.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default Component1;
