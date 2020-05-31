import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


const materialModules = [
    MatSidenavModule,
    MatToolbarModule,
]


@NgModule({
  imports: [...materialModules],
  exports: [...materialModules]
})
export class MaterialModule { }
