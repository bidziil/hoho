import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { AppComponent } from './app.component';

import { IntroductionComponent } from './view/introduction.component';
import { ReferenceComponent } from './view/reference.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    ReferenceComponent,
    MenuComponent
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
    AppRoutingModule
  ],
  providers: [
    ConfirmationService
    , MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
