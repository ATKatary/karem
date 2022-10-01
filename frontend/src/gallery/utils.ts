/*** Global Constants ***/
const c = (x: number, y: number) => {return {x: x, y: y};};

/*** Interfaces ***/
interface CardBucket {
    /*** Required Representation ***/
    
    readonly cards: Array<Card>;
    readonly size: {width: number, height: number};

    /**
     * Drops a card into the bucket such that the droped card is either on the floor
     * of the bucket or is adjacent but not overlapping another card
     * 
     * @param card to drop into the bucket, must be smaller in size than the bucket
     */
    drop(card: Card): void;
}

/*** Classes ***/
class Rect {
    /*** Representation ***/

    /** 
     * AF(width, height, loc) =
     * 
     * Representation Invariant
     * 
     * Representation Exposure
     * 
     */

    constructor(public readonly c1: {x: number, y: number},
                public readonly c2: {x: number, y: number},
                public readonly c3: {x: number, y: number},
                public readonly c4: {x: number, y: number}) {}
    
    /**
     * Checks if a rectangle overlaps the interval [a, b], requires a <= b
     * 
     * @param a the start of the interval
     * @param b the end of the interval
     * @returns true if this rectangle overlaps [a, b], false otherwise
     */
    public overlaps(a: number, b: number): boolean {
        return this._overlappingIntervals([a, b], [this.c1.x, this.c2.x]) || 
               this._overlappingIntervals([a, b], [this.c4.x, this.c3.x]);
    }

    /**
     * Finds the peak of this rectangle, i.e the highest point on this rectangle's within an interval
     * [a, b], requires a <= b and this rectangle overlap the interval
     * 
     * Definitions
     *      peak: the highest point on the perimeter of a rectangle
     *      ------- <-- any of these points are the highest peak
     *      |     |
     *      -------
     * 
     * 
     * @param a the beggining of the interval
     * @param b the end of the interval
     * @returns the peak of this rectangle on the itnerval [a, b]
     */
    public peak(a: number, b: number): {x: number, y: number} {
        const aY = this._h(a);
        const bY = this._h(b);
        const x = [a, b, this.c1.x, this.c2.x, this.c3.x, this.c4.x];
        const y = [aY, bY, this.c1.y, this.c2.y, this.c3.y, this.c4.y];
        return {x: x[y.indexOf(Math.max(...y))], y: Math.max(...y)};
    }

    /**
     * Rotates a rectangle by an angle about the center of the rectangle
     * 
     * @param angle the angle to rotate the rectangle by, in degrees
     * @returns 
     */
    public rotate(angle: number): Rect {
        const c1 = this._rotatePoint(angle, this.c1);
        const c2 = this._rotatePoint(angle, this.c2);
        const c3 = this._rotatePoint(angle, this.c3);
        const c4 = this._rotatePoint(angle, this.c4);
        return new Rect(c1, c2, c3, c4);
    }

    /**
     * @inheritdoc
     */
    public toString(): string {
        return `----- Rect -----\n\tC1: (${Math.round(this.c4.x)}, ${Math.round(this.c4.y)})\n\tC2: (${Math.round(this.c3.x)}, ${Math.round(this.c3.y)})\n\tC3: (${Math.round(this.c1.x)}, ${Math.round(this.c1.y)})\n\tC4: (${Math.round(this.c2.x)}, ${Math.round(this.c2.y)})\n\t----- ---- -----`;
    }

    /*** Helper Methods ***/
    /**
     * Calculates the hieght of any point along the domain of the rectangle
     * 
     * @param x a number on the domain of the rectangle 
     * @returns the height of the rectangle at point x
     */
    private _h(x: number): number {
        if (Math.min(this.c1.x, this.c2.x, this.c3.x, this.c4.x) > x) return 0;
        if (Math.max(this.c1.x, this.c2.x, this.c3.x, this.c4.x) < x) return 0;

        return (this.c3.y - this.c4.y) / (this.c3.x - this.c4.x) * (x - this.c3.x) + this.c3.y;
    } 

    /**
     * Rotates a point by the given angle 
     * R(x, y, 𝜽) = (x*cos(𝜽)) - y*sin(𝜽), x*sin(𝜽) + y*cos(𝜽))
     * 
     * @param angle to rotate the point by, in degrees
     * @param point to rotate
     * @returns the coordinates of the rotates point
     */
    private _rotatePoint(angle: number, point: {x: number, y: number}): {x: number, y: number} {
        angle *= Math.PI / 180;
        return {x: point.x * Math.cos(angle) - point.y * Math.sin(angle), y: point.x * Math.sin(angle) + point.y * Math.cos(angle)};
    }
    
