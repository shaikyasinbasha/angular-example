import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { DynamicComponentDirective } from './DynamicLoaderDirective';

export interface ComponentDetails {
    component: any,
    data: any
}

@Component({
  selector: 'dynamic-loader-container',
  template: `<ng-template dynamic-comp-host></ng-template>`
})
export class DynamicLoaderComponent implements OnInit {
  @Input() item: ComponentDetails;
  @ViewChild(DynamicComponentDirective) dynamicHost: DynamicComponentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.item.component);
    let viewContainerRef = this.dynamicHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<any>componentRef.instance).data = this.item.data;
  }
}
