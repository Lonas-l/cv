import * as React from "react";

interface TestCaseContext {}

export const TestCaseContext = React.createContext<TestCaseContext>(
  {} as TestCaseContext,
);
