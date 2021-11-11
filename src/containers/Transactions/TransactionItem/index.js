import React from "react";

import {
  StyledTransactionContainer,
  StyledTransactionTitle,
  StyledTransactionDate,
  StyledTransactionType,
  StyledTransactionValue,
  StyledTransactionDetailsContainer,
} from "./styledComponents";

export const TransactionItem = () => {
  return (
    <StyledTransactionContainer>
      <StyledTransactionTitle>Concept here</StyledTransactionTitle>
      <StyledTransactionDetailsContainer>
        <StyledTransactionDate>Date</StyledTransactionDate>
        <StyledTransactionType>Type</StyledTransactionType>
        <StyledTransactionValue>-$500</StyledTransactionValue>
      </StyledTransactionDetailsContainer>
    </StyledTransactionContainer>
  );
};
