import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrributeComponent } from './atrribute.component';

describe('AtrributeComponent', () => {
  let component: AtrributeComponent;
  let fixture: ComponentFixture<AtrributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtrributeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtrributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
