import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { HelpText } from '../../components/HelpText/view';
import { ResponseArea } from '../../components/ResponseArea/view';
import * as Styled from "./styles";
import { API_KEY, ADS_BANNER_ID } from '@env'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import api from '../../libs/axios';

export const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResponse, setSearchResponse] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const adUnitId = __DEV__ ? TestIds.BANNER : ADS_BANNER_ID;

    const buscarVersiculos = async (verseDescription: string) => {
        setIsLoading(true);
        api.post('/v1/chat/completions', {
            messages: [{ role: "user", content: `Qual o versículo da Bíblia com as seguintes características: ${verseDescription.trim()}. Se possível cite apenas um trecho curto e cite a versão` }],
            temperature: 0.5,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            model: "gpt-3.5-turbo",
        })
            .then(res => {
                Keyboard.dismiss()
                setSearchResponse(res.data.choices[0].message.content)
            })
            .catch(error => {
                Alert.alert(error.message ?? JSON.stringify(error));
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
            <StatusBar style='auto' />
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
                <Styled.AdContainer>
                    <BannerAd
                        unitId={adUnitId}
                        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                    />
                </Styled.AdContainer>
            </Styled.SearchArea>
        </Styled.Container>
    );
}
