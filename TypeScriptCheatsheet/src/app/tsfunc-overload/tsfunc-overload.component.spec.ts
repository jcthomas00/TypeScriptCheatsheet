import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSFuncOverloadComponent } from './tsfunc-overload.component';

describe('TSFuncOverloadComponent', () => {
  let component: TSFuncOverloadComponent;
  let fixture: ComponentFixture<TSFuncOverloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TSFuncOverloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TSFuncOverloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
