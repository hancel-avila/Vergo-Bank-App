import styled from "styled-components/native";
import { colors } from "../../../library/constants/colors";

export const StyledTransactionContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid ${colors.gray};
  margin-top: 10px;
  margin-bottom: 10px;
  height: 10%;
  width: 90%;
  border-radius: 10px;
  background-color: ${colors.white};
  padding: 10px;
`;

export const StyledTransactionTitle = styled.Text`
  font-size: 18px;
  color: ${colors.dark};
  font-weight: 700;
  margin-bottom: 1%;
`;

export const StyledTransactionDetailsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 10px;
  /* background-color: blue; */
  width: 100%;
`;

export const StyledTransactionDate = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${colors.dark};
  font-weight: 400;
`;

export const StyledTransactionType = styled.Text`
  text-align: center;
  font-size: 18px;
  color: ${colors.dark};
  font-weight: 400;
`;

export const StyledTransactionValue = styled.Text`
  text-align: right;
  font-size: 18px;
  font-weight: 400;
  margin-right: 20px;
  color: ${(prop) => (prop.deposit ? colors.green : colors.red)};
`;
