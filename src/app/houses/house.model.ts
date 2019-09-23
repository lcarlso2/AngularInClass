export class House {
    constructor(public id:number, public address:string, public description:string, 
        public listingPrice:number, public availableDate:Date, public numOfBedroom:number, 
        public numOfBathroom: number, public contactPhone: string,public imageUrl:string, 
        public rating:number) {
        }
}