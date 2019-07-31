import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  ConfirmationService, MessageService,
  AutoCompleteModule, RadioButtonModule, AccordionModule, InputTextModule,
  DataGridModule, DataScrollerModule, DialogModule, SharedModule,
  SliderModule, SelectButtonModule, MessageModule,
  FieldsetModule, TreeModule, PaginatorModule, CardModule, MessagesModule,
  InplaceModule, SplitButtonModule, ToggleButtonModule, ListboxModule,
  DataListModule, FileUploadModule, PickListModule, ProgressBarModule,
  DeferModule, CheckboxModule, TriStateCheckboxModule, DropdownModule,
  MenubarModule, OverlayPanelModule, PanelModule, PanelMenuModule, SpinnerModule,
  TabViewModule, ToolbarModule, MultiSelectModule, ButtonModule, CalendarModule,
  ConfirmDialogModule, InputTextareaModule, GalleriaModule
}                                                               from 'primeng/primeng';
import { TableModule }                                          from 'primeng/table';
import { TreeTableModule }                                      from 'primeng/treetable';
import { ToastModule }                                          from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppErrorHandlerModule, RollbarServiceModule } from './error/app.error.handler';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { IntroductionComponent } from './view/introduction.component';
import { ReferenceComponent } from './view/reference.component';
import { PicturesComponent } from './view/pictures.component';
import { ContactComponent } from './view/contact.component';
import { ProfilesComponent } from './view/profiles.component';
import { DownloadsComponent } from './view/downloads.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    ReferenceComponent,
    MenuComponent,
    PicturesComponent,
    ContactComponent,
    ProfilesComponent,
    DownloadsComponent
  ],
  imports: [
    BrowserModule,
    // primeng modules:
    AutoCompleteModule, RadioButtonModule, AccordionModule, InputTextModule,
    DataGridModule, DataScrollerModule, DialogModule, SharedModule,
    SliderModule, SelectButtonModule, MessageModule,
    FieldsetModule, TreeModule, PaginatorModule, CardModule, MessagesModule,
    InplaceModule, SplitButtonModule, ToggleButtonModule, ListboxModule,
    DataListModule, FileUploadModule, PickListModule, ProgressBarModule,
    DeferModule, CheckboxModule, TriStateCheckboxModule, DropdownModule,
    MenubarModule, OverlayPanelModule, PanelModule, PanelMenuModule, SpinnerModule,
    TabViewModule, ToolbarModule, MultiSelectModule, ButtonModule, CalendarModule,
    ConfirmDialogModule, TableModule, TreeTableModule, ToastModule,
    InputTextareaModule, GalleriaModule,
    AppRoutingModule, AppErrorHandlerModule, RollbarServiceModule
  ],
  providers: [
    ConfirmationService
    , MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
