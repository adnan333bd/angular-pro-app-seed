import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

describe('ReigsterComponent', () => {

  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(
          [{ path: 'auth/login', component: DummyLoginComponent }]
        ),
        SharedModule
      ],
      declarations: [
        RegisterComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // init
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // template
  it(`should have as title 'Register'`, () => {
    expect(component.title).toEqual('Register');
  });

  it(`should have h1 tag with "Register"`, () => {
    const h1Element: HTMLHeadingElement = fixture.debugElement.query(By.css('h1')).nativeElement;
    // debugger;
    expect(h1Element.textContent).toBe('Register');
  });

  it('should be at least one button', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length >= 1).toBeTruthy();
  });

  it('should contain one "Register" button', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const registerButton: HTMLButtonElement = buttons[0].nativeElement;
    expect(registerButton.textContent).toBe('Register');
  });

  it('should contain "Already have an account?" anchor link', () => {
    const links = fixture.debugElement.queryAll(By.css('a'));
    const loginAnchor: HTMLAnchorElement = links[0].nativeElement;
    expect(loginAnchor.textContent).toBe('Already have an account?');
  });

  it(`should not have a Div with .error`, () => {
    const divs = fixture.debugElement.queryAll(By.css('div.error'));
    expect(divs.length).toBe(0);
  });

  it(`should have a Div with .error when error is set with a string`, () => {
    component.error = 'could not register';
    fixture.detectChanges();
    const divs = fixture.debugElement.queryAll(By.css('div.error'));
    expect(divs.length).toBe(1);
  });

  it(`should show error string in the UI`, () => {
    component.error = 'could not register';
    fixture.detectChanges();
    const errorDiv = fixture.debugElement.queryAll(By.css('div.error'))[0].nativeElement;
    expect(errorDiv.textContent).toBe('could not register');
  });

  // routing
  it('should nav. to / before anchor click', () => {
    const location = TestBed.inject(Location);
    expect(location.path()).toBe('');
  });

  it('should nav. to auth/login on anchor click', async () => {
    const links = fixture.debugElement.queryAll(By.css('a'));
    const loginAnchor: HTMLAnchorElement = links[0].nativeElement;
    loginAnchor.click();
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      const location = TestBed.inject(Location);
      expect(location.path()).toBe('/auth/login');
    });
  });

});


@Component({
  template: ``
})
export class DummyLoginComponent { }
