import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSFunctionsComponent } from './tsfunctions.component';

describe('TSFunctionsComponent', () => {
  let component: TSFunctionsComponent;
  let fixture: ComponentFixture<TSFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TSFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TSFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
