import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { UserService } from '../services/user.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let userService: UserService;
  let fixture: ComponentFixture<UserComponent>;
  let http: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    http = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        UserService,
        {
          provide: HttpClient, useValue: http
        }
      ]
    });

    userService = TestBed.inject(UserService);
    fixture = TestBed.createComponent(UserComponent);

  });

  it('should get and display all my users', () => {
    const mockUsers = [
      {
        id: 1,
        name: 'Arjun',
        email: 'arjun@gmail.com',
        phone: '123123123123'
      },
      {
        id: 2,
        name: 'Gaurav',
        email: 'gaurav@gmail.com',
        phone: '1231231231'
      }
    ];
    http.get.and.returnValue(of(mockUsers));
    // tslint:disable-next-line: deprecation
    userService.GetUsers().subscribe(results => {
      fixture.detectChanges();
      expect(fixture.componentInstance.users.length).toEqual(2);
    });
  });

  it('check records are rendered properly the users list', () => {
    const mockUsers = [
      {
        id: 1,
        name: 'Arjun',
        email: 'arjun@gmail.com',
        phone: '123123123123'
      }
    ];
    http.get.and.returnValue(of(mockUsers));
    // tslint:disable-next-line: deprecation
    userService.GetUsers().subscribe(results => {
      fixture.detectChanges();
      const element = fixture.debugElement.queryAll(By.css('tr'));
      expect(element.length).toEqual(2);
    });
  });

});
