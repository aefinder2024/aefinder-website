import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { useCallback, useEffect } from 'react';

import { queryAuthToken } from '@/api/apiUtils';
import { NoAuthToken } from '@/constant';

export default function LoginProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  const queryAuth = useCallback(async () => {
    const res = await queryAuthToken();
    if (res === NoAuthToken) {
      router.push(`/login`);
    }
  }, [router]);

  useEffect(() => {
    queryAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return <>{children}</>;
}
