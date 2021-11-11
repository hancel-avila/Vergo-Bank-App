import React from "react";
import { View, Text } from "react-native";
import {
  StyledBalanceTitle,
  MainContainer,
  StyledCard,
  StyledCardNumber,
  StyledMainTitle,
  StyledSubtitle,
  AllTransactionsContainer,
  StyledTransactionContainer,
  StyledTransactionTitle,
  StyledTransactionDate,
  StyledTransactionType,
  StyledTransactionValue,
  StyledTransactionDetailsContainer,
  StyledGreet,
  StyledClientName,
} from "./styledComponents";

export const Transactions = () => {
  return (
    <MainContainer>
      <StyledMainTitle>Transactions</StyledMainTitle>
      <StyledGreet>
        Hello,
        <StyledClientName> Client</StyledClientName>
      </StyledGreet>
      <StyledCard>
        <StyledBalanceTitle>Balance</StyledBalanceTitle>
        <StyledCardNumber>$3,000</StyledCardNumber>
      </StyledCard>
      <StyledSubtitle>All Transactions</StyledSubtitle>
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
    </MainContainer>
  );
};
