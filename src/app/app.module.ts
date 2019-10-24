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
import { ZorroComponent } from './components/zorro/zorro.component';
import { BackTopComponent } from './components/back-top/back-top.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';
import { DiscoveryComponent } from './components/discovery/discovery.component';
import { LeftRightLayoutComponent } from './components/left-right-layout/left-right-layout.component';
import { CardMessageToolsComponent } from './components/card-message-tools/card-message-tools.component';
import { FollowComponent } from './components/follow/follow.component';
import { LeftRightLayoutFollowComponent } from './components/left-right-layout-follow/left-right-layout-follow.component';

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
    LeftRightLayoutFollowComponent
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
