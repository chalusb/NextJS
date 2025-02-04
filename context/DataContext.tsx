"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllData } from "@/lib/api";
import type { ApiResponseTest } from "@/types/api";

interface DataContextType {
  data: ApiResponseTest | null;
  isLoading: boolean;
  error: string | null;
}

// Crear contexto
const DataContext = createContext<DataContextType | undefined>(undefined);
const DISABLE_API = process.env.NEXT_PUBLIC_DISABLE_API === "true";

// Hook para usar el contexto
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData debe usarse dentro de DataProvider");
  }
  return context;
}

// Proveedor del contexto
export function DataProvider({ children }: { children: React.ReactNode }) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["allData"],
    queryFn: DISABLE_API ? async () => null : getAllData,
    staleTime: 5000, 
    refetchInterval: 5000, 
    // staleTime: 1000 * 60 * 60, //  1 hora (60 minutos)
    // refetchInterval: 1000 * 60 * 60, // Fuerza la consulta a la API cada 1 hora
  });

  return (
    <DataContext.Provider value={{
        data: data?.data || null, 
        isLoading,
        error: error instanceof Error ? error.message : null, 
      }}>
        {children}
      </DataContext.Provider>
  );
}
