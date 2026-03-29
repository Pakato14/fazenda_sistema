import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = inject(UserService);
  const toastr = inject(ToastrService);

  const user = auth.getUser();

  if (!user) {
    router.navigate(['/login']);
    return false;
  }

  const rolesPermitidos: number[] = route.data['roles'] ?? [];

  if (rolesPermitidos.length && !auth.hasRole(rolesPermitidos)) {
    toastr.warning('Acesso não autorizado!');
    router.navigate(['/home']);
    return false;
  }
  return true;
};
