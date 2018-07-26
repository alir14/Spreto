export class CityModel{
    constructor(id:number, name:string,overallRate: number, foodGrade:number, wifiGrade:number, expenseGrade:number, imageName:string){
        this.Id = id,
        this.Name = name;
        this.OverallRate = overallRate;
        this.FoodGrade = foodGrade;
        this.WIFIGrade = wifiGrade;
        this.ExpensesGrade = expenseGrade;
        this.ImageName = imageName;
    }
    Id:number;
    Name:string;
    OverallRate:number;
    FoodGrade:number;
    WIFIGrade:number;
    ExpensesGrade:number;
    ImageName:string;
}