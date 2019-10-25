import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { InitComponent } from './pages/init/init.component';
import { ZorroComponent } from './pages/zorro/zorro.component';
import { PersonalDetailsComponent } from './pages/personal-details/personal-details.component';
import { DiscoveryComponent } from './pages/discovery/discovery.component';
import { FollowComponent } from './pages/follow/follow.component';
import { MessageComponent } from './pages/message/message.component';
import { SearchComponent } from './pages/search/search.component';
import { RecommendComponent } from './pages/recommend/recommend.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '', component: InitComponent, data: { title: '初始化' }
  }, {
    path: 'zorro', component: ZorroComponent, data: { title: 'zorro' }
  }, {
    path: 'article', component: ArticleComponent, data: { title: '文章详情' }
  }, {
    path: 'personal-details', component: PersonalDetailsComponent, data: { title: '个人详情' }
  }, {
    path: 'discovery', component: DiscoveryComponent, data: { title: '发现' }
  }, {
    path: 'follow', component: FollowComponent, data: { title: '关注' }
  }, {
    path: 'message', component: MessageComponent, data: { title: '消息' }
  }, {
    path: 'search', component: SearchComponent, data: { title: '搜索' }
  }, {
    path: 'recommend', component: RecommendComponent, data: { title: '推荐' }
  }, {
    path: 'home', component: HomeComponent, data: { title: '我的主页' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
