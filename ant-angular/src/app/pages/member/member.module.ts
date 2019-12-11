import {NgModule} from '@angular/core';

import {MemberRoutingModule} from './member-routing.module';

import {MemberComponent} from './member.component';

@NgModule({
  imports: [MemberRoutingModule],
  declarations: [MemberComponent],
  exports: [MemberComponent]
})
export class MemberModule {}
