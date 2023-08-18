import { ErrorHandler, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { SenhasRoutingModule } from './senhas-routing.module'

import { CheckboxModule } from 'primeng/checkbox'
import { CardModule } from 'primeng/card';
import { NgxSpinnerModule } from 'ngx-spinner'
import { ToggleButtonModule } from 'primeng/togglebutton'
import { ProgressBarModule } from 'primeng/progressbar'
import { AccordionModule } from 'primeng/accordion'
import { TableModule } from 'primeng/table'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { DropdownModule } from 'primeng/dropdown'
import { DialogModule } from 'primeng/dialog'
import { ToastModule } from 'primeng/toast'
import { RippleModule } from 'primeng/ripple'
import { MessagesModule } from 'primeng/messages'
import { MessageModule } from 'primeng/message'
import { TooltipModule } from 'primeng/tooltip'
import { MultiSelectModule } from 'primeng/multiselect'
import { SidebarModule } from 'primeng/sidebar'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { InputMaskModule } from 'primeng/inputmask'

import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { JwtInterceptor } from '@auth0/angular-jwt'
import { GlobalErrorHandler } from 'src/app/guards/global-error-handler'
import { SenhasComponent } from './senhas.component'

const primeModules = [
  ProgressSpinnerModule,
  InputMaskModule,
  SidebarModule,
  CheckboxModule,
  NgxSpinnerModule,
  ToggleButtonModule,
  ProgressBarModule,
  AccordionModule,
  TableModule,
  ButtonModule,
  InputTextModule,
  DropdownModule,
  DialogModule,
  ToastModule,
  ToastModule,
  RippleModule,
  MessagesModule,
  MessageModule,
  TooltipModule,
  CardModule,
  MultiSelectModule
]

@NgModule({
  declarations: [SenhasComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SenhasRoutingModule,
    ...primeModules
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
})
export class SenhasModule { }
