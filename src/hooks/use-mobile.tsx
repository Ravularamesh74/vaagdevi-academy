import * as React from "react";

/**
 * Central breakpoint system (Tailwind-aligned)
 */
const BREAKPOINTS = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type BreakpointKey = keyof typeof BREAKPOINTS;

/**
 * Build media queries from breakpoints
 */
const queries = {
  mobile: `(max-width: ${BREAKPOINTS.md - 1}px)`,
  tablet: `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`,
  desktop: `(min-width: ${BREAKPOINTS.lg}px)`,
  portrait: `(orientation: portrait)`,
  landscape: `(orientation: landscape)`,
  reducedMotion: `(prefers-reduced-motion: reduce)`,
};

/**
 * Internal hook for a single media query
 */
function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  React.useEffect(() => {
    const media = window.matchMedia(query);

    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

/**
 * GOD HOOK 🚀
 */
export function useResponsive() {
  const isMobile = useMediaQuery(queries.mobile);
  const isTablet = useMediaQuery(queries.tablet);
  const isDesktop = useMediaQuery(queries.desktop);

  const isPortrait = useMediaQuery(queries.portrait);
  const isLandscape = useMediaQuery(queries.landscape);

  const prefersReducedMotion = useMediaQuery(queries.reducedMotion);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isPortrait,
    isLandscape,
    prefersReducedMotion,

    // raw breakpoints (power users)
    breakpoints: BREAKPOINTS,
  };
}