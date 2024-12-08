import * as React from "react";
import { TestCaseContext } from "./TestCaseContext";

export const TestCaseProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const context = {};

  return (
    <TestCaseContext.Provider value={context}>
      {children}
    </TestCaseContext.Provider>
  );
};
