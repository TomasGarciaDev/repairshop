import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function usePolling(
  searchParams: string | null,
  ms: number = 60000
) {
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Interval running");
      if (!searchParams) {
        console.log("refreshing data");
        router.refresh();
      }
    }, ms);

    return () => clearInterval(intervalId);
  }, [searchParams, ms]); // eslint-disable-line react-hooks/exhaustive-deps
}
