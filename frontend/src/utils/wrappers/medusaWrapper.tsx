"use client";

import { QueryClient } from "@tanstack/react-query";
import { MedusaProvider } from "medusa-react";

export const MedusaWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl="http://localhost:9000"
    >
      {children}
    </MedusaProvider>
  );
};
