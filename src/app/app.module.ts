import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './pages/article/article.component';
import { InitComponent } from './pages/init/init.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ZorroComponent } from './pages/zorro/zorro.component';
import { BackTopComponent } from './components/back-top/back-top.component';
import { PersonalDetailsComponent } from './pages/personal-details/personal-details.component';
import { DiscoveryComponent } from './pages/discovery/discovery.component';
import { LeftRightLayoutComponent } from './components/left-right-layout/left-right-layout.component';
import { CardMessageToolsComponent } from './components/card-message-tools/card-message-tools.component';
import { FollowComponent } from './pages/follow/follow.component';
import { LeftRightLayoutFollowComponent } from './components/left-right-layout-follow/left-right-layout-follow.component';
import { MessageComponent } from './pages/message/message.component';
import { SearchComponent } from './pages/search/search.component';
import { PagingComponent } from './components/paging/paging.component';
import { RecommendComponent } from './pages/recommend/recommend.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ClickOutsideDirective } from './directive/click-outside.directive';
import { HomeComponent } from './pages/home/home.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ListMiniAuthorComponent } from './components/list-mini-author/list-mini-author.component';
import { CardFocusAuthorComponent } from './components/card-focus-author/card-focus-author.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    InitComponent,
    HeaderComponent,
    FooterComponent,
    ZorroComponent,
    BackTopComponent,
    PersonalDetailsComponent,
    DiscoveryComponent,
    LeftRightLayoutComponent,
    CardMessageToolsComponent,
    FollowComponent,
    LeftRightLayoutFollowComponent,
    MessageComponent,
    SearchComponent,
    PagingComponent,
    RecommendComponent,
    DropdownComponent,
    ClickOutsideDirective,
    HomeComponent,
    TabsComponent,
    ListMiniAuthorComponent,
    CardFocusAuthorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
