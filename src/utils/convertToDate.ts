export const convertToDate = (data: string, hora: string): Date => {
    const [dia, mes, ano] = data.split('/')
    const dataISO = `${ano}-${mes}-${dia}T${hora}:00`
    return new Date(dataISO)
}