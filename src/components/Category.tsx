// @flow
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../redux/feature/category.reducer";
import "./Category.scss";

type Props = {};
export function Category(props: Props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // const [selectedCategory, setSelectedCategory] = useState("");
    const dispatch = useDispatch();

    const categories = ["Cat1", "Cat2", "Cat3", "Cat4", "Cat5", "Cat6"];

    function selectCategory(cat: string) {
        // setSelectedCategory(cat);
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
                {categories.map((category: string, index: number) => {
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
