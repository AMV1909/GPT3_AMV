import { google, slack, atlassian, dropbox, shopify } from "./imports";

import "./Brand.css";

export function Brand() {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={google} alt="google" />
            </div>
            <div>
                <img src={slack} alt="slack" />
            </div>
            <div>
                <img src={atlassian} alt="atlassian" />
            </div>
            <div>
                <img src={dropbox} alt="dropbox" />
            </div>
            <div>
                <img src={shopify} alt="shopify" />
            </div>
        </div>
    )
}
