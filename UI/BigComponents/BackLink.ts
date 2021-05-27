/**
 * The backlink bar at the top
 */
import {UIElement} from "../UIElement";
import Translations from "../i18n/Translations";
import Link from "../Base/Link";
import {FixedUiElement} from "../Base/FixedUiElement";
import Combine from "../Base/Combine";

export default class BackLink extends UIElement {

    private _loginButton: UIElement;

    constructor() {
        super();
        this._loginButton = new Link(Translations.t.general.backToWaldbrand.txt, "https://waldbrand-app.de")
            .SetClass("backlink-link pt-3");
    }

    InnerRender(): string {
        const userIcon = new Link(
            new FixedUiElement(`<img id='waldbrand-pic' src='assets/themes/waldbrand/logo.svg' alt='profile-pic'/>`),
            "https://waldbrand-app.de", true
        );

        // return this._loginButton.Render();

        return new Combine([
            userIcon,
            this._loginButton
        ]).Render()
    }


}
