import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MemberComponent} from './pages/member/member.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/member'},
  {
    path: 'member',
    component: MemberComponent
    // loadChildren: () => import('./pages/member/member.module').then(m => m.MemberModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
