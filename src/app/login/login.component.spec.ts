import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ ReactiveFormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect form is valid', () => {
    fixture.nativeElement.querySelector('button').click();

    expect(component.login()).toEqual('invalid_form');
  });

  it('should validate correct user and password', () => {
    component.loginForm = formBuilder.group({
      email: 'test@test.com',
      password: '123456'
    });
    fixture.nativeElement.querySelector('button').click();

    expect(component.login()).toEqual('login_valid');
  });

  it('should deny access with incorrect password', () => {
    component.loginForm = formBuilder.group({
      email: 'test@test.com',
      password: '123'
    });
    fixture.nativeElement.querySelector('button').click();

    expect(component.login()).toEqual('login_invalid');
  });
});
