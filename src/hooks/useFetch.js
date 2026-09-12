import { useState, useEffect } from "react";

export function useFetch(fetchFn, deps = []) {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading"); // "loading" | "success" | "error"
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        setStatus("loading");
        const result = await fetchFn();
        if (!ignore) {
          setData(result);
          setStatus("success");
        }
      } catch (err) {
        if (!ignore) {
          setError(err);
          setStatus("error");
        }
      }
    }

    load();

    return () => {
      ignore = true; // cleanup: discard this request's result if the effect re-runs or unmounts first
    };
  }, deps);

  return { data, status, error };
}