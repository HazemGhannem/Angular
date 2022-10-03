import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourniseurComponent } from './fourniseur.component';

describe('FourniseurComponent', () => {
  let component: FourniseurComponent;
  let fixture: ComponentFixture<FourniseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourniseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourniseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
