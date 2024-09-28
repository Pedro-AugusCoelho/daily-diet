export const isValidDate = (date: string): boolean => {
    const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/
    const match = date.match(regexData)
    
    if (!match) return false
    
    const [_, dia, mes, ano] = match.map(Number)
    
    
    const dataObj = new Date(ano, mes - 1, dia)
    
    return (
        dataObj.getFullYear() === ano && 
        dataObj.getMonth() === mes - 1 && 
        dataObj.getDate() === dia
    )
}