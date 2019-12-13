import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarCostomComponent } from './navbar-costom.component';

describe('NavbarCostomComponent', () => {
  let component: NavbarCostomComponent;
  let fixture: ComponentFixture<NavbarCostomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarCostomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarCostomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
