'use client';

import { useCallback, useEffect, useState } from 'react';

export function ProjectGallery({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const currentIndex = activeIndex ?? 0;

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(() => {
    setActiveIndex((index) => {
      if (index === null) return index;
      return index === 0 ? images.length - 1 : index - 1;
    });
  }, [images.length]);
  const showNext = useCallback(() => {
    setActiveIndex((index) => {
      if (index === null) return index;
      return index === images.length - 1 ? 0 : index + 1;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex, close, showNext, showPrevious]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="project-gallery" aria-label="Project screenshots">
        {images.map((image, index) => (
          <button
            className="project-gallery__item"
            type="button"
            key={image}
            onClick={() => setActiveIndex(index)}
          >
            <img src={image} alt={`Project screenshot ${index + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Project screenshot carousel">
          <button className="lightbox__backdrop" type="button" aria-label="Close gallery" onClick={close} />
          <div className="lightbox__panel">
            <button className="lightbox__close" type="button" aria-label="Close gallery" onClick={close}>
              ×
            </button>
            {images.length > 1 ? (
              <button className="lightbox__nav lightbox__nav--prev" type="button" aria-label="Previous screenshot" onClick={showPrevious}>
                ←
              </button>
            ) : null}
            <img src={activeImage} alt={`Project screenshot ${currentIndex + 1}`} />
            {images.length > 1 ? (
              <button className="lightbox__nav lightbox__nav--next" type="button" aria-label="Next screenshot" onClick={showNext}>
                →
              </button>
            ) : null}
            <p className="lightbox__count">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
