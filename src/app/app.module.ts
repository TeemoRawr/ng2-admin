import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgaThemeModule } from '../framework/theme';

import { AppComponent } from './app.component';
import { NgaCardTestComponent } from './nga-card-test/nga-card-test.component';
import { NgaLayoutHeaderTestComponent } from './nga-layout-test/nga-layout-header-test.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NgaCardTestComponent,
    NgaLayoutHeaderTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgaThemeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
