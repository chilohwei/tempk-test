import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;
  prop?: string;
  highQualityMaterials?: string;
  craftedWithDurableStainless?: string;

  /** Style props */
  frameDivPadding?: CSSProperties["padding"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  frameDivPadding,
  prop,
  highQualityMaterials,
  craftedWithDurableStainless,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
    };
  }, [frameDivPadding]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.5rem] gap-[0.5rem] text-left text-[1.5rem] text-midnightblue-100 font-roboto ${className}`}
      style={frameDivStyle}
    >
      <div className="flex flex-row items-start justify-start gap-[0.5rem]">
        <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[1.75rem] h-[1.75rem] relative overflow-hidden shrink-0"
            alt=""
            src={prop}
          />
        </div>
        <h3 className="m-0 relative text-inherit leading-[160%] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.938rem]">
          {highQualityMaterials}
        </h3>
      </div>
      <div className="relative text-[1rem] leading-[160%]">
        {craftedWithDurableStainless}
      </div>
    </div>
  );
};

export default FrameComponent;
