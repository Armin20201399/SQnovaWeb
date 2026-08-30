import { Suspense } from 'react';
import type { ReactNode } from 'react';

type Props = { children: ReactNode };

export function AsyncSection({ children }: Props) {
  return (
    <Suspense fallback={<section aria-hidden="true" style={{ minHeight: 500 }} />}>
      {children}
    </Suspense>
  );
}