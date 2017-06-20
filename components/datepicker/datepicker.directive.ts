
import {
    Directive, ElementRef, ViewContainerRef, ComponentFactoryResolver, ComponentRef,
    Renderer2
} from "@angular/core";
import { SuiPopupDirective } from "../popup/popup.directive";
import { SuiPopupConfig } from "../popup/popup.service";
import { SuiPopupController } from "../popup/popup-controller";
import { PopupConfig, PopupTrigger } from "../popup/popup-config";
import { PositioningPlacement } from "../util/positioning.service";
import { SuiComponentFactory } from "../util/component-factory.service";
import { SuiDatepicker } from "./datepicker";

@Directive({
    selector: "[suiDatepicker]"
})
export class SuiDatepickerDirective extends SuiPopupController<SuiDatepicker> {
    constructor(element:ElementRef, renderer:Renderer2, componentFactory:SuiComponentFactory) {
        super(element, componentFactory, new PopupConfig({
            trigger: PopupTrigger.OutsideClick,
            placement: PositioningPlacement.BottomLeft,
            component: SuiDatepicker
        }));

        renderer.addClass(this.popup.elementRef.nativeElement, "ui");
        renderer.addClass(this.popup.elementRef.nativeElement, "calendar");
    }
}

