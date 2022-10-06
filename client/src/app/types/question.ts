import { Option } from './option';

export interface Question {
    _id: string;
    question: string;
    type: 'checkbox' | 'radiobutton' | 'text';
    options?: Option[];
}
