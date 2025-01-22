import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiscComponent } from './baisc.component';

describe('BaiscComponent', () => {
  let component: BaiscComponent;
  let fixture: ComponentFixture<BaiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaiscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
