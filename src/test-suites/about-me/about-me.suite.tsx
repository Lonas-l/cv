import { useTestSuit } from "@lib/TestSuit";
import * as React from "react";
import { TestCaseProvider } from "@lib/TestCase";
import { ContactsTestCase } from "./test-cases/contacts";
import { HardSkillsTestCase } from "./test-cases/hard-skills";

export const AboutMeTestSuite: React.FC = () => {
  const context = useTestSuit();

  console.log(context);

  return (
    <>
      <TestCaseProvider>
        <ContactsTestCase />
      </TestCaseProvider>

      <TestCaseProvider>
        <HardSkillsTestCase />
      </TestCaseProvider>
    </>
  );
};
