import M from './Map';

M.Label = class Label {
    constructor() {
        this.hasLabels = true;
    }
    foo = () => {
        console.log('label foo');
    }
}

M.label = new M.Label();
