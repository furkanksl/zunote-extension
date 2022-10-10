// @flow
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../redux/feature/category.reducer";
import "./Category.scss";

type Props = {
    categories: string[];
};
export function Category(props: Props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dispatch = useDispatch();

    function selectCategory(cat: string) {
        dispatch(setSelectedCategory(cat));
        setIsDropdownOpen(false);
    }

    return (
        <nav>
            <span className="title" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <div></div>
                <div>Categories</div>
                <div className="icon">{isDropdownOpen ? "-" : "+"}</div>
            </span>
            <input type="checkbox" id="touch" />
            <ul className={"slide " + (isDropdownOpen ? "active-slide" : "")}>
                {props.categories.map((category: string, index: number) => {
                    return (
                        <li key={index} onClick={() => selectCategory(category)}>
                            <p>{category}</p>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
