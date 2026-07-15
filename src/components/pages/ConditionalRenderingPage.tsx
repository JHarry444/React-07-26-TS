import ConditionalRendering from "../ConditionalRendering";

function ConditionalRenderingPage() {
    return (
        <>
            <h2>Conditional Rendering</h2>
            <ConditionalRendering bool />
            <ConditionalRendering />
        </>
    );
}

export default ConditionalRenderingPage;