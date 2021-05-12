class Exercise {
    // constructor(name,format, amount, category, description) {
    //     this.name = name;
    //     this.format = format;
    //     this.amount = amount;
    //     this.category = category;
    //     this.description = description;
    // }

    constructor(name, detail, type, id) {
        this.name = name;
        this.detail = detail;
        this.type = type;
        this.id = id;
    }
}

export const exerciseType = {
    EXERCISE: "Ejercicio",
    REST: "Descanso"
}

export default Exercise;
