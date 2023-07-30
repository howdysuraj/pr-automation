import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const _c0 = ["*"];
class ButtonComponent {
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonComponent, selectors: [["angular-tailwind-nx-button"]], inputs: { href: "href" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["target", "_blank", "rel", "noopener noreferrer", 1, "atn-button", 3, "href"]], template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵpropertyInterpolate("href", ctx.href, i0.ɵɵsanitizeUrl);
        }
    }, styles: [".atn-button{background-color:var(--primary-dark);padding-top:var(--spacing-sm);padding-bottom:var(--spacing-sm);padding-left:var(--spacing-md);padding-right:var(--spacing-md);color:var(--white)}.atn-button:hover{background-color:var(--primary)}\n"], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonComponent, [{
            type: Component,
            args: [{ selector: 'angular-tailwind-nx-button', encapsulation: ViewEncapsulation.None, template: "<a\n  class=\"atn-button\"\n  href=\"{{ href }}\"\n  target=\"_blank\"\n  rel=\"noopener noreferrer\"\n>\n  <ng-content></ng-content>\n</a>\n", styles: [".atn-button{background-color:var(--primary-dark);padding-top:var(--spacing-sm);padding-bottom:var(--spacing-sm);padding-left:var(--spacing-md);padding-right:var(--spacing-md);color:var(--white)}.atn-button:hover{background-color:var(--primary)}\n"] }]
        }], null, { href: [{
                type: Input
            }] });
})();

class Lib3Module {
}
Lib3Module.ɵfac = function Lib3Module_Factory(t) { return new (t || Lib3Module)(); };
Lib3Module.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: Lib3Module });
Lib3Module.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Lib3Module, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        ButtonComponent
                    ],
                    exports: [
                        ButtonComponent
                    ],
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Lib3Module, { declarations: [ButtonComponent], imports: [CommonModule], exports: [ButtonComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, Lib3Module };
//# sourceMappingURL=angular-tailwind-nx-lib3.mjs.map
