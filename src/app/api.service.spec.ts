import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });
  it('should retrieve data from the API via GET', () => {
      const dummyPosts = [
          {
              'list': {
                  'pagination': {
                      'count': 1,
                      'hasMoreItems': false,
                      'totalItems': 1,
                      'skipCount': 0,
                      'maxItems': 100
                  },
                  'entries': [
                      {
                          'entry': {
                              'targetGuid': '1ced1cfc-efc9-4623-a39f-5bae34e66f2c',
                              'target': {
                                  'file': {
                                      'name': 'Partner Newsletter Jan2018.docx'
                                  }
                              }
                          }
                      }
                  ]
              }
          }
      ];
      service.getFavourites().subscribe(posts => {
         expect(posts.length).toBe(1);
         expect(posts).toEqual(dummyPosts);
      });
    const request = httpMock.expectOne(service.ROOT_URL);
    expect(request.request.method).toBe('GET');
  });
});
