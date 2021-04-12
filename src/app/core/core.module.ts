import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/store.state';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/posts';
// import { PostEffects } from './store/posts/posts.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([PostEffects]),
  ],
})
export class CoreModule {}
