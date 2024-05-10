import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuprimentoPage } from './suprimento.page';

describe('SuprimentoPage', () => {
  let component: SuprimentoPage;
  let fixture: ComponentFixture<SuprimentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuprimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
