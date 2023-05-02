import styled from "styled-components/native";

export const ResponseText = styled.Text`
  font-size: 18px;
  color: #2d3748;
  font-weight: 500;
  text-align: justify;
`;

export const ResponseContainer = styled.View`
  background-color: #e2e8f0;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #cbd5e0;
`;

export const CopyButton = styled.TouchableOpacity`
  margin-top: 15px;
  flex-direction: row;
  background-color: #4299e1;
  padding: 8px;
  gap: 10px;
  border-radius: 8px;
  width: 100px;
`;

export const CopyText = styled.Text`
  font-size: 14px;
  color: #edf2f7;
  font-weight: 400;
  width: 50px;
`;
