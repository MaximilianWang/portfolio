import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import { Typography } from '@material-ui/core';
import styles from './ListItem.css';
import { render } from "react-dom";
import posed from "react-pose";
// Import Style

// Import Images
/*
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
*/
const Square = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
        boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
        scale: 1.2,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    press: {
        scale: 1.1,
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }
});



export class ListItem extends React.Component {
    state = {
        anchorEl: null,
        in: "no",
    };

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
            in: "yes",
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
            in: "no",
        });
    };
    render() {

        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const details = this.props.skillDetails;
        // onClick={this.handleClick} onMouseOver={this.handleClick} onMouseOut={this.handleClose}

        return (
            <Grid item xs={4}>
                <Paper>
                    <Square onClick={this.handleClick} onMouseOver={this.handleClick} onMouseOut={this.handleClose} className={styles.skillItem} style={{ background: `#FFF url(${details.icon}) center` }} >

                        {details.title}
                        {this.state.in}
                    </Square>

                </Paper>

            </Grid>

        );
    }
}

export default ListItem;
