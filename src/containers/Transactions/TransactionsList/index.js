import React from "react";
import { TransactionItem } from "../TransactionItem";
import { AllTransactionsContainer } from "./styledComponents";

export const TransactionsList = () => {
  return (
    <AllTransactionsContainer>
      <TransactionItem />
    </AllTransactionsContainer>
  );
};
