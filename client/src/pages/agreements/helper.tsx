import { format } from "date-fns";
import { AgreementDocument, DocumentTypeModel } from "../../types";
import { TFunction } from "i18next";
import { translationKeys } from "../../lang/translationKeys";
import { Party } from "../../types/agreement";

export const documentTypeMapping: Record<DocumentTypeModel, string> = {
  [DocumentTypeModel.OTHER_LETTER]: "Offer Letter",
  [DocumentTypeModel.ORDER_FORM]: "Order Form",
  [DocumentTypeModel.OTHER]: "Other",
};

export const getColumns = (
  handleAction: (record: AgreementDocument) => void,
  t: TFunction<"translation", undefined>
) => [
  {
    title: t(translationKeys.NAME),
    dataIndex: "name",
    key: "name",
    render: (_: any, record: AgreementDocument) => record.data.name,
  },
  {
    title: t(translationKeys.PARTIES),
    dataIndex: "parties",
    key: "parties",
    render: (_: any, record: AgreementDocument) =>
      record.data.parties?.map((party: any) => party.name).join(", ") ?? "-",
  },
  {
    title: t(translationKeys.DOCUMENT_TYPE),
    dataIndex: "agreementType",
    key: "agreementType",
    render: (_: any, record: AgreementDocument) => {
      return (
        <div className="table-doc-type-container">
          <span className="table-doc-type">
            {documentTypeMapping[
              record.data.agreementType as DocumentTypeModel
            ] ?? "-"}
          </span>
        </div>
      );
    },
  },
  {
    title: t(translationKeys.EXPIRATION_DATE),
    dataIndex: "expirationDate",
    key: "expirationDate",
    render: (_: any, record: AgreementDocument) =>
      record.data.expirationDate
        ? format(new Date(record.data.expirationDate), "yyyy/MM/dd")
        : "-",
  },
  {
    title: t(translationKeys.ACTIONS),
    key: "actions",
    render: (_: any, record: AgreementDocument) => (
      <div>
        <button className="tableButton" onClick={() => handleAction(record)}>
          View
        </button>
      </div>
    ),
  },
];

export const getNestedValue = (obj: AgreementDocument, path: string) => {
  switch (path) {
    case "name":
      return obj.data.name;
    case "parties":
      return (
        obj.data.parties?.map((party: any) => party.name).join(", ") ?? "-"
      );
    case "agreementType":
      return (
        documentTypeMapping[obj.data.agreementType as DocumentTypeModel] ?? "-"
      );
    case "expirationDate":
      return obj.data.expirationDate
        ? new Date(obj.data.expirationDate)
        : new Date();
    default:
      return "";
  }
};
