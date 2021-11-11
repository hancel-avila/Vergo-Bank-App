import React from "react";

import {
  AllTransactionsContainer,
  StyledTransactionContainer,
  StyledTransactionTitle,
  StyledTransactionDate,
  StyledTransactionType,
  StyledTransactionValue,
  StyledTransactionDetailsContainer,
  StyledSubtitle,
} from "./styledComponents";

export const TransactionsList = () => {
  return (
    <AllTransactionsContainer>
      <StyledTransactionContainer>
        <StyledTransactionTitle>Concept here</StyledTransactionTitle>
        <StyledTransactionDetailsContainer>
          <StyledTransactionDate>Date</StyledTransactionDate>
          <StyledTransactionType>Type</StyledTransactionType>
          <StyledTransactionValue>-$500</StyledTransactionValue>
        </StyledTransactionDetailsContainer>
      </StyledTransactionContainer>
    </AllTransactionsContainer>
  );
};
