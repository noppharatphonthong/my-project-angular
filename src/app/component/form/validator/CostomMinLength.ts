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
    var value = Number(control.value);
    var minlength = Number(this.minlength);

    if (value && !isNaN(value) && !isNaN(minlength) && value.toString().length < minlength) {
      return { "minlength": { "requiredMinLength": this.minlength, "actualLength": value.toString().length } };
    }
    return null;
  }

}  