import { Navbar, Article, Brand, CTA, Feature } from "./Components";
import { Header, Blog, Features, Footer, Possibility, WhatGPT3 } from "./Containers";

import "./App.css";

export function App() {
    return (
        <div className="app">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}
