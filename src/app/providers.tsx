'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

export default function Providers({ children }: { children: React.ReactNode }) {
  // Create a client for the react-query provider
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>{children}</RecoilRoot>
      </QueryClientProvider>
    </>
  );
}
