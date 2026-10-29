import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "check"
  | "check-circle"
  | "menu"
  | "close"
  | "chevron-down"
  | "network"
  | "people"
  | "shield"
  | "settings"
  | "message"
  | "target"
  | "users"
  | "handshake"
  | "layers"
  | "search"
  | "chart"
  | "link"
  | "headphones"
  | "cloud"
  | "heart"
  | "user-check"
  | "clock"
  | "activity"
  | "mail"
  | "map-pin"
  | "sparkles"
  | "database"
  | "bolt"
  | "globe"
  | "git-merge";

const icons: Record<IconName, ReactNode> = {
  "arrow-right": <><path d="M4 12h16" /><path d="m13 5 7 7-7 7" /></>,
  "arrow-up-right": <><path d="M7 17 17 7" /><path d="M7 7h10v10" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  "check-circle": <><circle cx="12" cy="12" r="9" /><path d="m8 12 2.7 2.7L16 9" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <path d="M5 5 19 19M19 5 5 19" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  network: <><rect x="2" y="9" width="7" height="6" rx="1.5" /><rect x="15" y="2" width="7" height="6" rx="1.5" /><rect x="15" y="16" width="7" height="6" rx="1.5" /><path d="M9 12h3m0 0V5h3m-3 7v7h3" /></>,
  people: <><circle cx="9" cy="7" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 4a3 3 0 0 1 0 6m1 4a5 5 0 0 1 3 5v1" /></>,
  shield: <><path d="m12 2 8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>,
  settings: <><circle cx="12" cy="12" r="3.5" /><path d="m10 2-.5 2.2-2.2.9-1.9-1.3-2.5 2.5 1.3 1.9-.9 2.2L1 11v2l2.2.5.9 2.2-1.3 1.9 2.5 2.5 1.9-1.3 2.2.9L10 22h4l.5-2.2 2.2-.9 1.9 1.3 2.5-2.5-1.3-1.9.9-2.2L23 13v-2l-2.2-.5-.9-2.2 1.3-1.9-2.5-2.5-1.9 1.3-2.2-.9L14 2z" /></>,
  message: <><path d="M20 11.5a8 8 0 0 1-8 8H6l-3 2v-6a8 8 0 1 1 17-4Z" /><path d="M7.5 10h9M7.5 14h6" /></>,
  target: <><circle cx="11" cy="13" r="9" /><circle cx="11" cy="13" r="5" /><circle cx="11" cy="13" r="1" /><path d="m13 11 8-8m-5 0h5v5" /></>,
  users: <><circle cx="8" cy="7" r="3" /><circle cx="18" cy="8" r="2.5" /><path d="M2 21v-2a6 6 0 0 1 12 0v2H2Zm14.5-8a4.5 4.5 0 0 1 5 4.5V21h-5" /></>,
  handshake: <><path d="M2 10 7 5l4 2 3-2 8 5-4 7-3-2-3 3-3-2-3 1z" /><path d="m9 12 3 2 3-2m-7 4 1 3m4-1 1 2" /></>,
  layers: <><path d="m12 2 10 6-10 6L2 8l10-6Zm-9 10 9 5 9-5M3 17l9 5 9-5" /></>,
  search: <><circle cx="10.5" cy="10.5" r="7" /><path d="m16 16 5 5" /></>,
  chart: <><path d="M3 20V4m0 16h18" /><rect x="7" y="11" width="3" height="6" rx="1" /><rect x="12" y="7" width="3" height="10" rx="1" /><rect x="17" y="3" width="3" height="14" rx="1" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1 1" /><path d="M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 1 0 12 20l1-1" /></>,
  headphones: <><path d="M3 13v-2a9 9 0 0 1 18 0v2" /><rect x="2" y="12" width="5" height="8" rx="2" /><rect x="17" y="12" width="5" height="8" rx="2" /><path d="M19 20c-1 2-4 2-6 2" /></>,
  cloud: <path d="M6 19a5 5 0 0 1-1-9.9A7 7 0 0 1 18.5 9a5 5 0 0 1-.5 10H6Z" />,
  heart: <path d="M20.8 5.7c-2-2-5.2-2-7.2 0L12 7.3l-1.6-1.6c-2-2-5.2-2-7.2 0s-2 5.2 0 7.2L12 21l8.8-8.1c2-2 2-5.2 0-7.2Z" />,
  "user-check": <><circle cx="9" cy="7" r="4" /><path d="M2 21v-3a7 7 0 0 1 12-5m2 5 2 2 4-5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l4 2" /></>,
  activity: <path d="M2 12h5l3-7 4 14 3-7h5" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  "map-pin": <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  sparkles: <><path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2ZM19 2l.8 2.2L22 5l-2.2.8L19 8l-.8-2.2L16 5l2.2-.8L19 2Z" /></>,
  database: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 4 18 4 18 0V5M3 12c0 4 18 4 18 0" /></>,
  bolt: <path d="m13 2-9 11h7l-1 9 10-12h-7l1-8Z" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c-5 5-5 13 0 18m0-18c5 5 5 13 0 18" /></>,
  "git-merge": <><circle cx="6" cy="4" r="2" /><circle cx="18" cy="7" r="2" /><circle cx="18" cy="19" r="2" /><path d="M6 6v8a5 5 0 0 0 5 5h5M8 8a6 6 0 0 0 6 6h4v-5" /></>
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {icons[name]}
    </svg>
  );
}
