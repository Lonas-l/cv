import * as React from 'react';

export interface TestSuitContext {};

export const TestSuitContext = React.createContext<TestSuitContext>({} as TestSuitContext);