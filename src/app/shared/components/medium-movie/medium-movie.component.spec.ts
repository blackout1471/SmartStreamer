import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumMovieComponent } from './medium-movie.component';

describe('MediumMovieComponent', () => {
  let component: MediumMovieComponent;
  let fixture: ComponentFixture<MediumMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
