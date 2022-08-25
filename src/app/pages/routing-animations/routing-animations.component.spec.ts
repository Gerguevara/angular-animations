import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingAnimationsComponent } from './routing-animations.component';

describe('RoutingAnimationsComponent', () => {
  let component: RoutingAnimationsComponent;
  let fixture: ComponentFixture<RoutingAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingAnimationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
