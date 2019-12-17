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
    var value = Number(control.value);
    var maxlength = Number(this.maxlength);

    if (value && !isNaN(value) && !isNaN(maxlength) && value.toString().length > maxlength) {
      return { "maxlength": { "requiredMaxLength": this.maxlength, "actualLength": value.toString().length } };
    }
    return null;
  }

}  