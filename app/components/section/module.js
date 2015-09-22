import 'components/section/style';

class Section {
    constructor() {
        this.name = 'Section';
        this.text = `Hello from ${this.name}`;
    }
    message() {
        console.log(this.text);
    }
}

export default new Section();
