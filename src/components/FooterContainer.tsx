import { FunctionComponent } from "react";

export type FooterContainerType = {
  className?: string;
};

const FooterContainer: FunctionComponent<FooterContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[117.563rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.25rem] text-white font-roboto ${className}`}
    >
      <div className="w-[85.063rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1350:flex-wrap">
        <div className="w-[28.625rem] flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[1.375rem]">
              <div className="relative font-semibold z-[1] mq450:text-[1rem]">
                Hero products
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem] text-[1rem]">
                <div className="relative z-[1]">PInsulin carrying ba</div>
                <div className="relative z-[1]">PInsulin carrying bag</div>
                <div className="relative z-[1]">PInsulin carrying bag</div>
                <div className="relative z-[1]">PInsulin carrying bag</div>
                <div className="relative z-[1]">PInsulin carrying bag</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1.375rem]">
              <div className="relative font-semibold z-[1] mq450:text-[1rem]">{`Help&Contact`}</div>
              <div className="flex flex-col items-start justify-start gap-[1.125rem] text-[1rem]">
                <div className="relative inline-block min-w-[6.813rem] z-[1]">
                  Support Center
                </div>
                <div className="relative inline-block min-w-[6.188rem] z-[1]">{`Refund Policy `}</div>
                <div className="relative z-[1]">Shipping Policy</div>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[4.25rem] z-[1]">
                  About US
                </a>
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[5.125rem] z-[1]">
                  Contant US
                </a>
                <div className="relative z-[1]">Quality Policy</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.25rem] pb-[0rem] pl-[0rem] pr-[0.312rem] box-border max-w-full">
          <div className="flex flex-col items-start justify-start gap-[1.437rem]">
            <div className="relative font-semibold z-[1] mq450:text-[1rem]">{`News & special offers`}</div>
            <div className="w-[19.063rem] rounded-lg border-whitesmoke-300 border-[1px] border-solid box-border flex flex-row items-start justify-between py-[0rem] pl-[0.687rem] pr-[0.125rem] gap-[1.25rem] z-[1] text-[0.875rem]">
              <div className="flex flex-col items-start justify-start pt-[0.937rem] px-[0rem] pb-[0rem]">
                <div className="relative">Enter Email</div>
              </div>
              <div className="h-[3rem] w-[19.063rem] relative rounded-lg border-whitesmoke-300 border-[1px] border-solid box-border hidden" />
              <div className="rounded-4xs bg-white flex flex-row items-start justify-start py-[1rem] pl-[1rem] pr-[0.937rem] z-[2] text-darkslateblue-200">
                <div className="h-[3rem] w-[5.375rem] relative rounded-4xs bg-white hidden" />
                <div className="relative font-medium inline-block min-w-[3.438rem] z-[3]">
                  SIGN UP
                </div>
              </div>
            </div>
            <div className="relative text-[1rem] z-[1]">{`Sign up to Get News, products, Offers & sales`}</div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[0.843rem] text-center text-[1.125rem] font-oswald">
          <div className="flex flex-row items-start justify-start py-[0rem] pl-[3.937rem] pr-[3.875rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
            <img
              className="h-[2.813rem] w-[8.5rem] relative z-[1]"
              alt=""
              src="/logo.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.187rem]">
            <div className="flex-1 relative tracking-[0.01em] z-[1]">
              Empowering Health Inspiring Freedom
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
            <img
              className="h-[2.063rem] w-[2.063rem] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/instagram.svg"
            />
            <img
              className="h-[2.063rem] w-[2.063rem] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/facebook.svg"
            />
            <img
              className="h-[2.063rem] w-[2.063rem] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/twitter.svg"
            />
            <img
              className="h-[2.063rem] w-[2.063rem] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/youtube.svg"
            />
            <img
              className="h-[2.063rem] w-[2.063rem] relative overflow-hidden shrink-0 object-cover z-[1]"
              alt=""
              src="/tik@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
