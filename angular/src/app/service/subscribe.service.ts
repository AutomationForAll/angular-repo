import { ContentChildDecorator } from "@angular/core";
import { UserData } from "../module/appdata";

export class subscribe{
 
    UserData:UserData[]=[
        // new UserData('company1','contact1','AU'),
        // new UserData('company2','contact2','IN'),
        // new UserData('company3','contact3','RU')
    ]

 onclicksubscribe(data:string){
 alert('this is subscribe clicked' +data)
 }

getData(){
    return this.UserData;
}

addData(company:string,contact:string,country:string){

    return this.UserData.push(new UserData(company,contact,country));

}



}



