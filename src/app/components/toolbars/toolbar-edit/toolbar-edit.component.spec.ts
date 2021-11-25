import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarEditComponent } from './toolbar-edit.component';

describe('ToolbarEditComponent', () => {
  let component: ToolbarEditComponent;
  let fixture: ComponentFixture<ToolbarEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
