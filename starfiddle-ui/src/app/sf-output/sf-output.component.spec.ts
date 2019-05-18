import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfOutputComponent } from './sf-output.component';

describe('SfOutputComponent', () => {
  let component: SfOutputComponent;
  let fixture: ComponentFixture<SfOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
