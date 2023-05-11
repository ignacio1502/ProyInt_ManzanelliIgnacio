import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoApComponent } from './logo-ap.component';

describe('LogoApComponent', () => {
  let component: LogoApComponent;
  let fixture: ComponentFixture<LogoApComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoApComponent]
    });
    fixture = TestBed.createComponent(LogoApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
