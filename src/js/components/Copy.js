// Copy component
const Copy = () => {

    // Get the current year
    const year = new Date().getFullYear();

    // Component HTML
    const html = (
        <div className="copy">
            <p>&copy; 2024-{year} Nick Sneed</p>
        </div>
    )

    return html;
}

export default Copy;