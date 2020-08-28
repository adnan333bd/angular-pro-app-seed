import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';

describe('ReigsterComponent', () => {

  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Register'`, () => {
    expect(component.title).toEqual('Register');
  });

  it(`should have h1 tag with "Register"`, () => {
    const h1Element = fixture.debugElement.query(By.css('h1'));
    // debugger;
    expect(h1Element.nativeElement.textContent).toBe('Register');
  });
});
