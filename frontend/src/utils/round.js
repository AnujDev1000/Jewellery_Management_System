
const useRound = () => {    
    const roundToTwo =(num) => {
        return (Math.round(num * 100) / 100);
    }
    return { roundToTwo }
}

export default useRound
