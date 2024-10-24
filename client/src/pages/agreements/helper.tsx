import { format } from "date-fns";
import { AgreementDocument, DocumentTypeModel } from "../../types";

export const documentTypeMapping: Record<DocumentTypeModel, string> = {
  [DocumentTypeModel.OTHER_LETTER]: "Offer Letter",
  [DocumentTypeModel.ORDER_FORM]: "Order Form",
  [DocumentTypeModel.OTHER]: "Other",
};

export const getColumns = (
  handleAction: (record: AgreementDocument) => void
) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_: any, record: AgreementDocument) => record.data.name,
  },
  {
    title: "Parties",
    dataIndex: "parties",
    key: "parties",
    render: (_: any, record: AgreementDocument) =>
      record.data.parties?.map((party: any) => party.name).join(", ") || "-",
  },
  {
    title: "Document Type",
    dataIndex: "agreementType",
    key: "agreementType",
    render: (_: any, record: AgreementDocument) => {
      const agreementType = record.data.agreementType as DocumentTypeModel;
      return documentTypeMapping[agreementType] || "-";
    },
  },
  {
    title: "Expiration Date",
    dataIndex: "expirationDate",
    key: "expirationDate",
    render: (_: any, record: AgreementDocument) =>
      record.data.expirationDate
        ? format(new Date(record.data.expirationDate), "yyyy/MM/dd")
        : "-",
  },
  {
    title: "",
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
