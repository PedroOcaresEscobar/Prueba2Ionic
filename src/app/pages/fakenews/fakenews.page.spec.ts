import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FakenewsPage } from './fakenews.page';

describe('FakenewsPage', () => {
  let component: FakenewsPage;
  let fixture: ComponentFixture<FakenewsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FakenewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
