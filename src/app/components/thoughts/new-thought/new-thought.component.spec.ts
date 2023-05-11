import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThoughtComponent } from './new-thought.component';

describe('NewThoughtComponent', () => {
  let component: NewThoughtComponent;
  let fixture: ComponentFixture<NewThoughtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewThoughtComponent]
    });
    fixture = TestBed.createComponent(NewThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
