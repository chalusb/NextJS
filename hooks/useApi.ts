"use client"

import { useState, useEffect } from "react"
import type { ApiResponseTest } from "../types/api"
import { getAllData } from "@/lib/api";

export function useAllData() {
  const [data, setData] = useState<ApiResponseTest | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllData();
        if (response.error) {
          setError(response.error);
        } else {
          setData(response.data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
}

