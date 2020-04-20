export class ModelFutureResponse {
    
    public temp:number;
    public app_temp:number;
    public rh:string;
    public icon:string;
    public description:string;

    constructor(
        temp: number,
        app_temp:number,
        rh:string,
        icon: string,
        description: string,
        ){
        this.temp=temp;
        this.app_temp=app_temp;
        this.rh=rh;
        this.icon=icon;
        this.description=description;
    }
}
