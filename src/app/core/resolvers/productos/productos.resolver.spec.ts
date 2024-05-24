import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productosResolver } from './productos.resolver';

describe('productosResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productosResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
