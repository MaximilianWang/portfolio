import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import { Typography } from '@material-ui/core';
//import styles from './ListItem.css';
import { render } from "react-dom";
import posed from "react-pose";
import styled from "styled-components";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

//const images = require.context('../../../assets/images', true);
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
    //pressable: true,
    init: {
        scale: 1,
        boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    top: {
        scale: 1.3,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    bottom: {
        scale: 1,
        boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    }

    /*
    hover: {
        scale: 1.2,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    press: {
        scale: 1.1,
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }
    */
});

const Box = posed.div({
    top: { y: 0, scale: 1, backgroundColor: '#f9415d', opacity: 1 },
    bottom: { y: 200, scale: 1, backgroundColor: '#fcab10', opacity: 0.5 }
});



export class SleekerListItem extends React.Component {
    state = {
        anchorEl: null,
        in: "bottom",
    };

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
            in: "top",
        });
    };

    handleClose = () => {
        this.setState({
            anchorEl: null,
            in: "bottom",
        });
    };
    render() {

        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const details = this.props.skillDetails;
        let imgsrc = require(`../../../assets/images/` + details.imagePath);
        // onClick={this.handleClick} onMouseOver={this.handleClick} onMouseOut={this.handleClose}

        return (
            <Grid item xs={6}>

                <div onClick={this.handleClick} onMouseOver={this.handleClick} onMouseOut={this.handleClose}>
                    <List component="nav">
                        <ListItem button>
                            <Avatar>
                                <img src={imgsrc} />
                            </Avatar>

                            <ListItemText inset primary={details.name} />
                        </ListItem>
                    </List>

                </div>


            </Grid >

        );
    }
}

export default SleekerListItem;
