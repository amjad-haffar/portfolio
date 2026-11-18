import { useEffect, useRef, useState } from 'react';
import { gifts } from './data';
import { GiftBox } from './GiftBox';
import { GiftContent } from './GiftContent';
import { giftMessage, selectGift } from './selection';
import './gifts.css';

export function FloatingGift() {
  const [progress, setProgress] = useState<{ openedIds: string[] }>({ openedIds: [] });
  const [visible, setVisible] = useState(false);
  const [introDismissed, setIntroDismissed] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [unwrapping, setUnwrapping] = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);
  const [activeId, setActiveId] = useState(() => progress.openedIds.at(-1));
  const trigger = useRef<HTMLButtonElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const opening = useRef(false);
  const unwrapTimer = useRef<ReturnType<typeof setTimeout>>();
  const opened = gifts.filter((gift) => progress.openedIds.includes(gift.id));
  const remaining = gifts.length - opened.length;
  const activeGift = opened.find((gift) => gift.id === activeId) ?? opened.at(-1);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => {
      clearTimeout(timer);
      clearTimeout(unwrapTimer.current);
    };
  }, []);



  useEffect(() => {
    if (expanded) heading.current?.focus();
  }, [expanded, activeId, collectionOpen]);

  function dismissIntro() {
    setIntroDismissed(true);
  }

  function minimise() {
    setExpanded(false);
    trigger.current?.focus();
  }

  function unwrap() {
    if (opening.current) return;
    const openedIds = progress.openedIds;
    const gift = selectGift(gifts, openedIds);
    if (!gift) return;
    opening.current = true;
    dismissIntro();
    setUnwrapping(true);
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 500;
    unwrapTimer.current = setTimeout(() => {
      setProgress((current) => ({
        openedIds: [...new Set([...current.openedIds, ...openedIds, gift.id])],
      }));
      setActiveId(gift.id);
      setCollectionOpen(false);
      setUnwrapping(false);
      opening.current = false;
      setExpanded(true);
    }, duration);
  }

  function toggle() {
    if (expanded) return minimise();
    dismissIntro();
    if (activeGift || remaining === 0) setExpanded(true);
    else unwrap();
  }

  if (!visible) return null;

  return (
    <aside className="floating-gift" aria-label="A little gift"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && expanded) {
          event.stopPropagation();
          minimise();
        }
      }}>
      {!introDismissed && !expanded && (
        <div className="gift-intro">
          <p>Psst... I have a little something for you.</p>
          <button type="button" onClick={dismissIntro} aria-label="Dismiss gift introduction">×</button>
        </div>
      )}
      {expanded && (
        <section className="gift-panel" id="gift-panel" aria-labelledby="gift-heading">
          <header className="gift-panel-header">
            <span role="status">{unwrapping ? 'Unwrapping a little surprise…' : giftMessage(opened.length, remaining)}</span>
            <button type="button" onClick={minimise} aria-label="Minimise gifts">−</button>
          </header>
          <h2 id="gift-heading" ref={heading} tabIndex={-1}>
            {collectionOpen ? 'Your little collection' : activeGift?.title ?? 'All unwrapped'}
          </h2>
          {collectionOpen ? (
            <ul className="gift-collection">
              {opened.map((gift) => (
                <li key={gift.id}><button type="button" onClick={() => {
                  setActiveId(gift.id);
                  setCollectionOpen(false);
                }}>{gift.title}</button></li>
              ))}
            </ul>
          ) : activeGift && <GiftContent gift={activeGift} />}
          <div className="gift-actions">
            {remaining > 0 && (
              <button type="button" className="gift-more" disabled={unwrapping} onClick={unwrap}>Okay, one more</button>
            )}
            {remaining === 0 && opened.length > 0 && (
              <button type="button" onClick={() => setCollectionOpen(!collectionOpen)}>
                {collectionOpen ? 'Back to gift' : `Your gifts (${opened.length})`}
              </button>
            )}
          </div>
        </section>
      )}
      <button className="gift-trigger" type="button" ref={trigger} onClick={toggle}
        disabled={unwrapping} aria-label={expanded ? 'Minimise gifts' : activeGift ? 'Reopen your gifts' : 'Open a little gift'}
        aria-expanded={expanded} aria-controls={expanded ? 'gift-panel' : undefined}>
        <GiftBox unwrapping={unwrapping} />
      </button>
    </aside>
  );
}

