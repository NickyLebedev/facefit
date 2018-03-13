export interface FitEventParams {
    bubbles: boolean,
    cancelable: boolean;
    detail?: any;
} 

export class FitEvent extends Event {
    constructor(eventName: string, params: FitEventParams) {
        super(eventName);
        params = params || {bubbles: false, cancelable: false, detail: undefined};
        const docEvent = document.createEvent('CustomEvent');
        docEvent.initCustomEvent(eventName, params.bubbles, params.cancelable, params.detail);
    }
}

export default function emitEvent(eventName: string) {
    const evt = new FitEvent(eventName, {
        bubbles: true,
        cancelable: true
    });
    document.dispatchEvent(evt);
}
