// API Client for backend Golang integration

import { APIError, createAPIError } from '../utils/errors';

// Use NEXT_PUBLIC_API_BASE as the single source for backend base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8080';

class APIClient {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      // Handle different HTTP status codes
      if (!response.ok) {
        let errorData: any = {};
        let errorMessage = `API Error: ${response.statusText}`;
        
        try {
          errorData = await response.json();
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch {
          // If response is not JSON, use status text
          errorMessage = response.statusText || `HTTP ${response.status}`;
        }

        // Create specific error based on status code
        throw createAPIError(
          errorMessage,
          response.status,
          response.statusText,
          errorData
        );
      }

      const data = await response.json();
      
      // Handle API response wrapper
      if (data.success !== undefined) {
        if (!data.success) {
          throw createAPIError(
            data.error || data.message || 'API request failed',
            400, // Treat as bad request if success is false
            'Bad Request',
            data
          );
        }
        return data.data as T;
      }
      
      return data as T;
    } catch (error) {
      // Re-throw APIError as-is
      if (error instanceof APIError) {
        throw error;
      }
      
      // Handle network errors (fetch failed, CORS, etc.)
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw createAPIError(
          'Network error: Unable to connect to the server. Please check if the backend is running.',
          0,
          'Network Error'
        );
      }
      
      // Handle other errors
      if (error instanceof Error) {
        throw createAPIError(
          error.message,
          0,
          'Unknown Error'
        );
      }
      
      throw createAPIError(
        'Unknown error occurred',
        0,
        'Unknown Error'
      );
    }
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }
}

export const apiClient = new APIClient();

