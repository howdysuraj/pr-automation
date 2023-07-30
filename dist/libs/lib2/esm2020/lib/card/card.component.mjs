import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular-tailwind-nx/lib3";
const _c0 = ["*"];
export class CardComponent {
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardComponent, selectors: [["angular-tailwind-nx-card"]], inputs: { title: "title", url: "url" }, ngContentSelectors: _c0, decls: 7, vars: 2, consts: [[1, "card"], [1, "card-title"], [1, "card-content"], [1, "flex", "self-end", 3, "href"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p", 2);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "angular-tailwind-nx-button", 3);
        i0.ɵɵtext(6, " Show me! ");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("href", ctx.url);
    } }, directives: [i1.ButtonComponent], styles: [".card[_ngcontent-%COMP%]{display:flex;height:100%;flex-direction:column;padding:var(--spacing-lg);--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.card[_ngcontent-%COMP%]:hover{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.card[_ngcontent-%COMP%]{background-color:var(--secondary-light)}.card-title[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem;font-weight:700;padding-bottom:var(--spacing-md)}.card-content[_ngcontent-%COMP%]{margin-bottom:var(--spacing-xl);flex:1 1 0%}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardComponent, [{
        type: Component,
        args: [{ selector: 'angular-tailwind-nx-card', template: "<div class=\"card\">\n  <div class=\"card-title\">{{ title }}</div>\n  <p class=\"card-content\">\n    <ng-content></ng-content>\n  </p>\n  <angular-tailwind-nx-button class=\"flex self-end\" [href]=\"url\">\n    Show me!\n  </angular-tailwind-nx-button>\n</div>\n", styles: [".card{display:flex;height:100%;flex-direction:column;padding:var(--spacing-lg);--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.card:hover{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.card{background-color:var(--secondary-light)}.card-title{font-size:1.125rem;line-height:1.75rem;font-weight:700;padding-bottom:var(--spacing-md)}.card-content{margin-bottom:var(--spacing-xl);flex:1 1 0%}\n"] }]
    }], null, { title: [{
            type: Input
        }], url: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL2xpYjIvc3JjL2xpYi9jYXJkL2NhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9saWIyL3NyYy9saWIvY2FyZC9jYXJkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pELE1BQU0sT0FBTyxhQUFhOzswRUFBYixhQUFhO2dFQUFiLGFBQWE7O1FDUDFCLDhCQUFrQixhQUFBO1FBQ1EsWUFBVztRQUFBLGlCQUFNO1FBQ3pDLDRCQUF3QjtRQUN0QixrQkFBeUI7UUFDM0IsaUJBQUk7UUFDSixxREFBK0Q7UUFDN0QsMEJBQ0Y7UUFBQSxpQkFBNkIsRUFBQTs7UUFOTCxlQUFXO1FBQVgsK0JBQVc7UUFJZSxlQUFZO1FBQVosOEJBQVk7O3VGREVuRCxhQUFhO2NBTHpCLFNBQVM7MkJBQ0UsMEJBQTBCO2dCQUszQixLQUFLO2tCQUFiLEtBQUs7WUFDRyxHQUFHO2tCQUFYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FuZ3VsYXItdGFpbHdpbmQtbngtY2FyZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZztcbiAgQElucHV0KCkgdXJsPzogc3RyaW5nO1xufVxuIiwiPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGVcIj57eyB0aXRsZSB9fTwvZGl2PlxuICA8cCBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgPC9wPlxuICA8YW5ndWxhci10YWlsd2luZC1ueC1idXR0b24gY2xhc3M9XCJmbGV4IHNlbGYtZW5kXCIgW2hyZWZdPVwidXJsXCI+XG4gICAgU2hvdyBtZSFcbiAgPC9hbmd1bGFyLXRhaWx3aW5kLW54LWJ1dHRvbj5cbjwvZGl2PlxuIl19