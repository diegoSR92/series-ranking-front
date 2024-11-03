import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesRankingComponent } from './series-ranking.component';

describe('SeriesRankingComponent', () => {
  let component: SeriesRankingComponent;
  let fixture: ComponentFixture<SeriesRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
