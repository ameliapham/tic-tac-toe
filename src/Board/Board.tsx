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

    const [player, setPlayer] = useState<"playerA" | "playerB">("playerA")

    return (
        <div className={cx(className, classes.root)}>
            <div className={classes.row}>
                <Square state={state[0][0]} className={classes.square} onClick={
                    () => {
                        const newState = structuredClone(state)

                        let mark: "o" | "x";
                        if (player === "playerA") {
                            mark = "x"
                            setPlayer("playerB")
                        } else {
                            mark = "o"
                            setPlayer("playerA")
                        }
                        newState[0][0] = mark;
                        setState(newState)
                    }
                } />
                <Square state={state[0][1]} className={classes.square} onClick={
                    () => {
                        const newState = structuredClone(state)

                        let mark: "o" | "x";
                        if (player === "playerA") {
                            mark = "x"
                            setPlayer("playerB")
                        } else {
                            mark = "o"
                            setPlayer("playerA")
                        }
                        newState[0][1] = mark;
                        setState(newState)
                    }
                } />
                <Square state={state[0][2]} className={classes.square} onClick={
                    () => {
                        const newState = structuredClone(state)

                        let mark: "o" | "x";
                        if (player === "playerA") {
                            mark = "x"
                            setPlayer("playerB")
                        } else {
                            mark = "o"
                            setPlayer("playerA")
                        }
                        newState[0][2] = mark;
                        setState(newState)
                    }
                } />
            </div>
            <div className={classes.row}>
                <Square state={state[1][0]} className={classes.square} onClick={
                    () => {
                        const newState = structuredClone(state)

                        let mark: "o" | "x";
                        if (player === "playerA") {
                            mark = "x"
                            setPlayer("playerB")
                        } else {
                            mark = "o"
                            setPlayer("playerA")
                        }
                        newState[1][0] = mark;
                        setState(newState)
                    }
                } />
                <Square state={state[1][1]} className={classes.square} onClick={
                    () => {
                        const newState = structuredClone(state)

                        let mark: "o" | "x";
                        if (player === "playerA") {
                            mark = "x"
                            setPlayer("playerB")
                        } else {
                            mark = "o"
                            setPlayer("playerA")
                        }
                        newState[1][1] = mark;
                        setState(newState)
                    }
                } />
                <Square state={state[1][2]} className={classes.square} onClick={
                    () => {
                        const newState = structuredClone(state)

                        let mark: "o" | "x";
                        if (player === "playerA") {
                            mark = "x"
                            setPlayer("playerB")
                        } else {
                            mark = "o"
                            setPlayer("playerA")
                        }
                        newState[1][2] = mark;
                        setState(newState)
                    }
                } />
            </div>
            <div className={classes.row}>
                <Square state={state[2][0]} className={classes.square} onClick={
                    () => {
                        const newState = structuredClone(state)

                        let mark: "o" | "x";
                        if (player === "playerA") {
                            mark = "x"
                            setPlayer("playerB")
                        } else {
                            mark = "o"
                            setPlayer("playerA")
                        }
                        newState[2][0] = mark;
                        setState(newState)
                    }
                } />
                <Square state={state[2][1]} className={classes.square} onClick={
                    () => {
                        const newState = structuredClone(state)

                        let mark: "o" | "x";
                        if (player === "playerA") {
                            mark = "x"
                            setPlayer("playerB")
                        } else {
                            mark = "o"
                            setPlayer("playerA")
                        }
                        newState[2][1] = mark;
                        setState(newState)
                    }
                } />
                <Square state={state[2][2]} className={classes.square} onClick={
                    () => {
                        const newState = structuredClone(state)

                        let mark: "o" | "x";
                        if (player === "playerA") {
                            mark = "x"
                            setPlayer("playerB")
                        } else {
                            mark = "o"
                            setPlayer("playerA")
                        }
                        newState[2][2] = mark;
                        setState(newState)
                    }
                } />
            </div>
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