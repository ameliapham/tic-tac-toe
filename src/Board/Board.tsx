import { Square } from "./Square"
import { tss } from "tss-react/mui"

type Props = {
    className?: string
}

export function Board(props: Props) {
    const { className } = props
    const { classes, cx } = useStyle()

    return (
        <div className={cx(className, classes.root)}>
            <div className={classes.row}>
                <Square state={""} className={classes.square} />
                <Square state={""} className={classes.square}/>
                <Square state={""} className={classes.square}/>
            </div>
            <div className={classes.row}>
                <Square state={"o"} className={classes.square}/>
                <Square state={"o"} className={classes.square}/>
                <Square state={"o"} className={classes.square}/>
            </div>
            <div className={classes.row}>
                <Square state={"x"} className={classes.square}/>
                <Square state={"x"} className={classes.square}/>
                <Square state={"x"} className={classes.square}/>
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
            //"backgroundColor": "grey",
        },
        "row": {
            "display": "flex",
            "flex": 1,
        },
        "square": {
            "flex": 1,
        }
    })