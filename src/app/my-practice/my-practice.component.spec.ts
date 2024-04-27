import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPracticeComponent } from './my-practice.component';

describe('MyPracticeComponent', () => {
  let component: MyPracticeComponent;
  let fixture: ComponentFixture<MyPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
