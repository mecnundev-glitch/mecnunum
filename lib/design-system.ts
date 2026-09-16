/**
 * MECNUN STUDIO — CREATIVE DIRECTION & DESIGN SYSTEM TOKENS
 * 
 * Brand: MECNUN
 * Roles: Computer Engineer | Web Developer | Digital Experience Developer
 * Character: Premium, Futuristic, Editorial, Minimal, Experimental, Sophisticated, Technological
 */

export const BRAND = {
  name: "MECNUN",
  domain: "mecnunum.com",
  tagline: "Himmetiyle Hizmetinizdeyiz.",
  titles: [
    "Computer Engineer",
    "Web Developer",
    "Digital Experience Developer",
  ],
  bio: "Engineering ultra-fast, visually arresting interactive digital spaces at the intersection of computer engineering, 3D WebGL technology, and editorial design.",
} as const;

export const TYPOGRAPHY = {
  fonts: {
    sans: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "var(--font-mono), 'JetBrains Mono', 'Fira Code', monospace",
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  scales: {
    display2xl: "clamp(3.5rem, 8vw + 1rem, 7.5rem)", // 56px - 120px
    displayXl: "clamp(2.75rem, 5vw + 1rem, 5rem)",    // 44px - 80px
    displayLg: "clamp(2rem, 3.5vw + 1rem, 3.5rem)",   // 32px - 56px
    heading1: "clamp(1.75rem, 2.5vw + 0.5rem, 2.75rem)",
    heading2: "clamp(1.5rem, 2vw + 0.5rem, 2.25rem)",
    heading3: "clamp(1.25rem, 1.5vw + 0.5rem, 1.75rem)",
    bodyLg: "1.125rem",   // 18px
    bodyMd: "1rem",       // 16px
    bodySm: "0.875rem",   // 14px
    caption: "0.75rem",   // 12px
    micro: "0.625rem",    // 10px
  },
  tracking: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.05em",
    widest: "0.2em",
  },
} as const;

export const SURFACES = {
  dark: {
    void: "#030304",
    base: "#08080A",
    raised: "#101014",
    overlay: "#18181F",
    glass: "rgba(16, 16, 20, 0.65)",
    border: "rgba(255, 255, 255, 0.08)",
    borderGlow: "rgba(0, 240, 255, 0.3)",
  },
  light: {
    void: "#FAFAFA",
    base: "#FFFFFF",
    raised: "#F4F4F6",
    overlay: "#EBEBEF",
    glass: "rgba(255, 255, 255, 0.75)",
    border: "rgba(0, 0, 0, 0.08)",
    borderGlow: "rgba(0, 240, 255, 0.25)",
  },
} as const;

export const PALETTE = {
  brand: {
    cyan: "#00F0FF",
    lime: "#CCFF00",
    fuchsia: "#FF007F",
    purple: "#9D00FF",
    amber: "#FFB800",
  },
  neutrals: {
    950: "#08080A",
    900: "#121216",
    800: "#1E1E24",
    700: "#2C2C34",
    600: "#4B4B58",
    500: "#6E6E80",
    400: "#9898A8",
    300: "#C4C4D2",
    200: "#E2E2EC",
    100: "#F2F2F8",
    50: "#FAFAFD",
  },
} as const;

export const GLOWS = {
  cyan: "0 0 30px rgba(0, 240, 255, 0.4), 0 0 60px rgba(0, 240, 255, 0.15)",
  lime: "0 0 30px rgba(204, 255, 0, 0.4), 0 0 60px rgba(204, 255, 0, 0.15)",
  fuchsia: "0 0 30px rgba(255, 0, 127, 0.4), 0 0 60px rgba(255, 0, 127, 0.15)",
  subtle: "0 0 20px rgba(255, 255, 255, 0.08)",
  none: "none",
} as const;

export const SHADOWS = {
  sm: "0 2px 8px -2px rgba(0, 0, 0, 0.3)",
  md: "0 8px 24px -4px rgba(0, 0, 0, 0.4)",
  lg: "0 16px 40px -8px rgba(0, 0, 0, 0.5)",
  floating: "0 24px 60px -12px rgba(0, 0, 0, 0.6)",
  glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
} as const;

export const RADII = {
  none: "0px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  full: "9999px",
} as const;

export const MOTION = {
  easings: {
    // High-fashion, snappy editorial easing
    editorial: [0.19, 1, 0.22, 1] as const,
    // Smooth magnetic spring
    spring: [0.25, 1, 0.5, 1] as const,
    // Smooth deceleration
    outExpo: [0.16, 1, 0.3, 1] as const,
    // Linear
    linear: [0, 0, 1, 1] as const,
  },
  durations: {
    fast: 0.15,
    normal: 0.3,
    medium: 0.6,
    slow: 1.0,
    deliberate: 1.6,
  },
} as const;

export const Z_INDEX = {
  behind: -1,
  canvas: 0,
  base: 10,
  overlay: 20,
  sticky: 30,
  header: 50,
  modal: 100,
  popover: 150,
  tooltip: 200,
} as const;
