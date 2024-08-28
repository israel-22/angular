import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideHttpClient(), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"app-pokemon-fa6eb","appId":"1:518889483874:web:7ccaea04d78fe7e4252b3b","storageBucket":"app-pokemon-fa6eb.appspot.com","apiKey":"AIzaSyDz9zIzxS1wWUEvQDLzkegssfmhGgEIlOc","authDomain":"app-pokemon-fa6eb.firebaseapp.com","messagingSenderId":"518889483874","measurementId":"G-YV6KMX8GS0"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
