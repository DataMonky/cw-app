import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgSelectModule,
		NgOptionHighlightModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    NgSelectModule,
		NgOptionHighlightModule,
    ReactiveFormsModule,
  ]
})
export class CwSharedUICommonModule { }
