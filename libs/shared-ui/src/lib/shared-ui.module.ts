import { CwSharedUICommonModule } from './common/common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const CW_MODULES = [CwSharedUICommonModule];

@NgModule({
  imports: [CommonModule, CW_MODULES],
  exports: [CW_MODULES]
})
export class CwSharedUiModule {}
