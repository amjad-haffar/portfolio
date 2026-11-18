import type { CSSProperties } from 'react';
import { getGiftTheme } from './theme';

export function GiftBox({ unwrapping = false }: { unwrapping?: boolean }) {
  const theme = getGiftTheme();
  const style = { '--wrapping': theme.wrapping, '--ribbon': theme.ribbon } as CSSProperties;

  return (
    <svg className={`gift-box${unwrapping ? ' is-unwrapping' : ''}`} style={style}
      data-season={theme.season} viewBox="0 0 80 80" aria-hidden="true" focusable="false">
      <rect x="13" y="35" width="54" height="35" rx="6" fill="var(--wrapping)" />
      <path d="M36 35h9v35h-9z" fill="var(--ribbon)" />
      <g className="gift-lid">
        <path d="M40 27C18 27 20 9 30 13c6 2 10 14 10 14Zm0 0c22 0 20-18 10-14-6 2-10 14-10 14Z"
          fill="none" stroke="var(--ribbon)" strokeWidth="5" strokeLinejoin="round" />
        <rect x="9" y="26" width="62" height="14" rx="4" fill="var(--wrapping)" stroke="#600a88" strokeWidth="2" />
        <path d="M36 26h9v14h-9z" fill="var(--ribbon)" />
      </g>
    </svg>
  );
}

