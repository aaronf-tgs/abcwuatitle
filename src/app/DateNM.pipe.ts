import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name: 'MountainTime'
})
@Injectable()
export class DateNMPipe implements PipeTransform {

    public transform(value: any) {
       return value;
    }
}
