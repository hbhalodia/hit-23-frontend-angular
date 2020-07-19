import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AngBasicsComponent = class AngBasicsComponent {
    constructor() {
        this.name = '';
    }
    ngOnInit() {
    }
    onClick() {
        window.alert("Button Clicked : ");
    }
};
AngBasicsComponent = __decorate([
    Component({
        selector: 'app-ang-basics',
        templateUrl: './ang-basics.component.html',
        styleUrls: ['./ang-basics.component.css']
    })
], AngBasicsComponent);
export { AngBasicsComponent };
//# sourceMappingURL=ang-basics.component.js.map