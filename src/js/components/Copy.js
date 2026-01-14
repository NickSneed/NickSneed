import str from '@/js/utils/strings.js';

// Copy component
const Copy = () => {
    // Get the current year
    const year = new Date().getFullYear();

    // Component HTML
    const html = <p>{str('copy', false, [year])}</p>;

    return html;
};

export default Copy;
