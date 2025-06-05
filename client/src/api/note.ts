import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { validateResponse } from "./validateResponse";

export const NoteSchema = z.object({
  id: z.string(),
  title: z.string(),
  text: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Note = z.infer<typeof NoteSchema>;

export const NoteListSchema = z.array(NoteSchema);

export type NoteList = z.infer<typeof NoteListSchema>;

export async function fetchNoteList(): Promise<NoteList> {
  const response = await fetch("/api/notes");
  const data = await response.json();
  return NoteListSchema.parse(data);
}

export function useNoteList() {
  return useQuery({
    queryKey: ["notes"],
    queryFn: fetchNoteList,
  });
}

export async function createNote(title: string, text: string): Promise<void> {
  const response = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title.trim(),
      text: text.trim(),
    }),
  });

  await validateResponse(response);
}