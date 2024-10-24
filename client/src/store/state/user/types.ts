import { Lang, UserType } from "../../../types";

export interface UserState {
  user?: UserType;
  lang: Lang;
  loading: boolean;
  error: string | null;
}
