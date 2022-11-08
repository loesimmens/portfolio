import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightIndexComponent } from './right-index.component';

describe('RightIndexComponent', () => {
  let component: RightIndexComponent;
  let fixture: ComponentFixture<RightIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
