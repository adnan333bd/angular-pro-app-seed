import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

describe('LoginComponent', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(
                    [{ path: 'auth/register', component: DummyRegisterComponent }]
                ),
                SharedModule
            ],
            declarations: [
                LoginComponent
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // init
    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

    // template
    it(`should have as title 'Login'`, () => {
        expect(component.title).toEqual('Login');
    });

    it(`should have h1 tag with "Login"`, () => {
        const h1Element: HTMLHeadingElement = fixture.debugElement.query(By.css('h1')).nativeElement;
        // debugger;
        expect(h1Element.textContent).toBe('Login');
    });

    it('should be at least one button', () => {
        const buttons = fixture.debugElement.queryAll(By.css('button'));
        expect(buttons.length >= 1).toBeTruthy();
    });

    it('should contain one "Login" button', () => {
        const buttons = fixture.debugElement.queryAll(By.css('button'));
        const LoginButton: HTMLButtonElement = buttons[0].nativeElement;
        expect(LoginButton.textContent).toBe('Login');
    });

    it('should contain "Not registered?" anchor link', () => {
        const links = fixture.debugElement.queryAll(By.css('a'));
        const loginAnchor: HTMLAnchorElement = links[0].nativeElement;
        expect(loginAnchor.textContent).toBe('Not registered?');
    });

    it(`should not have a Div with .error`, () => {
        const divs = fixture.debugElement.queryAll(By.css('div.error'));

        expect(divs.length).toBe(0);
    });

    it(`should have a Div with .error when error is set with a string`, () => {
        component.error = 'could not login';
        fixture.detectChanges();
        const divs = fixture.debugElement.queryAll(By.css('div.error'));
        expect(divs.length).toBe(1);
    });

    it(`should show error string in the UI`, () => {
        component.error = 'could not login';
        fixture.detectChanges();
        const errorDiv = fixture.debugElement.queryAll(By.css('div.error'))[0].nativeElement;
        expect(errorDiv.textContent).toBe('could not login');
      });

    // routing
    it('should nav. to / before anchor click', () => {
        const location = TestBed.inject(Location);
        expect(location.path()).toBe('');
    });

    it('should nav. to auth/register on anchor click', async () => {
        const links = fixture.debugElement.queryAll(By.css('a'));
        const loginAnchor: HTMLAnchorElement = links[0].nativeElement;
        loginAnchor.click();
        fixture.detectChanges();
        await fixture.whenStable().then(() => {
            const location = TestBed.inject(Location);
            expect(location.path()).toBe('/auth/register');
        });
    });


});



@Component({
    template: ``
})
export class DummyRegisterComponent { }
