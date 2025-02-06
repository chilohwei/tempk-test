import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[4.375rem] box-border max-w-full text-left text-[3rem] text-midnightblue-100 font-roboto mq925:pb-[1.813rem] mq925:box-border mq1350:pb-[2.813rem] mq1350:box-border ${className}`}
    >
      <div className="w-[75rem] flex flex-col items-start justify-start gap-[3.5rem] max-w-full mq925:gap-[1.75rem]">
        <div className="flex flex-row items-start justify-start py-[0rem] pl-[20.937rem] pr-[20.875rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq925:pl-[5.188rem] mq925:pr-[5.188rem] mq925:box-border mq1350:pl-[10.438rem] mq1350:pr-[10.438rem] mq1350:box-border">
          <h1 className="m-0 relative text-inherit leading-[160%] font-bold font-[inherit] mq450:text-[1.813rem] mq450:leading-[2.875rem] mq925:text-[2.375rem] mq925:leading-[3.813rem]">
            <span>{`Loved by Our `}</span>
            <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#0066ff,_#003686)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Customers
            </span>
          </h1>
        </div>
        <div className="self-stretch h-[67.75rem] flex flex-col items-end justify-start gap-[1.5rem] max-w-full text-[1rem] mq1350:h-auto">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-[1.25rem]">
            <div className="w-[69.313rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full mq1350:flex-wrap">
              <div className="w-[16.938rem] flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] box-border">
                <div className="relative leading-[160%] font-medium inline-block min-w-[7.813rem] mq450:text-[1rem] mq450:leading-[1.625rem]">
                  Total Reviews
                </div>
                <div className="relative text-[2.5rem] leading-[160%] font-semibold z-[1] mq450:text-[1.5rem] mq450:leading-[2.375rem] mq925:text-[2rem] mq925:leading-[3.188rem]">
                  10.0K
                </div>
                <div className="relative text-[1rem] leading-[160%] text-midnightblue-300">
                  Groeth in reviews on this year
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[2.5rem] mq450:gap-[1.25rem]">
                <div className="self-stretch w-[0.063rem] relative bg-whitesmoke-200" />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="relative leading-[160%] font-medium mq450:text-[1rem] mq450:leading-[1.625rem]">
                    Average Rating
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-[2.5rem]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[1.25rem]">
                      <div className="relative leading-[160%] font-semibold z-[1] mq450:text-[1.5rem] mq450:leading-[2.375rem] mq925:text-[2rem] mq925:leading-[3.188rem]">
                        4.5
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[0.468rem]">
                          <img
                            className="h-[1.438rem] w-[1.5rem] relative"
                            alt=""
                            src="/vector-20.svg"
                          />
                          <img
                            className="h-[1.438rem] w-[1.5rem] relative"
                            alt=""
                            src="/vector-20.svg"
                          />
                          <img
                            className="h-[1.438rem] w-[1.5rem] relative"
                            alt=""
                            src="/vector-20.svg"
                          />
                          <img
                            className="h-[1.438rem] w-[1.5rem] relative"
                            alt=""
                            src="/vector-20.svg"
                          />
                          <img
                            className="h-[1.438rem] w-[1.625rem] relative"
                            loading="lazy"
                            alt=""
                            src="/group-125-4.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative text-[1rem] leading-[160%] text-midnightblue-300">
                      Avarage rating on this year
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[7.625rem] w-[19.313rem] flex flex-row items-end justify-start gap-[2.375rem] text-[0.75rem] mq450:gap-[1.188rem]">
                <div className="self-stretch w-[0.063rem] relative bg-whitesmoke-200" />
                <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.312rem]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.206rem]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                        <img
                          className="w-[0.75rem] h-[0.75rem] relative"
                          alt=""
                          src="/vector-36.svg"
                        />
                      </div>
                      <div className="relative leading-[160%] font-medium">
                        5
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                        <div className="self-stretch h-[0.25rem] relative rounded-sm bg-mediumseagreen" />
                      </div>
                      <div className="relative leading-[160%] font-medium inline-block min-w-[1.75rem]">
                        2.0 k
                      </div>
                    </div>
                    <div className="w-[14.375rem] flex flex-row items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                        <img
                          className="w-[0.75rem] h-[0.75rem] relative"
                          alt=""
                          src="/vector-36.svg"
                        />
                      </div>
                      <div className="relative leading-[160%] font-medium">
                        4
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[0.562rem] px-[0rem] pb-[0rem]">
                        <div className="self-stretch h-[0.25rem] relative rounded-sm bg-palevioletred" />
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
                        <div className="relative leading-[160%] font-medium inline-block min-w-[1.75rem]">
                          1.8 k
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-end justify-start gap-[0.5rem]">
                      <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                        <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
                          <div className="w-[0.75rem] h-[2.188rem] relative">
                            <img
                              className="absolute top-[0rem] left-[0rem] w-[0.75rem] h-[0.75rem]"
                              alt=""
                              src="/vector-36.svg"
                            />
                            <img
                              className="absolute top-[1.438rem] left-[0rem] w-[0.75rem] h-[0.75rem]"
                              alt=""
                              src="/vector-36.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[0.312rem]">
                          <div className="relative leading-[160%] font-medium">
                            3
                          </div>
                          <div className="relative leading-[160%] font-medium">
                            2
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-end justify-start">
                        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.437rem]">
                          <div className="w-[1.5rem] h-[1.688rem] relative">
                            <div className="absolute top-[0rem] left-[0rem] rounded-sm bg-blueviolet w-[1.5rem] h-[0.25rem]" />
                            <div className="absolute top-[1.438rem] left-[0rem] rounded-sm bg-deepskyblue w-[1rem] h-[0.25rem]" />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                          <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.5rem] pr-[0rem]">
                            <div className="relative leading-[160%] font-medium inline-block min-w-[1.375rem]">
                              100
                            </div>
                          </div>
                          <div className="relative leading-[160%] font-medium">
                            20
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.5rem]">
                      <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                        <img
                          className="w-[0.75rem] h-[0.75rem] relative"
                          alt=""
                          src="/vector-36.svg"
                        />
                      </div>
                      <div className="relative leading-[160%] font-medium">
                        1
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                        <div className="w-[0.375rem] h-[0.25rem] relative rounded-sm bg-lightsteelblue-200" />
                      </div>
                      <div className="relative leading-[160%] font-medium">
                        10
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[0.063rem] relative bg-whitesmoke-200 [transform:_rotate(90deg)]" />
          <FrameComponent3
            closeUpPhotoFriendlyFairHaired="/closeupphotofriendlyfairhairedmansmilingwhileposing-1@2x.png"
            image79="/image-79@2x.png"
            image77="/image-77@2x.png"
            image78="/image-77@2x.png"
          />
          <div className="w-[0.063rem] relative bg-whitesmoke-200 [transform:_rotate(90deg)]" />
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[11.25rem] max-w-full mq450:gap-[1.375rem] mq925:gap-[2.813rem] mq1350:gap-[5.625rem]">
            <div className="flex flex-row items-start justify-start gap-[1.25rem]">
              <img
                className="h-[5rem] w-[5rem] relative rounded-lg object-cover"
                loading="lazy"
                alt=""
                src="/teenagerguyisstudioshoot-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start">
                <div className="relative text-[1.25rem] leading-[160%] font-extrabold inline-block min-w-[7.063rem] mq450:text-[1rem] mq450:leading-[1.625rem]">
                  Liana Nicole
                </div>
                <div className="relative leading-[160%] inline-block min-w-[5.438rem] z-[1]">
                  Color：Blue
                </div>
                <div className="relative leading-[160%] text-midnightblue-300 z-[2]">
                  2024 - 12 - 31
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.75rem] min-w-[32.813rem] max-w-full mq925:min-w-full">
              <div className="flex flex-row items-start justify-start gap-[1.25rem] max-w-full mq450:flex-wrap">
                <div className="relative leading-[200%] font-extrabold">
                  This Cooler is well insulated and provides
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.325rem]">
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
                      className="h-[1rem] w-[1.131rem] relative"
                      alt=""
                      src="/group-125-8.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="relative leading-[200%]">
                This Cooler is well insulated and provides the necessary
                temperature for my insulin medication.I’m glad I decided to
                invest. It Has made my life just a little easier.Once the gel
                bottle gets to maximum coldness it lasts for several hours.
                Enough for a days work shift.I love its modern design. It
                resembles a water bottle but is heavier like a thermos.
              </div>
            </div>
          </div>
          <div className="w-[0.063rem] h-[75rem] relative bg-whitesmoke-200 [transform:_rotate(90deg)]" />
          <FrameComponent3
            closeUpPhotoFriendlyFairHaired="/attractiveyoungwomanenjoyinghertimeoutsideparkwithnatureparkbackground-1@2x.png"
            image79="/image-79@2x.png"
            image77="/image-77@2x.png"
            image78="/image-77@2x.png"
          />
          <div className="w-[0.063rem] h-[75rem] relative bg-whitesmoke-200 [transform:_rotate(90deg)]" />
          <div className="flex flex-row items-start justify-start gap-[0.75rem] text-right text-darkslateblue-200">
            <div className="flex-1 relative leading-[160%] font-medium shrink-0">
              See more reviews
            </div>
            <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.1rem] h-[0.706rem] relative shrink-0"
                alt=""
                src="/group-184.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
