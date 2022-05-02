class Atleta{

    constructor(name, surname, yob, sport, palmares, gender, isRetired){
        this.name = name
        this.surname = surname
        this.yob = yob
        this.sport = sport
        this.palmares = palmares
        this.gender = gender
        this.isRetired = isRetired
    }
    
    calculatAge(){
        const currentYear = new Date()
        return currentYear.getFullYear() - this.yob
    }
    
    bestPosition(){
        let result = this.palmares[0]
        for(let i = 1; i < this.palmares.length; i++){
            if(this.palmares[i] < result  ){
                result = this.palmares[i]
                
            }
            
 
        }
        return result;
    }
    toString(){
        const gender = this.gender === "m" ? "maschio": "femmina"
        const StringAtleta = "nome: " + this.name + "\n" +
                             "cognome: " + this.surname + "\n" +
                             "sport: " + this.sport + "\n" +
                             "eta: " + this.calculatAge() + "\n" +
                             "migliore posizione: " + this.bestPosition() + "\n" +
                             "pratica ancora: " + this.isRetired
        return StringAtleta                 

    }
    
}