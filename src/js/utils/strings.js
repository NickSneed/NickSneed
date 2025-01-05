import parse from 'html-react-parser';

// Strings object
const strings = {
    introTxt: `Hello &<br>welcome.`,
    introLogoAlt: `Nick Sneed Logo`,
    mainIntro: `I'm Nick Sneed, a web developer/designer based in O' Fallon, MO. I specialize in creating beautiful responsive websites. I combine my love for design and technology to create online experiences that are both visually stunning and user-friendly.`,
    socialTileInsta: `Reliving childhood memories, one pixel at a time on my Instagram. Exploring the world through the limited palette of the Game`,
    socialTileInstaAlt: `Instagram`,
    socialTileInstaBt: `Shoot`,
    socialTileTumblr: `Tumblr is my digital sketchbook! I love creating art inspired by my favorite video games. View my latest creations!`,
    socialTileTumblrAlt: `Tumblr`,
    socialTileTumblrBt: `View`,
    socialTileGitHub: `Browse my GitHub! I love coding and exploring new technologies. This is where I share my experiments and creations.`,
    socialTileGitHubAlt: `GitHub`,
    socialTileGitHubBt: `Play`,
    footerInstaAlt: `Visit my Instagram`,
    footerTumblrAlt: `Visit my Tumblr`,
    footerGitHubAlt: `Visit my GitHub`,
    footerXAlt: `Visit my X/Twitter`,
    footerLinkedInAlt: `Visit my LinkedIn`,
    copy: ([year]) => `© 2024-${year} Nick Sneed`
}

// str function
const str = (k, isParse, v) => {
    const string = strings[k];
    const s = typeof string === 'function' ? string(v) : string;
    return isParse ? parse(s) : s;
}

export default str;