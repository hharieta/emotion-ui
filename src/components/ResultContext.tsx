"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ResultContextType {
  result: any;
  setResult: (result: any) => void;
}

const ResultContext = createContext<ResultContextType | undefined>(undefined);

export const useResult = () => {
  const context = useContext(ResultContext);
  if (!context) {
    throw new Error('useResult must be used within a ResultProvider');
  }
  return context;
};

export const ResultProvider = ({ children }: { children: ReactNode }) => {
  const [result, setResult] = useState<any>(null);

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  );
};
