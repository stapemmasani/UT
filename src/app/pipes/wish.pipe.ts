import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wish'
})
export class WishPipe implements PipeTransform {

  transform(name: string): string {
    return 'Hello ' + name;
  }

}
