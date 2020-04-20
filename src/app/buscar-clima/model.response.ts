export class ModelResponse {
    
    public city_name:string;
    public temp:number;
    public app_temp:number;
    public rh:string;
    public pres:string;
    public wind_spd:string;
    public country_code:string;
    public state_code:string;
    public icon:string;
    public description:string;

    constructor(
        city_name: string, 
        temp: number,
        app_temp:number,
        rh:string,
        pres:string,
        wind_spd:string, 
        country_code: string, 
        state_code: string, 
        icon: string,
        description: string,
        ){
        this.city_name=city_name;
        this.temp=temp;
        this.app_temp=app_temp;
        this.rh=rh;
        this.pres=pres;
        this.wind_spd=wind_spd;
        this.country_code=country_code;
        this.state_code=state_code;
        this.icon=icon;
        this.description=description;
        
    }
}
