import Typewriter from "react-native-typewriter";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f7fafc;
  /* background-color: red; */
  align-items: center;
  justify-content: flex-end;
`;

export const SeachArea = styled.View`
  width: 100%;
  background-color: #fbd38d;
  height: 150px;
  padding: 10px;
`;

export const SearchInput = styled.TextInput`
  width: 85%;
  /* background-color: red; */
`;

export const SearchField = styled.View`
  background-color: #f7fafc;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  padding: 5px;
`;

export const HelpText = styled(Typewriter)`
  font-size: 18px;
  color: #1a202c;
  font-weight: 500;
`;

export const ResponseText = styled.Text`
  font-size: 18px;
  color: #1a202c;
  font-weight: 500;
  text-align: justify;
`;

export const ReponseArea = styled.ScrollView`
  flex: 1;
  margin-top: 60px;
  /* background-color: #fff; */
  /* background-color: red; */
  padding: 100px 11px;
`;

export const SearchButton = styled.TouchableOpacity`
  /* width: 50px; */
  background-color: #48bb78;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const DeleteButton = styled.TouchableOpacity`
  background-color: #e53e3e;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 8px;
`;