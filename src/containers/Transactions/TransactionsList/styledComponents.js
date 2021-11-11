import styled from "styled-components/native";
import { colors } from "../../../library/constants/colors";

export const AllTransactionsContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${colors.dark_green};
`;
