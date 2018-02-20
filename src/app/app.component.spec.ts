import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {ApiService} from './api.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [ApiService , {provide: APP_BASE_HREF, useValue: '/my/app'}],
    }).compileComponents();
  }));
  const data = {
      'list': {
          'pagination': {
              'count': 1,
              'hasMoreItems': false,
              'totalItems': 1,
              'skipCount': 0,
              'maxItems': 100
          },
          'entries': [
              {
                  'entry': {
                      'targetGuid': '1ced1cfc-efc9-4623-a39f-5bae34e66f2c',
                      'target': {
                          'file': {
                              'name': 'Partner Newsletter Jan2018.docx'
                          }
                      }
                  }
              }
          ]
      }
  };
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').length).not.toEqual(0);
  }));
  it('should contain a title inside the cards', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    if (compiled.querySelector('mat-card')) {
      expect(compiled.querySelector('mat-card span').textContent.length).not.toEqual(0);
    }
  }));
  it('should contain a icon inside the cards', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    if (compiled.querySelector('mat-card')) {
      expect(compiled.querySelector('mat-card i').length).not.toEqual(0);
    }
  }));
  // it(`should retrieve favourites`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //     expect(app.favourites.length).toEqual(1);
  // }));
  it(`should process favourites`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      app.processFavourites(data);
      expect(app.favourites.length).toEqual(1);
  }));
});
