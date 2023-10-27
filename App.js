/*
*
*
<div id="parent">
    <div id ="child1">
        <h1>This is the H1 Heading</</h1>
        <h2> This is the h2 Heading</h2>
    </div>
    <div id ="child2">
        <h1>This is the H1 Heading</</h1>
        <h2> This is the h2 Heading</h2>
    </div>
</div>

*
*
*/



const heading = React.createElement(
    "h1",
    {id : "heading", xyz: "dvg"}, 
    "Hello World by React"
    );

    const heading2 = React.createElement("div", {id:"parent"}, 
                                    React.createElement("div", {id:"child1"}, 
                                        [
                                            React.createElement("h1",{}, "This is the H1 Heading"), 
                                            React.createElement("h2",{}, "This is the H2 Heading")
                                        ] 
                                    ),
                                    React.createElement("div", {id:"child2"}, 
                                        [
                                            React.createElement("h1",{}, "This is the H1 Heading"), 
                                            React.createElement("h2",{}, "This is the H2 Heading")
                                        ] 
                                    )
                    );
    
    console.log(heading); // object
            const root = ReactDOM.createRoot(document.getElementById("root"));
            root.render(heading2);

