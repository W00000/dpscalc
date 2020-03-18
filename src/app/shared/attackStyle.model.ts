export class AttackStyle{
    public xp : string;
    public type : string;
    public strengthBonus: number;
    public attackBonus: number;

    constructor(xp:string, type:string, strengthBonus: number, attackBonus: number){
        this.xp = xp;
        this.type = type;
        this.strengthBonus = strengthBonus;
        this.attackBonus = attackBonus;
    }
  
}
