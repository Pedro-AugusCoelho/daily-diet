import { BtnIcon } from '@components/BtnIcon';
import * as S from './styled'

interface CardPercentDietProps {
    dietPercentage: number;
    subtitle: string;
    onPress: () => void;
}

export function CardPercentDiet({dietPercentage, subtitle, onPress}: CardPercentDietProps) {

    const title = dietPercentage.toFixed(2).replace('.', ',') + '%'

    return (
        <S.Card isGoodMeal={dietPercentage > 50}>
            <S.HeaderCard>
                <BtnIcon
                    name='arrow-up-right'
                    color={dietPercentage > 50 ? 'GREEN_DARK' : 'RED_DARK'}
                    onPress={() => onPress()}
                />
            </S.HeaderCard>

            <S.BodyCard>
                <S.Title>{title}</S.Title>
                <S.SubTitle>{subtitle}</S.SubTitle>
            </S.BodyCard>
        </S.Card>
    )
}