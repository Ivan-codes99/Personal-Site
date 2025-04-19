"use client";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

export default function Projects() {
    return (
    <section className  = "mt-20 flex-col justify-center">
        <h1 className = "text-center text-3xl sm:text-5xl font-medium">Projects</h1>

        <div className = "flex justify-between">
            <button className = "justify-start text-6xl pl-10">
                <RxDoubleArrowLeft/>
            </button>
            <div>
                
            </div>
            <button className = "justify-end text-6xl pr-10">
                <RxDoubleArrowRight/>
            </button>
        </div>
    </section>
    );
}