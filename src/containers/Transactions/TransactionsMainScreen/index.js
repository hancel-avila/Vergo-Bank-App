import React from "react";
import AntIcon from "react-native-vector-icons/AntDesign";
import { colors } from "../../../library/constants/colors";
import { TransactionsList } from "../TransactionsList";
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

export const account1 = {
  owner: "Hancel Ávila",
  transactions: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],

  transactionsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2021-04-15T14:11:59.604Z",
    "2021-04-17T17:01:17.194Z",
    "2021-04-21T23:36:17.929Z",
    "2021-04-22T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

export const TransactionsMainScreen = () => {
  return (
    <MainContainer>
      <UpperSectionContainer>
        <BackIcon>
          <AntIcon name="left" color={colors.dark} size={30} />
        </BackIcon>
      </UpperSectionContainer>
      <StyledMainTitle>Transactions</StyledMainTitle>
      <StyledGreet>Good Evening</StyledGreet>
      <StyledClientName>Client Name</StyledClientName>
      <StyledCard>
        <StyledBalanceTitle>Balance</StyledBalanceTitle>
        <StyledCardNumber>$3,000</StyledCardNumber>
      </StyledCard>
      <StyledSubtitle>All Transactions</StyledSubtitle>

      <TransactionsList />
    </MainContainer>
  );
};
