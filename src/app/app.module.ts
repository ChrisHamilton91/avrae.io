import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import * as Sentry from "@sentry/browser";
import { MarkdownModule, MarkedOptions } from "ngx-markdown";
import { MonacoEditorModule } from "ngx-monaco-editor";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { CheatsheetsModule } from "./cheatsheets/cheatsheets.module";
import { CommandDisplayComponent } from "./commands/command-display/command-display.component";
import { CommandsComponent } from "./commands/commands.component";
import { ErrorComponent } from "./error/error.component";
import { FooterComponent } from "./footer/footer.component";
import { FeatureBoxComponent } from "./home/feature-box/feature-box.component";
import { HomeComponent } from "./home/home.component";
import { HomebrewSharingModule } from "./homebrew-sharing/homebrew-sharing.module";
import { LoginModule } from "./login/login.module";
import { MaterialModule } from "./material/material.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { AutomationEditorModule } from "./shared/automation-editor/automation-editor.module";
import { DialogsModule } from "./shared/dialogs/dialogs.module";
import { DiscordEmbedModule } from "./shared/discord-embed/discord-embed.module";
import { registerDraconicLanguage } from "./shared/monacoDraconic";
import { ThemesModule } from "./themes/themes.module";
import { CommandsUiComponent } from "./commands-ui/commands-ui.component";
import { MatButtonModule } from "@angular/material/button";
import { ModuleButtonsComponent } from "./commands-ui/module-buttons/module-buttons.component";
import { CommandButtonsComponent } from "./commands-ui/command-buttons/command-buttons.component";
import { SubcommandButtonsComponent } from "./commands-ui/command-buttons/subcommand-buttons/subcommand-buttons.component";
import { PrimaryArgButtonsComponent } from "./commands-ui/primary-arg-buttons/primary-arg-buttons.component";
import { OutputAreaComponent } from "./commands-ui/output-area/output-area.component";
import { SingleModuleButtonComponent } from "./commands-ui/module-buttons/single-module-button/single-module-button.component";
import { SingleCommandButtonComponent } from "./commands-ui/command-buttons/single-command-button/single-command-button.component";
import { SingleSubcommandButtonComponent } from "./commands-ui/command-buttons/subcommand-buttons/single-subcommand-button/single-subcommand-button.component";
import { SinglePrimaryArgButtonComponent } from "./commands-ui/primary-arg-buttons/single-primary-arg-button/single-primary-arg-button.component";
import { SinglePrimaryArgInputComponent } from "./commands-ui/primary-arg-buttons/single-primary-arg-input/single-primary-arg-input.component";
import { SecondaryArgButtonsComponent } from "./commands-ui/secondary-arg-buttons/secondary-arg-buttons.component";
import { SingleSecondaryArgInputComponent } from "./commands-ui/secondary-arg-buttons/single-secondary-arg-input/single-secondary-arg-input.component";
import { SingleSecondaryArgButtonComponent } from "./commands-ui/secondary-arg-buttons/single-secondary-arg-button/single-secondary-arg-button.component";
import { SingleSecondaryArgInputBoxComponent } from "./commands-ui/secondary-arg-buttons/single-secondary-arg-input/single-secondary-arg-input-box/single-secondary-arg-input-box.component";
import { SingleSecondaryArgInputToggleComponent } from "./commands-ui/secondary-arg-buttons/single-secondary-arg-input/single-secondary-arg-input-toggle/single-secondary-arg-input-toggle.component";
import { ToastrModule } from "ngx-toastr";
import { SingleSecondaryArgInputHiddenComponent } from "./commands-ui/secondary-arg-buttons/single-secondary-arg-input/single-secondary-arg-input-hidden/single-secondary-arg-input-hidden.component";
import { SettingsComponent } from "./commands-ui/settings/settings.component";
import { SettingsDialogComponent } from "./commands-ui/settings/settings-dialog/settings-dialog.component";
import { SettingsInputComponent } from "./commands-ui/settings/settings-dialog/settings-input/settings-input.component";
import { MultilineOutputComponent } from './commands-ui/output-area/multiline-output/multiline-output.component';
import { AboutComponent } from './commands-ui/about/about.component';
import { AboutDialogComponent } from './commands-ui/about/about-dialog/about-dialog.component';

Sentry.init({
  dsn: "https://af2b06560981446bb55f64b6f79fd520@sentry.io/1486249",
});

const markdownConfig = {
  markedOptions: {
    provide: MarkedOptions,
    useValue: {
      gfm: true,
      breaks: true,
    },
  },
};

const monacoConfig = {
  // baseUrl: './assets/monaco/vs',
  onMonacoLoad: () => {
    registerDraconicLanguage((<any>window).monaco);
  },
};

@NgModule({
  declarations: [
    AppComponent,
    FeatureBoxComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ErrorComponent,
    CommandsComponent,
    CommandDisplayComponent,
    CommandsUiComponent,
    ModuleButtonsComponent,
    CommandButtonsComponent,
    SubcommandButtonsComponent,
    PrimaryArgButtonsComponent,
    OutputAreaComponent,
    SingleModuleButtonComponent,
    SingleCommandButtonComponent,
    SingleSubcommandButtonComponent,
    SinglePrimaryArgButtonComponent,
    SinglePrimaryArgInputComponent,
    SecondaryArgButtonsComponent,
    SingleSecondaryArgInputComponent,
    SingleSecondaryArgButtonComponent,
    SingleSecondaryArgInputBoxComponent,
    SingleSecondaryArgInputToggleComponent,
    SingleSecondaryArgInputHiddenComponent,
    SettingsComponent,
    SettingsDialogComponent,
    SettingsInputComponent,
    MultilineOutputComponent,
    AboutComponent,
    AboutDialogComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MarkdownModule.forRoot(markdownConfig),
    FlexLayoutModule,
    MaterialModule,
    CheatsheetsModule,
    HomebrewSharingModule,
    DiscordEmbedModule,
    AutomationEditorModule,
    DialogsModule,
    AppRoutingModule,
    ThemesModule,
    LoginModule,
    MonacoEditorModule.forRoot(monacoConfig),
    MatButtonModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
