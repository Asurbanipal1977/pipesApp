import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule, CardModule, MenubarModule, FieldsetModule, RippleModule
  ]
})
export class PrimeNgModule { }
