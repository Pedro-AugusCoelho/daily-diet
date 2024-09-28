import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Crypto from 'expo-crypto';

import * as S from './styled'

import { BtnIcon } from '@components/BtnIcon'
import { Text } from '@components/Text'
import { InputWithMask } from '@components/InputWithMask'
import { Input } from '@components/Input'


import { convertToDate } from '@utils/convertToDate'
import { isValidDate } from '@utils/isValidDate'
import { isValidTime } from '@utils/isValidTime'
import { createDiet } from '@storage/Meal/mealCreate'

export function CreateMeal () {
    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [hour, setHour] = useState('')
    const [isDiet, setIsDiet] = useState<boolean | null>(null)

    const validateDateTime = (date: string, time: string) => {
        const dateValid = isValidDate(date);
        const timeValid = isValidTime(time);
        
        return {
            dateValid,   // Returns true or false
            timeValid,   // Returns true or false
        }
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
    
    function handleNavigateHome () {
        navigation.navigate('home')
    }

    async function handleSubmitDiet () {
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

        const diet = {
            id: Crypto.randomUUID(),
            name,
            description,
            date: convertToDate(date, hour),
            isDiet
        }

        await createDiet(diet)
        navigateFeedback(diet.isDiet)
    }

    function navigateFeedback (isDiet: boolean) {
        navigation.navigate('feedback', { isDiet })
    }
    
    return (
        <S.Container>
            <S.Header>
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
                        text='Nova refeição'
                    />
                </S.HeaderView>
            </S.Header>
            
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
                <S.BtnSubmit onPress={() => handleSubmitDiet()}>
                    <Text
                        color='WHITE'
                        fontFamily='NUNITO_SANS_BOLD'
                        fontSize='SM'
                        text='Cadastrar refeição'
                    />
                </S.BtnSubmit>
            </S.Footer>
        </S.Container>
    )
}