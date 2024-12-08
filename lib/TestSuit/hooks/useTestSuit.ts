import * as React from "react";
import { TestSuitContext } from "../context/TestSuitContext";

export const useTestSuit = () => {
  const context = React.useContext(TestCaseContext);

  if (context === null) {
    throw new Error("useTestCase must be used within the context");
  }

  return context;
};
