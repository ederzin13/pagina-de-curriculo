export class RandomNumber {
    number;
    QUANTAS = 5;
    
    generateNumber() {
        return this.number = Math.ceil(Math.random() * this.QUANTAS); 
    }
}