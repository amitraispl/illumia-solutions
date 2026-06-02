const TOKEN_KEY = "admin_token";

export const getToken = (): string | null =>
  typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;

export const setToken = (token: string): void => {
  if (typeof window !== "undefined") localStorage.setItem(TOKEN_KEY, token);
};

export const clearToken = (): void => {
  if (typeof window !== "undefined") localStorage.removeItem(TOKEN_KEY);
};

export const authHeaders = (): Record<string, string> => {
  const token = getToken();
  const base = { "Content-Type": "application/json" };
  return token ? { ...base, Authorization: `Bearer ${token}` } : base;
};

// API envelopes payloads as { success, data, message }. Unwrap `data`,
// falling back to the raw body for endpoints that return it flat.
export const unwrap = <T>(body: unknown): T => {
  if (body && typeof body === "object" && "data" in body) {
    return (body as { data: T }).data;
  }
  return body as T;
};
