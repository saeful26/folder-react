import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

export default class Eduwork extends React.Component {
    render() {
        return (
            <div>
                <ClassComponent nama="saefullah"/>
                <FunctionalComponent nama="sayang"/>
            </div>
        )
    }
}