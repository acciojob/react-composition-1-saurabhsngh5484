import React, { useState } from "react";

const arrOfTab = [
    {
        titles: "Tab 1",
        contents: "This is the content for Tab 1."
    },
    {
        titles: "Tab 2",
        contents: "This is the content for Tab 2."
    },
    {
        titles: "Tab 3",
        contents: "This is the content for Tab 3."
    }
]

const Tabs = () => {
    // let [tab, setTab] = useState(arrOfTab);
    let [content, setContent] = useState(arrOfTab[0].contents);
    function showContent(obj) {
        setContent(obj.contents);
    }


    return (
        <div>
            <ul>
                {
                    arrOfTab.map((obj) => (
                        <li onClick={() => { showContent(obj) }}>
                            {obj.titles}
                        </li>
                    ))
                }
            </ul>

            <p>{content}</p>
        </div>
    )
}

export default Tabs;