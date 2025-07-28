// hooks/useOS.ts
import { useEffect, useState } from "react";

export type OS = "Windows" | "MacOS" | "Linux" | "Unknown";

export function useOS(): OS {
  const [os, setOS] = useState<OS>("Unknown");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    if (/Windows NT/.test(userAgent)) {
      setOS("Windows");
    } else if (/Mac OS X/.test(userAgent)) {
      setOS("MacOS");
    } else if (/Linux/.test(userAgent)) {
      setOS("Linux");
    } else {
      setOS("Unknown");
    }
  }, []);

  return os;
}
