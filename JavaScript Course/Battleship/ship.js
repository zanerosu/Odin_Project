export class Ship{
    constructor(length){
        this.length = length;
        this.hitCount = 0;
        this.sunk = false;
    }

    hit(){
        this.hitCount += 1;
        this.isSunk();
    }

    isSunk(){
        if(this.length === this.hitCount){
            this.sunk = true;
            console.log("Ship Sunk!");
        }
        
    }
}
