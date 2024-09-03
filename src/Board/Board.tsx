import { Square } from "./Square"
import { useState } from "react"
import { tss } from "tss-react/mui"

type Props = {
    className?: string;
}

// eslint-disable-next-line 
const boardState: ("x" | "o" | "")[][] = [
    ["x", "o", ""],
    ["o", "", "x"],
    ["", "", ""]
];

const arr = ["a", "b", "c"]

console.log(arr[1])


export function Board(props: Props) {

    const { className } = props;

    const { cx, classes } = useStyle()

    const [state, setState] = useState<("x" | "o" | "")[][]>([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ])
    const [activePlayer, setActivePlayer] = useState<"playerA" | "playerB">("playerA")

    //function handClick() {

    //    /*
    //    const newState: ("x" | "o" | "")[][] = [[],[],[]];

    //    newState[0][0] = state[0][0];
    //    newState[0][1] = state[0][1];
    //    newState[0][2] = state[0][2];
    //    newState[1][0] = state[1][0];
    //    newState[1][1] = state[1][1];
    //    newState[1][2] = state[1][2];
    //    newState[2][0] = state[2][0];
    //    newState[2][1] = state[2][1];
    //    newState[2][2] = state[2][2];
    //    */

    //    const newState = structuredClone(state);

    //    newState[1][2]= "o";

    //    console.log(newState)

    //    setState(newState)

    //    /*
    //    if (activePlayer === "playerA") {
    //        //setState()
    //        setActivePlayer("playerB")
    //    } else {
    //        //setState("o")
    //        setActivePlayer("playerA")
    //    }
    //    */
    //}




    return (

        <div className={cx(classes.root, className)}>
            <div className={classes.row}>
                <Square state={state[0][0]} onClick={() => {

                    const newState = structuredClone(state);

                    newState[0][0] = "o";

                    setState(newState)


                }} className={classes.square} />
                <Square state={state[0][1]} onClick={() => {

                    const newState = structuredClone(state);

                    newState[0][1] = "o";

                    setState(newState)

                }} className={classes.square} />
                <Square state={state[0][2]} onClick={() => {

                    const newState = structuredClone(state);

                    newState[0][2] = "o";

                    setState(newState)

                }} className={classes.square} />
            </div>
            <div className={classes.row}>
                <Square state={state[1][0]} onClick={() => {

                    const newState = structuredClone(state);

                    newState[1][0] = "o";

                    setState(newState)


                }} className={classes.square} />
                <Square state={state[1][1]} onClick={() => {

                    const newState = structuredClone(state);

                    newState[1][1] = "o";

                    setState(newState)

                }} className={classes.square} />
                <Square state={state[1][2]} onClick={() => {

                    const newState = structuredClone(state);

                    newState[1][2] = "o";

                    setState(newState)

                }} className={classes.square} />
            </div>
            <div className={classes.row}>
                <Square state={state[2][0]} onClick={() => {

                    const newState = structuredClone(state);

                    newState[2][0] = "o";

                    setState(newState)


                }} className={classes.square} />
                <Square state={state[2][1]} onClick={()=>{

                    const newState = structuredClone(state);

                    newState[2][1] = "o";

                    setState(newState)

                }} className={classes.square} />
                <Square state={state[2][2]} onClick={()=>{

                    const newState = structuredClone(state);

                    newState[2][2] = "o";

                    setState(newState)

                }} className={classes.square} />
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
            "backgroundColor": "grey"
        },
        "row": {
            "flex": 1,
            "display": "flex",
        },
        "square": {
            "flex": 1
        }
    })