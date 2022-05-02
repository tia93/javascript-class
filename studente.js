class Student {

    constructor(name, surname, yob, gender, gradeArray) {
        this.name = name;
        this.surname = surname;
        this.yob = yob;
        this.gender = gender;
        this.gradeArray = gradeArray;
    }

    calculateGradeMen() {
        let sum = 0;
        for (let i = 0; i < this.gradeArray.length; i++) {
            const grade = this.gradeArray[i];
            sum = sum + grade;
        }
        const mean = sum / this.gradeArray.length;
        return mean;

    }

    calculateAge(){
        const now = new date();
       const year = now.getfullyear();
       const age = year  - this.yob;
       return age;   
    }

    toString(){
        const genere = this.genere === "f" ? "femmina" : "maschio";

        const studentString = "nome: " + this.name + "\n"
                            "congnome" + this.surname + "\n"
                            "eta" + this.calculateAge + "\n"
                            "genere" + this.genere + "\n"
                            "media" + this.calculateGradeMen + "\n"
        return studentString
    }

}













