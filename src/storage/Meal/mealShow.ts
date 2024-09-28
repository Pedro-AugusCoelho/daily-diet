import AsyncStorage from "@react-native-async-storage/async-storage";
import { DIET_COLLECTION } from "@storage/storageConfig";
import { DietStorageDTO } from "./MealStorageDTO";

export async function show(id: string) {
    try {
        const storage = await AsyncStorage.getItem(DIET_COLLECTION)
        const meals: DietStorageDTO[] = storage ? JSON.parse(storage) : []

        if (meals.length > 0) {
            const findMeal = meals.find(item => item.id === id)

            if (findMeal) {
                return findMeal
            } else {
                return null
            }
        }

    } catch (error) {
        throw error;
    }
}