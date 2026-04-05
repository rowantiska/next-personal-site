'use client';
import { useEffect, useRef, useState } from 'react';

const BASE_FONT = 14;        // px — render at this size, then scale
const CHAR_W = BASE_FONT * 0.6;
const COLS = 120;
const ROWS = 48;
const LINE_H = BASE_FONT * 1.1;

export default function AsciiBackground({ onReady }) {
  const [frames, setFrames] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [frameRate, setFrameRate] = useState(12);
  const [looping, setLooping] = useState(true);
  const [scale, setScale] = useState({ x: 1, y: 1 });
  const intervalRef = useRef(null);

  useEffect(() => {
    fetch('/animation.json')
      .then(r => r.json())
      .then(data => {
        setFrames(data.frames);
        setFrameRate(data.animation.frameRate || 12);
        setLooping(true);
        onReady?.();
      });
  }, []);

  useEffect(() => {
    function updateScale() {
      const pad = 1.05; // overshoot slightly to eliminate edge gaps
      setScale({
        x: (window.innerWidth  / (COLS * CHAR_W)) * pad,
        y: (window.innerHeight / (ROWS * LINE_H)) * pad,
      });
    }
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  useEffect(() => {
    if (!frames.length) return;
    intervalRef.current = setInterval(() => {
      setCurrentFrame(f => {
        if (f + 1 >= frames.length) return looping ? 0 : f;
        return f + 1;
      });
    }, 1000 / frameRate);
    return () => clearInterval(intervalRef.current);
  }, [frames, frameRate, looping]);

  const frame = frames[currentFrame];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: -1,
      backgroundColor: '#000000',
    }}>
      {frame && (
        <pre style={{
          position: 'absolute',
          top: 0,
          left: 0,
          margin: 0,
          fontFamily: 'monospace',
          fontSize: `${BASE_FONT}px`,
          lineHeight: `${LINE_H}px`,
          color: '#ffffff',
          opacity: 0.20,
          whiteSpace: 'pre',
          transformOrigin: 'top left',
          transform: `scale(${scale.x}, ${scale.y})`,
          pointerEvents: 'none',
          userSelect: 'none',
        }}>
          {frame.content.join('\n')}
        </pre>
      )}
    </div>
  );
}
