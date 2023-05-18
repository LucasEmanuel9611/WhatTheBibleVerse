import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f7fafc;
  align-items: center;
  justify-content: flex-end;
`;

export const SearchArea = styled.View`
  width: 100%;
  height: 150px;
  padding: 10px;
`;

export const SearchInput = styled.TextInput`
  width: 85%;
`;

export const SearchField = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 2px solid #c8c8c8;
  border-radius: 50px;
  padding: 5px;
`;

export const TextArea = styled.ScrollView`
  margin-top: 60px;
  padding: 0px 8px;
  width: 100%;
  height: 100%;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: #48bb78;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const DeleteButton = styled.TouchableOpacity`
  background-color: #e53e3e;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 8px;
`;

export const AdContainer = styled.View`
  width: 100%;
  margin-top: 10px;
  align-items: center;
`;
