import { ModuleWithProviders, NgModule } from "@angular/core";
import { LibCoreService } from "../public-api";
import { CoreService, OuterService } from "./services";

@NgModule()
export class LibCoreModule {
static forRoot(): ModuleWithProviders<LibCoreModule> {
    return {
    ngModule: LibCoreModule,
    providers: [
        LibCoreService,
        CoreService,
        OuterService,
    ],
    };
}
}
  