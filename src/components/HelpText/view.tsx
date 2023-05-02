import * as Styled from "./styles";

type HelpTextProps = {
    isLoading?: boolean
}

export const HelpText = ({ isLoading }: HelpTextProps) => {
    return (
        <Styled.Text
            typing={1}
            initialDelay={1}
        >{isLoading ? "Aguarde..." : 'Digite algo sobre o versículo que você deseja encontrar'}
        </Styled.Text>
    )
}