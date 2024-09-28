import { useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Alert } from 'react-native';

import * as S from './styled'

import { RootStackParamList } from 'src/@types/navigation';

import { BtnIcon } from '@components/BtnIcon'
import { Text } from '@components/Text'

import { show } from '@storage/Meal/mealShow';

import { MealItem } from '@screens/Home';
import { Loading } from '@screens/Loading';

import { BtnWithIcon } from '@components/Button';
import { Input } from '@components/Input';
import { InputWithMask } from '@components/InputWithMask';

import { isValidDate } from '@utils/isValidDate';
import { isValidTime } from '@utils/isValidTime';
import { convertToDate } from '@utils/convertToDate';
import { updateMeal } from '@storage/Meal/mealUpdate';
import { deleteMeal } from '@storage/Meal/mealDelete';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'show'>;

interface mealItemEdit extends MealItem {
    dateFormatted: string;
    date: string;
}

export function ShowMeal() {
    const navigation = useNavigation()

    const [ isPageType, setIsPageType ] = useState<'view' | 'edit'>('view')
    const [ meal, setMeal ] = useState<mealItemEdit | null>(null)
    const [ name, setName ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ date, setDate ] = useState('')
    const [ hour, setHour ] = useState('')
    const [ isDiet, setIsDiet ] = useState<boolean | null>(null)
    
    const route = useRoute<DetailScreenRouteProp>()
    const { id } = route.params

    const validateDateTime = (date: string, time: string) => {
        const dateValid = isValidDate(date);
        const timeValid = isValidTime(time);
        
        return {
            dateValid,   // Returns true or false
            timeValid,   // Returns true or false
        }
    }

    function handleNavigateHome () {
        navigation.navigate('home')
    }

    async function loadingMealSelected() {
        const returnMeal = await show(id)

        if (returnMeal) {
            setMeal({
                id: returnMeal.id,
                title: returnMeal.name,
                description: returnMeal.description,
                dateFormatted: new Date(returnMeal.date).toLocaleTimeString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                    }),
                date: new Date(returnMeal.date).toLocaleTimeString('pt-BR', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                  }),
                hour: new Date(returnMeal.date).toLocaleTimeString('pt-BR', {
                        hour: 'numeric',
                        minute: 'numeric',
                    }),
                is_diet: returnMeal.isDiet,
            })
        } else {
            Alert.alert(
                'Aviso',
                'Esta refeição não existe!',
                [
                    {
                    text: 'OK',
                    onPress: () => handleNavigateHome()
                    }
                ]
                );
        }
    }

    useEffect(() => {
        loadingMealSelected()
    },[])

    function handleEditMeal () {
        if (meal) {
            setName(meal.title)
            setDescription(meal.description)
            setDate(meal.date)
            setHour(meal.hour)
            setIsDiet(meal.is_diet)
        }

        setIsPageType('edit')
    }

    function handleSelectedDiet (type: 'positive' | 'negative') {
        if (type === 'positive') {
            setIsDiet(true)
        } else if (type === 'negative') {
            setIsDiet(false)
        } else {
            setIsDiet(null)
        }
    }

    function handleCancelEditMeal () {
        setIsPageType('view')
    }

    async function handleSaveMeal () {
        if (!name) {
            Alert.alert('Nome é um campo obrigatório')
            return 
        }
        
        if (!description) {
            Alert.alert('Descrição é um campo obrigatório')
            return 
        }
        
        if (!date) {
            Alert.alert('Data é um campo obrigatório')
            return 
        }
        
        if (!hour) {
            Alert.alert('Horário é um campo obrigatório')
            return 
        }

        // VÁLIDA SE A DATA E HORARIO ESTÃO NO FORMATO CORRETO
        const result = validateDateTime(date, hour)
        if (!result.dateValid) {
            Alert.alert('Data informada é inválida!')
            return
        }
        if (!result.timeValid) {
            Alert.alert('Horário informado é inválido!')
            return
        }
        
        if (isDiet === null) {
            Alert.alert('Selecione se está dentro da dieta ou fora!')
            return
        }

        
        const meal = {
            id,
            name,
            description,
            date: convertToDate(date, hour),
            isDiet
        }

        await updateMeal(id, meal)
        navigation.navigate('home')
    }

    async function handleDeleteMeal () {
        await deleteMeal(id)
        navigation.navigate('home')
    }

    if (meal) {
        return (
            <S.Container>
                <S.Header isDiet={meal.is_diet}>
                    <BtnIcon
                        name='arrow-left'
                        color='GRAY_200'
                        onPress={() => handleNavigateHome()}
                    />
    
                    <S.HeaderView>
                        <Text
                            color='GRAY_100'
                            fontFamily='NUNITO_SANS_BOLD'
                            fontSize='LG'
                            text='Refeição'
                        />
                    </S.HeaderView>
                </S.Header>

                { isPageType === 'view' && 
                    <>
                        <S.Body>
                            <S.BodyView>
                                <Text
                                    color='GRAY_100'
                                    fontFamily='NUNITO_SANS_BOLD'
                                    fontSize='LG'
                                    text={meal.title}
                                    textAlign='left'
                                />

                                <Text
                                    color='GRAY_100'
                                    fontFamily='NUNITO_SANS_REGULAR'
                                    fontSize='MD'
                                    text={meal.description}
                                    textAlign='left'
                                />
                            </S.BodyView>

                            <S.BodyView>
                                <Text
                                    color='GRAY_100'
                                    fontFamily='NUNITO_SANS_BOLD'
                                    fontSize='MD'
                                    text='Data e hora'
                                    textAlign='left'
                                />

                                <Text
                                    color='GRAY_100'
                                    fontFamily='NUNITO_SANS_REGULAR'
                                    fontSize='MD'
                                    text={meal.dateFormatted}
                                    textAlign='left'
                                />
                            </S.BodyView>

                            <S.BodyView>
                                <S.CardDiet>
                                    <S.CardCircle isDiet={meal.is_diet} />
                                    <S.CardText>{meal.is_diet ? 'Dentro da dieta' : 'Fora da dieta'}</S.CardText>
                                </S.CardDiet>
                            </S.BodyView>
                        </S.Body>
                        
                        <S.Footer>
                            <BtnWithIcon
                                icon='pen-tool'
                                title='Editar refeição'
                                onPress={() => handleEditMeal()}
                            />

                            <BtnWithIcon
                                icon='trash-2'
                                title='Excluir Refeição'
                                isLightTheme
                                onPress={() => handleDeleteMeal()}
                            />
                        </S.Footer>
                    </>
                }

                { isPageType === 'edit' && 
                    <>
                        <S.Body>
                            <Input
                                title='Nome'
                                value={name}
                                onChangeText={(text) => { setName(text) }}
                            />

                            <Input
                                title='Descrição'
                                multiline
                                numberOfLines={4}
                                textAlignVertical="top"
                                maxLength={50}
                                value={description}
                                onChangeText={(text) => { setDescription(text) }}
                            />

                            <S.SizeController>
                                <S.HalfWidthView>
                                    <InputWithMask
                                        title='Data'
                                        mask='99/99/9999'
                                        keyboardType='numeric'
                                        value={date}
                                        onChangeText={(text) => { setDate(text) }}
                                    />
                                </S.HalfWidthView>

                                <S.HalfWidthView>
                                    <InputWithMask
                                        title='Hora'
                                        mask='99:99'
                                        keyboardType='numeric'
                                        value={hour}
                                        onChangeText={(text) => { setHour(text) }}
                                    />
                                </S.HalfWidthView>
                            </S.SizeController>
                            
                            <Text
                                color='GRAY_200'
                                fontFamily='NUNITO_SANS_BOLD'
                                fontSize='SM'
                                text='Está dentro da dieta?'
                                textAlign='left'
                            />

                            <S.SizeController>
                                <S.HalfWidthView>
                                    <S.BtnCheckbox type='positive' isDiet={isDiet} onPress={() => handleSelectedDiet('positive')}>
                                        <S.CircleCheckbox type='positive' />
                                        <Text
                                            color='GRAY_100'
                                            fontFamily='NUNITO_SANS_BOLD'
                                            fontSize='SM'
                                            text='Sim'
                                        />
                                    </S.BtnCheckbox>
                                </S.HalfWidthView>

                                <S.HalfWidthView>
                                    <S.BtnCheckbox type='negative' isDiet={isDiet} onPress={() => handleSelectedDiet('negative')}>
                                        <S.CircleCheckbox type='negative' />
                                        <Text
                                            color='GRAY_100'
                                            fontFamily='NUNITO_SANS_BOLD'
                                            fontSize='SM'
                                            text='Não'
                                        />
                                    </S.BtnCheckbox>
                                </S.HalfWidthView>
                            </S.SizeController>

                        </S.Body>
                        <S.Footer>
                            <BtnWithIcon
                                icon='arrow-left'
                                title='Cancelar edição'
                                onPress={() => handleCancelEditMeal()}
                            />

                            <BtnWithIcon
                                icon='save'
                                title='Salvar alterações'
                                isLightTheme
                                onPress={() => handleSaveMeal()}
                            />
                        </S.Footer>
                    </>
                }
                
            </S.Container>
        )
    } else {
        <Loading /> 
    }
}