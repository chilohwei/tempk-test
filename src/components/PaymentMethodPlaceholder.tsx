import { FunctionComponent } from "react";

export type PaymentMethodPlaceholderType = {
  className?: string;

  /** Variant props */
  size?: 48;
};

const PaymentMethodPlaceholder: FunctionComponent<
  PaymentMethodPlaceholderType
> = ({ className = "", size = 48 }) => {
  return (
    <div
      className={`absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] ${className}`}
      data-size={size}
    >
      <div className="absolute h-full w-full top-[-4.17%] right-[-2.86%] bottom-[-4.17%] left-[-2.86%] rounded-10xs bg-mediumblue border-whitesmoke-400 border-[1px] border-solid box-border" />
    </div>
  );
};

export default PaymentMethodPlaceholder;
