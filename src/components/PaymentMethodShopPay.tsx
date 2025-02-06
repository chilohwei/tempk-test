import { FunctionComponent } from "react";
import PaymentMethodPlaceholder from "./PaymentMethodPlaceholder";

export type PaymentMethodShopPayType = {
  className?: string;

  /** Variant props */
  size?: 48;
};

const PaymentMethodShopPay: FunctionComponent<PaymentMethodShopPayType> = ({
  className = "",
  size = 48,
}) => {
  return (
    <div
      className={`h-[1.5rem] w-[2.188rem] relative z-[2] ${className}`}
      data-size={size}
    >
      <PaymentMethodPlaceholder size={48} />
      <img
        className="absolute h-[43.33%] w-[74.29%] top-[33.33%] right-[12.86%] bottom-[23.33%] left-[12.86%] max-w-full overflow-hidden max-h-full z-[1]"
        alt=""
        src="/shop-pay.svg"
      />
    </div>
  );
};

export default PaymentMethodShopPay;
