import React from 'react';
import styles from './Resume.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SkillsList from '../../core/components/SkillsList/SkillsList';
import skillsStructure from '../../assets/data/skills.json';

export class Resume extends React.Component {

    render() {

        let primarySkills = [];
        let secondarySkills = [];

        if (skillsStructure.hasOwnProperty("primarySkills")) {
            primarySkills = skillsStructure["primarySkills"];
        }

        if (skillsStructure.hasOwnProperty("secondarySkills")) {
            secondarySkills = skillsStructure["secondarySkills"];
        }

        return (
            <Paper>
                about me stuff here
                <Grid container spacing={24}>
                    <Grid item xs={4}>
                        <Paper>
                            <h1>Skillsl</h1>
                            <h3>Primary</h3>
                            <SkillsList skills={primarySkills} />
                            <h3>Secondary</h3>
                            <SkillsList skills={secondarySkills} />

                            <h1>Education</h1>

                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper>
                            <h1>Experience</h1>
                            <div className={styles.rule}></div>
                            <div className={styles.item}>
                                <h3>Interactive Designer&nbsp;&nbsp;</h3>
                                <h4>Real Art</h4>
                                <h5>2016—Present. Chicago, IL.</h5>
                            </div>
                            <div className={styles.item}>
                                <h3>Web Designer&nbsp;&nbsp;</h3>
                                <h4>HAUS</h4>
                                <h5>2015. Los Angeles, CA.</h5>
                            </div>
                            <div className={styles.item}>
                                <h3>Graphic Designer&nbsp;&nbsp;</h3>
                                <h4>University Promotions Office</h4>
                                <h5>2014—2016. Grand Valley State University.</h5>
                            </div>
                            <div className={styles.item}>
                                <h3>Web Design Intern&nbsp;&nbsp;</h3>
                                <h4>Real Art</h4>
                                <h5>2014. Chicago, IL.</h5>
                            </div>

                        </Paper>
                    </Grid>

                </Grid>
            </Paper>
        );
    }
}

export default Resume;

