import { FunctionComponent, useCallback } from "react";

export type MoreInfoType = {
  className?: string;
};

const MoreInfo: FunctionComponent<MoreInfoType> = ({ className = "" }) => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "block";
      const siblingDisplay = "block";

      const openClasses = ["grid-rows-[1fr]"];
      const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

      if (isOpen) {
        accContent?.classList.remove(...openClasses);
        accContent?.classList.add(...closeClasses);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          siblingAccContent?.classList.remove(...closeClasses);
          siblingAccContent?.classList.add(...openClasses);
        }, 1);
      }
    },
    []
  );

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[7.5rem] box-border max-w-full text-center text-[3rem] text-midnightblue-100 font-roboto mq925:pb-[3.188rem] mq925:box-border mq1350:pb-[4.875rem] mq1350:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[5rem] max-w-full mq925:gap-[1.25rem] mq1350:gap-[2.5rem]">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[2rem] pr-[1.937rem]">
          <h1 className="m-0 flex-1 relative text-inherit leading-[160%] font-bold font-[inherit] mq450:text-[1.813rem] mq450:leading-[2.875rem] mq925:text-[2.375rem] mq925:leading-[3.813rem]">
            More Info About Tempk Insulin Cooler Carrying Case
          </h1>
        </div>
        <div
          className="self-stretch flex flex-col items-end justify-start gap-[3.75rem] text-left text-[1.25rem] text-mediumslateblue-100"
          data-acc-group
        >
          <div className="w-[75rem] h-[37.5rem] flex flex-col items-start justify-start gap-[1.5rem]">
            <div
              className="w-[75rem] h-[7.313rem] relative [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
              data-acc-item
              data-acc-open
              data-acc-original
              data-acc-default-open
            >
              <div className="absolute top-[0rem] left-[0rem] w-full h-[5.25rem] flex flex-col items-center justify-start">
                <div
                  className="w-[75rem] h-[5.25rem] flex flex-row items-start justify-start gap-[1.5rem] cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-[5.25rem] flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
                    <b className="w-[72.063rem] h-[1.75rem] relative leading-[1.75rem] inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.375rem]">
                      Is there a free trial available?
                    </b>
                    <div className="w-[72rem] h-[3rem] relative text-[1rem] leading-[1.5rem] text-midnightblue-100 inline-block">
                      Yes, you can try us for free for 30 days. If you want,
                      we’ll provide you with a free, personalized 30-minute
                      onboarding call to get you up and running as soon as
                      possible.
                    </div>
                  </div>
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-11.svg"
                  />
                </div>
              </div>
              <div
                className="w-[75rem] grid grid-rows-[1fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="w-[75rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  <div className="absolute top-[7.25rem] left-[0rem] bg-whitesmoke-200 w-[75rem] h-[0.063rem]" />
                </div>
              </div>
            </div>
            <div
              className="w-[75rem] h-[3.813rem] relative hidden [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-midnightblue-100"
              data-acc-item
              data-acc-header
              onClick={onAccordionHeaderClick}
            >
              <div className="absolute top-[0rem] left-[0rem] w-full h-[1.75rem] flex flex-row items-start justify-start gap-[1.5rem]">
                <b className="h-[1.75rem] w-[72.063rem] relative leading-[1.75rem] inline-block mq450:text-[1rem] mq450:leading-[1.375rem]">
                  Is there a free trial available?
                </b>
                <div className="h-[1.625rem] w-[1.5rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-11-1.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[3.75rem] left-[0rem] bg-whitesmoke-200 w-[75rem] h-[0.063rem]" />
              <div className="relative text-[transparent] hidden" />
              <div className="absolute w-0 h-0" />
            </div>
            <div
              className="w-[75rem] h-[3.813rem] relative [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-midnightblue-100"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="absolute top-[0rem] left-[0rem] w-full h-[1.75rem] flex flex-row items-start justify-start gap-[1.5rem]">
                <b className="h-[1.75rem] w-[72.063rem] relative leading-[1.75rem] inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.375rem]">
                  Can I change my plan later?
                </b>
                <div className="h-[1.625rem] w-[1.5rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-11-1.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[3.75rem] left-[0rem] bg-whitesmoke-200 w-[75rem] h-[0.063rem]" />
            </div>
            <div
              className="w-[75rem] h-[7.313rem] relative hidden [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
              data-acc-item
              data-acc-open
            >
              <div className="absolute top-[0rem] left-[0rem] w-full h-[5.25rem] flex flex-col items-center justify-start">
                <div
                  className="w-[75rem] h-[5.25rem] flex flex-row items-start justify-start gap-[1.5rem] cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-[5.25rem] flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
                    <b className="w-[72.063rem] h-[1.75rem] relative leading-[1.75rem] inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.375rem]">
                      Can I change my plan later?
                    </b>
                    <div className="w-[72rem] h-[3rem] relative text-[1rem] leading-[1.5rem] text-midnightblue-100 inline-block">
                      Yes, you can try us for free for 30 days. If you want,
                      we’ll provide you with a free, personalized 30-minute
                      onboarding call to get you up and running as soon as
                      possible.
                    </div>
                  </div>
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-11.svg"
                  />
                </div>
              </div>
              <div
                className="w-[75rem] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="w-[75rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  <div className="absolute top-[7.25rem] left-[0rem] bg-whitesmoke-200 w-[75rem] h-[0.063rem]" />
                </div>
              </div>
              <div className="relative text-[transparent] hidden" />
              <div className="absolute w-0 h-0" />
            </div>
            <div
              className="w-[75rem] h-[3.813rem] relative [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-midnightblue-100"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="absolute top-[0rem] left-[0rem] w-full h-[1.75rem] flex flex-row items-start justify-start gap-[1.5rem]">
                <b className="h-[1.75rem] w-[72.063rem] relative leading-[1.75rem] inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.375rem]">
                  What is your cancellation policy?
                </b>
                <div className="h-[1.625rem] w-[1.5rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-11-1.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[3.75rem] left-[0rem] bg-whitesmoke-200 w-[75rem] h-[0.063rem]" />
            </div>
            <div
              className="w-[75rem] h-[7.313rem] relative hidden [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
              data-acc-item
              data-acc-open
            >
              <div className="absolute top-[0rem] left-[0rem] w-full h-[5.25rem] flex flex-col items-center justify-start">
                <div
                  className="w-[75rem] h-[5.25rem] flex flex-row items-start justify-start gap-[1.5rem] cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-[5.25rem] flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
                    <b className="w-[72.063rem] h-[1.75rem] relative leading-[1.75rem] inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.375rem]">
                      What is your cancellation policy?
                    </b>
                    <div className="w-[72rem] h-[3rem] relative text-[1rem] leading-[1.5rem] text-midnightblue-100 inline-block">
                      Yes, you can try us for free for 30 days. If you want,
                      we’ll provide you with a free, personalized 30-minute
                      onboarding call to get you up and running as soon as
                      possible.
                    </div>
                  </div>
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-11.svg"
                  />
                </div>
              </div>
              <div
                className="w-[75rem] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="w-[75rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  <div className="absolute top-[7.25rem] left-[0rem] bg-whitesmoke-200 w-[75rem] h-[0.063rem]" />
                </div>
              </div>
              <div className="relative text-[transparent] hidden" />
              <div className="absolute w-0 h-0" />
            </div>
            <div
              className="w-[75rem] h-[3.813rem] relative [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-midnightblue-100"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="absolute top-[0rem] left-[0rem] w-full h-[1.75rem] flex flex-row items-start justify-start gap-[1.5rem]">
                <b className="h-[1.75rem] w-[72.063rem] relative leading-[1.75rem] inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.375rem]">
                  Can other info be added to an invoice?
                </b>
                <div className="h-[1.625rem] w-[1.5rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-11-1.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[3.75rem] left-[0rem] bg-whitesmoke-200 w-[75rem] h-[0.063rem]" />
            </div>
            <div
              className="w-[75rem] h-[7.313rem] relative hidden [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
              data-acc-item
              data-acc-open
            >
              <div className="absolute top-[0rem] left-[0rem] w-full h-[5.25rem] flex flex-col items-center justify-start">
                <div
                  className="w-[75rem] h-[5.25rem] flex flex-row items-start justify-start gap-[1.5rem] cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-[5.25rem] flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
                    <b className="w-[72.063rem] h-[1.75rem] relative leading-[1.75rem] inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.375rem]">
                      Can other info be added to an invoice?
                    </b>
                    <div className="w-[72rem] h-[3rem] relative text-[1rem] leading-[1.5rem] text-midnightblue-100 inline-block">
                      Yes, you can try us for free for 30 days. If you want,
                      we’ll provide you with a free, personalized 30-minute
                      onboarding call to get you up and running as soon as
                      possible.
                    </div>
                  </div>
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-11.svg"
                  />
                </div>
              </div>
              <div
                className="w-[75rem] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="w-[75rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  <div className="absolute top-[7.25rem] left-[0rem] bg-whitesmoke-200 w-[75rem] h-[0.063rem]" />
                </div>
              </div>
              <div className="relative text-[transparent] hidden" />
              <div className="absolute w-0 h-0" />
            </div>
            <div
              className="w-[75rem] h-[3.938rem] relative [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-midnightblue-100"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="absolute top-[0rem] left-[0rem] w-full h-[1.875rem] flex flex-row items-start justify-start gap-[1.5rem]">
                <b className="h-[1.875rem] w-[72.063rem] relative leading-[1.875rem] inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.5rem]">
                  How does billing work?
                </b>
                <div className="h-[1.688rem] w-[1.5rem] flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-11-1.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[3.875rem] left-[0rem] bg-whitesmoke-200 w-[75rem] h-[0.063rem]" />
            </div>
            <div
              className="w-[75rem] h-[7.313rem] relative hidden [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
              data-acc-item
              data-acc-open
            >
              <div className="absolute top-[0rem] left-[0rem] w-full h-[5.25rem] flex flex-col items-center justify-start">
                <div
                  className="w-[75rem] h-[5.25rem] flex flex-row items-start justify-start gap-[1.5rem] cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-[5.25rem] flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
                    <b className="w-[72.063rem] h-[1.875rem] relative leading-[1.75rem] inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.5rem]">
                      How does billing work?
                    </b>
                    <div className="w-[72rem] h-[3rem] relative text-[1rem] leading-[1.5rem] text-midnightblue-100 inline-block">
                      Yes, you can try us for free for 30 days. If you want,
                      we’ll provide you with a free, personalized 30-minute
                      onboarding call to get you up and running as soon as
                      possible.
                    </div>
                  </div>
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-11.svg"
                  />
                </div>
              </div>
              <div
                className="w-[75rem] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="w-[75rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  <div className="absolute top-[7.25rem] left-[0rem] bg-whitesmoke-200 w-[75rem] h-[0.063rem]" />
                </div>
              </div>
              <div className="relative text-[transparent] hidden" />
              <div className="absolute w-0 h-0" />
            </div>
            <div
              className="w-[75rem] h-[3.938rem] relative [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-midnightblue-100"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <div className="absolute top-[0rem] left-[0rem] w-full h-[1.875rem] flex flex-row items-start justify-start gap-[1.5rem]">
                <b className="h-[1.875rem] w-[72.063rem] relative leading-[1.875rem] inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.5rem]">
                  How do I change my account email?
                </b>
                <div className="h-[1.688rem] w-[1.5rem] flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-11-1.svg"
                  />
                </div>
              </div>
              <div className="absolute top-[3.875rem] left-[0rem] bg-whitesmoke-200 w-[75rem] h-[0.063rem]" />
            </div>
            <div
              className="w-[75rem] h-[7.313rem] relative hidden [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
              data-acc-item
              data-acc-open
            >
              <div className="absolute top-[0rem] left-[0rem] w-full h-[5.25rem] flex flex-col items-center justify-start">
                <div
                  className="w-[75rem] h-[5.25rem] flex flex-row items-start justify-start gap-[1.5rem] cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-[5.25rem] flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
                    <b className="w-[72.063rem] h-[1.875rem] relative leading-[1.75rem] inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.5rem]">
                      How do I change my account email?
                    </b>
                    <div className="w-[72rem] h-[3rem] relative text-[1rem] leading-[1.5rem] text-midnightblue-100 inline-block">
                      Yes, you can try us for free for 30 days. If you want,
                      we’ll provide you with a free, personalized 30-minute
                      onboarding call to get you up and running as soon as
                      possible.
                    </div>
                  </div>
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-11.svg"
                  />
                </div>
              </div>
              <div
                className="w-[75rem] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="w-[75rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  <div className="absolute top-[7.25rem] left-[0rem] bg-whitesmoke-200 w-[75rem] h-[0.063rem]" />
                </div>
              </div>
              <div className="relative text-[transparent] hidden" />
              <div className="absolute w-0 h-0" />
            </div>
            <div
              className="w-[75rem] h-[1.875rem] flex flex-row items-start justify-start gap-[1.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-midnightblue-100"
              data-acc-item
              data-acc-header
              data-acc-original
              onClick={onAccordionHeaderClick}
            >
              <b className="h-[1.875rem] w-[72.063rem] relative leading-[1.875rem] inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.5rem]">
                How do I change my account email?
              </b>
              <div className="h-[1.688rem] w-[1.5rem] flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                  alt=""
                  src="/frame-11-1.svg"
                />
              </div>
            </div>
            <div
              className="w-[75rem] h-[7.313rem] relative hidden [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
              data-acc-item
              data-acc-open
            >
              <div className="absolute top-[0rem] left-[0rem] w-full h-[5.25rem] flex flex-col items-center justify-start">
                <div
                  className="w-[75rem] h-[5.25rem] flex flex-row items-start justify-start gap-[1.5rem] cursor-pointer"
                  data-acc-header
                  onClick={onAccordionHeaderClick}
                >
                  <div className="h-[5.25rem] flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
                    <b className="w-[72.063rem] h-[1.875rem] relative leading-[1.75rem] inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.5rem]">
                      How do I change my account email?
                    </b>
                    <div className="w-[72rem] h-[3rem] relative text-[1rem] leading-[1.5rem] text-midnightblue-100 inline-block">
                      Yes, you can try us for free for 30 days. If you want,
                      we’ll provide you with a free, personalized 30-minute
                      onboarding call to get you up and running as soon as
                      possible.
                    </div>
                  </div>
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-11.svg"
                  />
                </div>
              </div>
              <div
                className="w-[75rem] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
                data-acc-content
              >
                <div className="w-[75rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                  <div className="absolute top-[7.25rem] left-[0rem] bg-whitesmoke-200 w-[75rem] h-[0.063rem]" />
                </div>
              </div>
              <div className="relative text-[transparent] hidden" />
              <div className="absolute w-0 h-0" />
            </div>
          </div>
          <div
            className="w-[6.663rem] h-[1.625rem] flex flex-row items-start justify-start gap-[0.75rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer text-[1rem] text-darkslateblue-200"
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={onAccordionHeaderClick}
          >
            <div className="h-[1.625rem] w-[4.875rem] relative leading-[160%] font-medium inline-block shrink-0">
              learn more
            </div>
            <div className="h-[1.206rem] w-[1.1rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
              <img
                className="w-[1.1rem] h-[0.706rem] relative shrink-0"
                alt=""
                src="/group-184.svg"
              />
            </div>
          </div>
          <div
            className="w-[75rem] h-[7.313rem] relative hidden [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]"
            data-acc-item
            data-acc-open
          >
            <div className="absolute top-[0rem] left-[0rem] w-full h-[5.25rem] flex flex-col items-center justify-start">
              <div
                className="w-[75rem] h-[5.25rem] flex flex-row items-start justify-start gap-[1.5rem] cursor-pointer"
                data-acc-header
                onClick={onAccordionHeaderClick}
              >
                <div className="h-[5.25rem] flex-1 flex flex-col items-start justify-start gap-[0.5rem]">
                  <b className="w-[4.875rem] h-[1.625rem] relative leading-[1.75rem] inline-block shrink-0">
                    learn more
                  </b>
                  <div className="w-[72rem] h-[3rem] relative text-[1rem] leading-[1.5rem] text-midnightblue-100 inline-block">
                    Yes, you can try us for free for 30 days. If you want, we’ll
                    provide you with a free, personalized 30-minute onboarding
                    call to get you up and running as soon as possible.
                  </div>
                </div>
                <img
                  className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame-11.svg"
                />
              </div>
            </div>
            <div
              className="w-[75rem] grid grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
              data-acc-content
            >
              <div className="w-[75rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                <div className="absolute top-[7.25rem] left-[0rem] bg-whitesmoke-200 w-[75rem] h-[0.063rem]" />
              </div>
            </div>
            <div className="relative text-[transparent] hidden" />
            <div className="absolute w-0 h-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
