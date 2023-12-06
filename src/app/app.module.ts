import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppSideNavComponent } from './components/app-side-nav/app-side-nav.component';
import { CounterBtnComponent } from './components/counter-btn/counter-btn.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppContentComponent,
    AppFooterComponent,
    AppSideNavComponent,
    CounterBtnComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
