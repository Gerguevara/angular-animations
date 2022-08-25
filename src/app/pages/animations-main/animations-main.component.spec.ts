import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsMainComponent } from './animations-main.component';

describe('AnimationsMainComponent', () => {
  let component: AnimationsMainComponent;
  let fixture: ComponentFixture<AnimationsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
