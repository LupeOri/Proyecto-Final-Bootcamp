import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { TokenGuard } from './token.guard'; // Importar el TokenGuard

describe('TokenGuard', () => { // Asegúrate de usar 'TokenGuard' con la T mayúscula
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => TokenGuard(...guardParameters)); // Utilizar TokenGuard aquí

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});