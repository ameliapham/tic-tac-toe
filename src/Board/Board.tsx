import { Square } from "./Square"
import { tss } from "tss-react/mui"
import { useState } from "react"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { keyframes } from "tss-react";
//import { assert } from "tsafe/assert";


type Props = {
    className?: string
}

type BoardState = ("x" | "o" | " ")[][];

const emptyBoard: BoardState = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
];

type GameOutcome = "x" | "o" | "draw";

function getGameOutcome(boardState: BoardState): GameOutcome | undefined {

    for (const mark of ["x", "o"] as const) {

        // Check rows win
        for (const i of [0, 1, 2] as const) {
            if (boardState[i][0] === mark && boardState[i][1] === mark && boardState[i][2] === mark) {
                return mark;
            }
        }

        // Check columns win
        for (const j of [0, 1, 2] as const) {
            if (boardState[0][j] === mark && boardState[1][j] === mark && boardState[2][j] === mark) {
                return mark;
            }
        }

        // Diagonal 1
        if (boardState[0][0] === mark && boardState[1][1] === mark && boardState[2][2] === mark) {
            return mark;
        }
        // Diagonal 2
        if (boardState[0][2] === mark && boardState[1][1] === mark && boardState[2][0] === mark) {
            return mark;
        }
    }

    /*
    if( boardState.flat().every(mark => mark !== " ")) {
        return "draw";
    }

    return undefined;
    */

    // Check for draw
    for (const i of [0, 1, 2] as const) {
        for (const j of [0, 1, 2] as const) {
            if (boardState[i][j] === " ") {
                return undefined;
            }
        }
    }

    return "draw";


}


export function Board(props: Props) {
    const { className } = props
    const { classes, cx } = useStyle()

    const [boardState, setBoardState] = useState<("x" | "o" | " ")[][]>(emptyBoard)
    const [playerTurn, setPlayerTurn] = useState<"x" | "o">("o");

    const gameOutcome = getGameOutcome(boardState);

    //const [gameOutcome, setGameOutcome] = useState<"x" | "o" | "draw" | undefined>(undefined);

    /*
    useEffect(
        ()=>{

            // TODO: Check if game is over
            // If it is, setGameOutcome to the winner or draw

            if( boardState[0][0] === "x" && boardState[0][1] === "x" && boardState[0][2] === "x" ){
                setGameOutcome("x");
            }

            // ...


        },
        [boardState]
    );
    */

    function onClick(params: { i: number; j: number; }) {
        const { i, j } = params;

        const newBoardState = structuredClone(boardState)
        newBoardState[i][j] = playerTurn;
        setBoardState(newBoardState)

        let newPlayerTurn: "x" | "o";
        switch (playerTurn) {
            case "x":
                newPlayerTurn = "o";
                break;
            case "o":
                newPlayerTurn = "x";
                break;
        }
        setPlayerTurn(newPlayerTurn);
    }

    //const gameOutcome = getGameOutcome(boardState)

    return (
        <div className={cx(className, classes.root)}>

            {gameOutcome !== undefined &&
                <div className={classes.result}>
                    <Typography variant="h4">
                        {(() => {
                            switch (gameOutcome) {
                                case "draw": return <>Draw!</>
                                case "o": return <>Player O is the winner!!!</>
                                case "x": return <> Player X is the winner!!!</>
                            }
                        })()}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setBoardState([
                                [" ", " ", " "],
                                [" ", " ", " "],
                                [" ", " ", " "],
                            ])
                        }}
                    >
                        Restart game
                    </Button>
                </div>
            }
            {[0, 1, 2].map(i => (
                <div key={i} className={classes.row}>
                    {[0, 1, 2].map(j => (
                        <Square
                            key={j}
                            state={boardState[i][j]}
                            className={classes.square}
                            onClick={() => onClick({ i, j })}
                        />
                    ))}
                </div>
            ))}
        </div>

    )
}


const animate = keyframes({
    "from": {
        opacity: 0,
        transform: "translate(0, -100%)",
    },
    "to": {
        opacity: 1,
        transform: "translate(0, 100%)",
    }
});

const useStyle = tss
    .withName({ Board })
    .create({
        root: {
            display: "flex",
            flexDirection: "column",
            zIndex: 1
        },
        row: {
            display: "flex",
            flex: 1,
        },
        square: {
            flex: 1,
            userSelect: "none",
        },
        result: {
            position: "fixed",
            left: 0,
            top: "35%",
            width: "100%",
            height: "250px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: " contrast(80%) blur(20px)",
            //opacity: 1,
            //animation: `${animate} 0.5s ease-in-out 0.3s 1 forwards`
        }
    })

/* Test getGameOutcome
{

    const boardState: BoardState = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]

    const gameOutcome = getGameOutcome(boardState)

    assert(gameOutcome === undefined);

}

{

    const boardState: BoardState = [
        [" ", " ", " "],
        ["x", "x", "x"],
        [" ", " ", " "],
    ]

    const gameOutcome = getGameOutcome(boardState)

    assert(gameOutcome === "x");

}

{

    const boardState: BoardState = [
        ["o", "x", "o"],
        ["x", "o", "x"],
        ["x", "o", "x"],
    ]

    const gameOutcome = getGameOutcome(boardState)

    assert(gameOutcome === "draw");

}
*/
