'use client';
import { useEffect, useState } from 'react';

/**
 * Preloads (and decodes) a list of images, returning `true` only once every
 * one is fully loaded. This lets a page fade in as a single cohesive unit
 * instead of having images pop in one at a time.
 *
 * @param {string[]} srcs - image URLs (use the `.src` of a static import)
 */
export default function usePreloadImages(srcs) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!srcs.length) {
      setLoaded(true);
      return;
    }

    let cancelled = false;

    const loadOne = (src) =>
      new Promise((resolve) => {
        const img = new window.Image();
        img.src = src;
        const done = () => resolve();
        // decode() ensures the image is ready to paint, not just downloaded
        if (img.decode) {
          img.decode().then(done, done);
        } else {
          img.onload = done;
          img.onerror = done;
        }
      });

    Promise.all(srcs.map(loadOne)).then(() => {
      if (!cancelled) setLoaded(true);
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [srcs.join('|')]);

  return loaded;
}
