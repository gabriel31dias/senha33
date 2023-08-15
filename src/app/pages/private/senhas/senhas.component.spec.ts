import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SenhasComponent } from "./senhas.component";

describe("DashboardComponent", () => {
  let component: SenhasComponent;
  let fixture: ComponentFixture<SenhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SenhasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
