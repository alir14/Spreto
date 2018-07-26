export class CityModel{
    constructor(id:number, name:string,overallRate: number, foodGrade:number, wifiGrade:number, expenseGrade:number){
        this.Id = id,
        this.Name = name;
        this.OverallRate = overallRate;
        this.FoodGrade = foodGrade;
        this.WIFIGrade = wifiGrade;
        this.ExpensesGrade = expenseGrade;
    }
    Id:number;
    Name:string;
    OverallRate:number;
    FoodGrade:number;
    WIFIGrade:number;
    ExpensesGrade:number;
}