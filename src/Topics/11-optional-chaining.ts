

export interface Passenger{
    name: string;
    children?: string[];
}

const passengers1: Passenger = {
    name: 'Fernando',
}

const passengers2: Passenger = {
    name: 'Melissa',
    children: ['Natalia','Elizabeth'],
}

const returnChildrenNumber = (passenger: Passenger) : number => {

    const howManyChildren = passenger.children?.length || 0;
    //const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

returnChildrenNumber(passengers1);
returnChildrenNumber(passengers2);