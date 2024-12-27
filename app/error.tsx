'use client';

import { Button } from '@/components/Button';
import { useEffect } from 'react';
import { ImWondering } from "react-icons/im";


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4 w-full">
      <h2 className="text-2xl font-bold flex flex-row justify-between items-center gap-5">Something went wrong {<ImWondering/>}</h2>
      <Button
        text='Try again'
        onAction={reset}
        borderBottom={true}
      />
    </div>
  );
}