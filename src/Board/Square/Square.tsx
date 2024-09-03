import { tss } from "tss-react/mui"
import xSvg from "./x.svg";
import oSvg from "./o.svg";

type Props = {
    className?: string
    state: "x" | "o" | ""
    onClick: () => void
}

export function Square(props: Props) {
    const { className, state, onClick } = props
    const { cx, classes } = useStyle({
        "isClickable": state === ""
    })

    return (
        <div
            className={cx(classes.root, className)}
            onClick={state === "" ? onClick : undefined}
        >
            {state !== "" &&
                <img src={state === "x" ? xSvg : oSvg} className={classes.img}/>
            }
        </div>
    )
}

const useStyle = tss
    .withName({ Square })
    .withParams<{ isClickable: boolean; }>()
    .create(({ isClickable })=>({
        "root": {
            "border": "1px solid red",
            "background": "pink",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "cursor": isClickable? "pointer" : undefined
        },
        "img":{
            "width": "30%"
        }
    }))