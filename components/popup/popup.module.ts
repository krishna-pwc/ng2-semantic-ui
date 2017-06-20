import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiTransitionModule } from "../transition/transition.module";
import { SuiUtilityModule } from "../util/util.module";
import { SuiPopupDirective } from "./popup.directive";
import { SuiPopup } from "./popup";
import { SuiPopupArrow } from "./popup-arrow";
import { IPopupConfig, PopupTrigger, PopupConfig } from "./popup-config";
import { PositioningPlacement } from "../util/positioning.service";
import { SuiPopupConfig } from "./popup.service";
import { IPopup } from "./popup-controller";

@NgModule({
    imports: [
        CommonModule,
        SuiTransitionModule,
        SuiUtilityModule
    ],
    declarations: [
        SuiPopupDirective,
        SuiPopupArrow,
        SuiPopup
    ],
    exports: [
        SuiPopupDirective,
        SuiPopup
    ],
    providers: [
        SuiPopupConfig
    ],
    entryComponents: [
        SuiPopup
    ]
})

export class SuiPopupModule {}

export {
    IPopup,
    SuiPopupConfig,
    IPopupConfig,
    PopupTrigger,
    PositioningPlacement as PopupPlacement
};
