import { useState } from "react";

export default function useFetchData() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [result, setResult] = useState(null);

  async function fetchData(name) {
    const url = `https://api.github.com/users/${name}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const result = await response.json();
      setResult(result);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  }

  return { isLoading, isError, result, fetchData };
}
