import styled from "styled-components/native";
import { colors } from "../../library/constants/colors";

export const MainContainer = styled.SafeAreaView`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${colors.white};
`;

export const StyledMainTitle = styled.Text`
  position: absolute;
  margin-top: 3%;
  margin-left: 172px;
  font-size: 20px;
  color: ${colors.dark};
  font-weight: 700;
`;

export const StyledGreet = styled.Text`
  position: absolute;
  align-self: flex-start;
  padding-left: 20px;
  margin-top: 12%;
  font-size: 18px;
  color: ${colors.dark};
  font-weight: 200;
`;

export const StyledClientName = styled.Text`
  position: absolute;
  align-self: flex-start;
  padding-left: 20px;
  text-align: left;
  font-size: 18px;
  color: ${colors.dark};
  font-weight: 200;
`;

export const StyledCard = styled.View`
  margin: 20% auto;
  height: 22%;
  width: 85%;
  border-radius: 18px;
  background-color: ${colors.orange};
  justify-content: center;
`;

export const StyledBalanceTitle = styled.Text`
  text-align: center;
  font-size: 30px;
  color: ${colors.white};
  font-weight: 700;
  margin-bottom: 5%;
`;

export const StyledCardNumber = styled.Text`
  text-align: center;
  font-size: 50px;
  color: ${colors.white};
  font-weight: 700;
`;

export const AllTransactionsContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: greenyellow;
`;

export const StyledSubtitle = styled.Text`
  align-self: flex-start;
  text-align: left;
  margin-top: -40px;
  margin-bottom: 2%;
  margin-left: 20px;
  font-size: 18px;
  color: ${colors.dark};
  font-weight: 400;
`;

export const StyledTransactionContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
