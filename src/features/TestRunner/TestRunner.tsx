import * as React from "react";
import { TestSuitProvider } from "@lib/TestSuit";
import { AboutMeTestSuite } from "../../test-suites/about-me";

export const TestRunner: React.FC = () => {
  return (
    <>
      <TestSuitProvider>
        <AboutMeTestSuite />
      </TestSuitProvider>
    </>
  );
};
