import 'components/header/style';

class Header {
    constructor() {
        this.name = 'Header';
        this.text = `Hello from ${this.name}`;
    }
    message() {
        console.log(this.text);
    }
}

export default new Header();
