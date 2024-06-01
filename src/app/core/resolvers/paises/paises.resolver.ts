import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PaisesService } from '../../../services/paises/paises.service';
import { PaisModel } from '../../models/pais.model';

export const paisesResolver: ResolveFn<PaisModel[]> = (route, state) => {
  return inject(PaisesService).getPaises();
};
