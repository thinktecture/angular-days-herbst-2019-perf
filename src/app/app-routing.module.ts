import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPreloadingStrategyService } from './my-preloading-strategy.service';


const routes: Routes = [{
  path: 'lazy',
  loadChildren: () => import('./lazy/lazy.module')
    .then(l => l.LazyModule)
}, {
  path: 'lazy2',
  loadChildren: () => import('./lazy/lazy.module')
    .then(l => l.LazyModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: MyPreloadingStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
