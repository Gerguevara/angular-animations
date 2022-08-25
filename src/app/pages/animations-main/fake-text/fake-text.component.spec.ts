import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeTextComponent } from './fake-text.component';

describe('FakeTextComponent', () => {
  let component: FakeTextComponent;
  let fixture: ComponentFixture<FakeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
