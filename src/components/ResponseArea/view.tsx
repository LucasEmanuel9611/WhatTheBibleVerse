import { FontAwesome5 } from "@expo/vector-icons";
import * as Clipboard from 'expo-clipboard';
import * as Styled from "./styles";

type ResponseAreaProps = {
    response: string | null
}

export const ResponseArea = ({ response }: ResponseAreaProps) => {

    const handleCopy = async (textToCopy: string) => {
        await Clipboard.setStringAsync(textToCopy);
    }

    return (
        <Styled.ResponseContainer>
            <Styled.ResponseText>{response}</Styled.ResponseText>
            <Styled.CopyButton onPress={() => handleCopy(response ?? '')}>
                <FontAwesome5 name="paperclip" size={20} color="#EDF2F7" />
                <Styled.CopyText>Copiar</Styled.CopyText>
            </Styled.CopyButton>
        </Styled.ResponseContainer>
    )
}