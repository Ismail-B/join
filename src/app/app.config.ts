import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: "AIzaSyAtUqc_9u90fYf5TyYBzoywgdsBEY23wd4",
          authDomain: "join-e2ab3.firebaseapp.com",
          projectId: "join-e2ab3",
          storageBucket: "join-e2ab3.firebasestorage.app",
          messagingSenderId: "898575240677",
          appId: "1:898575240677:web:f215fae19410d2a8f7330c"
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideAuth(() => getAuth())),
    provideAnimationsAsync(), 
  ],
};
