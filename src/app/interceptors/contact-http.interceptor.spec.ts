import { TestBed } from '@angular/core/testing';

import { ContactHttpInterceptor } from './contact-http.interceptor';

describe('ContactHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ContactHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ContactHttpInterceptor = TestBed.inject(ContactHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
