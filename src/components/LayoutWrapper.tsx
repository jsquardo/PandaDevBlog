import SectionContainer from "./SectionContainer";
import Header from "./Header";
import { Container } from "../lib/types/common";

const LayoutWrapper = ({ children }: Container) => {
  return (
    <>
      <Header />
      <SectionContainer>
        <div className="flex flex-col justify-between min-h-screen">
          <main>{children}</main>
        </div>
      </SectionContainer>
    </>
  );
};

export default LayoutWrapper;
