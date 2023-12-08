/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, NgModule } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@repro/reprowebcomps/components';

import { defineCustomElement as defineReproComponent } from '@repro/reprowebcomps/components/repro-component.js';
@ProxyCmp({
  defineCustomElementFn: defineReproComponent,
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'repro-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
})
export class ReproComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


@NgModule({
  declarations: [ReproComponent],
  exports: [ReproComponent]
})
export class ReproComponentModule { }


export declare interface ReproComponent extends Components.ReproComponent {}


