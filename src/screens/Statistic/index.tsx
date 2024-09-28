import { BtnIcon } from '@components/BtnIcon';
import * as S from './styled';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Text } from '@components/Text';
import { RootStackParamList } from 'src/@types/navigation';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'statistic'>;

export function Statistic() {
    const route = useRoute<DetailScreenRouteProp>();

    const { outsideDiet, totalMeals, withinDiet, bestDietStreak } = route.params

    const percentageInDiet = Number(totalMeals > 0 ? (withinDiet / totalMeals) * 100 : 0)
    const title = percentageInDiet.toFixed(2).replace('.', ',') + '%'
    const subtitle = 'das refeições dentro da dieta'
    
    const navigation = useNavigation()
    
    function handleNavigateHome () {
        navigation.navigate('home')
    }

    return(
        <S.Container>
            <S.Header isGoodMeal={percentageInDiet > 50}>
                <S.HeaderTop>
                    <BtnIcon
                        name='arrow-left'
                        color={percentageInDiet > 50 ? 'GREEN_DARK' : 'RED_DARK'}
                        onPress={() => handleNavigateHome()}
                    />
                </S.HeaderTop>
                
                <S.HeaderMid>
                    <Text
                        color='GRAY_100'
                        fontFamily='NUNITO_SANS_BOLD'
                        fontSize='XXL'
                        text={title}
                    />

                    <Text
                        color='GRAY_200'
                        fontFamily='NUNITO_SANS_REGULAR'
                        fontSize='SM'
                        text={subtitle}
                    />
                </S.HeaderMid>
            </S.Header>
            <S.Body>
                <S.View>
                    <Text
                        color='GRAY_100'
                        fontFamily='NUNITO_SANS_BOLD'
                        fontSize='SM'
                        text='Estatísticas gerais'
                    />
                </S.View>
                
                <S.Card>
                    <Text
                        color='GRAY_100'
                        fontFamily='NUNITO_SANS_BOLD'
                        fontSize='XL'
                        text={String(bestDietStreak)}
                    />

                    <Text
                        color='GRAY_200'
                        fontFamily='NUNITO_SANS_REGULAR'
                        fontSize='SM'
                        text='melhor sequência de pratos dentro da dieta'
                    />
                </S.Card>
                
                <S.Card>
                    <Text
                        color='GRAY_100'
                        fontFamily='NUNITO_SANS_BOLD'
                        fontSize='XL'
                        text={String(totalMeals)}
                    />

                    <Text
                        color='GRAY_200'
                        fontFamily='NUNITO_SANS_REGULAR'
                        fontSize='SM'
                        text='refeições registradas'
                    />
                </S.Card>

                <S.Area>
                    <S.Card50Percent color='GREEN_LIGHT'>
                        <Text
                            color='GRAY_100'
                            fontFamily='NUNITO_SANS_BOLD'
                            fontSize='XL'
                            text={String(withinDiet)}
                        />

                        <Text
                            color='GRAY_200'
                            fontFamily='NUNITO_SANS_REGULAR'
                            fontSize='SM'
                            text='refeições dentro da dieta'
                        />
                    </S.Card50Percent>
                    
                    <S.Card50Percent color='RED_LIGHT'>
                        <Text
                            color='GRAY_100'
                            fontFamily='NUNITO_SANS_BOLD'
                            fontSize='XL'
                            text={String(outsideDiet)}
                        />

                        <Text
                            color='GRAY_200'
                            fontFamily='NUNITO_SANS_REGULAR'
                            fontSize='SM'
                            text='refeições fora da dieta'
                        />
                    </S.Card50Percent>
                </S.Area>
            </S.Body>
        </S.Container>
    )
}