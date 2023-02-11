import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TotalPricePageComponent } from './total-price-page/total-price-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AppRoutingModule } from './app-routing.module';
import { StoreSelectorComponent } from './total-price-page/components/store-selector/store-selector.component';
import { CwSharedUiModule } from '@cw-app/shared-ui';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';


@NgModule({
    declarations: [
        AppComponent,
        NotFoundPageComponent,
        TotalPricePageComponent,
        HomePageComponent,
        StoreSelectorComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, CwSharedUiModule]
})
export class AppModule {}
