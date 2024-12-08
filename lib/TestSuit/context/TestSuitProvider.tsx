import * as React from "react";
import { TestSuitContext } from "./TestSuitContext";

export const TestSuitProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const context = {};

  return (
    <TestSuitContext.Provider value={context}>
      {children}
    </TestSuitContext.Provider>
  );
};
