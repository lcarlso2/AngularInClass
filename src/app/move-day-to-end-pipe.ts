import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'MoveDayToEndPipe'
})

export class MoveDayToEndPipe implements PipeTransform {
    transform(dateValue: string) {
        try {
            let datePipe = new DatePipe('en-US');
            let date = datePipe.transform(dateValue, "fullDate");
            date = date.split(',')[1] + ", "+ date.split(',')[2] + ", " +date.split(',')[0];
            return date;
        } catch (error) {
            return dateValue;
        }
    }
}