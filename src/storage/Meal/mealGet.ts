import AsyncStorage from "@react-native-async-storage/async-storage";
import { DIET_COLLECTION } from "@storage/storageConfig";
import { DietStorageDTO } from "./MealStorageDTO";

export async function getDiets() {
    try {
        const storage = await AsyncStorage.getItem(DIET_COLLECTION)
        const diets: DietStorageDTO[] = storage ? JSON.parse(storage) : []

        return diets
    } catch (error) {
        throw error;
    }
}