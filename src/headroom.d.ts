declare module "headroom.js" {
  interface HeadroomOptions {
    offset?: number;
    tolerance?: number | { up?: number; down?: number };
    classes?: {
      initial?: string;
      pinned?: string;
      unpinned?: string;
      top?: string;
      notTop?: string;
      bottom?: string;
      notBottom?: string;
      frozen?: string;
    };
  }

  export default class Headroom {
    constructor(element: HTMLElement, options?: HeadroomOptions);
    init(): void;
    destroy(): void;
    pin(): void;
    unpin(): void;
    freeze(): void;
    unfreeze(): void;
  }
}
