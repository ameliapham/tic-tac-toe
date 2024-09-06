import { Square } from "./Square"
import { tss } from "tss-react/mui"
import { useState } from "react"

type Props = {
    className?: string
}

export function Board(props: Props) {
    const { className } = props
    const { classes, cx } = useStyle()

    const [state, setState] = useState<("x" | "o" | " ")[][]>([
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ])

    const [player, setPlayer] = useState<"playerA" | "playerB">("playerA");

    function onClick(params: { x: number; y: number; }) {
        const { x, y } = params;
        const newState = structuredClone(state)

        let mark: "o" | "x";
        if (player === "playerA") {
            mark = "x"
            setPlayer("playerB")
        } else {
            mark = "o"
            setPlayer("playerA")
        }
        newState[x][y] = mark;
        setState(newState)
    }

    return (
        <div className={cx(className, classes.root)}>
            {[0, 1, 2].map(x => (
                <div key={x} className={classes.row}>
                    {[0, 1, 2].map(y => (
                        <Square key={y} state={state[x][y]} className={classes.square} onClick={() => onClick({ x, y })} />
                    ))}
                </div>
            ))}
        </div>
    )
}


const useStyle = tss
    .withName({ Board })
    .create({
        root: {
            display: "flex",
            flexDirection: "column",
        },
        row: {
            display: "flex",
            flex: 1,
        },
        square: {
            flex: 1,
        }
    })