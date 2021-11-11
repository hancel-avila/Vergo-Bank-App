import styled from "styled-components/native";
import { colors } from "../../../library/constants/colors";

export const MainContainer = styled.SafeAreaView`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${colors.light_blue};
`;

export const UpperSectionContainer = styled.View`
  display: flex;
  align-items: flex-end;
  align-self: flex-start;
`;

export const BackIcon = styled.View`
  justify-content: flex-end;
  margin: 2%;
`;

export const StyledMainTitle = styled.Text`
  position: absolute;
  margin-top: 8%;
  font-size: 20px;
  color: ${colors.dark};
  font-weight: 700;
`;

export const StyledGreet = styled.Text`
  align-self: flex-start;
  padding-left: 20px;
  margin-top: 5%;
  font-size: 18px;
  color: ${colors.dark};
  font-weight: 700;
`;

export const StyledClientName = styled.Text`
  align-self: flex-start;
  padding-left: 20px;
  text-align: left;
  font-size: 18px;
  color: ${colors.medium_gray};
  font-weight: 700;
`;

export const StyledCard = styled.View`
  margin: 7% auto;
  height: 22%;
  width: 85%;
  border-radius: 18px;
  background-color: ${colors.purlpe};
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

export const StyledSubtitle = styled.Text`
  align-self: flex-start;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 2%;
  margin-left: 20px;
  font-size: 18px;
  color: ${colors.dark};
  font-weight: 700;
`;
