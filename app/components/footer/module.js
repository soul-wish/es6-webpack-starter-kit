import 'components/footer/style';

class Footer {
    constructor() {
        this.name = 'Footer';
        this.text = `Hello from ${this.name}`;
    }
    message() {
        console.log(this.text);
    }
}

export default new Footer();
