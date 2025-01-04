import str from '../utils/strings.js';

// Copy component
const Copy = () => {

    // Get the current year
    const year = new Date().getFullYear();

    // Component HTML
    const html = (
        <div className="copy">
            <p>{str('copy', true, [year])}</p>
        </div>
    )

    return html;
}

export default Copy;