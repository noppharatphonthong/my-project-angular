import { Directive, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[costom-maxlength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: CostomMaxLength,
      multi: true
    }
  ]
})
export class CostomMaxLength implements Validator {

  constructor(@Attribute('costom-maxlength') public maxlength: number) { }

  validate(control: FormControl) {
    let value = (!isNaN(Number(control.value)))?Number(control.value):control.value;
    let valueLength = (!isNaN(Number(control.value)))?Number(control.value).toString().length:control.value.length;
    let maxlength = Number(this.maxlength);

    if (value && !isNaN(maxlength) && valueLength > maxlength) {
      return { "maxlength": { "requiredMaxLength": this.maxlength, "actualLength": valueLength } };
    }
    return null;
  }

}  