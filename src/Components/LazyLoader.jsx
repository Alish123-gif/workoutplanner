// LazyLoader.js
import React, {useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function LazyLoader({ onLoadMore }) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      onLoadMore();
    }
  }, [inView]);

  return <div ref={ref} />;
}