    /**
     * Checks if two intervals overlap, requires each interval to be of the form [a, b]
     * where a <= b
     * 
     * Definitions
     *      overlap: line segments sharing a segement
     *                  -------
     *             -------
     *  
     * @param interval1 the first interval
     * @param interval2 the second interval
     * @returns true if the intervals overlap, false otherwise
     */
    private _overlappingIntervals(interval1: [number, number], interval2: [number, number]): boolean {
        const [a, b] = interval1;
        const [c, d] = interval2;

        if (d < a || b < c) return false;
        return true;
    }
}

export class Card {
    /*** Representation ***/
    public angle = 0;
    public rect: Rect;
    public marginTop = 0;
    public center: number;
    public marginLeft = 0;

    /** 
     * AF(width, height) =
     * 
     * Representation Invariant
     * 
     * Representation Exposure
     * 
     */

    constructor(readonly width: number, readonly height: number, public readonly name: string) {
        this.rect = new Rect(c(0, 0), c(width, 0), c(width, height), c(0, height));
        this.center = width / 2;
    }

    /**
     * 
     */
    public copy(): Card {
        const copy = new Card(this.width, this.height, this.name);
        copy.marginTop = this.marginTop;
        copy.marginLeft = this.marginLeft;
        return copy;
    }
    /**
     * @inheritdoc
     */
    public toString(): string {
        return `----- Card -----\n\t${this.rect}\n\tCenter: ${this.center}\n\tRotation Angle: ${this.angle}\n\tMarginTop: ${this.marginTop}\n\tMarginLeft: ${this.marginLeft}`   
    }
}

export class CardBucket2D implements CardBucket {
    /*** Representation ***/
    readonly cards: Card[] = [];

    /** 
     * AF(cards) =
     * 
     * Representation Invariant
     * 
     * Representation Exposure
     * 
     */

    constructor(readonly size: {width: number, height: number}) {}

    /** @inheritdoc */
    public drop(card: Card): void {
        const cardCopy = card.copy();
        const w = cardCopy.width;
        cardCopy.center = Math.random() * (this.size.width - w) + w / 2;
        
        const x1 = cardCopy.center - w / 2; 
        const x2 = cardCopy.center + w / 2;
        
        cardCopy.marginLeft = x1;
        cardCopy.rect = new Rect(c(x1, 0), c(x2, 0), c(x2, cardCopy.height), c(x1, cardCopy.height));
        
        const leftPeak = this._peak(x1, cardCopy.center - 1);
        const rightPeak = this._peak(cardCopy.center, x2);
        
        const y1 = Math.max(leftPeak.y, rightPeak.y);
        cardCopy.rect = new Rect(c(x1, y1), c(x2, y1), c(x2, y1 + cardCopy.height), c(x1, y1 + cardCopy.height));

        // const deltaX = leftPeak.y - rightPeak.y
        // const deltaY = leftPeak.x - rightPeak.x

        // if (deltaX !== 0) cardCopy.angle = Math.atan(deltaY / deltaX) * 180 / Math.PI;

        // cardCopy.rect = cardCopy.rect.rotate(cardCopy.angle);
        cardCopy.marginTop = this.size.height - (cardCopy.rect.c1.y + cardCopy.rect.c2.y) / 2;

        if (cardCopy.marginTop < 0) return this.drop(card);
        
        console.log(`Dropped card ${this.cards.length}:\n${cardCopy}`);
        this.cards.push(cardCopy);
    }

    /*** Helper Methods ***/
    /**
     * Finds the card with the highest peak within the interval [a, b]
     * 
     * @param a the start of the interval, must be 0 <= a <= this.width
     * @param b the end of the interval, must be 0 <= a < b <= this.width
     * @returns the coordinates of the peak within the interval and has the heighest peak
     */
    private _peak(a: number, b: number): {x: number, y: number} {
        // console.log(`Searching for overlap on [${Math.round(a)}, ${Math.round(b)}] ....`)
        let peak = {x: a, y: 0};
        for (const card of this.cards) {
            if (!card.rect.overlaps(a, b)) continue;
            const cardPeak = card.rect.peak(a, b);
            // console.log(`\tFound an overlap at (${Math.round(peak.x)}, ${Math.round(peak.y)})`);
            if (cardPeak.y > peak.y) peak = cardPeak;
        }
        return peak;
    }
}