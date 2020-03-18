import { range } from 'rxjs';

export class Monster{
    public name : string;
    public defence : number;
    public stabDefence : number;
    public slashDefence : number;
    public crushDefence : number;
    public magicDefence : number;
    public rangedDefence : number;

    constructor(name:string, defence:number, stabDefence:number,
        slashDefence:number, crushDefence:number,
        magicDefence:number, rangedDefence:number){
            this.name = name;
            this.defence = defence;
            this.stabDefence = stabDefence;
            this.slashDefence = slashDefence;
            this.crushDefence = crushDefence;
            this.magicDefence = magicDefence;
            this.rangedDefence = rangedDefence;
    }
}