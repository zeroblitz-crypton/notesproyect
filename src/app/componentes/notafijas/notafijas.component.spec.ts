import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotafijasComponent } from './notafijas.component';

describe('NotafijasComponent', () => {
  let component: NotafijasComponent;
  let fixture: ComponentFixture<NotafijasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotafijasComponent]
    });
    fixture = TestBed.createComponent(NotafijasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
