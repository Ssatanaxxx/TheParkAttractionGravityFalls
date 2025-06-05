import { z } from "zod";
import { validateResponse } from "./validateResponse";

// Схема пользователя
export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email(),
});

export type User = z.infer<typeof UserSchema>;

// Получение пользователя по ID
export async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user: ${response.statusText}`);
  }
  const data = await response.json();
  return UserSchema.parse(data);
}

// Регистрация
export async function register(
  username: string,
  email: string,
  password: string
): Promise<void> {
  z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
  }).parse({ username, email, password });

  return fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  })
    .then(validateResponse)
    .then(() => undefined);
}

// Авторизация
export function login(email: string, password: string): Promise<void> {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(validateResponse)
    .then(() => undefined);
}

export function fetchMe(): Promise<User> {
  return fetch("/api/users/me")
    .then(validateResponse)
    .then((response) => response.json())
    .then((data) => UserSchema.parse(data));
}
