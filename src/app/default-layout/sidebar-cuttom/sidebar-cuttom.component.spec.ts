import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCuttomComponent } from './sidebar-cuttom.component';

describe('SidebarCuttomComponent', () => {
  let component: SidebarCuttomComponent;
  let fixture: ComponentFixture<SidebarCuttomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarCuttomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCuttomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
