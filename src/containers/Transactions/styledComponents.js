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
  margin-top: 30px;
  margin-left: 172px;
  font-size: 20px;
  color: ${colors.dark};
  font-weight: 700;
`;

export const StyledCard = styled.View`
  margin: 20% auto;
  height: 25%;
  width: 85%;
  border-radius: 18px;
  background-color: ${colors.orange};
  padding: 10px;
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
