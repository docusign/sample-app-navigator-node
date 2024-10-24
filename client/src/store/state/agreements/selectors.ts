import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../..";

export const getAgreementsBubbleSelector = createSelector(
    (state: RootState) => state.agreements.agreements,
    (agreements) => {
        return agreements;
    }
);

export const getAgreementByIdSelector = (agreementId: string | undefined) =>
    createSelector(
        (state: RootState) => state.agreements.agreements,
        (agreements) => agreements.find(agreement => agreement.id === agreementId)
    );