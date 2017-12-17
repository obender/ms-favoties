import { TestBed, inject } from '@angular/core/testing';

import { ActionsLogService } from './actions.log.service';

describe('ActionsLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActionsLogService]
    });
  });

  it('should be created', inject([ActionsLogService], (service: ActionsLogService) => {
    expect(service).toBeTruthy();
  }));
});
