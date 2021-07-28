//custom hook useEffectSkipFirstRender() that works as useEffect(), only that it doesn’t invoke the callback after initial rendering
import { useEffect, useRef } from "react";

const useEffectSkipFirstRender = (callback, dependencies) => {
  const renderRef = useRef(false);

  useEffect(() => {
    if (!renderRef.current) {
      renderRef.current = true;
      return;
    }
    callback();
  }, dependencies);
};
