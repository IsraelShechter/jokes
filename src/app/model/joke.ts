import { Flags } from "./flags";

export interface Joke {
  category: string;
  type: string;
  joke?: string;
  setup?: string;
  delivery?: string;
  flags: Flags;
  id: number;
  error: boolean;


}
