import React from 'react';

import javaImg from './assets/java.png';
import SkillsList from '../core/components/SkillsList/SkillsList';

export class Resume extends React.Component {

    render() {

        var primarySkillsList = [];

        primarySkillsList.push({
            "title": "what",
            "icon" : javaImg,
            "detailed" : "more stuff"
        });

        primarySkillsList.push({
            "title": "what",
            "icon" : javaImg,
            "detailed" : "more stuff"
        });

        primarySkillsList.push({
            "title": "what",
            "icon" : javaImg,
            "detailed" : "more stuff"
        });

        primarySkillsList.push({
            "title": "what",
            "icon" : javaImg,
            "detailed" : "more stuff"
        });

        primarySkillsList.push({
            "title": "what",
            "icon" : javaImg,
            "detailed" : "more stuff"
        });

        var secondarySkillsList = [];

        secondarySkillsList.push({
            "title": "what",
            "icon" : javaImg,
            "detailed" : "more stuff"
        });

        secondarySkillsList.push({
            "title": "what",
            "icon" : javaImg,
            "detailed" : "more stuff"
        });

        secondarySkillsList.push({
            "title": "what",
            "icon" : javaImg,
            "detailed" : "more stuff"
        });

        secondarySkillsList.push({
            "title": "what",
            "icon" : javaImg,
            "detailed" : "more stuff"
        });



        return (
            <div>

                <h1>What I do well</h1>
                <SkillsList skills={primarySkillsList}/>


                <h1>What I am working on improving</h1>
                <SkillsList skills={secondarySkillsList}/>



                TL;DR:
    
        </div>
        );
    }
}

export default Resume;

