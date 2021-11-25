import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensModalComponent } from './itens-modal.component';

describe('ItensModalComponent', () => {
  let component: ItensModalComponent;
  let fixture: ComponentFixture<ItensModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItensModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
