import * as React from "react";
import { useTestCase } from "@lib/TestCase";

export const HardSkillsTestCase: React.FC = () => {
  const context = useTestCase();

  return <div>{context.toString()}</div>;
};
