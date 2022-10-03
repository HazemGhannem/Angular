import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFourniseurComponent } from './list-fourniseur.component';

describe('ListFourniseurComponent', () => {
  let component: ListFourniseurComponent;
  let fixture: ComponentFixture<ListFourniseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFourniseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFourniseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
