import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadjokeComponent } from './dadjoke.component';

describe('DadjokeComponent', () => {
  let component: DadjokeComponent;
  let fixture: ComponentFixture<DadjokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadjokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadjokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
