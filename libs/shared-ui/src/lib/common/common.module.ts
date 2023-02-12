import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import {NumberPickerModule} from 'ng-number-picker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgSelectModule,
		NgOptionHighlightModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NumberPickerModule
  ],
  exports: [
    CommonModule,
    NgSelectModule,
		NgOptionHighlightModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NumberPickerModule
  ]
})
export class CwSharedUICommonModule { }
