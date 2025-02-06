import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[7.5rem] box-border max-w-full text-left text-[3rem] text-midnightblue-100 font-roboto mq925:pb-[3.188rem] mq925:box-border mq1350:pb-[4.875rem] mq1350:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
        <h1 className="m-0 relative text-inherit leading-[160%] font-bold font-[inherit] mq450:text-[1.813rem] mq450:leading-[2.875rem] mq925:text-[2.375rem] mq925:leading-[3.813rem]">
          <span>{`Tempk Insulin Cooler Travel Case: `}</span>
          <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#0066ff,_#003686)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Best Insulin Pouch for Travel
          </span>
        </h1>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[1.25rem]">
          <div className="flex flex-col items-start justify-start gap-[5rem] max-w-full mq925:gap-[1.25rem] mq1350:gap-[2.5rem]">
            <div className="flex flex-row items-start justify-start py-[0rem] px-[4.687rem] text-center text-midnightblue-300 mq1350:pl-[2.313rem] mq1350:pr-[2.313rem] mq1350:box-border">
              <div className="relative leading-[160%] mq450:text-[1rem] mq450:leading-[1.625rem]">
                <p className="m-0">{`Discover unmatched portability with the Tempk Insulin Cooler Travel Case, the best insulin travel case with `}</p>
                <p className="m-0">
                  advanced cooling methods, sleek design, and large capacity.
                  Keep your medications chilled effortlessly on any journey!
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem] max-w-full text-[1.5rem]">
              <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq1350:flex-wrap mq1350:justify-center">
                <h3 className="m-0 relative text-inherit leading-[160%] font-extrabold font-[inherit] text-mediumslateblue-100 inline-block max-w-full mq450:text-[1.188rem] mq450:leading-[1.938rem]">
                  Advanced cooling performance
                </h3>
                <h3 className="m-0 relative text-inherit leading-[160%] font-medium font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.938rem]">
                  Large Capacity Design
                </h3>
                <h3 className="m-0 relative text-inherit leading-[160%] font-medium font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.938rem]">
                  Travel Compatibility
                </h3>
                <h3 className="m-0 relative text-inherit leading-[160%] font-medium font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.938rem]">
                  Ease of Use
                </h3>
              </div>
              <div className="self-stretch h-[0.125rem] relative rounded-sm bg-whitesmoke-200">
                <div className="absolute top-[0rem] left-[0rem] rounded-sm bg-whitesmoke-200 w-full h-full hidden" />
                <div className="absolute top-[0rem] left-[0rem] rounded-sm bg-mediumslateblue-100 w-[21.125rem] h-[0.125rem] z-[1]" />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[2.5rem] max-w-full text-[2rem] mq925:gap-[1.25rem] mq1350:flex-wrap">
              <div className="w-[35rem] flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq925:gap-[1.25rem] mq925:min-w-full mq1350:flex-1">
                <h1 className="m-0 relative text-inherit leading-[160%] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.938rem] mq925:text-[1.625rem] mq925:leading-[2.563rem]">
                  Superior Cooling Efficiency with Premium Materials and
                  Technology
                </h1>
                <FrameComponent
                  prop="/-1.svg"
                  highQualityMaterials="High-Quality Materials: "
                  craftedWithDurableStainless="Crafted with durable stainless steel, the cooler is designed for longevity, ensuring resistance to wear and tear during travel and daily use."
                />
                <FrameComponent
                  frameDivPadding="0rem 0rem 1.5rem"
                  prop="/-1-1.svg"
                  highQualityMaterials="Advanced Insulation Technology "
                  craftedWithDurableStainless="Incorporates vacuum insulation technology to create an effective barrier against external heat, maintaining a stable internal temperature."
                />
                <FrameComponent
                  frameDivPadding="unset"
                  prop="/-1-2.svg"
                  highQualityMaterials="Superior Cooling Capacity: "
                  craftedWithDurableStainless="Equipped with large-capacity gel ice packs, it can keep medications safely cooled at 2-26°C for up to 52 hours, meeting the demands of long trips and unpredictable conditions."
                />
              </div>
              <img
                className="h-[37.813rem] flex-1 relative max-w-full overflow-hidden object-cover min-w-[24.375rem] mq925:min-w-full"
                loading="lazy"
                alt=""
                src="/image-40@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
