import * as S from './styled';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'src/@types/navigation';

import { Text } from '@components/Text';

import ImgDietPositive from '../../assets/DietPositive.png';
import ImgDietNegative from '@assets/DietNegative.png';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'feedback'>;

export function Feedback () {
    const navigation = useNavigation()
    const route = useRoute<DetailScreenRouteProp>()
    
    const { isDiet } = route.params

    function handleNavigateHome () {
        navigation.navigate('home')
    }
    
    return (
        <S.Container>
            { isDiet
                ?
                <>
                    <Text
                        color='GREEN_DARK'
                        fontFamily='NUNITO_SANS_BOLD'
                        fontSize='XL'
                        text='Continue assim!'
                    />

                    <Text
                        color='GRAY_100'
                        fontFamily='NUNITO_SANS_REGULAR'
                        fontSize='MD'
                        text='Você continua dentro da dieta. Muito bem!'
                        textAlign='center'
                    />

                    <S.ContainerImg>
                        <S.Img source={ImgDietPositive} resizeMode='contain' />
                    </S.ContainerImg>
                </>
                :
                <>
                    <Text
                        color='RED_DARK'
                        fontFamily='NUNITO_SANS_BOLD'
                        fontSize='XL'
                        text='Que pena!'
                    />

                    <Text
                        color='GRAY_100'
                        fontFamily='NUNITO_SANS_REGULAR'
                        fontSize='MD'
                        text='Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'
                        textAlign='center'
                    />

                    <S.ContainerImg>
                        <S.Img source={ImgDietNegative} resizeMode='contain' />
                    </S.ContainerImg>
                </>
            }

            <S.BtnSubmit onPress={() => handleNavigateHome()}>
                <Text
                    color='WHITE'
                    fontFamily='NUNITO_SANS_REGULAR'
                    fontSize='SM'
                    text='Ir para a página inicial'
                />
            </S.BtnSubmit>
        </S.Container>
    )
}