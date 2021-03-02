// Soldier
class Soldier { 
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking 
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health === 0) {
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        }
    }

    battleCry () {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health === 0) {
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${damage} points of damage`
        }
    }
}


// War
class War {
    constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }
    
    addSaxon(saxon){   
        this.saxonArmy.push(saxon);
    }
    
    vikingAttack(){
        this.randomViking = Math.floor(Math.random()* this.vikingArmy.length);
        this.randomSaxon = Math.floor(Math.random()* this.saxonArmy.length);

        this.saxonArmy[this.randomSaxon].receiveDamage(this.vikingArmy[this.randomViking].strength);
        for (let i = 0; i < this.saxonArmy.length; i++) {
            if (this.saxonArmy[i].health >= 1) {
                [i].push(this.saxonArmy);
            } else {
                this.saxonArmy.splice(i, 1);
            }
        return this.saxonArmy;
        }
    }
    
    saxonAttack(){
        this.randomViking = Math.floor(Math.random()* this.vikingArmy.length);
        this.randomSaxon = Math.floor(Math.random()* this.saxonArmy.length);

        this.vikingArmy[this.randomViking].receiveDamage(this.saxonArmy[this.randomSaxon].strength);
        for (let i = 0; i < this.vikingArmy.length; i++) {
            if (this.vikingArmy[i].health >= 1) {
                [i].push(this.vikingArmy);
            } else {
                this.vikingArmy.splice(i, 1);
            }
        return this.vikingArmy;
        }
    }

    showStatus(){
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else if ((this.vikingArmy.length && this.saxonArmy.length) > 0) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}