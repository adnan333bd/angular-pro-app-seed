import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/auth/shared/services/auth/auth.service';
import { Store } from 'store';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { AppNavComponent } from '../../components/app-nav/app-nav.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        AppHeaderComponent,
        AppNavComponent
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: Store, useClass: StoreStub },
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /*  it(`should have as title 'fitness-app'`, () => {
     const fixture = TestBed.createComponent(AppComponent);
     const app = fixture.componentInstance;
     expect(app.title).toEqual('fitness-app');
   });
 
   it('should render title', () => {
     const fixture = TestBed.createComponent(AppComponent);
     fixture.detectChanges();
     const compiled = fixture.nativeElement;
     expect(compiled.querySelector('.content span').textContent).toContain('fitness-app app is running!');
   }); */
});

class AuthServiceStub {
}
class StoreStub {
}