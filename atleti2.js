const atleta1 = new Atleta("marco", "rossi", 1980, "calcio", [1,4,7,1] ,"m" , true)
const atleta2 = new Atleta("Ben" , "Martyn", 1967 ,"Nuoto", [15,13,3,10,13] ,"m" ,true )
const atleta3 = new Atleta("Diana", "Della Rosa", 1995, "sci", [10,2,2,1,3], "f", false)
console.log(atleta1)
console.log(atleta3.calculatAge())
console.log(atleta2.bestPosition())
console.log(atleta3.toString())