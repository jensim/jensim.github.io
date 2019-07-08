import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MaterialModule} from './modules/material-module/material.module';
import {HomeComponent} from './pages/home/home.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MenuComponent} from './pages/menu/menu.component';
import {JavaComponent} from './pages/java/java.component';
import {UnknownComponent} from './pages/unknown/unknown.component';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,
        JavaComponent,
        UnknownComponent,
      ],
      imports: [
        MaterialModule,
        NoopAnimationsModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            fragment: of({page: 'home'})
          }
        }
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
