import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgReproComponent } from './ng-repro.component';

describe('NgReproComponent', () => {
  let component: NgReproComponent;
  let fixture: ComponentFixture<NgReproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgReproComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgReproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
