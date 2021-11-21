import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MaterialModule} from './modules/material-module/material.module';
import {HomeComponent} from './pages/home/home.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {JavaComponent} from './pages/java/java.component';
import {UnknownComponent} from './pages/unknown/unknown.component';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {RustComponent} from './pages/rust/rust.component';
import {GolangComponent} from "./pages/golang/golang.component";
import {BashComponent} from "./pages/bash/bash.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        JavaComponent,
        RustComponent,
        BashComponent,
        GolangComponent,
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
