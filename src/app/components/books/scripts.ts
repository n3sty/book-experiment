
const rate: number = 30; // pages per hour

const PagesToHours = (pages:number) => {
    const hours = Math.floor((pages / rate) * 100) / 100;

    return hours;
}

export default PagesToHours;
export { rate }