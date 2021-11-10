import React from "react";
import { View, Text } from "react-native";
import {
  StyledBalanceTitle,
  MainContainer,
  StyledCard,
  StyledCardNumber,
  StyledMainTitle,
} from "./styledComponents";

export const Transactions = () => {
  return (
    <MainContainer>
      <StyledMainTitle>Home</StyledMainTitle>
      <StyledCard>
        <StyledBalanceTitle>Balance</StyledBalanceTitle>
        <StyledCardNumber>$3,000</StyledCardNumber>
      </StyledCard>
    </MainContainer>
  );
};
