import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfEditorComponent } from './sf-editor.component';

describe('SfEditorComponent', () => {
  let component: SfEditorComponent;
  let fixture: ComponentFixture<SfEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
