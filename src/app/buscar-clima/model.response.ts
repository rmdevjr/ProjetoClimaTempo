export class ModelResponse {
    
    public city_name:string;
    public temp:number;
    public country_code:string;
    public state_code:string;
    

    constructor(city_name: string, temp: number, country_code: string, state_code: string){
        this.city_name=city_name;
        this.temp=temp;
        this.country_code=country_code;
        this.state_code=state_code;
        
    }
}
