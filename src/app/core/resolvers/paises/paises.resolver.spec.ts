import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { paisesResolver } from './paises.resolver';

describe('paisesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => paisesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
