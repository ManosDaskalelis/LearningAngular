import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  private templateRef = inject(TemplateRef);
  private authService = inject(AuthService);
  private viewContainerRef = inject(ViewContainerRef);
  userAuth = input.required<Permission>({ alias: 'appAuth' });

  constructor() {
    effect(() => {
      if (this.authService.activePermission() == this.userAuth()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
