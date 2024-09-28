import { useState, useCallback } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import * as S from './styled'

import { getDiets } from '@storage/Meal/mealGet';
import { Header } from '@components/Header';
import { CardPercentDiet } from '@components/CardPercentDiet';
import { BtnWithIcon } from '@components/Button';
import { DietStorageDTO } from '@storage/Meal/MealStorageDTO';

type statsDiet = {
  withinDiet: number
  outsideDiet: number
  totalMeals: number
  bestDietStreak: number
}

export type MealItem = {
  id: string;
  title: string;
  description: string
  hour: string;
  is_diet: boolean;
};

export type MealSection = {
  date: string;
  data: MealItem[];
};

export function Home() {
  const navigation = useNavigation()

  const [ foods, setFoods ] = useState<MealSection[]>([])
  const [ calcDietPercentage, setCalcDietPercentage ] = useState<number>(0)
  
  const [ statsDiet, setStatsDiet ] = useState<statsDiet>({
    withinDiet: 0,
    outsideDiet: 0,
    totalMeals: 0,
    bestDietStreak: 0
  })

  const formatData = (data: DietStorageDTO[]) => {
    let withinDiet = 0
    let outsideDiet = 0

    // Variáveis para rastrear a sequência de dietas
    let currentDietStreak = 0
    let bestDietStreak = 0
  
    const formattedData = data.reduce<MealSection[]>((acc, item) => {
      const date = new Date(item.date).toLocaleDateString('pt-BR')
      const hour = new Date(item.date).toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      })
  
      const feedEntry = {
        id: item.id,
        title: item.name,
        description: item.description,
        hour,
        is_diet: item.isDiet,
      }

      // Contar as refeições dentro e fora da dieta
      if (item.isDiet) {
        withinDiet += 1
        currentDietStreak += 1
        bestDietStreak = Math.max(bestDietStreak, currentDietStreak)
      } else {
        outsideDiet += 1
        currentDietStreak = 0
      }
  
      const existingDate = acc.find((feed) => feed.date === date);
      if (existingDate) {
        existingDate.data.push(feedEntry);
        existingDate.data.sort((a, b) => (a.hour > b.hour ? 1 : -1));
      } else {
        acc.push({ date, data: [feedEntry] });
      }
  
      return acc;
    }, []);
  
    const totalMeals = withinDiet + outsideDiet;
    const percentageInDiet = Number(totalMeals > 0 ? (withinDiet / totalMeals) * 100 : 0)
  
    return {
      formattedData, // REFEIÇÕES
      percentageInDiet, // PORCENTAGEM
      dietStats: {
        withinDiet,
        outsideDiet,
        totalMeals,
        bestDietStreak
      }
    };
  };

  async function recoverDiets () {
    const storedDiets = await getDiets()
    
    const { formattedData, dietStats, percentageInDiet } = formatData(storedDiets)
    setFoods(formattedData)
    setCalcDietPercentage(percentageInDiet)
    setStatsDiet(dietStats)
  }

  function handleNavigateStatistic() {
    navigation.navigate('statistic', {
      withinDiet: statsDiet.withinDiet,
      outsideDiet: statsDiet.outsideDiet,
      totalMeals: statsDiet.totalMeals,
      bestDietStreak: statsDiet.bestDietStreak
    })
  }

  function handleNavigateCreateMeal() {
    navigation.navigate('create')
  }

  function handleNavigateShowMeal(id: string) {
    navigation.navigate('show', { id })
  }

  useFocusEffect(
    useCallback(() => {
      recoverDiets()
    }, [])
  );

  return (
      <S.Container>
        <Header />

        <CardPercentDiet
          dietPercentage={calcDietPercentage}
          subtitle='das refeições dentro da dieta'
          onPress={handleNavigateStatistic}
        />

        <S.Body>
          <S.Text>Refeições</S.Text>
          
          <BtnWithIcon
            title='Nova refeição'
            icon='plus'
            onPress={() => handleNavigateCreateMeal()}
          />
          
          <S.SectionView>
            <S.SectionFeed
              sections={foods}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <S.ItemList onPress={() => handleNavigateShowMeal(item.id)}>
                  <S.HourInfo>{item.hour}</S.HourInfo>
                  <S.ViewInfo>
                    <S.TitleInfo>{item.title}</S.TitleInfo>
                    <S.CircleInfo isDiet={item.is_diet} />
                  </S.ViewInfo>
                </S.ItemList>
              )}
              renderSectionHeader={({ section: { date } }) => (
                <S.HeaderSection>
                  <S.HeaderTitleSection>{date}</S.HeaderTitleSection>
                </S.HeaderSection>
              )}
            />
          </S.SectionView>
          
        </S.Body>
      </S.Container>
  );
}
