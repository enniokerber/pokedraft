
export class Stat {

    value: number;
    modifiedValue: number;
    stage: number;
    evs: number;
    dvs: number;
    natureValue: number;

    constructor(public base: number) {
        this.base = base;
        this.stage = 0;
        this.evs = 252;
        this.dvs = 31;
        this.natureValue = 1;
        this.update();
    }

    getValue(): number {
        return this.value;
    }

    getModifiedValue(): number {
        return this.modifiedValue;
    }

    getStage(): number {
        return this.stage;
    }

    getEvs(): number {
        return this.evs;
    }

    getDvs(): number {
        return this.dvs;
    }

    positiveNature(): void {
        this.natureValue = 1.1;
        this.update();
    }

    neutralNature(): void {
        this.natureValue = 1;
       this.update();
    }

    negativeNature(): void {
        this.natureValue = 0.9;
      this.update();
    }

    get naturePositive() { return this.natureValue === 1.1; }

    get natureNegative() { return this.natureValue === 0.9; }

    isIncreased(): boolean {
        return (this.stage > 0);
    }

    isDecreased(): boolean {
        return (this.stage < 0);
    }

    isPure(): boolean {
        return (this.stage === 0);
    }

    update(level: number = 100): void {
        const factor1 = Math.floor( (2 * this.base + this.dvs + Math.floor(this.evs / 4) ) * level);
        this.value = Math.floor(((factor1 / 100) + 5) * this.natureValue);
    }

    modify(): void {
        let a = 2;
        let b = 2;

        if (this.stage < 0) {
            b -= this.stage;
        } else {
            if (this.stage > 0) {
                a += this.stage;
            }
        }

        this.modifiedValue = Math.floor(this.value * (a / b));
    }

}
