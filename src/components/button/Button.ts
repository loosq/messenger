import Block from "../../utils/Block";
import template from "./button.pug"
import "./button.css"

interface ButtonProps {
    label: string,
    type?: string
    classNames?: string[],
    isActive?: boolean,
    events?: any
}

export class Button extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);
    }

    render() {
        return this.compile(template, {...this.props});
    }
}
