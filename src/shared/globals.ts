import { InjectionToken } from '@angular/core';

export const GLOBALS = new InjectionToken<User>('globals');

export let user: User;
