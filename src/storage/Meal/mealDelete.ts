import AsyncStorage from "@react-native-async-storage/async-storage";
import { DIET_COLLECTION } from "@storage/storageConfig";
import { DietStorageDTO } from "./MealStorageDTO";

export async function deleteMeal(id: string) {
    try {
        const storage = await AsyncStorage.getItem(DIET_COLLECTION)
        const meals: DietStorageDTO[] = storage ? JSON.parse(storage) : []

        if (meals.length > 0) {
            const deletedMeal = meals.filter(item => item.id !== id)
            const newArrayMeal = JSON.stringify(deletedMeal)
            
            await AsyncStorage.setItem(DIET_COLLECTION, newArrayMeal)
        }

    } catch (error) {
        throw error;
    }
}