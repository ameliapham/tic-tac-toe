import { Square } from "./Square"
import { tss } from "tss-react/mui"



export function Board() {
   
    const {classes} = useStyle()
    return (
        <div className={classes.root}>
            <div>
                <Square value={1}/>
                <Square value={2}/>
                <Square value={3}/>
            </div>
            <div>
                <Square value={4}/>
                <Square value={5}/>
                <Square value={6}/>
            </div>
            <div>
                <Square value={7}/>
                <Square value={8}/>
                <Square value={9}/>
            </div>
        </div>
    )
}

const useStyle = tss.create({
    "root" : {
        "display" : "flex"
    }
})