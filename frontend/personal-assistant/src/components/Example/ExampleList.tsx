import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "今天有没有3个人的会议室，要有TV的",
        value: "今天有没有3个人的会议室，要有TV的"
    },
    { text: "今天深圳的天气怎么样", value: "今天深圳的天气怎么样" },
    { text: "最近有什么好看的电影", value: "最近有什么好看的电影" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
