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
import { CardArticleComponent } from './components/card-article/card-article.component';
import { ColumnUserDynamicComponent } from './components/column-user-dynamic/column-user-dynamic.component';
import { BookmarksComponent } from './pages/bookmarks/bookmarks.component';
import { LikedComponent } from './pages/liked/liked.component';
import { PaidComponent } from './pages/paid/paid.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { LayoutOneColumnComponent } from './components/layout-one-column/layout-one-column.component';
import { LayoutAllColumnComponent } from './components/layout-all-column/layout-all-column.component';
import { HelpComponent } from './pages/help/help.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderSimpleComponent } from './components/header-simple/header-simple.component';
import { ErrorComponent } from './pages/error/error.component';
import { AppsComponent } from './pages/apps/apps.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ResetMobileComponent } from './pages/reset-mobile/reset-mobile.component';
import { ResetEmailComponent } from './pages/reset-email/reset-email.component';
import { WriteComponent } from './pages/write/write.component';

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
    CardArticleComponent,
    ColumnUserDynamicComponent,
    BookmarksComponent,
    LikedComponent,
    PaidComponent,
    WalletComponent,
    SettingsComponent,
    FaqsComponent,
    LayoutOneColumnComponent,
    LayoutAllColumnComponent,
    HelpComponent,
    ContactComponent,
    HeaderSimpleComponent,
    ErrorComponent,
    AppsComponent,
    SignInComponent,
    SignUpComponent,
    ResetMobileComponent,
    ResetEmailComponent,
    WriteComponent,
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
