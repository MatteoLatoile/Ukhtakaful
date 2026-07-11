type IconProps = {
  className?: string;
};

function base(className?: string) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };
}

export function IconMoon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M20.2 14.2A8.4 8.4 0 0 1 9.8 3.8a8.4 8.4 0 1 0 10.4 10.4Z" />
    </svg>
  );
}

export function IconStar({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 3.4l2.4 5 5.5.7-4 3.8 1 5.4-4.9-2.7-4.9 2.7 1-5.4-4-3.8 5.5-.7 2.4-5Z" />
    </svg>
  );
}

export function IconSparkle({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 4c.6 3.6 2.4 5.4 6 6-3.6.6-5.4 2.4-6 6-.6-3.6-2.4-5.4-6-6 3.6-.6 5.4-2.4 6-6Z" />
      <path d="M19 3.2c.2 1.3.9 2 2.2 2.2-1.3.2-2 .9-2.2 2.2-.2-1.3-.9-2-2.2-2.2 1.3-.2 2-.9 2.2-2.2Z" />
    </svg>
  );
}

export function IconHeart({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 20.2S4 15.3 4 9.8C4 7 6.2 5 8.6 5c1.5 0 2.7.7 3.4 1.9C12.7 5.7 13.9 5 15.4 5 17.8 5 20 7 20 9.8c0 5.5-8 10.4-8 10.4Z" />
    </svg>
  );
}

export function IconFeather({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M19.5 4.5c-4.8-1-9.8 1.6-11.9 6.2-1 2.2-1.3 4.7-1.1 7.3 2.6.2 5.1-.1 7.3-1.1 4.6-2.1 7.2-7.1 6.2-11.9l-.5-.5Z" />
      <path d="M4.5 19.5 15 9" />
    </svg>
  );
}

export function IconCloud({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M7 18a4 4 0 0 1-.6-8A5.5 5.5 0 0 1 17 8.6 3.8 3.8 0 0 1 17.5 18H7Z" />
    </svg>
  );
}

export function IconCompass({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.2 8.8-1.7 4.7-4.7 1.7 1.7-4.7 4.7-1.7Z" />
    </svg>
  );
}

export function IconLeaf({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M5 19c0-8 4-13 14-14 .5 10-4.5 14.5-11 14.2" />
      <path d="M5 19c2-4.5 5.5-8 10-10" />
    </svg>
  );
}

export function IconPuzzle({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M9.5 4.5A1.9 1.9 0 0 1 11.4 3c1 0 1.9.8 1.9 1.9 0 .3-.1.6-.2.8H16a1 1 0 0 1 1 1v2.9c.3-.1.5-.2.8-.2 1.1 0 1.9.9 1.9 1.9s-.8 1.9-1.9 1.9c-.3 0-.5-.1-.8-.2V16a1 1 0 0 1-1 1h-3.1c.1.3.2.6.2.9 0 1-.9 1.9-1.9 1.9a1.9 1.9 0 0 1-1.9-1.9c0-.3.1-.6.2-.9H7a1 1 0 0 1-1-1v-2.9c-.3.1-.5.2-.8.2-1.1 0-1.9-.9-1.9-1.9S4.1 9.5 5.2 9.5c.3 0 .5.1.8.2V7a1 1 0 0 1 1-1h2.7c-.1-.3-.2-.5-.2-.5Z" />
    </svg>
  );
}

export function IconLock({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      <path d="M12 14.5v2" />
    </svg>
  );
}

export function IconKey({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="8" cy="15.5" r="4" />
      <path d="m11 12.5 8.5-8.5M16 7.5l3 3M13.5 10l2 2" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 3.5 5 6v5.2c0 4.6 3 7.7 7 9.3 4-1.6 7-4.7 7-9.3V6l-7-2.5Z" />
      <path d="m9.2 11.8 2 2 3.6-3.8" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4.5 12h15M13.5 6l6 6-6 6" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
    </svg>
  );
}

export function IconSend({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M20.5 3.5 3.5 10.8l6 2.4 2.4 6 8.6-15.7Z" />
      <path d="M9.5 13.2 20.5 3.5" />
    </svg>
  );
}

export function IconHeadphones({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2" />
      <rect x="4" y="13.5" width="4.5" height="6.5" rx="2" />
      <rect x="15.5" y="13.5" width="4.5" height="6.5" rx="2" />
    </svg>
  );
}

export function IconCrescent({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden className={className}>
      <path d="M44 8a26 26 0 1 0 0 48 30 30 0 0 1 0-48Z" />
    </svg>
  );
}

export function IconStarFilled({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2.8c.7 4.3 2.8 6.4 7.1 7.1-4.3.7-6.4 2.8-7.1 7.1-.7-4.3-2.8-6.4-7.1-7.1 4.3-.7 6.4-2.8 7.1-7.1Z" />
    </svg>
  );
}
