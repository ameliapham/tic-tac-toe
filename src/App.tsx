import { Board } from "./Board/Board"
import { GlobalStyles } from "tss-react"
import { tss } from "tss-react/mui"

export function App() {

    const { classes } = useStyle()
    return (
        <>
            <GlobalStyles
                styles={{
                    "body": {
                        "margin": 0
                    }
                }}
            />
            <div className={classes.root}>
                <Board className={classes.board}/>
            </div>
        </>
    )

}

const useStyle = tss
    .withName({ App })
    .create({
        "root": {
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "height" : "100vh",
            "backgroundColor" : "#283618"
        },
        "board" : (() => {
            const size = "calc(min(100vh, 100vw) - 250px)"

            return { 
                "width" : size,
                "height" : size,
            }
        })()
    })