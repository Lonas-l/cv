import * as React from "react";
import { useTestCase } from "@lib/TestCase";

export const ContactsTestCase: React.FC = () => {
  const context = useTestCase();

  return <div>{context.toString()}</div>;
};
