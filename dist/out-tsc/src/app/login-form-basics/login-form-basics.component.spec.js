import { async, TestBed } from '@angular/core/testing';
import { LoginFormBasicsComponent } from './login-form-basics.component';
describe('LoginFormBasicsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginFormBasicsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LoginFormBasicsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=login-form-basics.component.spec.js.map