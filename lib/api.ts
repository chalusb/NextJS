import type { Vehicle, Promotion, ApiResponse,ApiResponseTest } from "../types/api"
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;



async function fetchWithCache<T>(
  endpoint: string,
  revalidate = 3600, // Default 1 hour cache
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      next: {
        revalidate: revalidate,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return { data }
  } catch (error) {
    console.error("API Error:", error)
    return {
      data: {} as T,
      error: error instanceof Error ? error.message : "An unknown error occurred",
    }
  }
}

export async function getAllData(): Promise<ApiResponse<ApiResponseTest>> {
  return fetchWithCache<ApiResponseTest>("/api/data",900);
}

// export async function getVehicles(): Promise<ApiResponse<Vehicle[]>> {
//   return fetchWithCache<Vehicle[]>("/vehicles")
// }




