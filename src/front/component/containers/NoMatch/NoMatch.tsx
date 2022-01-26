import React from "react";
import { Link } from "react-router-dom";

export class NoMatch extends React.Component {
    render() {
        return (
            <>
                <h1>Упс... Такой страницы нет</h1>
                <h2><Link to={"/"}> Вернуться назад</Link></h2>
            </>
        );
    }
}
