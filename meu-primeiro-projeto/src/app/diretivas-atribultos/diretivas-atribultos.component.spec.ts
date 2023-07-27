import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasAtribultosComponent } from './diretivas-atribultos.component';

describe('DiretivasAtribultosComponent', () => {
  let component: DiretivasAtribultosComponent;
  let fixture: ComponentFixture<DiretivasAtribultosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasAtribultosComponent]
    });
    fixture = TestBed.createComponent(DiretivasAtribultosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
