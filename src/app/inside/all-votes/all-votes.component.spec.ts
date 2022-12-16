import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVotesComponent } from './all-votes.component';

describe('AllVotesComponent', () => {
  let component: AllVotesComponent;
  let fixture: ComponentFixture<AllVotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
