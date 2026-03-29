import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { UserService } from '../user.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const auth = inject(UserService);
  const router = inject(Router);
  const toastr = inject(ToastrService);

  const user = auth.getUser();
  if (!user) {
    router.navigate(['/login']);
    return false;
  }

  const roles: number[] = route.data['roles'] ?? [];

  if (!auth.hasRole(roles)) {
    toastr.warning('Acesso negado!');
    router.navigate(['/home']);
    return false;
  }
  return true;
};
