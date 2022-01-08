import React from 'react';
import { FormModalProps } from './FormModal';
export declare type PromptProp<T = any> = FormModalProps & {
    label?: string;
    initialValue?: T;
};
declare type PromptStaticFunctions = {
    prompt: (props: PromptProp) => Promise<any>;
};
declare const Prompt: React.FC<PromptProp> & PromptStaticFunctions;
export default Prompt;
