
import _ from 'lodash';

export const skills = {design: 0, manage: 0, program: 0, admin: 0};
export const skills_1 = _.mapValues(skills, () => { return 1; });
export const skills_names = Object.keys(skills);


export const roles = {
    design: {name: 'Design', description: 'Design'},
    manage: {name: 'Management', description: 'Management'},
    program: {name: 'Programming', description: 'Programming'},
    admin: {name: 'Administrating', description: "Administrating"}
};


export const project_platforms = {
    crossplatform: {name: 'Cross-platform'},
    mobile: {name: 'Mobile'},
    browser: {name: 'Browser'},
    desktop: {name: 'Desktop'},
    embedded: {name: 'Embedded'}
};

export const project_kinds = {
    application: {name: 'Application'},
    game: {name: 'Game'},
    service: {name: 'Service'},
    system: {name: 'System'},
    database: {name: 'Database'}
};

export const project_sizes = {
    0: {name: 'Training', alone_name: 'Training'},
    1: {name: 'Parts for', alone_name: 'Parts'},
    2: {name: 'Module for', alone_name: 'Module'},
    3: {name: 'The', alone_name: 'Application'},
    4: {name: 'Big', alone_name: 'Big Deal'},
    5: {name: 'Custom', alone_name: 'Custom'}
};


export const technologies = {
    overtime: {name: 'Overtime Work', acronym: 'Over', price: 5000, description: 'Overtime help to finish project on time, but exhausted team.'},
    creativity: {name: 'Four Day Work Week', acronym: 'Free', price: 5000, description: "Fridays devoted to pet projects which boosting experience and lead to insight."},

    tdd: {name: 'Test Driven Development', acronym: 'TDD', price: 10000, description: 'Developing tests that reduce the probability of errors.'},
    refactoring: {name: 'Non-stop refactoring', acronym: 'Ref', price: 10000, description: "The complexity of the code - it's just a task for refactoring."},

    pair: {name: 'Pair Programming', acronym: 'Pair', price: 25000, description: 'Working in tandem allows us to solve complex problems.'},
    micromanagement: {name: 'Micromanagement', acronym: 'Micro', price: 25000, description: 'Solid control over the objectives is averaging performance.'},

    rad: {name: 'Rapid Development', acronym: 'RAD', price: 25000, description: 'Faster Development at the cost of increasing complexity.'},
    agile: {name: 'Agile Development', acronym: 'Agile', price: 25000, description: 'Focus on priority, cut out unnecessary, lighter the project.'}
};


export const education = {
    training: {name: 'Training Project', hide: false, description: ''},
    hackathon: {name: 'Hackathon', hide: true, description: ''},
    university: {name: 'University', hide: true, description: ''},
    workshop: {name: 'Workshop', hide: true, description: ''}
};


export const player_backgrounds = {
  //  autodidact: {name: 'Autodidact', money: 1000, start_tech: ['creativity'], text: 'Inspired researcher, looking own way. Eclectic stats.'},
  //  university: {name: 'Student', money: 5000, start_tech: ['tdd'], text: 'Fundamental education according to verified program. Flat stats.'},
    comprehensive: {name: 'Comprehensive', money: 1000, start_tech: ['agile'], text: 'Has no weaknesses. But is not the special and poor.'},
    specialist: {name: 'Specialist', money: 3000, start_tech: ['rad'], text: 'Honed skills in the profession to heights.'},
    coworker: {name: 'Coworker', money: 5000, start_tech: ['pair'], text: 'Works with the Partner, covering each other.'},
    businessman: {name: 'Businessman', money: 10000, start_tech: ['micromanagement'], text: 'Made a fortune doing business. Has a money.'}
};

export const player_specialities = {
    design: {name: 'Designer', text: 'Design'},
    manage: {name: 'Manager', text: 'Management'},
    program: {name: 'Programmer', text: 'Programming'},
    admin: {name: 'Administrator', text: "Administrating"}
};


export const offices = {
    1: {space: 1, price: 0,     name: 'Home', text: ''},
    2: {space: 4, price: 500,   name: 'Small Office', text: ''},
    3: {space: 7, price: 2500,  name: 'Medium Office', text: ''},
    4: {space: 10, price: 10000, name: 'Big office', text: ''}
};

export default {};