// make the puzzle image show up when an object like a chest is triggered
// modal from https://material-ui.com/components/modal/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: 'black',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 600,
        height: 300,
    },
}));

export default function Finish({ time }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper} >
                        <h2 id="transition-modal-title">Congratulations!! You escaped high school! </h2>
                        <p id="transition-modal-description">- Your escape time is: {time} </p>
                        <p id="transition-modal-description">- Take a screenshot of this page and send it to CCC!</p>
                        <p id="transition-modal-description">- Thanks for playing!</p>

                    </div>
                </Fade>
            </Modal>
        </div >
    );
}
