import { tss } from "tss-react/mui"
import xSvg from "./x.svg"
import oSvg from "./o.svg"

type Props = {
    className?: string
    state: "x" | "o" | ""
}

export function Square(props: Props) {
    const { className, state } = props
    const { cx, classes } = useStyle()

    return (
        <>
            <div className={cx(className, classes.square)}>
                {state !== "" &&
                    <img src={state === "x" ? xSvg : oSvg} className={classes.img} />
                }
            </div>
        </>
    )
}

const useStyle = tss
    .withName({ Square })
    .create({
        "square": {
            "border": "1px solid #606c38",
            "background": "#fefae0",
            "display" : "flex",
            "justifyContent" : "center",
        },
        "img": {
            "width": "30%"
        }
    })