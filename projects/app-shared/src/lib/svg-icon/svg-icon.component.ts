import { Component, ElementRef, AfterViewInit, Input } from '@angular/core';

import { SvgIconService } from './svg-icon.service';

@Component({
    selector: 'svg-icon', // eslint-disable-line @angular-eslint/component-selector
    template: '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-app" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11 2H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/></svg>',
    styles: [],
    standalone: true,
})
export class SvgIconComponent implements AfterViewInit {

    private _viewInited = false;
    private _iconPath = '';
    private _svgIconClass?: string;

    public get iconPath(): string | undefined { return this._iconPath; }
    @Input() public set iconPath(val: string | undefined) {
        if (!val) {
            return;
        }
        if (val !== this._iconPath) {
            this._iconPath = val;
            if (!!this._iconPath && this._viewInited) {
                void this.updateIcon();
            }
        }
    }
    @Input() public size = '1rem';

    public get iconClass(): string | undefined { return this._svgIconClass }
    @Input() public set iconClass(val: string | undefined) {
        if (val === this._svgIconClass) {
            return;
        }
        const oldClasses = this._svgIconClass;
        this._svgIconClass = val;
        if (!this._viewInited) {
            return;
        }
        const svg = this.el.nativeElement.firstChild as SVGElement;
        if (svg) {
            this.removeClasses(svg, oldClasses);
            this.addClasses(svg, val);
        }
    }

    constructor(
        private el: ElementRef<HTMLElement>,
        private svg: SvgIconService
    ) { }

    public async ngAfterViewInit(): Promise<void> {
        this._viewInited = true;
        const svg = this.el.nativeElement.firstChild as SVGElement;
        this.setIconProps(svg);
        if (this._iconPath) {
            await this.updateIcon();
        }
    }

    private async updateIcon(): Promise<void> {
        if (!this.iconPath) {
            return;
        }
        let svg = this.el.nativeElement.firstChild as SVGElement;
        const xml = await this.svg.loadSvgFile(this.iconPath);
        svg.remove();
        this.el.nativeElement.innerHTML = xml;
        svg = this.el.nativeElement.firstChild as SVGElement;
        this.setIconProps(svg);
    }

    private setIconProps(svg: SVGElement): void {
        if (this.size) {
            svg.setAttribute('width', this.size);
            svg.setAttribute('height', this.size);
        }
        this.addClasses(svg, this._svgIconClass);
        svg.setAttribute('fill', 'currentColor');
    }

    private removeClasses(el: SVGElement, classes?: string): void {
        if (!classes) {
            return;
        }
        classes.split(' ').forEach(c => {
            if (el.classList.contains(c)) {
                el.classList.remove(c);
            }
        });
    }

    private addClasses(el: SVGElement, classes?: string): void {
        if (!classes) {
            return;
        }
        classes.split(' ').forEach(c => {
            if (!el.classList.contains(c)) {
                el.classList.add(c);
            }
        });
    }
}
