export interface ExternalSource {
    sourceName: string;
    externalSourceId: string;
}

export interface Recipient {
    email: string;
    phone: string | null;
    userId: string;
}

export interface Sender {
    userId: string;
}

export interface Envelope {
    id: string;
    recipients: Recipient[];
    sender: Sender;
    subject: string;
}

export interface Party {
    id: string;
    name: string;
}

export interface Data {
    envelope: Envelope;
    agreementType: string;
    effectiveDate?: string;
    expirationDate?: string;
    extractionStatus: string;
    name: string;
    parties?: Party[];
}

export interface AgreementDocument {
    id: string;
    version: string;
    createdAt: string;
    modifiedAt: string;
    documentStorageId: string;
    externalSource: ExternalSource;
    etag: number;
    data: Data;
}

export interface MockedData {
    ctoken: string | null;
    agreementDocuments: AgreementDocument[];
}


export enum DocumentTypeModel {
    OTHER_LETTER = 'OfferLetterDocumentData',
    OTHER = 'OtherDocumentData',
    ORDER_FORM = 'OrderFormDocumentData',
}