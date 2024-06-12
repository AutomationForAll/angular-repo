import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customePipe',
  standalone: true
})
export class CustomePipePipe implements PipeTransform {

  transform(value1: string,value2:string): string {
    //return value.concat("added from pipe")
    return value1.concat(value2)
  }

}
