import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent4Type = {
  className?: string;
  image22?: string;
  bestSeller?: string;

  /** Style props */
  frameDivBackgroundImage?: CSSProperties["backgroundImage"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  frameDivBackgroundImage,
  image22,
  bestSeller,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: frameDivBackgroundImage,
    };
  }, [frameDivBackgroundImage]);

  return (
    <div
      className={`h-[29.563rem] flex flex-col items-start justify-start gap-[1.25rem] max-w-full text-right text-[1rem] text-white font-roboto ${className}`}
    >
      <div
        className="self-stretch flex-1 rounded-xl flex flex-row items-start justify-end py-[1.812rem] px-[0rem] box-border bg-[url('/public/-884692111-image2-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full"
        style={frameDiv2Style}
      >
        <img
          className="h-[24.125rem] w-[24.125rem] relative rounded-xl object-cover hidden max-w-full"
          alt=""
          src={image22}
        />
        <div className="w-[9.438rem] rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-orange flex flex-row items-start justify-start py-[0.312rem] px-[0.375rem] box-border gap-[0.5rem] z-[1]">
          <div className="h-[2.25rem] w-[9.438rem] relative rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-orange hidden" />
          <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[1.5rem] h-[1.5rem] relative z-[1]"
              alt=""
              src="/group-199.svg"
            />
          </div>
          <div className="relative leading-[160%] font-semibold [text-shadow:1px_0_0_#ffab00,_0_1px_0_#ffab00,_-1px_0_0_#ffab00,_0_-1px_0_#ffab00] z-[1]">
            {bestSeller}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.187rem] text-left text-[1.5rem] text-midnightblue-100">
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
  );
};

export default FrameComponent4;
