import { Alert } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";

export function WalletAlerts(props: {
    action: string | null
}) {
    // let [alertsList, setAl

    const pos: ('absolute' | 'relative' | 'fixed') = 'absolute';

    const st = {
        position: pos,
        left: 50,
        bottom: 50
    }

    return(
        <>
            {props.action && <Alert style={st} onClose={() => {}}>{props.action}</Alert>}
        </>
    )
}