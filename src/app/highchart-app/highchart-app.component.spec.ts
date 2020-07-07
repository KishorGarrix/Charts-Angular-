import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartAppComponent } from './highchart-app.component';

describe('HighchartAppComponent', () => {
  let component: HighchartAppComponent;
  let fixture: ComponentFixture<HighchartAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
