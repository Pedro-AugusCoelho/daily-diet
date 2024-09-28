import AsyncStorage from "@react-native-async-storage/async-storage";
import { DIET_COLLECTION } from "@storage/storageConfig";
import { DietStorageDTO } from "./MealStorageDTO";

export async function updateMeal(id: string, data: DietStorageDTO) {
    try {
        const storage = await AsyncStorage.getItem(DIET_COLLECTION)
        const meals: DietStorageDTO[] = storage ? JSON.parse(storage) : []

        if (meals.length > 0) {
            const mealsFilter = meals.filter(item => item.id !== id)
            const findMeal = meals.find(item => item.id === id)

            if (findMeal) {
                findMeal.name = data.name
                findMeal.description = data.description
                findMeal.date = data.date
                findMeal.isDiet = data.isDiet

                const storage = JSON.stringify([...mealsFilter, findMeal])
                await AsyncStorage.setItem(DIET_COLLECTION, storage)
            }
        }
    } catch (error) {
        throw error;
    }
}