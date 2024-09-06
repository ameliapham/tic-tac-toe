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
                <Square value={1} className={classes.square} />
                <Square value={2} className={classes.square}/>
                <Square value={3} className={classes.square}/>
            </div>
            <div className={classes.row}>
                <Square value={4} className={classes.square}/>
                <Square value={5} className={classes.square}/>
                <Square value={6} className={classes.square}/>
            </div>
            <div className={classes.row}>
                <Square value={7} className={classes.square}/>
                <Square value={8} className={classes.square}/>
                <Square value={9} className={classes.square}/>
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