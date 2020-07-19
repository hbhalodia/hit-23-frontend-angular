import { __decorate } from "tslib";
import { CustomInputComponent } from './Custom_input/Custom_input.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngBasicsComponent } from './ang-basics/ang-basics.component';
import { FormsModule } from '@angular/forms';
import { LoginFormBasicsComponent } from './login-form-basics/login-form-basics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            AngBasicsComponent,
            CustomInputComponent,
            LoginFormBasicsComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            AppRoutingModule,
            MatInputModule,
            MatToolbarModule,
            BrowserAnimationsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map