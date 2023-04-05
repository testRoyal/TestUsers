import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(UserService);
  // });

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [UserService]
  }));
  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
   });

   it('should have getUsersList function', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service.getUsersList).toBeTruthy();
   });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
