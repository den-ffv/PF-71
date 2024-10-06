export const formatData = (dataString: string) => {
    const data = new Date(dataString);

    const day = String(data.getDate());
    const month = String(data.getMonth() + 1).padStart(2, '0');
    const year = data.getFullYear();

    return `${day}-${month}-${year}`;
}