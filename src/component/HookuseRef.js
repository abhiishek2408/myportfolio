/**
📘 4. useRef — Persist Values Without Re-rendering
✅ Use-Case: Used to access DOM elements or keep mutable values (like setTimeout IDs).
 */

import React, { useRef, useEffect } from 'react';

function InputFocus() {
  const inputRef = useRef(null);  // Step 1: Create ref

  useEffect(() => {
    inputRef.current.focus();  // Step 2: Focus input after render
  }, []);

  return <input ref={inputRef} placeholder="Auto-focused input" />;
}
