export default class Routine {
    constructor(name, detail, isPublic, difficulty, category, id) {
        this.id = id;
        this.name = name;
        this.detail = detail;
        this.isPublic = isPublic;
        this.difficulty = difficulty;
        this.category = category;
        this.userId = -1;
    }
}