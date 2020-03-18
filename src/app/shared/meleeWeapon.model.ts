export class MeleeWeapon{
    public name: string;
    public strengthBonus: number;
    public stabAttackBonus: number;
    public slashAttackBonus: number;
    public crushAttackBonus: number;
    public attackSpeed: number;
    public attackStyles : Array<{xp: string, type: string, strengthBonus: number, attackBonus: number}>;

    constructor(name: string, strengthBonus: number, 
        stabAttackBonus: number, slashAttackBonus: number,
        crushAttackBonus: number, attackSpeed: number, 
        attackStyles : []){
        this.name = name;
        this.strengthBonus = strengthBonus;
        this.stabAttackBonus = stabAttackBonus;
        this.slashAttackBonus = slashAttackBonus;
        this.crushAttackBonus = crushAttackBonus;
        this.attackSpeed = attackSpeed;
        this.attackStyles = attackStyles;
    }
}
