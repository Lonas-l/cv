import * as React from "react";
import { TestCaseContext } from "../context";

export const useTestCase = () => {
  const context = React.useContext(TestCaseContext);

  if (context === null) {
    throw new Error("useTestCase must be used within the context");
  }

  return context;
};
