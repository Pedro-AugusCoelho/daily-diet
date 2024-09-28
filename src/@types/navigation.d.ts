export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            statistic: {
                withinDiet: number
                outsideDiet: number
                totalMeals: number
                bestDietStreak: number
            };
            create: undefined;
            feedback: {
                isDiet: Boolean
            };
            show: {
                id: string
            };
        }
    }
}

export type RootStackParamList = {
    home: undefined;
    statistic: {
        withinDiet: number
        outsideDiet: number
        totalMeals: number
        bestDietStreak: number
    };
    create: undefined;
    feedback: {
        isDiet: Boolean
    };
    show: {
        id: string
    };
};