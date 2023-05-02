import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { HelpText } from '../../components/HelpText/view';
import { ResponseArea } from '../../components/ResponseArea/view';
import * as Styled from "./styles";

export const Home = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResponse, setSearchResponse] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const API_KEY = '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';

    const buscarVersiculos = async (verseDescription: string) => {
        setIsLoading(true);
        axios.post('https://api.openai.com/v1/chat/completions', {
            messages: [{ role: "user", content: `Qual o versículo da Bíblia com as seguintes características: ${verseDescription.trim()}. Se possível cite apenas um trecho curto e cite a versão` }],
            temperature: 0.5,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            model: "gpt-3.5-turbo",
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        })
            .then(res => {
                Keyboard.dismiss()
                console.log(res.data.choices[0].message.content)
                setSearchResponse(res.data.choices[0].message.content)
            })
            .catch(error => {
                Alert.alert(error.message ?? error);
                return null;
            }).finally(() => {
                setIsLoading(false);
            })
    }

    const clearSearch = () => {
        setSearchTerm('')
        setSearchResponse(null)
    }

    return (
        <Styled.Container>
            <StatusBar style='dark' />
            <Styled.TextArea>
                {searchResponse ?
                    <ResponseArea response={searchResponse} />
                    :
                    <HelpText isLoading={isLoading} />
                }
            </Styled.TextArea>
            <Styled.SearchArea>
                {searchResponse ?
                    <Styled.DeleteButton onPress={clearSearch}>
                        <FontAwesome5 name="trash" size={20} color="#f7fafc" />
                    </Styled.DeleteButton>
                    :
                    <Styled.SearchField>
                        <Styled.SearchInput value={searchTerm} onChangeText={(e) => setSearchTerm(e)} placeholder='Qual o versiculo que fala sobre...' />
                        <Styled.SearchButton onPress={() => buscarVersiculos(searchTerm)} >
                            <FontAwesome5 name="search" size={20} color="#f7fafc" />
                        </Styled.SearchButton>
                    </Styled.SearchField>
                }
            </Styled.SearchArea>
        </Styled.Container>
    );
}
