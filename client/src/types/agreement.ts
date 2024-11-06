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
    extractionReview?: string; //TODO: ajust
    aliasGroup?: string; //TODO: ajust
    fieldMetadata?: string; //TODO: ajust
    reference?: string; //TODO: ajust
}

export interface Data {
    agreementType: string;
    clmLegacyCustomAttributes: string; //TODO: ajust
    effectiveDate?: string;
    envelope: Envelope;
    etag: string; //TODO: ajust
    expirationDate?: string;
    extractionStatus: string;
    governingLaw: string;
    name: string;
    parties?: Party[];
    paymentTerms?: string; //TODO: ajust
    renewal?: string; //TODO: ajust
    terminationNoticePeriod?: string; //TODO: ajust
    terminations?: string; //TODO: ajust
    totalValue?: string; //TODO: ajust
}

export interface AgreementDocument {
    id: string;
    file_name: string;
    type: string;
    category: string;
    status: string;
    parties?: {
      id: string;
      name_in_agreement: string;
    }[];
    provisions?: {
      effective_date?: string;
      expiration_date?: string;
      execution_date?: string;
      payment_terms_due_date?: string;
      assignment_type?: string;
    };
    related_agreement_documents?: Record<string, unknown>;
    source_name: string;
    source_id: string;
    metadata: {
      created_at: string;
      modified_at: string;
      modified_by: string;
    };
    additional_custom_esign_data?: {
      [key: string]: {
        label: string;
        value: string;
        $class: string;
        valueString: string;
      };
    };
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