import { ValidationErrors, AbstractControl } from '@angular/forms';

export class PhoneValidator {
    static phoneShouldBeValid(control: AbstractControl): ValidationErrors | null {
        const regex = /^([()\- x+]*\d[()\- x+]*){10}$/i;
        const valid = regex.test(control.value);
        return valid ? null : { invalidPhone: true };
    }
}
