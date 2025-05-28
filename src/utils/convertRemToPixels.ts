export default function convertRemToPixels(rem: number) {

    return rem * 16;

    // return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}