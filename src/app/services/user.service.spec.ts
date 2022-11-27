import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { User } from 'src/models/user';
import { UserService } from './user.service';

let http: jasmine.SpyObj<HttpClient>;
let userService: UserService;

describe('UserService', () => {

  beforeEach(() => {
    http = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: HttpClient, useValue: http }
      ]
    });
    userService = TestBed.inject(UserService);
  });

  it('should return my users', () => {
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
      },
      {
        id: 3,
        name: 'Gaurav',
        email: 'gaurav@gmail.com',
        phone: '1231231231'
      }];

    http.get.and.returnValue(of(mockUsers));

    // tslint:disable-next-line: deprecation
    userService.GetUsers().subscribe(results => {
      expect(results.length).toEqual(3);
    });

  });

  it('should add user', () => {
    const user: User =
    {
      id: 1,
      name: 'Modiji',
      email: 'arjun@gmail.com',
      phone: '1231231231'
    };

    http.post.and.returnValue(of(user));

    // tslint:disable-next-line: deprecation
    userService.AddUser(user).subscribe(result => {
      expect(result.name).toBe('Modiji');
    });
  });

  it('should get user by Id', () => {
    const user: User =
    {
      id: 1,
      name: 'Arjun',
      email: 'arjun@gmail.com',
      phone: '1231231231'
    };
    // If you observe user service it returns an observableof Users array
    http.get.and.returnValue(of(user));
    // tslint:disable-next-line: deprecation
    userService.GetUser(1).subscribe(result => {
      expect(result.phone).toBe('1231231231');
    });
  });


});
