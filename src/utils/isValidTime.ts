export const isValidTime = (hour: string): boolean => {
    const regexHora = /^([01]\d|2[0-3]):([0-5]\d)$/
    return regexHora.test(hour)
}