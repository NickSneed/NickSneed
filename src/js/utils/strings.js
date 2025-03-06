import parse from 'html-react-parser';

// Strings object
const strings = {
    introH1: `Hello.`,
    introTxt: ([userID]) => parse(`Welcome to my website. <br>You have been randomly assigned <br>user ID: ${userID}.`),
    introLogoAlt: `Nick Sneed Logo`,
    mainIntro:
        `<p>
            <span className="txt-l">
                Nick Sneed <br>
                Web Developer/Designer
            </span>
        </p>
        <p>
            <i>Location</i><br>
            O' Fallon, MO
        </p>
        <p>
            <i>Specialization</i><br>
            Creation of visually appealing and responsive websites. 
            Combination of design principles and technological expertise. 
            Development of user-centric online experiences.
        </p>`,
    socialTileInsta: ([userID]) => 
        `<p>
            <i>Objective</i><br>
            Nostalgia induction via digital media platform 'Instagram'.
        </p>
        <p>
            <i>Methodology</i><br>
            Content analysis of archived visual data (photographs, videos).
        </p>
        <p>
            <i>Data presentation</i><br>
            Limited color spectrum mirroring aesthetic of Game Boy Camera.
        </p>
        <p>
            Please enjoy this nostalgic media ${userID}.
        </p>`,
    socialTileInstaAlt: `Instagram`,
    socialTileInstaBt: `Shoot`,
    socialTileTumblr: ([userID]) => 
        `<p>
            <i>Objective</i><br>
            Digital art portfolio.
            Visual representation of aesthetic preferences derived from video game media.
        </p>
        <p>
            <i>Content</i><br>
            Original artwork generated by BobRumbly (aka Nick Sneed).
        </p>
        <p>
            <i>Data source</i><br>
            Retro digital video games.
        </p>
        <p>
            Please enjoy this content ${userID}.
        </p>`,
    socialTileTumblrAlt: `Tumblr`,
    socialTileTumblrBt: `View`,
    socialTileGitHub: ([userID]) => 
        `<p>
            <i>Purpose</i><br>
            Code repository.
            Documentation of software development activities.
            Exploration of emerging technologies.
        </p>
        <p>
            <i>Content</i><br>
            Source code.
            Project documentation.
            Experimental prototypes.
        </p>
        <p>
            Please enjoy these computational directives ${userID}.
        </p>`,
    socialTileGitHubAlt: `GitHub`,
    socialTileGitHubBt: `Play`,
    footerInstaAlt: `Visit my Instagram`,
    footerTumblrAlt: `Visit my Tumblr`,
    footerGitHubAlt: `Visit my GitHub`,
    footerXAlt: `Visit my X/Twitter`,
    footerLinkedInAlt: `Visit my LinkedIn`,
    copy: ([year]) => `© 2024-${year} Nick Sneed`,
    rocketHeader: `Upcoming Rocket Launch`,
    rocketTxt: ([name, provider, vehicle, desc]) => 
        `Name: ${name}<br>
        Provider: ${provider}<br>
        Vehicle: ${vehicle}<br><br>
        ${desc}`,
    loading: `Loading...`,
    error: `Error: `
}

// str function
const str = (k, isParse, v) => {
    const string = strings[k];
    const s = typeof string === 'function' ? string(v) : string;
    return isParse ? parse(s) : s;
}

export default str;