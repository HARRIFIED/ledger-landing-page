type LogoProps = {
  size?: number;
  className?: string;
};

/**
 * Harrified Ledger mark: a hexagonal "core" enclosing two balanced bars — the equals
 * sign of double-entry bookkeeping (debits == credits), the engine's core invariant.
 */
export function LogoMark({ size = 32, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Harrified Ledger logo"
      className={className}
    >
      <defs>
        <linearGradient
          id="ledgerMarkGrad"
          x1="5"
          y1="4"
          x2="27"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#34d399" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
        <mask id="ledgerMarkCut">
          <rect width="32" height="32" fill="white" />
          <rect x="9" y="12.7" width="14" height="2.3" rx="1.15" fill="black" />
          <rect x="9" y="17" width="14" height="2.3" rx="1.15" fill="black" />
        </mask>
      </defs>
      <path
        d="M16 4.5 L26 10.25 L26 21.75 L16 27.5 L6 21.75 L6 10.25 Z"
        fill="url(#ledgerMarkGrad)"
        mask="url(#ledgerMarkCut)"
      />
    </svg>
  );
}

export function Wordmark({ size = 32 }: LogoProps) {
  return (
    <span className="wordmark">
      <LogoMark size={size} />
      <span className="wordmark-text">
        Harrified <span className="wordmark-accent">Ledger</span>
      </span>
    </span>
  );
}
