
const Home: React.FC = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Welcome to React + Electron</h1>
            <section style={{ marginBottom: '20px' }}>
                <h2>Use Cases</h2>
                <ul>
                    <li>Building cross-platform desktop applications.</li>
                    <li>Creating apps with a modern web-based UI.</li>
                    <li>Combining the power of web technologies with native desktop features.</li>
                    <li>Prototyping desktop applications quickly.</li>
                </ul>
            </section>
            <section style={{ marginBottom: '20px' }}>
                <h2>Pros</h2>
                <ul>
                    <li>Cross-platform compatibility (Windows, macOS, Linux).</li>
                    <li>Leverages the vast React ecosystem for UI development.</li>
                    <li>Access to native desktop APIs via Electron.</li>
                    <li>Single codebase for web and desktop apps.</li>
                </ul>
            </section>
            <section>
                <h2>Cons</h2>
                <ul>
                    <li>Increased application size due to bundling Chromium and Node.js.</li>
                    <li>Higher memory usage compared to native desktop apps.</li>
                    <li>Performance may not match fully native solutions.</li>
                    <li>Requires knowledge of both React and Electron for development.</li>
                </ul>
            </section>
        </div>
    );
};

export default Home;