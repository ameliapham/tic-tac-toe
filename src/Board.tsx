import { tss } from "tss-react/mui"

type Props = {
    className?: string
}

export function Board(props: Props) {
    const { className } = props
    const { cx, classes } = useStyle()

    return (
        <>
            <div>
                <button className={cx(className, classes.square)}>1</button>
                <button className={cx(className, classes.square)}>2</button>
                <button className={cx(className, classes.square)}>3</button>
            </div>
            <div>
                <button className={cx(className, classes.square)}>4</button>
                <button className={cx(className, classes.square)}>5</button>
                <button className={cx(className, classes.square)}>6</button>
            </div>
            <div>
                <button className={cx(className, classes.square)}>7</button>
                <button className={cx(className, classes.square)}>8</button>
                <button className={cx(className, classes.square)}>9</button>
            </div>


        </>
    )
}

const useStyle = tss
    .withName({ Square: Board })
    .create({
        "square": {
            "border": "1px solid red",
            "width": "50px",
            "height": "50px",
            "background": "pink"
        }
    })