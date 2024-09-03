import { tss } from "tss-react/mui"

type Props = {
    className?: string
}

export function Square(props: Props) {
    const { className } = props
    const { cx, classes } = useStyle()

    return (
        <>
            <button className={cx(className, classes.root)}>X</button>
        </>
    )
}

const useStyle = tss
    .withName({ Square })
    .create({
        "root": {
            "border": "1px solid red",
            "width": "50px",
            "height": "50px",
            "background": "pink"
        }
    })