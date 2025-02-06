import { FunctionComponent } from "react";
import PaymentMethodShopPay from "./PaymentMethodShopPay";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[7.5rem] box-border max-w-full text-left text-[1.25rem] text-white font-roboto mq925:pb-[3.188rem] mq925:box-border mq1350:pb-[4.875rem] mq1350:box-border ${className}`}
    >
      <div className="flex-1 bg-darkslateblue-200 overflow-hidden flex flex-row items-start justify-start pt-[10rem] px-[5.625rem] pb-[7.5rem] box-border relative gap-[3.75rem] max-w-full mq450:gap-[0.938rem] mq925:gap-[1.875rem] mq925:pt-[4.25rem] mq925:px-[1.375rem] mq925:pb-[3.188rem] mq925:box-border mq1350:pt-[6.5rem] mq1350:px-[2.813rem] mq1350:pb-[4.875rem] mq1350:box-border mq1800:flex-wrap">
        <div className="h-[86.188rem] w-[120rem] relative bg-darkslateblue-200 hidden max-w-full z-[0]" />
        <div className="flex flex-col items-start justify-start pt-[3.687rem] pb-[0rem] pl-[0rem] pr-[1.25rem] mq450:pt-[1.563rem] mq450:box-border mq925:pt-[2.375rem] mq925:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.043rem] z-[2]">
            <div className="rounded-sm-3 bg-lightsteelblue-100 flex flex-row items-start justify-start">
              <div className="self-stretch w-[6.25rem] relative rounded-sm-3 bg-lightsteelblue-100 hidden" />
              <img
                className="h-[6.25rem] w-[6.25rem] relative rounded-sm-3 object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
            </div>
            <div className="self-stretch h-[6.25rem] relative">
              <div className="absolute top-[0rem] left-[0rem] rounded-sm-3 bg-lightsteelblue-100 w-full h-full" />
              <img
                className="absolute top-[0rem] left-[0rem] rounded-sm-3 w-full h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <div className="self-stretch h-[6.25rem] relative">
              <div className="absolute top-[0rem] left-[0rem] rounded-sm-3 bg-lightsteelblue-100 w-full h-full" />
              <img
                className="absolute top-[0rem] left-[0rem] rounded-sm-3 w-full h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
            </div>
            <div className="self-stretch h-[6.25rem] relative">
              <div className="absolute top-[0rem] left-[0rem] rounded-sm-3 bg-lightsteelblue-100 w-full h-full" />
              <img
                className="absolute top-[0rem] left-[0rem] rounded-sm-3 w-full h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
              />
            </div>
            <div className="self-stretch h-[6.25rem] relative">
              <div className="absolute top-[0rem] left-[0rem] rounded-sm-3 bg-lightsteelblue-100 w-full h-full" />
              <img
                className="absolute top-[0rem] left-[0rem] rounded-sm-3 w-full h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <div className="self-stretch h-[6.25rem] relative">
              <div className="absolute top-[0rem] left-[0rem] rounded-sm-3 bg-lightsteelblue-100 w-full h-full" />
              <img
                className="absolute top-[0rem] left-[0rem] rounded-sm-3 w-full h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
            </div>
            <div className="self-stretch h-[6.25rem] relative">
              <div className="absolute top-[0rem] left-[0rem] rounded-sm-3 bg-lightsteelblue-100 w-full h-full" />
              <img
                className="absolute top-[0rem] left-[0rem] rounded-sm-3 w-full h-full object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="h-[68.25rem] w-full absolute !m-[0] top-[0rem] right-[0rem] left-[0rem] [background:linear-gradient(180deg,_#1e2c5f,_rgba(30,_44,_95,_0))] z-[1]" />
        <img
          className="w-[39.375rem] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full z-[2]"
          loading="lazy"
          alt=""
          src="/container@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[2.5rem] max-w-full mq450:gap-[1.25rem]">
          <div className="flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
            <div className="flex flex-col items-start justify-start gap-[0.25rem] max-w-full text-[3rem]">
              <h1 className="m-0 w-[39.825rem] relative text-inherit leading-[160%] font-bold font-[inherit] inline-block max-w-full z-[2] mq450:text-[1.813rem] mq450:leading-[2.875rem] mq925:text-[2.375rem] mq925:leading-[3.813rem]">
                <span>{`Tempk `}</span>
                <span className="text-dodgerblue">TSA</span>
                <span>{`-Approved Insulin Pen Cooler | Holds `}</span>
                <span className="text-dodgerblue">3-7</span>
                <span> Pens</span>
              </h1>
              <div className="relative text-[1.25rem] leading-[160%] text-gray-100 z-[2] mq450:text-[1rem] mq450:leading-[1.625rem]">{`Portable insulin cooler with USB & freeze pack, TSA-approved, ensures safe medicine storage.`}</div>
            </div>
            <div className="w-[50.875rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[1.25rem] max-w-full text-[2rem]">
              <div className="flex flex-row items-start justify-start gap-[1.5rem] max-w-full mq450:flex-wrap">
                <h1 className="m-0 relative text-inherit leading-[160%] font-bold font-[inherit] z-[2] mq450:text-[1.188rem] mq450:leading-[1.938rem] mq925:text-[1.625rem] mq925:leading-[2.563rem]">
                  Excellent / 4.5
                </h1>
                <div className="flex flex-col items-start justify-start pt-[0.781rem] px-[0rem] pb-[0rem]">
                  <div className="flex flex-row items-start justify-start gap-[0.525rem]">
                    <img
                      className="h-[1.5rem] w-[1.563rem] relative z-[2]"
                      alt=""
                      src="/vector.svg"
                    />
                    <img
                      className="h-[1.5rem] w-[1.563rem] relative z-[2]"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className="h-[1.5rem] w-[1.563rem] relative z-[2]"
                      alt=""
                      src="/vector-2.svg"
                    />
                    <img
                      className="h-[1.5rem] w-[1.563rem] relative z-[2]"
                      alt=""
                      src="/vector-3.svg"
                    />
                    <img
                      className="h-[1.5rem] w-[1.563rem] relative z-[2]"
                      alt=""
                      src="/rating-star.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] max-w-full text-[4.25rem] text-lightskyblue font-roboto-serif">
                <i className="relative leading-[120%] inline-block font-medium max-w-full z-[2] mq450:text-[2.563rem] mq450:leading-[3.063rem] mq925:text-[3.375rem] mq925:leading-[4.063rem]">
                  $1,299 USD
                </i>
                <div className="flex flex-col items-start justify-start gap-[1.25rem] text-[1.25rem] text-white font-roboto">
                  <div className="flex flex-col items-start justify-start gap-[1.25rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                      <img
                        className="h-[2rem] w-[2rem] relative z-[2]"
                        alt=""
                        src="/feature-icon.svg"
                      />
                      <b className="relative leading-[160%] z-[2] mq450:text-[1rem] mq450:leading-[1.625rem]">
                        Up to 72 Hours of Cooling
                      </b>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                      <img
                        className="h-[2rem] w-[2rem] relative z-[2]"
                        alt=""
                        src="/feature-icon.svg"
                      />
                      <b className="relative leading-[160%] z-[2] mq450:text-[1rem] mq450:leading-[1.625rem]">
                        Up to 72 Hours of Cooling
                      </b>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                    <img
                      className="h-[2rem] w-[2rem] relative z-[2]"
                      alt=""
                      src="/feature-icon.svg"
                    />
                    <b className="relative leading-[160%] z-[2] mq450:text-[1rem] mq450:leading-[1.625rem]">
                      Up to 72 Hours of Cooling
                    </b>
                  </div>
                </div>
                <div className="self-stretch h-[0.063rem] relative [background:linear-gradient(-90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.5))] z-[2]" />
              </div>
            </div>
            <div className="w-[27.438rem] flex flex-row items-end justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border gap-[0.5rem] max-w-full mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.625rem] gap-[1.031rem]">
                <b className="relative leading-[160%] z-[2] mq450:text-[1rem] mq450:leading-[1.625rem]">
                  Color:
                </b>
                <b className="relative leading-[160%] inline-block min-w-[2.875rem] z-[2] mq450:text-[1rem] mq450:leading-[1.625rem]">
                  Size:
                </b>
                <b className="relative leading-[160%] inline-block min-w-[5.188rem] z-[2] mq450:text-[1rem] mq450:leading-[1.625rem]">
                  Quantity:
                </b>
              </div>
              <div className="flex flex-col items-start justify-start gap-[1rem] text-darkslateblue-200">
                <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.312rem] gap-[0.75rem]">
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative z-[2]"
                    alt=""
                    src="/color-option.svg"
                  />
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative z-[2]"
                    alt=""
                    src="/color-option-1.svg"
                  />
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative z-[2]"
                    alt=""
                    src="/color-option-2.svg"
                  />
                </div>
                <div className="rounded bg-white border-white border-[1px] border-solid flex flex-row items-start justify-start py-[0rem] pl-[0.75rem] pr-[0.562rem] gap-[0.5rem] z-[2]">
                  <div className="h-[1.75rem] w-[5.688rem] relative rounded bg-white border-white border-[1px] border-solid box-border hidden" />
                  <b className="relative leading-[160%] inline-block min-w-[0.875rem] z-[1] mq450:text-[1rem] mq450:leading-[1.625rem]">
                    S
                  </b>
                  <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] text-[0.75rem] text-darkslateblue-300">
                    <b className="relative leading-[160%] inline-block min-w-[2.938rem] z-[1]">
                      (1 Pens)
                    </b>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1rem] text-white">
                  <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[1.5rem] h-[1.5rem] relative z-[2]"
                      alt=""
                      src="/quantity-icon.svg"
                    />
                  </div>
                  <b className="relative leading-[160%] inline-block min-w-[0.813rem] z-[2] mq450:text-[1rem] mq450:leading-[1.625rem]">
                    1
                  </b>
                  <div className="flex flex-col items-start justify-start pt-[0.312rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[1.5rem] h-[1.5rem] relative z-[2]"
                      alt=""
                      src="/quantity-icon-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.562rem] box-border min-w-[9.5rem]">
                <div className="self-stretch flex flex-col items-end justify-start gap-[0.687rem]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.312rem]">
                    <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                      <img
                        className="h-[1.5rem] w-[1.5rem] relative z-[2]"
                        alt=""
                        src="/color-option-3.svg"
                      />
                      <img
                        className="h-[1.5rem] w-[1.5rem] relative z-[2]"
                        alt=""
                        src="/color-option-4.svg"
                      />
                      <img
                        className="h-[1.5rem] w-[1.5rem] relative z-[2]"
                        alt=""
                        src="/color-option-5.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.187rem] pr-[0rem]">
                      <div className="flex-1 flex flex-row items-start justify-start gap-[1.25rem]">
                        <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.75rem] pr-[0.687rem] relative gap-[0.5rem] z-[2]">
                          <div className="h-[1.75rem] w-full absolute !m-[0] top-[calc(50%_-_14px)] right-[0rem] left-[0rem] rounded border-white border-[1px] border-solid box-border opacity-[0.2]" />
                          <b className="relative leading-[160%] z-[1] mq450:text-[1rem] mq450:leading-[1.625rem]">
                            M
                          </b>
                          <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] text-[0.75rem] text-gray-100">
                            <b className="relative leading-[160%] z-[1]">
                              (2-3 Pens)
                            </b>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.75rem] pr-[0.687rem] relative gap-[0.5rem] z-[2]">
                          <div className="h-[1.75rem] w-full absolute !m-[0] top-[calc(50%_-_14px)] right-[0rem] left-[0rem] rounded border-white border-[1px] border-solid box-border opacity-[0.2]" />
                          <b className="relative leading-[160%] z-[1] mq450:text-[1rem] mq450:leading-[1.625rem]">
                            L
                          </b>
                          <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] text-[0.75rem] text-gray-100">
                            <b className="relative leading-[160%] z-[1]">
                              (5-6 Pens)
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-t-lg rounded-br-lg rounded-bl-none bg-tomato flex flex-row items-start justify-start pt-[0.25rem] pb-[0.312rem] pl-[0.75rem] pr-[0.687rem] z-[2] text-[0.75rem]">
                    <div className="h-[1.75rem] w-[14.625rem] relative rounded-t-lg rounded-br-lg rounded-bl-none bg-tomato hidden" />
                    <div className="flex-1 flex flex-row items-start justify-start py-[0rem] px-[0rem]">
                      <div className="relative leading-[160%] z-[2]">
                        <span>
                          <b className="font-roboto">OFFER</b>
                          <span className="font-medium whitespace-pre-wrap">{`:Save  `}</span>
                        </span>
                        <b className="text-tomato">$80</b>
                        <span className="font-medium whitespace-pre-wrap">{`  on  `}</span>
                        <span className="text-tomato whitespace-pre-wrap">
                          <b>2</b>
                        </span>
                        <span className="font-medium">
                          <span className="text-tomato whitespace-pre-wrap">{` `}</span>
                          <span> Insulin Coolers</span>
                        </span>
                      </div>
                      <div className="w-[11.75rem] flex flex-col items-start justify-start pt-[0.081rem] px-[0rem] pb-[0rem] box-border ml-[-8.894rem]">
                        <div className="w-[1.625rem] h-[1rem] relative rounded-sm bg-white z-[1]" />
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.093rem] px-[0rem] pb-[0rem] ml-[-8.894rem]">
                        <div className="w-[0.75rem] h-[1rem] relative rounded-sm bg-white z-[1]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[51.125rem] h-[0.313rem] flex flex-row items-start justify-start pt-[0rem] px-[0.125rem] pb-[0.25rem] box-border max-w-full">
              <div className="self-stretch flex-1 relative [background:linear-gradient(-90deg,_rgba(255,_255,_255,_0),_rgba(255,_255,_255,_0.5))] max-w-full z-[2]" />
            </div>
            <div className="w-[37.688rem] flex flex-row items-start justify-start py-[0rem] px-[0.125rem] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <b className="relative leading-[160%] inline-block min-w-[5.125rem] z-[2] mq450:text-[1rem] mq450:leading-[1.625rem]">{`Size & fit`}</b>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.937rem] text-[1rem] text-gray-100">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                      <div className="relative leading-[160%] z-[2]">
                        This is the size information
                      </div>
                      <div className="relative leading-[160%] z-[2]">
                        This is the size information
                      </div>
                    </div>
                    <b className="relative text-[1.25rem] leading-[160%] inline-block text-white min-w-[6.188rem] z-[2] mq450:text-[1rem] mq450:leading-[1.625rem]">
                      Shippment
                    </b>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] text-right text-[1rem] text-gray-100">
                  <div className="self-stretch flex flex-col items-end justify-start gap-[1.187rem]">
                    <div className="self-stretch flex flex-col items-end justify-start gap-[0.5rem]">
                      <div className="flex flex-row items-start justify-end py-[0rem] px-[0.062rem]">
                        <img
                          className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 z-[2]"
                          alt=""
                          src="/size-dropdown.svg"
                        />
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
                        <div className="self-stretch relative leading-[160%] z-[2]">
                          3.4‘’ * 3.4‘’ * 10.4
                        </div>
                        <div className="self-stretch relative leading-[160%] inline-block min-w-[7.375rem] z-[2]">
                          3.4‘’ * 3.4‘’ * 10.4
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-end py-[0rem] px-[0.062rem]">
                      <img
                        className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 z-[2]"
                        alt=""
                        src="/shipment-dropdown.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[2.5rem] max-w-full text-[2rem] text-darkslateblue-200 mq925:gap-[1.25rem] mq925:flex-wrap">
            <img
              className="h-[4.813rem] w-[4.813rem] relative object-cover z-[2]"
              loading="lazy"
              alt=""
              src="/cart-icon@2x.png"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[19.625rem] max-w-full">
              <div className="rounded-21xl bg-white flex flex-row items-start justify-start pt-[0.875rem] pb-[0.937rem] pl-[11.187rem] pr-[11rem] box-border max-w-full z-[2] mq925:pl-[5.563rem] mq925:pr-[5.5rem] mq925:box-border">
                <div className="h-[5rem] w-[30.188rem] relative rounded-21xl bg-white hidden max-w-full" />
                <b className="relative leading-[160%] z-[3]">Buy Now</b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.187rem] pr-[0.25rem] box-border max-w-full text-[1rem] text-gray-100">
                <div className="flex-1 flex flex-row items-start justify-start gap-[0.5rem] max-w-full mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[1.25rem] h-[1.25rem] relative z-[2]"
                      alt=""
                      src="/return-icon.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] min-w-[18.188rem] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem] mq925:flex-wrap">
                      <div className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[0.937rem]">
                        <b className="relative leading-[160%] z-[2]">{`30 days Money-Back `}</b>
                      </div>
                      <div className="flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[0.937rem] gap-[0.5rem]">
                        <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                          <img
                            className="w-[1.25rem] h-[1.25rem] relative z-[2]"
                            alt=""
                            src="/return-icon-1.svg"
                          />
                        </div>
                        <b className="relative leading-[160%] inline-block min-w-[6rem] z-[2]">
                          Easy Returns
                        </b>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                        <img
                          className="w-[1.25rem] h-[1.25rem] relative z-[2]"
                          alt=""
                          src="/shipping-icon.svg"
                        />
                      </div>
                      <b className="relative leading-[160%] inline-block min-w-[6.188rem] z-[2]">
                        Free shipping
                      </b>
                    </div>
                    <div className="flex flex-row items-start justify-start py-[0rem] px-[4.75rem] box-border max-w-full mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                      <div className="flex flex-row items-start justify-start gap-[0.75rem]">
                        <img
                          className="h-[1.5rem] w-[2.188rem] relative z-[2]"
                          alt=""
                          src="/payment-methodpaypal.svg"
                        />
                        <img
                          className="h-[1.5rem] w-[2.188rem] relative z-[2]"
                          alt=""
                          src="/payment-methodunionpay.svg"
                        />
                        <img
                          className="h-[1.5rem] w-[2.188rem] relative object-cover z-[2]"
                          alt=""
                          src="/payment-methodmastercard@2x.png"
                        />
                        <PaymentMethodShopPay size={48} />
                        <img
                          className="h-[1.5rem] w-[2.188rem] relative object-cover z-[2]"
                          alt=""
                          src="/payment-methodvisa@2x.png"
                        />
                        <img
                          className="h-[1.5rem] w-[2.188rem] relative object-cover z-[2]"
                          alt=""
                          src="/payment-methodamex@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
