export class Usuario{
    public email:string;
    public password:string;
    public token:string;
    constructor(_email:string,_password:string,_token?:string){
        this.email=_email;
        this.password=_password;
        this.token=_token;
    }
}