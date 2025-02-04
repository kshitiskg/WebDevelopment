import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResusableTableComponent } from './resusable-table.component';

describe('ResusableTableComponent', () => {
  let component: ResusableTableComponent;
  let fixture: ComponentFixture<ResusableTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResusableTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResusableTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
