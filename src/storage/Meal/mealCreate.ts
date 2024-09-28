import AsyncStorage from "@react-native-async-storage/async-storage";
import { DIET_COLLECTION } from "@storage/storageConfig";

import { DietStorageDTO } from "./MealStorageDTO";
import { getDiets } from "./mealGet";

export async function createDiet(newDiet: DietStorageDTO) {
    try {
        const storedDiets = await getDiets()
        const storage = JSON.stringify([...storedDiets, newDiet])
        
        await AsyncStorage.setItem(DIET_COLLECTION, storage)
    } catch (error) {
        throw error;
    }
}