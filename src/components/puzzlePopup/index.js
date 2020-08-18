// make the puzzle image show up when an object like a chest is triggered
// modal from https://material-ui.com/components/modal/

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const styles = (theme) => ({
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
        height: 850,
    },
    img: {
        width: 600,
        height: 800,
        alignItems: 'center',
    }
});

class PopUp extends React.Component {

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        this.props.handleClose();
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={this.props.style}>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={this.props.open}
                    onClose={this.handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}>
                    <Fade in={this.props.open}>
                        <div className={classes.paper}>
                            <img className={classes.img} src={this.props.image}/>
                        </div>
                    </Fade>
                </Modal>
            </div>
        );
    }
}

export default withStyles(styles)(PopUp);
