import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TotalPricePageComponent } from './total-price-page/total-price-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AppRoutingModule } from './app-routing.module';
import { CwSharedUiModule } from '@cw-app/shared-ui';
import { COMPONENTS as TotalPricePageComponents } from './total-price-page/components';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundPageComponent,
        TotalPricePageComponent,
        HomePageComponent,
        TotalPricePageComponents
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, CwSharedUiModule]
})
export class AppModule {}
