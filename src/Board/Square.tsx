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
            <div className={cx(className, classes.square)}>{value}</div>
        </>
    )
}

const useStyle = tss
    .withName({ Square })
    .create({
        "square": {
            "border": "1px solid #606c38",
            "background": "#fefae0"
        }
    })