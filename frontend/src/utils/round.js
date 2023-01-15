
const useRound = () => {    
    const roundToTwo =(num) => {
        return (Math.round(num * 10) / 10);
    }
    return { roundToTwo }
}

export default useRound
