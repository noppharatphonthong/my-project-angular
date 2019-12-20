import { Directive, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[costom-minlength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: CostomMinLength,
      multi: true
    }
  ]
})
export class CostomMinLength implements Validator {

  constructor(@Attribute('costom-minlength') public minlength: number) { }

  validate(control: FormControl) {
    let value = (!isNaN(Number(control.value)))?Number(control.value):control.value;
    let valueLength = (!isNaN(Number(control.value)))?Number(control.value).toString().length:control.value.length;
    let minlength = Number(this.minlength);

    if (value && !isNaN(minlength) && valueLength < minlength) {
      return { "minlength": { "requiredMinLength": this.minlength, "actualLength": valueLength } };
    }
    return null;
  }

}  