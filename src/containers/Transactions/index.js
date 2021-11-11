import React from "react";
import AntIcon from "react-native-vector-icons/AntDesign";
import { colors } from "../../library/constants/colors";
import {
  StyledBalanceTitle,
  MainContainer,
  BackIcon,
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
  UpperSectionContainer,
} from "./styledComponents";

export const Transactions = () => {
  return (
    <MainContainer>
      <UpperSectionContainer>
        <BackIcon>
          <AntIcon name="left" color={colors.dark} size={30} />
        </BackIcon>
      </UpperSectionContainer>
      <StyledMainTitle>Transactions</StyledMainTitle>
      <StyledGreet>Good Evening</StyledGreet>
      <StyledClientName>Hancel Ávila</StyledClientName>
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
