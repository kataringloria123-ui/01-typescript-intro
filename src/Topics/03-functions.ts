
function addNumber(a:number,b:number):number{
    return a+ b
}

const addNumbersArrow=(a:number,b:number):string => {
    return `${a +b}`;
}

function multiplay(firstnumber: number,secondnumber?: number, base: number = 2){
    return firstnumber * base;
}


//const result:number = addNumber(1,2);
//const result1:string = addNumbersArrow(1,2);
//const multiplayResult: number = multiplay(5);

//console.log({result,result1,multiplayResult});

interface Character{
    name: string;
    hp: number;
    showHP: () => void;
}

const healCharacter = (character: Character,amount:number) =>{
    
    character.hp +=amount;

}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHP(){
        console.log(`Puntos de vida ${ this.hp}`)
    }
}

healCharacter(strider,10);
healCharacter(strider,20);

strider.showHP();

export{};