import { AgreementDocument } from "../../../types";

export interface AgreementDocumentsState {
  ctoken: string | null;
  agreements: AgreementDocument[];
  loading: boolean;
  error: string | undefined;
}
