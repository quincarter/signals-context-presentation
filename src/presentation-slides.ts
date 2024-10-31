import { LitElement, PropertyValueMap, html } from "lit";
import { customElement, query } from "lit/decorators.js";
import { _toConsumableArray } from "./utilities/helpers";
import "../fullscreen-handler";
import "./examples/button.example";
import sdk from "@stackblitz/sdk";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("presentation-slides")
export class PresentationSlides extends LitElement {
  @query("#slide25 > .o-wrapper")
  stackBlitzAngularEmbed?: HTMLElement;

  @query("#slide27 > .o-wrapper")
  stackBlitzReactEmbed?: HTMLElement;

  @query("#slide29 > .o-wrapper")
  stackBlitzLitEmbed?: HTMLElement;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.firstUpdated(_changedProperties);
    this.initSlideNav();

    sdk.embedProjectId(
      this.stackBlitzAngularEmbed as HTMLElement,
      "angular-with-signals",
      {
        forceEmbedLayout: true,
        openFile: "src/counter.ts",
      }
    );

    sdk.embedProjectId(
      this.stackBlitzLitEmbed as HTMLElement,
      "lit-with-complex-preact-signal-state",
      {
        forceEmbedLayout: true,
        openFile: "src/my-element.ts",
      }
    );

    sdk.embedProjectId(
      this.stackBlitzReactEmbed as HTMLElement,
      "react-signals-counter",
      {
        forceEmbedLayout: true,
        openFile: "src/SignalCounter.tsx",
      }
    );
  }

  initSlideNav() {
    const controls = function controls(event: any) {
      const isCover =
        window.location.hash === "" || window.location.hash === "#start";

      if (isCover) {
        start(event);
      } else {
        navigate(event);
      }
    };

    const slideCount = document.querySelectorAll("section").length;
    document.body.addEventListener("keydown", controls, false);

    const start = function start(event: { code: string }) {
      if (
        event.code === "Space" ||
        event.code === "ArrowRight" ||
        event.code === "Period"
      ) {
        window.location.hash = "#slide1";
      }
    };

    const navigate = (event: any) => {
      const isFirstSlide = window.location.hash === "#slide1";
      const isLastSlide = window.location.hash === "#slide" + (slideCount - 1);
      const activeSlide: any = document.querySelector('[id^="slide"]:target');
      const slideNum = parseInt(activeSlide.getAttribute("id").substring(5));

      if (
        activeSlide &&
        !isLastSlide &&
        (event.code === "Space" ||
          event.code === "ArrowRight" ||
          event.code === "PageDown")
      ) {
        window.location.hash = "slide" + (slideNum + 1);
      }

      if (
        !isFirstSlide &&
        (event.code === "ArrowLeft" || event.code === "PageUp")
      ) {
        window.location.hash = "slide" + (slideNum - 1);
      }

      if (isLastSlide && event.code === "KeyR") {
        window.location.hash = "#start";
      }

      if (activeSlide && event.code === "Period") {
        const winHash = window.location.hash;
        const activeList = document.querySelector(winHash + " .revealable");

        if (activeList) {
          const listArray = _toConsumableArray(
            document.querySelectorAll(winHash + " .revealable .fragment")
          );

          if (listArray[0]) {
            listArray[0].classList.remove("fragment");
          }
        }
      }

      if (activeSlide && event.code === "Comma") {
        const _winHash = window.location.hash;

        const _activeList = document.querySelector(_winHash + " .revealable");

        if (_activeList) {
          const _listArray = _toConsumableArray(
            document.querySelectorAll(_winHash + " .revealable li")
          );

          const hideList = _listArray.forEach(function (list: {
            classList: { add: (arg0: string) => void };
          }) {
            list.classList.add("fragment");
          });

          return hideList;
        }
      }
    };
  }

  render() {
    return html`
      <section id="slide1">
        <div class="o-wrapper">
          <img src="src/assets/hey-sunglasses.png" alt="hey sunglasses" />

          <h2>About me! Who am I, really?</h2>
          <ul class="about-me-list">
            <li><img src="src/assets/brew-me-icon.png" alt="brew me" /></li>
            <li>
              <img
                src="src/assets/home-assistant-logo.svg"
                alt="home assistant"
              />
            </li>
            <li><img src="src/assets/movies-bitmoji.png" alt="movies" /></li>
            <li><img src="src/assets/wasm.webp" alt="wasm" /></li>
          </ul>
        </div>
      </section>

      <section id="slide2">
        <div class="o-wrapper">
          <div class="logo-wrapper">
            <a href="#slide3">
              <img
                src="src/assets/understanding-component-state.png"
                alt="understanding component state logo"
                class="c-logo-main"
              />
            </a>
            <a href="#slide9">
              <img
                src="src/assets/javascript-signals.png"
                alt="javascript signals image"
                class="workers"
              />
            </a>
          </div>

          <p>
            Medium:
            <a href="https://twitter.com/quincarter">@quincarter</a>
          </p>
          <p>
            Dev.to:
            <a href="https://dev.to/quincarter">@quincarter</a>
          </p>
          <p>
            Github:
            <a href="https://github.com/quincarter">@quincarter</a>
          </p>
        </div>
      </section>

      <section id="slide3">
        <div class="o-wrapper">
          <h1>What is State?</h1>
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*z68I1WKuLbzbwEp0"
          />
        </div>
      </section>

      <section id="slide4">
        <div class="o-wrapper l-flex">
          <h1 class="l-title">Component State</h1>
          <p>
            Component state is the “value of specific properties in your
            component class at any given time in the component lifecycle.”
          </p>
          <div class="content">
            <ol>
              <li>Colors of a button</li>
              <li>Disabled or enabled state of a button</li>
              <li>Hover state, etc.</li>
            </ol>
            <img
              class="component-state-examples"
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2p-gjLCAGiDA-JuDT_dx8g.png"
              alt="component state examples"
            />
          </div>
        </div>
      </section>

      <section id="slide5">
        <div class="o-wrapper">
          <h1>Button State!</h1>
          <x-my-button
            button-title="My Button Is Disabled"
            button-color="success"
            button-disabled
          ></x-my-button>

          <x-my-button
            button-title="My Button Is Enabled"
            button-color="secondary"
          ></x-my-button>
        </div>
      </section>

      <section id="slide6">
        <div class="o-wrapper">
          <h1>Lit Element Context API</h1>
          <figure>
            <img
              style="object-fit: contain"
              src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4dUGT19XFJ9u66wiQn6ADQ.png"
              alt="Lit Element DOM Tree"
              class="c-logo-big"
            />
            <figcaption>
              Easy to Understand if you Know that the DOM is a Tree
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="slide7">
        <div class="o-wrapper">
          <h1>Want to mess with Context?</h1>
          <img
            class="qr-code"
            src="src/assets/qr-code-lit-context-demo-github.png"
            alt="qr for lit context"
          />
        </div>
      </section>

      <section id="slide8">
        <div class="o-wrapper">
          <h1>Read the Medium article:</h1>
          <img
            class="qr-code"
            src="src/assets/understanding-component-state-qr-code.png"
            alt="qr for lit context medium article"
          />
        </div>
      </section>

      <section id="slide9">
        <div class="o-wrapper">
          <h1>JavaScript Signals</h1>
          <img
            src="src/assets/javascript-signals.png"
            alt="javascript signals image"
            class="workers"
          />
        </div>
      </section>

      <section id="slide10">
        <div class="o-wrapper">
          <h1>So what are they?</h1>
        </div>
      </section>

      <section id="slide11">
        <div class="o-wrapper">
          <h1>So what are they?</h1>
          <p>Signals are data structures for managing observable state.</p>
        </div>
      </section>

      <section id="slide12">
        <div class="o-wrapper">
          <h1>What Can I Store in Signals?</h1>
          <ul>
            <li>Single Value</li>
            <li>Computed Value</li>
          </ul>
        </div>
      </section>

      <section id="slide13">
        <div class="o-wrapper">
          <h1>TC39 Proposal</h1>
          <img src="" alt="tc39" />
        </div>
      </section>

      <section id="slide14">
        <div class="o-wrapper">
          <h1>Why should I Care about TC39?</h1>
          <img
            src="https://media.tenor.com/5SKA5XuifgoAAAAM/swedish-chef-baking.gif"
            alt="swedish chef"
          />
          <img
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHplYjUwNWk0Yms5NXdqN2p2NzdiMzBqeGN5MzR1eWo0YWU1eTZnNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41YtBXZvSRdgqq7m/giphy.gif"
            alt="bake off chef"
          />
        </div>
      </section>
      <section id="slide15">
        <div class="o-wrapper">
          <h1>How Do they work?</h1>
          <p>
            What is the first thing that comes to mind when you think about a
            signal?
          </p>
        </div>
      </section>
      <section id="slide16">
        <div class="o-wrapper">
          <h1>Pub/Sub?</h1>
          <img src="src/assets/signals/pubsub-diagram.png" alt="pub sub" />
        </div>
      </section>
      <section id="slide17">
        <div class="o-wrapper">
          <img
            src="https://media.tenor.com/Bw7zUTWpZtgAAAAM/pissed.gif"
            alt="john c reilly"
          />
          <h1>How do they work, really?</h1>
          There are only two main units:

          <ol>
            <li>Publishers — Components that triggered the events.</li>
            <li>
              Subscribers — Components that listen for specific signals and
              react accordingly.
            </li>
          </ol>

          <img
            src="src/assets/signals/amazon-example.png"
            alt="amazon example"
          />
        </div>
      </section>
      <section id="slide18">
        <div class="o-wrapper">
          <h1>When Should I Use Signals?</h1>
          <ol>
            <li>
              You need direct communication between components without the
              complexity of an intermediary event bus.
            </li>
            <li>
              Efficiency, modularity, and scalability are priorities in your
              application architecture.
            </li>
          </ol>
          <img
            src="https://media.tenor.com/h38lEyHLgcMAAAAM/radio-national-radio-day.gif"
            alt="radio tune in"
          />
        </div>
      </section>

      <section id="slide19">
        <div class="o-wrapper">
          <h1>Basic Implementation Examples</h1>
          <img
            src="https://media.tenor.com/drKuhgBblzcAAAAM/anton-hacker.gif"
            alt="nerd hacking"
          />
        </div>
      </section>
      <section id="slide20">
        <div class="o-wrapper">
          <h1>Creating a new Signal</h1>
          <img src="src/assets/signals/new-signal.png" alt="new signal" />
        </div>
      </section>
      <section id="slide21">
        <div class="o-wrapper">
          <h1>New Computed Signal</h1>
          <img
            src="src/assets/signals/new-computed-signal.png"
            alt="new computed signal"
          />
        </div>
      </section>
      <section id="slide22">
        <div class="o-wrapper">
          <h1>New Watcher</h1>
          <img src="src/assets/signals/new-watcher.png" alt="new watcher" />
        </div>
      </section>
      <section id="slide23">
        <div class="o-wrapper">
          <h1>Getting a computed signal</h1>
          <img
            src="src/assets/signals/computed-signal-get.png"
            alt="getting a computed signal"
          />
        </div>
      </section>

      <section id="slide24">
        <div class="o-wrapper">
          <h1>Angular Example</h1>
          <img
            src="src/assets/signals/angular-signals.png"
            alt="angular signals"
          />
        </div>
      </section>

      <section id="slide25">
        <div class="o-wrapper">
          <h1>Angular with Signals</h1>
        </div>
      </section>

      <section id="slide26">
        <div class="o-wrapper">
          <h1>React Example</h1>
          <img src="src/assets/signals/react-signals.png" alt="react signals" />
        </div>
      </section>

      <section id="slide27">
        <div class="o-wrapper">
          <h1>React Example</h1>
        </div>
      </section>

      <section id="slide28">
        <div class="o-wrapper">
          <h1>More Complex - Lit Example</h1>
          <img src="src/assets/signals/lit-signals.png" alt="lit signals" />
        </div>
      </section>

      <section id="slide29">
        <div class="o-wrapper">
          <h1>Lit with Signals</h1>
        </div>
      </section>

      <section id="slide30">
        <div class="o-wrapper">
          <h1>Plugging my other articles:</h1>
          <img
            class="qr-code"
            src="src/assets/qr-code-multi-threading-the-web.png"
            alt="multi threading the web qr code"
          />
        </div>
      </section>

      <section id="slide31">
        <div class="o-wrapper">
          <img src="src/assets/qanda.jpeg" alt="Q & A" />
        </div>
      </section>

      <section id="start">
        <div class="start-container">
          <img
            class="start-image"
            src="src/assets/computer-reading.png"
            alt="Quin Reading"
          />
          <h1>Welcome! Have a Seat and we will get started shortly!</h1>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "presentation-slides": PresentationSlides;
  }
}
