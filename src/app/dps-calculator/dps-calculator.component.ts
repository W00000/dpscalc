import { Component, OnInit } from '@angular/core';
import {MeleeWeapon} from '../shared/meleeWeapon.model';
import {AttackStyle} from '../shared/attackStyle.model';
import {Monster} from '../shared/monster.model';
import { using } from 'rxjs';

@Component({
  selector: 'app-dps-calculator',
  templateUrl: './dps-calculator.component.html',
  styleUrls: ['./dps-calculator.component.css']
})

export class DpsCalculatorComponent implements OnInit {
  weaponStrengthBonus: number = 0;
  strengthLevel: number = 1;
  hiddenStrengthBonus: number = 0;
  hiddenAttackBonus: number = 0;
  usingPotions = false;
  potionLevelBoost: number = 0;
  effectiveStrengthLevel : number = 0;
  maxHit = 0;
  equipmentBonus = 0;
  effectiveDefenceLevel : number;
  
  meleeWeapons: MeleeWeapon[] = [
    new MeleeWeapon('Abyssal Whip', 82, 0, 82, 0, 2.4, [
      {xp: 'Attack', type: 'Slash', strengthBonus: 0, attackBonus: 3}
    ],
  ];

  nmzMonsters: Monster[] = [
    new Monster('Bouncer', 120, 0, 0, 0, 0, 0),
    new Monster('Kendal', 60, 10, 10, 10, -10, 20),
    new Monster('Tree spirit', 80, 0, 0, 0, 0, 0),
    new Monster('Khazard warlord', 80, 0, 0, 0, 0, 0),
    new Monster('Bouncer', 30, 2, 1, 3, 0, 0),
  ];

  onChangeWeapon(newWeapon){
    console.log(newWeapon);
    this.weaponStrengthBonus = newWeapon.strengthBonus;
  }

  onChangeAttackStyle(newAttackStyle){
    console.log(newAttackStyle);
    this.hiddenStrengthBonus = newAttackStyle.strengthBonus; 
    this.hiddenAttackBonus = newAttackStyle.attackBonus;
  }

  onChangeUsingPotions(){
    this.usingPotions  != this.usingPotions;
  }

  calculateDefenceRoll(monsterID){
      this.effectiveDefenceLevel = this.nmzMonsters[monsterID].defence + 8;

  }

  calculateRate(){
    if(this.usingPotions){
      this.potionLevelBoost = Math.floor(5 + (this.strengthLevel * 0.15)/2);
    } else{
      this.potionLevelBoost = 0;
    }
    this.effectiveStrengthLevel = this.strengthLevel + 
  this.hiddenStrengthBonus + this.potionLevelBoost +
  + 8;

  this.maxHit = Math.floor(0.5 + (this.effectiveStrengthLevel * 
  (this.weaponStrengthBonus + this.equipmentBonus + 64)) / 640);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
