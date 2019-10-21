import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { InitComponent } from './pages/init/init.component';


const routes: Routes = [
  {
    path: '', component: InitComponent, data: { title: '文章详情' }
  },
  {
    path: 'article', component: ArticleComponent, data: { title: '文章详情' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
