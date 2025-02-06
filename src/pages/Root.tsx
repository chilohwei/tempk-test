import { FunctionComponent } from "react";
import Component1 from "../components/Component1";
import Content from "../components/Content";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import MoreInfo from "../components/MoreInfo";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent10 from "../components/FrameComponent10";
import Guarantee from "../components/Guarantee";
import FooterContainer from "../components/FooterContainer";
import GroupComponent2 from "../components/GroupComponent2";

const Root: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <main className="flex-1 bg-white flex flex-col items-start justify-start max-w-full">
        <Component1 />
        <Content />
        <FrameComponent5 />
        <FrameComponent6 />
        <FrameComponent7 />
        <div className="w-[20.5rem] h-[20.75rem] relative hidden max-w-full z-[7]" />
        <MoreInfo />
        <div className="w-[75rem] h-[3.75rem] relative bg-white hidden max-w-full" />
        <div className="w-[75rem] h-[3.75rem] relative bg-white hidden max-w-full" />
        <div className="w-[75rem] h-[3.75rem] relative bg-white hidden max-w-full" />
        <FrameComponent8 />
        <FrameComponent9 />
        <FrameComponent10 />
        <Guarantee />
        <footer className="self-stretch bg-darkslateblue-200 flex flex-col items-start justify-start pt-[4.375rem] px-[0rem] pb-[0rem] box-border gap-[5.5rem] max-w-full mq925:gap-[1.375rem] mq925:pt-[2.813rem] mq925:box-border mq1350:gap-[2.75rem]">
          <div className="self-stretch h-[30.688rem] relative bg-darkslateblue-200 hidden" />
          <FooterContainer />
          <GroupComponent2 />
        </footer>
      </main>
    </div>
  );
};

export default Root;
