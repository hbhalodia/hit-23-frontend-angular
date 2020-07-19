import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginFormBasicsComponent = class LoginFormBasicsComponent {
    constructor() {
        this.namee = '';
        this.email = '';
        this.address = '';
        this.number = '';
    }
    ngOnInit() {
    }
    onButtonClicked() {
        console.log("Name : " + this.namee + "\nEmail :" + this.email + "\nNumber : " + this.number + "\nAddress : " + this.address);
        window.alert("Name : " + this.namee + "\nEmail :" + this.email + "\nNumber : " + this.number + "\nAddress : " + this.address);
    }
};
LoginFormBasicsComponent = __decorate([
    Component({
        selector: 'app-login-form-basics',
        templateUrl: './login-form-basics.component.html',
        styleUrls: ['./login-form-basics.component.css']
    })
], LoginFormBasicsComponent);
export { LoginFormBasicsComponent };
//# sourceMappingURL=login-form-basics.component.js.map