import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSModulesComponent } from './tsmodules.component';

describe('TSModulesComponent', () => {
  let component: TSModulesComponent;
  let fixture: ComponentFixture<TSModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TSModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TSModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
