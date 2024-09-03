import { tss } from "tss-react/mui"

type Props = {
    className?: string
    value: number
}

export function Square(props: Props) {
    const { className, value } = props
    const { cx, classes } = useStyle()

    return (
        <>
            <button className={cx(className, classes.square)}>{value}</button>
        </>
    )
}

const useStyle = tss
    .withName({ Square })
    .create({
        "square": {
            "border": "1px solid red",
            "width": "50px",
            "height": "50px",
            "background": "pink"
        }
    })