import React from 'react';
import { ListItem } from './ListItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Import Style
//import styles from './Footer.css';

// Import Images

/*
Constructs a listitem for each and add to a matrix managed in this's internal state

Add hover effect to expand listitem to show details about specific tech within it

*/

class SkillsList extends React.Component {

    handleHover(i) {
        console.log("POPPED " + i);
    }

    renderListItem(i, skillDetails) {
        return <ListItem
            key={i}
            val={i}
            skillDetails={skillDetails}
            onClick={(i) => this.handleHover(i)}
            onMouseEnter={(i) => this.handleHover(i)}
        />;
    }

    renderListItems(skills) {
        let listItems = [];
        for (let i = 0; i < skills.length; i++) {
            listItems.push(this.renderListItem(i, skills[i]));
        }
        return listItems;
    }

    render() {
        var skills = this.props.skills;
        var listItems = this.renderListItems(skills);

        return (
            <React.Fragment>
                <Grid container spacing={24}>
                    {listItems}

                </Grid>


            </React.Fragment>

        );
    }
}

export default SkillsList;
