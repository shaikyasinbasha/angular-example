import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamic-comp-host]',
})
export class DynamicComponentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}