import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class ButtonComponent {
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["angular-tailwind-nx-button"]], inputs: { href: "href" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["target", "_blank", "rel", "noopener noreferrer", 1, "atn-button", 3, "href"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "a", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵpropertyInterpolate("href", ctx.href, i0.ɵɵsanitizeUrl);
    } }, styles: [".atn-button{background-color:var(--primary-dark);padding-top:var(--spacing-sm);padding-bottom:var(--spacing-sm);padding-left:var(--spacing-md);padding-right:var(--spacing-md);color:var(--white)}.atn-button:hover{background-color:var(--primary)}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonComponent, [{
        type: Component,
        args: [{ selector: 'angular-tailwind-nx-button', encapsulation: ViewEncapsulation.None, template: "<a\n  class=\"atn-button\"\n  href=\"{{ href }}\"\n  target=\"_blank\"\n  rel=\"noopener noreferrer\"\n>\n  <ng-content></ng-content>\n</a>\n", styles: [".atn-button{background-color:var(--primary-dark);padding-top:var(--spacing-sm);padding-bottom:var(--spacing-sm);padding-left:var(--spacing-md);padding-right:var(--spacing-md);color:var(--white)}.atn-button:hover{background-color:var(--primary)}\n"] }]
    }], null, { href: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvbGliMy9zcmMvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9saWIzL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUXBFLE1BQU0sT0FBTyxlQUFlOzs4RUFBZixlQUFlO2tFQUFmLGVBQWU7O1FDUjVCLDRCQUtDO1FBQ0Msa0JBQXlCO1FBQzNCLGlCQUFJOztRQUxGLDREQUFpQjs7dUZETU4sZUFBZTtjQU4zQixTQUFTOzJCQUNFLDRCQUE0QixpQkFHdkIsaUJBQWlCLENBQUMsSUFBSTtnQkFHNUIsSUFBSTtrQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW5ndWxhci10YWlsd2luZC1ueC1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5jc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaHJlZj86IHN0cmluZztcbn1cbiIsIjxhXG4gIGNsYXNzPVwiYXRuLWJ1dHRvblwiXG4gIGhyZWY9XCJ7eyBocmVmIH19XCJcbiAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvYT5cbiJdfQ==