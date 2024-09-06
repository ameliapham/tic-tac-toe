import { tss } from "tss-react/mui"
import xSvg from "./x.svg"
import oSvg from "./o.svg"

type Props = {
    className?: string
    state: "x" | "o" | ""
    onClick: () => void
}

export function Square(props: Props) {
    const { className, state, onClick } = props
    const { cx, classes } = useStyle({state})

    return (
        <>
            <div 
                className={cx(classes.square, className)}
                onClick={state !== ""? onClick: undefined}
            >
                {state !== "" &&
                    <img src={state === "x" ? xSvg : oSvg} className={classes.img} />
                }
            </div>
        </>
    )
}

const useStyle = tss
    .withName({ Square })
    .withParams<{state: "x" | "o" | ""}>()
    .create(({state}) => ({
        "square": {
            "border": "1px solid #606c38",
            "background": "#fefae0",
            "display" : "flex",
            "justifyContent" : "center",
            "cursor": state !== ""? "pointer" : undefined
        },
        "img": {
            "width": "30%"
        }
    }))