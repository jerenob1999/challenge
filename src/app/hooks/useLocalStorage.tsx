'use client'
import { useState, useEffect } from "react";

const useLocalStorage = (key : any , defaultValue : any) => {
  const [storedValue, setStoredValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || (defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  function setValue (value : any) {
    try {
       setStoredValue(value) 
       localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.error(error)
    }
  }

  return [storedValue, setValue];
};

export default useLocalStorage;