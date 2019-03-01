/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
    }
    destroy(){
        return `${this.name} was removed from the game.`
    }
}

    /*
      === CharacterStats ===
    */
    class CharacterStats extends GameObject {
        constructor(stats) {
            super(stats);
            this.healthPoints = stats.healthPoints;
        }
        takeDamage() {
            return `${this.name} took damage.`;
        }
    }

    
    /*
      === Humanoid (Having an appearance or character resembling that of a human.) ===
    */
    

    class Humanoid extends CharacterStats {
        constructor(human) {
        super(human);
      this.team = human.team;
      this.weapons = human.weapons;
      this.language = human.language;
        }
        greet() {
        return `${this.name} offers a greeting in ${this.language}`;
        }
    }

    
    /*
      * Inheritance chain: GameObject -> CharacterStats -> Humanoid
      * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
      * Instances of CharacterStats should have all of the same properties as GameObject.
    */
    
    
    
    // Test you work by un-commenting these 3 objects and the list of console logs below:
    
    
      const mage = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 1,
          height: 1,
        },
        healthPoints: 5,
        name: 'Bruce',
        team: 'Mage Guild',
        weapons: [
          'Staff of Shamalama',
        ],
        language: 'Common Tongue',
      });
    
      const swordsman = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 2,
          height: 2,
        },
        healthPoints: 15,
        name: 'Sir Mustachio',
        team: 'The Round Table',
        weapons: [
          'Giant Sword',
          'Shield',
        ],
        language: 'Common Tongue',
      });
    
      const archer = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 1,
          width: 2,
          height: 4,
        },
        healthPoints: 10,
        name: 'Lilith',
        team: 'Forest Kingdom',
        weapons: [
          'Bow',
          'Dagger',
        ],
        language: 'Elvish',
      });
    
      console.log(mage.createdAt); // Today's date
      console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
      console.log(swordsman.healthPoints); // 15
      console.log(mage.name); // Bruce
      console.log(swordsman.team); // The Round Table
      console.log(mage.weapons); // Staff of Shamalama
      console.log(archer.language); // Elvish
      console.log(archer.greet()); // Lilith offers a greeting in Elvish.
      console.log(mage.takeDamage()); // Bruce took damage.
      console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    
    
      // Stretch task: 
      // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
      // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
      // * Create two new objects, one a villain and one a hero and fight it out with methods!
    
      //Hero

      class Hero extends Humanoid {
          constructor(atts) {
            super(atts);
            this.class = atts.class;
            this.damage = atts.damage;
            this.drops = atts.drops;
          }
          attack(who) {
            if (who.name == this.name) {
                console.log(`It'd be stupid to attack yourself ${this.name}`)
                return
              }
              let minhit = 0;
              let maxhit = this.damage;
              let applyDamage = Math.round((Math.random() * (maxhit - minhit) + minhit));
              let randomWep = this.weapons[Math.floor(Math.random() * this.weapons.length)];
              let checkHealth = who.healthPoints - applyDamage;
              let drop = who.drops[Math.floor(Math.random() * who.drops.length)];
              if (checkHealth <= 0) {
                 console.log(`${this.name} hit ${applyDamage} and has killed ${who.name} with ${randomWep}, ${who.destroy()}`);
                 console.log(`${this.name} has recieved a drop! ${drop}`)
              }else{
                console.log(`${this.name} Attacked ${who.name} with a ${randomWep} and dealt ${applyDamage} damage! ${who.name} has ${checkHealth} Health remaining!`);
                who.healthPoints = checkHealth;
              }
          }
      }
    
    

class Villain extends Hero {
    constructor(atts) {
        super(atts);
    }
}
    // Hero created
      const memo = new Hero({
        name: 'Memo',
        healthPoints: 75,
        class: 'Hybrid',
        damage: 110,
        drops: [
          'Rare: Golden JS Trophy',
          'Common: Ashes',
          'Uncommon: I dont need you to explain this new concept to me',
          'Very_Rare: I UNDERSTAND THIS COMPLETELY'
        ],
        weapons: [
          'Abyssal whip',
          'Trident of the seas',
          'Dragon dagger',
          'obsidian maul',
          'granite maul',
          'staff of light'
        ],
        language: 'english',
        dimensions: {
          length: 10,
          width: 10,
          height: 20
        }
      });
    
      //Villain created
      const broly = new Villain({
        name: 'Broly',
        healthPoints: 75,
        class: 'super saiyan',
        damage: 100,
        drops: [
          'Rare: Golden JS Trophy',
          'Common: Ashes',
          'Uncommon: I dont need you to explain this new concept to me',
          'Very_Rare: I UNDERSTAND THIS COMPLETELY'
        ],
        weapons: [
          'Kamehameha',
          'spirit bomb',
          'galic gun',
          'destructo disc',
          'Super kamehameha',
          'Final form'
        ],
        language: 'english',
        dimensions: {
          length: 20,
          width: 20,
          height: 40
        }
      });
    
    
      //Results
      memo.attack(broly)
      broly.attack(memo)