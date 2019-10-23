import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { InitComponent } from './pages/init/init.component';
import { ZorroComponent } from './components/zorro/zorro.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { DiscoveryComponent } from './components/discovery/discovery.component';


const routes: Routes = [
  {
    path: '', component: InitComponent, data: { title: '初始化' }
  },
  {
    path: 'zorro', component: ZorroComponent, data: { title: 'zorro' }
  },
  {
    path: 'article', component: ArticleComponent, data: { title: '文章详情' }
  },
  {
    path: 'personal-details', component: PersonalDetailsComponent, data: { title: '个人详情' }
  },
  {
    path: 'discovery', component: DiscoveryComponent, data: { title: '发现' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
