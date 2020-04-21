import M from './Map';

M.Mask = class Mask {
    constructor() {
        this.hasMask = true;
    }
    foo = () => {
        console.log('mask foo');
    }
}

M.mask = new M.Mask();
