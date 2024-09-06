import { Square } from "./Square"
import { tss } from "tss-react/mui"

type Props = {
    className?: string
}

export function Board(props: Props) {
    const { className } = props
    const { classes, cx } = useStyle()

    function onClick(){
        console.log("Hello")
    }

    return (
        <div className={cx(className, classes.root)}>
            <div className={classes.row}>
                <Square state={""} className={classes.square} onClick={onClick}/>
                <Square state={""} className={classes.square} onClick={onClick}/>
                <Square state={""} className={classes.square} onClick={onClick}/>
            </div>
            <div className={classes.row}>
                <Square state={"o"} className={classes.square} onClick={onClick}/>
                <Square state={"o"} className={classes.square} onClick={onClick}/>
                <Square state={"o"} className={classes.square} onClick={onClick}/>
            </div>
            <div className={classes.row}>
                <Square state={"x"} className={classes.square} onClick={onClick}/>
                <Square state={"x"} className={classes.square} onClick={onClick}/>
                <Square state={"x"} className={classes.square} onClick={onClick}/>
            </div>
        </div>
    )
}


const useStyle = tss
    .withName({ Board })
    .create({
        "root": {
            "display": "flex",
            "flexDirection": "column",
        },
        "row": {
            "display": "flex",
            "flex": 1,
        },
        "square": {
            "flex": 1,
        }
    })