const randomColor = (index) => {
    let classValue = "menu text-center d-flex flex-column align-items-center p-3 rounded  text-dark"
    switch(index){
        case 0: {
            classValue = classValue.concat(" bg-melon")
            break
        }
        case 1: {
            classValue = classValue.concat(" bg-green")
            break
        }
        case 2: {
            classValue = classValue.concat(" bg-purple")
            break
        }
        case 3: {
            classValue = classValue.concat(" bg-cyan")
            break
        }
        default:{
            break
        }
    }

    return(classValue)
}

export default randomColor