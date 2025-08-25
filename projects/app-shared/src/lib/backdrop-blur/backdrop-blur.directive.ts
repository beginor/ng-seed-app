import { AfterViewInit, Directive, ElementRef, inject, input, } from '@angular/core';

@Directive({
    selector: '[backdropBlur]',
    standalone: true,
})
export class BackdropBlurDirective implements AfterViewInit {

    public blurSize = input('12px', { alias: 'backdropBlur' });
    public opacity = input(0.8);

    private hostRef = inject(ElementRef<HTMLElement>);

    public ngAfterViewInit(): void {
        const host = this.hostRef.nativeElement;
        const style = getComputedStyle(host);
        // bgColor = rgb(255, 255, 255) or rgba(255, 255, 255, 0.8)
        const bgColor = style.backgroundColor;
        const rgba = bgColor.substring(
            bgColor.indexOf('(') + 1,
            bgColor.indexOf(')')
        );
        const arr = rgba.split(',');
        const r = Number.parseInt(arr[0].trim(), 10);
        const g = Number.parseInt(arr[1].trim(), 10);
        const b = Number.parseInt(arr[2].trim(), 10);
        let a = 1.0;
        if (arr.length > 3) {
            a = Number.parseFloat(arr[3]);
        }
        const opacity = this.opacity();
        if (Math.abs(opacity - a) > 0.1) {
            a = opacity;
        }
        host.style.setProperty(
            'background-color',
            `rgba(${r}, ${g}, ${b}, ${a})`,
            'important'
        );
        host.style.setProperty(
            'backdrop-filter',
            `blur(${this.blurSize()})`,
            'important'
        );
    }

}
