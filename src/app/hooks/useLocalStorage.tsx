"use client";
import { useState } from "react";

function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window !== "undefined") {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : defaultValue;
      }
    } catch (error) {
      console.error(error);
    }
    return defaultValue;
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
