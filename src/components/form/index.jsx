// https://material-ui.com/components/dialogs/

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function FormDialog(props) {

    const [input, setInput] = React.useState('');

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e) => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        props.handleAnswer(input);
        setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Next Level
            </Button>
            <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Enter Answer</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Write your answer below.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Answer"
                        fullWidth
                        type="text"
                        value={input}
                        onChange={answer => setInput(answer.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
