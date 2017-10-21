/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 	'amzn1.ask.skill.05252522-0079-4d55-a7cd-327e82294ca7';

const SKILL_NAME = 'Animal Facts';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a animal fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'The largest animal in the world is the blue whale.  They can reach 100 feet long and 200 tons.  Blue whales are currently endangered as there are less than 25,000 alive today.',
    'Only female mosquitoes bite since they use nutrients in the blood to help produce their eggs.',
    'Ruminants are a group of around 150 species of mammals that have four stomachs.  Examples of such animals are cows and goats.',
    'Houseflies only live 28 days, so no need to worry about them staying in your house very long.',
    'Giraffes only need five minutes of sleep a day.',
    'The animal that lays the largest egg is the ostrich whose eggs can weigh over five pounds.',
    'A female rat can have 2000 children in a single year.',
    'The largest mammal alive today is the African elephant.  They can weigh up to seven tons and be 11 feet tall.  African elephants are classified as a vulnerable species and there are less than 415,000 in the wild today.',
    'Bald eagle nests can weight up to three tons and be up to 20 feet deep and have a diameter of 10 feet.',
    'Sharks kill about nine people per year.  People kill around 100 million sharks per year.',
    'All sloths have three toes on each of their hind legs. Two-toed sloths and three-toed sloths differ in the number of fingers on their front limbs.',
    'Bats are the only mammals capable of flight.  Other mammals can glide, but they cannot fly.',
    'Saltwater crocodiles are the largest reptile.  They can weigh over 2200 pounds and reach over 23 feet.',
    'Sponges are the oldest animal species that is not extinct.  Modern sponge species have been around for 580 million years.',
    'Polar bear skin in black to absorb heat from the sun.  Polar bears are considered a vulnerable species as there are fewer than 31000 alive.',
]


//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetAnimalFactIntent');
    },
    'GetAnimalFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
