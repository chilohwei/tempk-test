import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent4 from "./FrameComponent4";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[7.5rem] box-border max-w-full text-center text-[1rem] text-midnightblue-100 font-roboto mq450:pb-[3.188rem] mq450:box-border mq925:pb-[4.875rem] mq925:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq925:gap-[1.25rem]">
        <FrameComponent1
          frameDivPadding="0rem 1.687rem 0rem 1.75rem"
          frameDivAlignSelf="stretch"
          videosPostedByContainerTextAlign="center"
          videosPostedByContainerFlex="1"
          videosPostedBy="Popular "
          socialMediaAccounts="products"
          discoverUnmatchedPortability="Insulin Coolers and Bags Tailored to Your Needs"
        />
        <div className="w-[74.188rem] flex flex-row items-start justify-start py-[0rem] px-[3.187rem] box-border max-w-full mq1350:pl-[1.563rem] mq1350:pr-[1.563rem] mq1350:box-border">
          <div className="flex-1 flex flex-row items-start justify-center gap-[0.937rem] max-w-full mq1350:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.312rem] box-border min-w-[12.563rem] max-w-[12.813rem]">
              <div className="self-stretch h-[3rem] rounded-3xl border-midnightblue-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.562rem] pl-[1.875rem] pr-[1.687rem]">
                <div className="h-[3rem] w-[12.5rem] relative rounded-3xl border-midnightblue-100 border-[1px] border-solid box-border hidden" />
                <b className="flex-1 relative leading-[160%] z-[1]">
                  large Insulin Cooler
                </b>
              </div>
            </div>
            <div className="flex-[0.9756] flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.625rem] box-border min-w-[12.875rem] max-w-[13.125rem] text-white mq450:flex-1">
              <div className="self-stretch rounded-3xl bg-midnightblue-100 flex flex-row items-start justify-start py-[0.687rem] pl-[1.125rem] pr-[1rem]">
                <div className="h-[3rem] w-[12.5rem] relative rounded-3xl bg-midnightblue-100 hidden" />
                <b className="flex-1 relative leading-[160%] z-[1]">
                  Portable Insulin Cooler
                </b>
              </div>
            </div>
            <div className="flex-[0.7692] rounded-3xl border-midnightblue-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.562rem] pl-[1.625rem] pr-[1.375rem] min-w-[12.25rem] max-w-[12.5rem] min-h-[3rem] mq450:flex-1">
              <div className="h-[3rem] w-[12.5rem] relative rounded-3xl border-midnightblue-100 border-[1px] border-solid box-border hidden" />
              <b className="flex-1 relative leading-[160%] z-[1]">
                Compact Insulin Bag
              </b>
            </div>
            <div className="flex-[0.9756] flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.625rem] box-border min-w-[12.875rem] max-w-[13.125rem] mq450:flex-1">
              <div className="self-stretch h-[3rem] rounded-3xl border-midnightblue-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.562rem] pl-[1.75rem] pr-[1.5rem]">
                <div className="h-[3rem] w-[12.5rem] relative rounded-3xl border-midnightblue-100 border-[1px] border-solid box-border hidden" />
                <b className="flex-1 relative leading-[160%] z-[1]">
                  Protable Insulin Bag
                </b>
              </div>
            </div>
            <div className="flex-[0.8667] rounded-3xl border-midnightblue-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.562rem] pl-[1rem] pr-[0.812rem] min-w-[12.25rem] max-w-[12.5rem] min-h-[3rem] mq450:flex-1">
              <div className="h-[3rem] w-[12.5rem] relative rounded-3xl border-midnightblue-100 border-[1px] border-solid box-border hidden" />
              <b className="flex-1 relative leading-[160%] z-[1]">
                Expandable Insulin Bag
              </b>
            </div>
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[1.312rem] max-w-full grid-cols-[repeat(3,_minmax(289px,_1fr))] text-right text-white mq925:grid-cols-[minmax(289px,_1fr)] mq1350:justify-center mq1350:grid-cols-[repeat(2,_minmax(289px,_502px))]">
          <div className="h-[29.563rem] flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
            <div className="self-stretch flex-1 rounded-xl flex flex-row items-start justify-end py-[1.812rem] px-[0rem] box-border relative bg-[url('/public/-884692111-image2-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
              <img
                className="h-[24.125rem] w-[24.125rem] relative rounded-xl object-cover hidden max-w-full z-[0]"
                alt=""
                src="/-884692111-image2-1@2x.png"
              />
              <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-gray-300 z-[1]" />
              <div className="w-[9.438rem] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-orange flex flex-row items-start justify-start py-[0.312rem] px-[0.375rem] box-border gap-[0.5rem] z-[2]">
                <div className="h-[2.25rem] w-[9.438rem] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-orange hidden" />
                <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative z-[1]"
                    alt=""
                    src="/group-199.svg"
                  />
                </div>
                <div className="relative leading-[160%] font-semibold [text-shadow:1px_0_0_#ffab00,_0_1px_0_#ffab00,_-1px_0_0_#ffab00,_0_-1px_0_#ffab00] z-[1]">
                  #1 Best Seller
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.187rem] text-left text-[1.5rem] text-mediumslateblue-100">
              <div className="self-stretch flex flex-row items-start justify-start gap-[0.875rem] mq450:flex-wrap">
                <h3 className="m-0 relative text-inherit leading-[160%] font-medium font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.938rem]">
                  Portable Insulin Cooler
                </h3>
                <div className="relative [text-decoration:underline] leading-[160%] font-medium text-right inline-block min-w-[7.938rem] mq450:text-[1.188rem] mq450:leading-[1.938rem]">
                  $1,299 USD
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[1rem] text-right text-[1rem] text-midnightblue-300">
                <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.35rem]">
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
                      className="h-[1rem] w-[1.044rem] relative"
                      alt=""
                      src="/group-125.svg"
                    />
                  </div>
                </div>
                <div className="relative leading-[160%] font-medium inline-block min-w-[5.813rem]">
                  842+ Review
                </div>
              </div>
            </div>
          </div>
          <FrameComponent4
            image22="/-884692111-image2-1@2x.png"
            bestSeller="#2 Best Seller"
          />
          <FrameComponent4
            frameDivBackgroundImage="url('/-884692111-image2-1@2x.png')"
            image22="/-884692111-image2-1@2x.png"
            bestSeller="#3 Best Seller"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent10;
