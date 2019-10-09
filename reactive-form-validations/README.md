# ReactiveFormValidations

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

======================



awr.min.css

@charset "UTF-8";

awr {
    awr---text-initial: #141414;
    awr---text-inverse: #fff;
    awr---text-black: #141414;
    awr---text-white: #fff;
    awr---bg-initial: #fff;
    awr---bg-inverse: #141414;
    awr---bg-mod-01: #f6f3ef;
    awr---bg-mod-02: #323231;
    awr---bg-mod-03: #8cba2d;
    awr---bg-mod-04: #cf4500;
    awr---context-success: #4db050;
    awr---context-info: #3498db;
    awr---context-warning: #f1c40f;
    awr---context-danger: #d7373c;
    awr---breakpoint-xs: 0;
    awr---breakpoint-sm: 576px;
    awr---breakpoint-md: 768px;
    awr---breakpoint-lg: 992px;
    awr---breakpoint-xl: 1200px;
    awr---font-family-base: "MarkForMC", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    awr---font-family-monospace: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace
}

@-ms-viewport {
    width: device-width
}

* {
    padding: 0;
    box-sizing: border-box
}

body,
html {
    font-size: 100%
}

.awr {
    margin: 0;
    font-family: MarkForMC, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

.awr *,
.awr:after,
.awr:before {
    box-sizing: border-box
}

.awr article,
.awr aside,
.awr details,
.awr dialog,
.awr figcaption,
.awr figure,
.awr footer,
.awr header,
.awr hgroup,
.awr main,
.awr menu,
nav .awr,
section .awr {
    display: block
}

.awr hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible
}

.awr h1,
.awr h2,
.awr h3,
.awr h4,
.awr h5,
.awr h6 {
    margin-top: 0;
    margin-bottom: .5rem
}

.awr p {
    margin-top: 0;
    margin-bottom: 1rem
}

.awr abbr[data-original-title],
.awr abbr[title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0
}

.awr address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit
}

.awr dl,
.awr ol,
.awr ul {
    margin-top: 0;
    margin-bottom: 1rem;
    list-style-type: none
}

.awr ol ol,
.awr ol ul,
.awr ul ol,
.awr ul ul {
    margin-bottom: 0
}

.awr dt {
    font-weight: 700
}

.awr dd {
    margin-bottom: 1rem;
    margin-left: 0
}

.awr blockquote {
    margin: 0 0 1rem
}

.awr dfn {
    font-style: italic
}

.awr b,
.awr strong {
    font-weight: bolder
}

.awr small {
    font-size: 80%
}

.awr sub,
.awr sup {
    position: relative;
    font-size: 87.5%;
    line-height: 0;
    vertical-align: baseline
}

.awr sub {
    bottom: -.25em
}

.awr sup {
    top: -.5em
}

.awr a:not([href]):not([tabindex]),
.awr a:not([href]):not([tabindex]):focus,
.awr a:not([href]):not([tabindex]):hover {
    text-decoration: none
}

.awr a:not([href]):not([tabindex]):focus {
    outline: 0
}

.awr code,
.awr kbd,
.awr pre,
.awr samp {
    font-family: monospace;
    font-size: 1em
}

.awr pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    -ms-overflow-style: scrollbar
}

.awr figure {
    margin: 0 0 1rem
}

.awr img {
    vertical-align: middle;
    border-style: none
}

.awr svg {
    overflow: hidden
}

.awr table {
    border-collapse: collapse
}

.awr caption {
    padding-top: .75rem;
    padding-bottom: .75rem;
    color: #777;
    caption-side: bottom
}

.awr caption,
.awr th {
    text-align: left
}

.awr label {
    display: inline-block;
    margin-bottom: .5rem
}

.awr button {
    border-radius: 0
}

.awr button,
.awr input,
.awr optgroup,
.awr select,
.awr textarea {
    margin: 0;
    font-family: MarkForMC, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

.awr button,
.awr input {
    overflow: visible;
    border-radius: 4px;
    border: 1px solid #d4d4d4
}

.awr button,
.awr select {
    text-transform: none
}

.awr [type=reset],
.awr [type=submit],
.awr button,
.awr html [type=button] {
    -webkit-appearance: button
}

.awr [type=button]::-moz-focus-inner,
.awr [type=reset]::-moz-focus-inner,
.awr [type=submit]::-moz-focus-inner,
.awr button::-moz-focus-inner {
    padding: 0;
    border-style: none
}

.awr button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color
}

.awr input[type=checkbox],
.awr input[type=radio] {
    box-sizing: border-box;
    padding: 0
}

.awr input[type=checkbox]:disabled,
.awr input[type=radio]:disabled {
    cursor: not-allowed
}

.awr input[type=date],
.awr input[type=datetime-local],
.awr input[type=month],
.awr input[type=time] {
    -webkit-appearance: listbox
}

.awr textarea {
    overflow: auto;
    resize: vertical
}

.awr fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0
}

.awr legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal
}

.awr progress {
    vertical-align: baseline
}

.awr [type=number]::-webkit-inner-spin-button,
.awr [type=number]::-webkit-outer-spin-button {
    height: auto
}

.awr [type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px
}

.awr [type=search]::-webkit-search-cancel-button,
.awr [type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

.awr::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button
}

.awr output {
    display: inline-block
}

.awr summary {
    display: list-item;
    cursor: pointer
}

.awr template {
    display: none
}

.awr [hidden] {
    display: none!important
}

.awr a {
    color: #141414;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects
}

[tabindex="-1"]:focus .awr {
    outline: none!important
}

[lang]:lang(ar) {
    font-family: Arabic Roman, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

[lang]:lang(ja) {
    font-family: Japanese Regular, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

[lang]:lang(zh) {
    font-family: Chinese Regular, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

[lang]:lang(ko) {
    font-family: Korean Light, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

[lang]:lang(ka) {
    font-family: Georgian Regular, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

[lang]:lang(az) {
    font-family: Cyrillic Light, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

[lang]:lang(el) {
    font-family: Greek Light, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

[lang]:lang(th) {
    font-family: Thai Regular, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

.awr-btn-block,
.awr-btn-brick {
    display: block;
    width: 100%
}

.awr-btn-block+.awr-btn-block,
.awr-btn-block+.awr-btn-brick,
.awr-btn-brick+.awr-btn-block,
.awr-btn-brick+.awr-btn-brick {
    margin-top: .5rem
}

.awr-img-fluid {
    max-width: 100%;
    height: auto
}

.awr-list-inline,
.awr-nav,
.list-unstyled {
    list-style: none;
    padding-left: 0
}

.awr input.form-control-md {
    display: block;
    width: 100%;
    height: 2.25rem;
    padding: .5rem .75rem;
    font-size: .875rem;
    line-height: 1.25rem;
    background-image: none;
    background-clip: padding-box;
    border-radius: .25rem;
    appearance: none
}

.awr input.form-control-md::-ms-expand {
    background-color: transparent;
    border: 0
}

.awr input.form-control-md:disabled {
    cursor: not-allowed
}

.awr input.form-control-md {
    line-height: 2rem;
    height: 3rem;
    padding: .5rem 1rem;
    font-size: 1.5rem
}


/*!
 * DXP Framework Grid System
 */

.awr-container {
    padding-right: 24px;
    padding-left: 24px;
    margin: 0 auto;
    width: 100%
}

.awr-grid {
    display: grid
}

.awr-row {
    margin-right: -12px;
    margin-left: -12px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.awr-row:after {
    display: grid;
    clear: both;
    content: " "
}

.awr-no-gutters {
    margin-right: 0;
    margin-left: 0
}

.awr-no-gutters>.awr-col,
.awr-no-gutters>[class*=col-] {
    padding-right: 0;
    padding-left: 0
}

.awr img {
    width: auto
}

.awr .awr-img-fluid {
    max-width: 100%
}

.awr-row [class*=col-] {
    min-height: 1px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box
}

.awr-row [class*=pull-],
.awr-row [class*=push-] {
    position: relative
}

.awr-col-1 {
    width: 8.33333%
}

.awr-col-1,
.awr-col-2 {
    float: left;
    padding-right: 12px;
    padding-left: 12px;
    position: relative
}

.awr-col-2 {
    width: 16.66667%
}

.awr-col-3 {
    width: 25%
}

.awr-col-3,
.awr-col-4 {
    float: left;
    padding-right: 12px;
    padding-left: 12px;
    position: relative
}

.awr-col-4 {
    width: 33.33333%
}

.awr-col-5 {
    width: 41.66667%
}

.awr-col-5,
.awr-col-6 {
    float: left;
    padding-right: 12px;
    padding-left: 12px;
    position: relative
}

.awr-col-6 {
    width: 50%
}

.awr-col-7 {
    width: 58.33333%
}

.awr-col-7,
.awr-col-8 {
    float: left;
    padding-right: 12px;
    padding-left: 12px;
    position: relative
}

.awr-col-8 {
    width: 66.66667%
}

.awr-col-9 {
    width: 75%
}

.awr-col-9,
.awr-col-10 {
    float: left;
    padding-right: 12px;
    padding-left: 12px;
    position: relative
}

.awr-col-10 {
    width: 83.33333%
}

.awr-col-11 {
    width: 91.66667%
}

.awr-col-11,
.awr-col-12 {
    float: left;
    padding-right: 12px;
    padding-left: 12px;
    position: relative
}

.awr-col-12 {
    width: 100%
}

.awr-col-offset-0 {
    margin-left: 0
}

.awr-col-pull-0 {
    right: 0
}

.awr-col-push-0 {
    left: 0
}

.awr-col-offset-1 {
    margin-left: 8.33333%
}

.awr-col-pull-1 {
    right: 8.33333%
}

.awr-col-push-1 {
    left: 8.33333%
}

.awr-col-offset-2 {
    margin-left: 16.66667%
}

.awr-col-pull-2 {
    right: 16.66667%
}

.awr-col-push-2 {
    left: 16.66667%
}

.awr-col-offset-3 {
    margin-left: 25%
}

.awr-col-pull-3 {
    right: 25%
}

.awr-col-push-3 {
    left: 25%
}

.awr-col-offset-4 {
    margin-left: 33.33333%
}

.awr-col-pull-4 {
    right: 33.33333%
}

.awr-col-push-4 {
    left: 33.33333%
}

.awr-col-offset-5 {
    margin-left: 41.66667%
}

.awr-col-pull-5 {
    right: 41.66667%
}

.awr-col-push-5 {
    left: 41.66667%
}

.awr-col-offset-6 {
    margin-left: 50%
}

.awr-col-pull-6 {
    right: 50%
}

.awr-col-push-6 {
    left: 50%
}

.awr-col-offset-7 {
    margin-left: 58.33333%
}

.awr-col-pull-7 {
    right: 58.33333%
}

.awr-col-push-7 {
    left: 58.33333%
}

.awr-col-offset-8 {
    margin-left: 66.66667%
}

.awr-col-pull-8 {
    right: 66.66667%
}

.awr-col-push-8 {
    left: 66.66667%
}

.awr-col-offset-9 {
    margin-left: 75%
}

.awr-col-pull-9 {
    right: 75%
}

.awr-col-push-9 {
    left: 75%
}

.awr-col-offset-10 {
    margin-left: 83.33333%
}

.awr-col-pull-10 {
    right: 83.33333%
}

.awr-col-push-10 {
    left: 83.33333%
}

.awr-col-offset-11 {
    margin-left: 91.66667%
}

.awr-col-pull-11 {
    right: 91.66667%
}

.awr-col-push-11 {
    left: 91.66667%
}

.awr-col-offset-12 {
    margin-left: 100%
}

.awr-col-pull-12 {
    right: 100%
}

.awr-col-push-12 {
    left: 100%
}
/*--
@media screen and (min-width:576px) {
    .awr-container {
        max-width: 566px;
        margin: 0 auto
    }
    .awr-col-sm-1 {
        width: 8.33333%
    }
    .awr-col-sm-1,
    .awr-col-sm-2 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-sm-2 {
        width: 16.66667%
    }
    .awr-col-sm-3 {
        width: 25%
    }
    .awr-col-sm-3,
    .awr-col-sm-4 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-sm-4 {
        width: 33.33333%
    }
    .awr-col-sm-5 {
        width: 41.66667%
    }
    .awr-col-sm-5,
    .awr-col-sm-6 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-sm-6 {
        width: 50%
    }
    .awr-col-sm-7 {
        width: 58.33333%
    }
    .awr-col-sm-7,
    .awr-col-sm-8 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-sm-8 {
        width: 66.66667%
    }
    .awr-col-sm-9 {
        width: 75%
    }
    .awr-col-sm-9,
    .awr-col-sm-10 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-sm-10 {
        width: 83.33333%
    }
    .awr-col-sm-11 {
        width: 91.66667%
    }
    .awr-col-sm-11,
    .awr-col-sm-12 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-sm-12 {
        width: 100%
    }
    .awr-col-offset-sm-0 {
        margin-left: 0
    }
    .awr-col-pull-sm-0 {
        right: 0
    }
    .awr-col-push-sm-0 {
        left: 0
    }
    .awr-col-offset-sm-1 {
        margin-left: 8.33333%
    }
    .awr-col-pull-sm-1 {
        right: 8.33333%
    }
    .awr-col-push-sm-1 {
        left: 8.33333%
    }
    .awr-col-offset-sm-2 {
        margin-left: 16.66667%
    }
    .awr-col-pull-sm-2 {
        right: 16.66667%
    }
    .awr-col-push-sm-2 {
        left: 16.66667%
    }
    .awr-col-offset-sm-3 {
        margin-left: 25%
    }
    .awr-col-pull-sm-3 {
        right: 25%
    }
    .awr-col-push-sm-3 {
        left: 25%
    }
    .awr-col-offset-sm-4 {
        margin-left: 33.33333%
    }
    .awr-col-pull-sm-4 {
        right: 33.33333%
    }
    .awr-col-push-sm-4 {
        left: 33.33333%
    }
    .awr-col-offset-sm-5 {
        margin-left: 41.66667%
    }
    .awr-col-pull-sm-5 {
        right: 41.66667%
    }
    .awr-col-push-sm-5 {
        left: 41.66667%
    }
    .awr-col-offset-sm-6 {
        margin-left: 50%
    }
    .awr-col-pull-sm-6 {
        right: 50%
    }
    .awr-col-push-sm-6 {
        left: 50%
    }
    .awr-col-offset-sm-7 {
        margin-left: 58.33333%
    }
    .awr-col-pull-sm-7 {
        right: 58.33333%
    }
    .awr-col-push-sm-7 {
        left: 58.33333%
    }
    .awr-col-offset-sm-8 {
        margin-left: 66.66667%
    }
    .awr-col-pull-sm-8 {
        right: 66.66667%
    }
    .awr-col-push-sm-8 {
        left: 66.66667%
    }
    .awr-col-offset-sm-9 {
        margin-left: 75%
    }
    .awr-col-pull-sm-9 {
        right: 75%
    }
    .awr-col-push-sm-9 {
        left: 75%
    }
    .awr-col-offset-sm-10 {
        margin-left: 83.33333%
    }
    .awr-col-pull-sm-10 {
        right: 83.33333%
    }
    .awr-col-push-sm-10 {
        left: 83.33333%
    }
    .awr-col-offset-sm-11 {
        margin-left: 91.66667%
    }
    .awr-col-pull-sm-11 {
        right: 91.66667%
    }
    .awr-col-push-sm-11 {
        left: 91.66667%
    }
    .awr-col-offset-sm-12 {
        margin-left: 100%
    }
    .awr-col-pull-sm-12 {
        right: 100%
    }
    .awr-col-push-sm-12 {
        left: 100%
    }
}
--*/
/*--
@media screen and (min-width:768px) {
    .awr-container {
        max-width: 744px;
        margin: 0 auto
    }
    .awr-col-md-1 {
        width: 8.33333%
    }
    .awr-col-md-1,
    .awr-col-md-2 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-md-2 {
        width: 16.66667%
    }
    .awr-col-md-3 {
        width: 25%
    }
    .awr-col-md-3,
    .awr-col-md-4 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-md-4 {
        width: 33.33333%
    }
    .awr-col-md-5 {
        width: 41.66667%
    }
    .awr-col-md-5,
    .awr-col-md-6 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-md-6 {
        width: 50%
    }
    .awr-col-md-7 {
        width: 58.33333%
    }
    .awr-col-md-7,
    .awr-col-md-8 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-md-8 {
        width: 66.66667%
    }
    .awr-col-md-9 {
        width: 75%
    }
    .awr-col-md-9,
    .awr-col-md-10 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-md-10 {
        width: 83.33333%
    }
    .awr-col-md-11 {
        width: 91.66667%
    }
    .awr-col-md-11,
    .awr-col-md-12 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-md-12 {
        width: 100%
    }
    .awr-col-offset-md-0 {
        margin-left: 0
    }
    .awr-col-pull-md-0 {
        right: 0
    }
    .awr-col-push-md-0 {
        left: 0
    }
    .awr-col-offset-md-1 {
        margin-left: 8.33333%
    }
    .awr-col-pull-md-1 {
        right: 8.33333%
    }
    .awr-col-push-md-1 {
        left: 8.33333%
    }
    .awr-col-offset-md-2 {
        margin-left: 16.66667%
    }
    .awr-col-pull-md-2 {
        right: 16.66667%
    }
    .awr-col-push-md-2 {
        left: 16.66667%
    }
    .awr-col-offset-md-3 {
        margin-left: 25%
    }
    .awr-col-pull-md-3 {
        right: 25%
    }
    .awr-col-push-md-3 {
        left: 25%
    }
    .awr-col-offset-md-4 {
        margin-left: 33.33333%
    }
    .awr-col-pull-md-4 {
        right: 33.33333%
    }
    .awr-col-push-md-4 {
        left: 33.33333%
    }
    .awr-col-offset-md-5 {
        margin-left: 41.66667%
    }
    .awr-col-pull-md-5 {
        right: 41.66667%
    }
    .awr-col-push-md-5 {
        left: 41.66667%
    }
    .awr-col-offset-md-6 {
        margin-left: 50%
    }
    .awr-col-pull-md-6 {
        right: 50%
    }
    .awr-col-push-md-6 {
        left: 50%
    }
    .awr-col-offset-md-7 {
        margin-left: 58.33333%
    }
    .awr-col-pull-md-7 {
        right: 58.33333%
    }
    .awr-col-push-md-7 {
        left: 58.33333%
    }
    .awr-col-offset-md-8 {
        margin-left: 66.66667%
    }
    .awr-col-pull-md-8 {
        right: 66.66667%
    }
    .awr-col-push-md-8 {
        left: 66.66667%
    }
    .awr-col-offset-md-9 {
        margin-left: 75%
    }
    .awr-col-pull-md-9 {
        right: 75%
    }
    .awr-col-push-md-9 {
        left: 75%
    }
    .awr-col-offset-md-10 {
        margin-left: 83.33333%
    }
    .awr-col-pull-md-10 {
        right: 83.33333%
    }
    .awr-col-push-md-10 {
        left: 83.33333%
    }
    .awr-col-offset-md-11 {
        margin-left: 91.66667%
    }
    .awr-col-pull-md-11 {
        right: 91.66667%
    }
    .awr-col-push-md-11 {
        left: 91.66667%
    }
    .awr-col-offset-md-12 {
        margin-left: 100%
    }
    .awr-col-pull-md-12 {
        right: 100%
    }
    .awr-col-push-md-12 {
        left: 100%
    }
    .awr-row {
        margin-right: -12px;
        margin-left: -12px;
        padding: 0
    }
    .awr-row:after {
        display: grid;
        clear: both;
        content: " "
    }
}
--*/
@media screen and (min-width:992px) {
    .awr-container {
        max-width: 940px;
        margin: 0 auto
    }
    .awr-col-lg-1 {
        width: 8.33333%
    }
    .awr-col-lg-1,
    .awr-col-lg-2 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-lg-2 {
        width: 16.66667%
    }
    .awr-col-lg-3 {
        width: 25%
    }
    .awr-col-lg-3,
    .awr-col-lg-4 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-lg-4 {
        width: 33.33333%
    }
    .awr-col-lg-5 {
        width: 41.66667%
    }
    .awr-col-lg-5,
    .awr-col-lg-6 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-lg-6 {
        width: 50%
    }
    .awr-col-lg-7 {
        width: 58.33333%
    }
    .awr-col-lg-7,
    .awr-col-lg-8 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-lg-8 {
        width: 66.66667%
    }
    .awr-col-lg-9 {
        width: 75%
    }
    .awr-col-lg-9,
    .awr-col-lg-10 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-lg-10 {
        width: 83.33333%
    }
    .awr-col-lg-11 {
        width: 91.66667%
    }
    .awr-col-lg-11,
    .awr-col-lg-12 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-lg-12 {
        width: 100%
    }
    .awr-col-offset-lg-0 {
        margin-left: 0
    }
    .awr-col-pull-lg-0 {
        right: 0
    }
    .awr-col-push-lg-0 {
        left: 0
    }
    .awr-col-offset-lg-1 {
        margin-left: 8.33333%
    }
    .awr-col-pull-lg-1 {
        right: 8.33333%
    }
    .awr-col-push-lg-1 {
        left: 8.33333%
    }
    .awr-col-offset-lg-2 {
        margin-left: 16.66667%
    }
    .awr-col-pull-lg-2 {
        right: 16.66667%
    }
    .awr-col-push-lg-2 {
        left: 16.66667%
    }
    .awr-col-offset-lg-3 {
        margin-left: 25%
    }
    .awr-col-pull-lg-3 {
        right: 25%
    }
    .awr-col-push-lg-3 {
        left: 25%
    }
    .awr-col-offset-lg-4 {
        margin-left: 33.33333%
    }
    .awr-col-pull-lg-4 {
        right: 33.33333%
    }
    .awr-col-push-lg-4 {
        left: 33.33333%
    }
    .awr-col-offset-lg-5 {
        margin-left: 41.66667%
    }
    .awr-col-pull-lg-5 {
        right: 41.66667%
    }
    .awr-col-push-lg-5 {
        left: 41.66667%
    }
    .awr-col-offset-lg-6 {
        margin-left: 50%
    }
    .awr-col-pull-lg-6 {
        right: 50%
    }
    .awr-col-push-lg-6 {
        left: 50%
    }
    .awr-col-offset-lg-7 {
        margin-left: 58.33333%
    }
    .awr-col-pull-lg-7 {
        right: 58.33333%
    }
    .awr-col-push-lg-7 {
        left: 58.33333%
    }
    .awr-col-offset-lg-8 {
        margin-left: 66.66667%
    }
    .awr-col-pull-lg-8 {
        right: 66.66667%
    }
    .awr-col-push-lg-8 {
        left: 66.66667%
    }
    .awr-col-offset-lg-9 {
        margin-left: 75%
    }
    .awr-col-pull-lg-9 {
        right: 75%
    }
    .awr-col-push-lg-9 {
        left: 75%
    }
    .awr-col-offset-lg-10 {
        margin-left: 83.33333%
    }
    .awr-col-pull-lg-10 {
        right: 83.33333%
    }
    .awr-col-push-lg-10 {
        left: 83.33333%
    }
    .awr-col-offset-lg-11 {
        margin-left: 91.66667%
    }
    .awr-col-pull-lg-11 {
        right: 91.66667%
    }
    .awr-col-push-lg-11 {
        left: 91.66667%
    }
    .awr-col-offset-lg-12 {
        margin-left: 100%
    }
    .awr-col-pull-lg-12 {
        right: 100%
    }
    .awr-col-push-lg-12 {
        left: 100%
    }
}

@media screen and (min-width:1200px) {
    .awr-container {
        max-width: 1272px;
        margin: 0 auto
    }
    .awr-col-xl-1 {
        width: 8.33333%
    }
    .awr-col-xl-1,
    .awr-col-xl-2 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-xl-2 {
        width: 16.66667%
    }
    .awr-col-xl-3 {
        width: 25%
    }
    .awr-col-xl-3,
    .awr-col-xl-4 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-xl-4 {
        width: 33.33333%
    }
    .awr-col-xl-5 {
        width: 41.66667%
    }
    .awr-col-xl-5,
    .awr-col-xl-6 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-xl-6 {
        width: 50%
    }
    .awr-col-xl-7 {
        width: 58.33333%
    }
    .awr-col-xl-7,
    .awr-col-xl-8 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-xl-8 {
        width: 66.66667%
    }
    .awr-col-xl-9 {
        width: 75%
    }
    .awr-col-xl-9,
    .awr-col-xl-10 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-xl-10 {
        width: 83.33333%
    }
    .awr-col-xl-11 {
        width: 91.66667%
    }
    .awr-col-xl-11,
    .awr-col-xl-12 {
        float: left;
        padding-right: 12px;
        padding-left: 12px
    }
    .awr-col-xl-12 {
        width: 100%
    }
    .awr-col-offset-xl-0 {
        margin-left: 0
    }
    .awr-col-pull-xl-0 {
        right: 0
    }
    .awr-col-push-xl-0 {
        left: 0
    }
    .awr-col-offset-xl-1 {
        margin-left: 8.33333%
    }
    .awr-col-pull-xl-1 {
        right: 8.33333%
    }
    .awr-col-push-xl-1 {
        left: 8.33333%
    }
    .awr-col-offset-xl-2 {
        margin-left: 16.66667%
    }
    .awr-col-pull-xl-2 {
        right: 16.66667%
    }
    .awr-col-push-xl-2 {
        left: 16.66667%
    }
    .awr-col-offset-xl-3 {
        margin-left: 25%
    }
    .awr-col-pull-xl-3 {
        right: 25%
    }
    .awr-col-push-xl-3 {
        left: 25%
    }
    .awr-col-offset-xl-4 {
        margin-left: 33.33333%
    }
    .awr-col-pull-xl-4 {
        right: 33.33333%
    }
    .awr-col-push-xl-4 {
        left: 33.33333%
    }
    .awr-col-offset-xl-5 {
        margin-left: 41.66667%
    }
    .awr-col-pull-xl-5 {
        right: 41.66667%
    }
    .awr-col-push-xl-5 {
        left: 41.66667%
    }
    .awr-col-offset-xl-6 {
        margin-left: 50%
    }
    .awr-col-pull-xl-6 {
        right: 50%
    }
    .awr-col-push-xl-6 {
        left: 50%
    }
    .awr-col-offset-xl-7 {
        margin-left: 58.33333%
    }
    .awr-col-pull-xl-7 {
        right: 58.33333%
    }
    .awr-col-push-xl-7 {
        left: 58.33333%
    }
    .awr-col-offset-xl-8 {
        margin-left: 66.66667%
    }
    .awr-col-pull-xl-8 {
        right: 66.66667%
    }
    .awr-col-push-xl-8 {
        left: 66.66667%
    }
    .awr-col-offset-xl-9 {
        margin-left: 75%
    }
    .awr-col-pull-xl-9 {
        right: 75%
    }
    .awr-col-push-xl-9 {
        left: 75%
    }
    .awr-col-offset-xl-10 {
        margin-left: 83.33333%
    }
    .awr-col-pull-xl-10 {
        right: 83.33333%
    }
    .awr-col-push-xl-10 {
        left: 83.33333%
    }
    .awr-col-offset-xl-11 {
        margin-left: 91.66667%
    }
    .awr-col-pull-xl-11 {
        right: 91.66667%
    }
    .awr-col-push-xl-11 {
        left: 91.66667%
    }
    .awr-col-offset-xl-12 {
        margin-left: 100%
    }
    .awr-col-pull-xl-12 {
        right: 100%
    }
    .awr-col-push-xl-12 {
        left: 100%
    }
}

@media screen and (max-width:575.98px) {
    .awr-container {
        padding-right: 16px;
        padding-left: 16px
    }
}

.awr-hidden-xs-up {
    display: none!important
}

@media (max-width:575.98px) {
    .awr-hidden-xs-down,
    .awr-hidden-xs-only {
        display: none!important
    }
}

@media (min-width:576px) {
    .awr-hidden-sm-up {
        display: none!important
    }
}

@media (max-width:767.98px) {
    .awr-hidden-sm-down {
        display: none!important
    }
}

@media (min-width:576px) and (max-width:767.98px) {
    .awr-hidden-sm-only {
        display: none!important
    }
}

@media (min-width:768px) {
    .awr-hidden-md-up {
        display: none!important
    }
}

@media (max-width:991.98px) {
    .awr-hidden-md-down {
        display: none!important
    }
}

@media (min-width:768px) and (max-width:991.98px) {
    .awr-hidden-md-only {
        display: none!important
    }
}

@media (min-width:992px) {
    .awr-hidden-lg-up {
        display: none!important
    }
}

@media (max-width:1199.98px) {
    .awr-hidden-lg-down {
        display: none!important
    }
}

@media (min-width:992px) and (max-width:1199.98px) {
    .awr-hidden-lg-only {
        display: none!important
    }
}

@media (min-width:1200px) {
    .awr-hidden-xl-up {
        display: none!important
    }
}

.awr-hidden-xl-down {
    display: none!important
}

@media (min-width:1200px) {
    .awr-hidden-xl-only {
        display: none!important
    }
}

[dir=rtl] .awr-col-1,
[dir=rtl] .awr-col-2,
[dir=rtl] .awr-col-3,
[dir=rtl] .awr-col-4,
[dir=rtl] .awr-col-5,
[dir=rtl] .awr-col-6,
[dir=rtl] .awr-col-7,
[dir=rtl] .awr-col-8,
[dir=rtl] .awr-col-9,
[dir=rtl] .awr-col-10,
[dir=rtl] .awr-col-11,
[dir=rtl] .awr-col-12 {
    float: right
}

[dir=rtl] .awr-col-offset-0 {
    margin-right: 0;
    margin-left: 0
}

[dir=rtl] .awr-col-pull-0 {
    left: 0;
    right: auto
}

[dir=rtl] .awr-col-push-0 {
    right: 0;
    left: auto
}

[dir=rtl] .awr-col-offset-1 {
    margin-right: 8.33333%;
    margin-left: 0
}

[dir=rtl] .awr-col-pull-1 {
    left: 8.33333%;
    right: auto
}

[dir=rtl] .awr-col-push-1 {
    right: 8.33333%;
    left: auto
}

[dir=rtl] .awr-col-offset-2 {
    margin-right: 16.66667%;
    margin-left: 0
}

[dir=rtl] .awr-col-pull-2 {
    left: 16.66667%;
    right: auto
}

[dir=rtl] .awr-col-push-2 {
    right: 16.66667%;
    left: auto
}

[dir=rtl] .awr-col-offset-3 {
    margin-right: 25%;
    margin-left: 0
}

[dir=rtl] .awr-col-pull-3 {
    left: 25%;
    right: auto
}

[dir=rtl] .awr-col-push-3 {
    right: 25%;
    left: auto
}

[dir=rtl] .awr-col-offset-4 {
    margin-right: 33.33333%;
    margin-left: 0
}

[dir=rtl] .awr-col-pull-4 {
    left: 33.33333%;
    right: auto
}

[dir=rtl] .awr-col-push-4 {
    right: 33.33333%;
    left: auto
}

[dir=rtl] .awr-col-offset-5 {
    margin-right: 41.66667%;
    margin-left: 0
}

[dir=rtl] .awr-col-pull-5 {
    left: 41.66667%;
    right: auto
}

[dir=rtl] .awr-col-push-5 {
    right: 41.66667%;
    left: auto
}

[dir=rtl] .awr-col-offset-6 {
    margin-right: 50%;
    margin-left: 0
}

[dir=rtl] .awr-col-pull-6 {
    left: 50%;
    right: auto
}

[dir=rtl] .awr-col-push-6 {
    right: 50%;
    left: auto
}

[dir=rtl] .awr-col-offset-7 {
    margin-right: 58.33333%;
    margin-left: 0
}

[dir=rtl] .awr-col-pull-7 {
    left: 58.33333%;
    right: auto
}

[dir=rtl] .awr-col-push-7 {
    right: 58.33333%;
    left: auto
}

[dir=rtl] .awr-col-offset-8 {
    margin-right: 66.66667%;
    margin-left: 0
}

[dir=rtl] .awr-col-pull-8 {
    left: 66.66667%;
    right: auto
}

[dir=rtl] .awr-col-push-8 {
    right: 66.66667%;
    left: auto
}

[dir=rtl] .awr-col-offset-9 {
    margin-right: 75%;
    margin-left: 0
}

[dir=rtl] .awr-col-pull-9 {
    left: 75%;
    right: auto
}

[dir=rtl] .awr-col-push-9 {
    right: 75%;
    left: auto
}

[dir=rtl] .awr-col-offset-10 {
    margin-right: 83.33333%;
    margin-left: 0
}

[dir=rtl] .awr-col-pull-10 {
    left: 83.33333%;
    right: auto
}

[dir=rtl] .awr-col-push-10 {
    right: 83.33333%;
    left: auto
}

[dir=rtl] .awr-col-offset-11 {
    margin-right: 91.66667%;
    margin-left: 0
}

[dir=rtl] .awr-col-pull-11 {
    left: 91.66667%;
    right: auto
}

[dir=rtl] .awr-col-push-11 {
    right: 91.66667%;
    left: auto
}

[dir=rtl] .awr-col-offset-12 {
    margin-right: 100%;
    margin-left: 0
}

[dir=rtl] .awr-col-pull-12 {
    left: 100%;
    right: auto
}

[dir=rtl] .awr-col-push-12 {
    right: 100%;
    left: auto
}

@media screen and (min-width:576px) {
    [dir=rtl] .awr-col-sm-1,
    [dir=rtl] .awr-col-sm-2,
    [dir=rtl] .awr-col-sm-3,
    [dir=rtl] .awr-col-sm-4,
    [dir=rtl] .awr-col-sm-5,
    [dir=rtl] .awr-col-sm-6,
    [dir=rtl] .awr-col-sm-7,
    [dir=rtl] .awr-col-sm-8,
    [dir=rtl] .awr-col-sm-9,
    [dir=rtl] .awr-col-sm-10,
    [dir=rtl] .awr-col-sm-11,
    [dir=rtl] .awr-col-sm-12 {
        float: right
    }
    [dir=rtl] .awr-col-offset-sm-0 {
        margin-right: 0;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-sm-0 {
        left: 0;
        right: auto
    }
    [dir=rtl] .awr-col-push-sm-0 {
        right: 0;
        left: auto
    }
    [dir=rtl] .awr-col-offset-sm-1 {
        margin-right: 8.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-sm-1 {
        left: 8.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-sm-1 {
        right: 8.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-sm-2 {
        margin-right: 16.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-sm-2 {
        left: 16.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-sm-2 {
        right: 16.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-sm-3 {
        margin-right: 25%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-sm-3 {
        left: 25%;
        right: auto
    }
    [dir=rtl] .awr-col-push-sm-3 {
        right: 25%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-sm-4 {
        margin-right: 33.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-sm-4 {
        left: 33.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-sm-4 {
        right: 33.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-sm-5 {
        margin-right: 41.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-sm-5 {
        left: 41.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-sm-5 {
        right: 41.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-sm-6 {
        margin-right: 50%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-sm-6 {
        left: 50%;
        right: auto
    }
    [dir=rtl] .awr-col-push-sm-6 {
        right: 50%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-sm-7 {
        margin-right: 58.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-sm-7 {
        left: 58.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-sm-7 {
        right: 58.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-sm-8 {
        margin-right: 66.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-sm-8 {
        left: 66.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-sm-8 {
        right: 66.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-sm-9 {
        margin-right: 75%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-sm-9 {
        left: 75%;
        right: auto
    }
    [dir=rtl] .awr-col-push-sm-9 {
        right: 75%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-sm-10 {
        margin-right: 83.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-sm-10 {
        left: 83.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-sm-10 {
        right: 83.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-sm-11 {
        margin-right: 91.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-sm-11 {
        left: 91.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-sm-11 {
        right: 91.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-sm-12 {
        margin-right: 100%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-sm-12 {
        left: 100%;
        right: auto
    }
    [dir=rtl] .awr-col-push-sm-12 {
        right: 100%;
        left: auto
    }
}

@media screen and (min-width:768px) {
    [dir=rtl] .awr-col-md-1,
    [dir=rtl] .awr-col-md-2,
    [dir=rtl] .awr-col-md-3,
    [dir=rtl] .awr-col-md-4,
    [dir=rtl] .awr-col-md-5,
    [dir=rtl] .awr-col-md-6,
    [dir=rtl] .awr-col-md-7,
    [dir=rtl] .awr-col-md-8,
    [dir=rtl] .awr-col-md-9,
    [dir=rtl] .awr-col-md-10,
    [dir=rtl] .awr-col-md-11,
    [dir=rtl] .awr-col-md-12 {
        float: right
    }
    [dir=rtl] .awr-col-offset-md-0 {
        margin-right: 0;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-md-0 {
        left: 0;
        right: auto
    }
    [dir=rtl] .awr-col-push-md-0 {
        right: 0;
        left: auto
    }
    [dir=rtl] .awr-col-offset-md-1 {
        margin-right: 8.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-md-1 {
        left: 8.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-md-1 {
        right: 8.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-md-2 {
        margin-right: 16.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-md-2 {
        left: 16.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-md-2 {
        right: 16.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-md-3 {
        margin-right: 25%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-md-3 {
        left: 25%;
        right: auto
    }
    [dir=rtl] .awr-col-push-md-3 {
        right: 25%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-md-4 {
        margin-right: 33.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-md-4 {
        left: 33.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-md-4 {
        right: 33.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-md-5 {
        margin-right: 41.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-md-5 {
        left: 41.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-md-5 {
        right: 41.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-md-6 {
        margin-right: 50%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-md-6 {
        left: 50%;
        right: auto
    }
    [dir=rtl] .awr-col-push-md-6 {
        right: 50%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-md-7 {
        margin-right: 58.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-md-7 {
        left: 58.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-md-7 {
        right: 58.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-md-8 {
        margin-right: 66.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-md-8 {
        left: 66.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-md-8 {
        right: 66.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-md-9 {
        margin-right: 75%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-md-9 {
        left: 75%;
        right: auto
    }
    [dir=rtl] .awr-col-push-md-9 {
        right: 75%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-md-10 {
        margin-right: 83.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-md-10 {
        left: 83.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-md-10 {
        right: 83.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-md-11 {
        margin-right: 91.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-md-11 {
        left: 91.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-md-11 {
        right: 91.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-md-12 {
        margin-right: 100%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-md-12 {
        left: 100%;
        right: auto
    }
    [dir=rtl] .awr-col-push-md-12 {
        right: 100%;
        left: auto
    }
}

@media screen and (min-width:992px) {
    [dir=rtl] .awr-col-lg-1,
    [dir=rtl] .awr-col-lg-2,
    [dir=rtl] .awr-col-lg-3,
    [dir=rtl] .awr-col-lg-4,
    [dir=rtl] .awr-col-lg-5,
    [dir=rtl] .awr-col-lg-6,
    [dir=rtl] .awr-col-lg-7,
    [dir=rtl] .awr-col-lg-8,
    [dir=rtl] .awr-col-lg-9,
    [dir=rtl] .awr-col-lg-10,
    [dir=rtl] .awr-col-lg-11,
    [dir=rtl] .awr-col-lg-12 {
        float: right
    }
    [dir=rtl] .awr-col-offset-lg-0 {
        margin-right: 0;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-lg-0 {
        left: 0;
        right: auto
    }
    [dir=rtl] .awr-col-push-lg-0 {
        right: 0;
        left: auto
    }
    [dir=rtl] .awr-col-offset-lg-1 {
        margin-right: 8.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-lg-1 {
        left: 8.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-lg-1 {
        right: 8.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-lg-2 {
        margin-right: 16.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-lg-2 {
        left: 16.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-lg-2 {
        right: 16.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-lg-3 {
        margin-right: 25%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-lg-3 {
        left: 25%;
        right: auto
    }
    [dir=rtl] .awr-col-push-lg-3 {
        right: 25%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-lg-4 {
        margin-right: 33.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-lg-4 {
        left: 33.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-lg-4 {
        right: 33.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-lg-5 {
        margin-right: 41.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-lg-5 {
        left: 41.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-lg-5 {
        right: 41.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-lg-6 {
        margin-right: 50%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-lg-6 {
        left: 50%;
        right: auto
    }
    [dir=rtl] .awr-col-push-lg-6 {
        right: 50%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-lg-7 {
        margin-right: 58.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-lg-7 {
        left: 58.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-lg-7 {
        right: 58.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-lg-8 {
        margin-right: 66.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-lg-8 {
        left: 66.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-lg-8 {
        right: 66.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-lg-9 {
        margin-right: 75%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-lg-9 {
        left: 75%;
        right: auto
    }
    [dir=rtl] .awr-col-push-lg-9 {
        right: 75%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-lg-10 {
        margin-right: 83.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-lg-10 {
        left: 83.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-lg-10 {
        right: 83.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-lg-11 {
        margin-right: 91.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-lg-11 {
        left: 91.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-lg-11 {
        right: 91.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-lg-12 {
        margin-right: 100%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-lg-12 {
        left: 100%;
        right: auto
    }
    [dir=rtl] .awr-col-push-lg-12 {
        right: 100%;
        left: auto
    }
}

@media screen and (min-width:1200px) {
    [dir=rtl] .awr-col-xl-1,
    [dir=rtl] .awr-col-xl-2,
    [dir=rtl] .awr-col-xl-3,
    [dir=rtl] .awr-col-xl-4,
    [dir=rtl] .awr-col-xl-5,
    [dir=rtl] .awr-col-xl-6,
    [dir=rtl] .awr-col-xl-7,
    [dir=rtl] .awr-col-xl-8,
    [dir=rtl] .awr-col-xl-9,
    [dir=rtl] .awr-col-xl-10,
    [dir=rtl] .awr-col-xl-11,
    [dir=rtl] .awr-col-xl-12 {
        float: right
    }
    [dir=rtl] .awr-col-offset-xl-0 {
        margin-right: 0;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-xl-0 {
        left: 0;
        right: auto
    }
    [dir=rtl] .awr-col-push-xl-0 {
        right: 0;
        left: auto
    }
    [dir=rtl] .awr-col-offset-xl-1 {
        margin-right: 8.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-xl-1 {
        left: 8.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-xl-1 {
        right: 8.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-xl-2 {
        margin-right: 16.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-xl-2 {
        left: 16.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-xl-2 {
        right: 16.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-xl-3 {
        margin-right: 25%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-xl-3 {
        left: 25%;
        right: auto
    }
    [dir=rtl] .awr-col-push-xl-3 {
        right: 25%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-xl-4 {
        margin-right: 33.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-xl-4 {
        left: 33.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-xl-4 {
        right: 33.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-xl-5 {
        margin-right: 41.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-xl-5 {
        left: 41.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-xl-5 {
        right: 41.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-xl-6 {
        margin-right: 50%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-xl-6 {
        left: 50%;
        right: auto
    }
    [dir=rtl] .awr-col-push-xl-6 {
        right: 50%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-xl-7 {
        margin-right: 58.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-xl-7 {
        left: 58.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-xl-7 {
        right: 58.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-xl-8 {
        margin-right: 66.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-xl-8 {
        left: 66.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-xl-8 {
        right: 66.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-xl-9 {
        margin-right: 75%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-xl-9 {
        left: 75%;
        right: auto
    }
    [dir=rtl] .awr-col-push-xl-9 {
        right: 75%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-xl-10 {
        margin-right: 83.33333%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-xl-10 {
        left: 83.33333%;
        right: auto
    }
    [dir=rtl] .awr-col-push-xl-10 {
        right: 83.33333%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-xl-11 {
        margin-right: 91.66667%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-xl-11 {
        left: 91.66667%;
        right: auto
    }
    [dir=rtl] .awr-col-push-xl-11 {
        right: 91.66667%;
        left: auto
    }
    [dir=rtl] .awr-col-offset-xl-12 {
        margin-right: 100%;
        margin-left: 0
    }
    [dir=rtl] .awr-col-pull-xl-12 {
        left: 100%;
        right: auto
    }
    [dir=rtl] .awr-col-push-xl-12 {
        right: 100%;
        left: auto
    }
}

.awr-grid-layout-style1 {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "sb1 h h h" "sb1 m m m" "sb1 f f f "
}

.awr-grid-layout-style1,
.awr-grid-layout-style2 {
    display: grid;
    grid-template-rows: 100px 75vh 100px
}

.awr-grid-layout-style2 {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: "h h h h h" "sb1 m m m sb2" "f f f f f"
}

.awr-grid-layout-style3 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "h h h h" "m m sb2 sb2" "f f f f";
    grid-template-rows: 100px 75vh 100px
}

.awr-item {
    text-align: center;
    padding: 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)
}

.awr-header {
    grid-area: h
}

.awr-sidebar-1 {
    grid-area: sb1;
    display: grid;
    flex-direction: column;
    justify-content: space-between;
    align-items: start
}

.awr-main {
    grid-area: m
}

.awr-sidebar-2 {
    grid-area: sb2
}

.awr-footer {
    grid-area: f
}

.awr-grid-nested-col1 {
    display: grid;
    grid-template-columns: 8fr 4fr;
    grid-gap: 0
}

.awr-grid-nested-col2 {
    display: grid;
    grid-template-columns: 4fr 8fr;
    grid-gap: 0
}

.awr-grid-nested-item {
    text-align: center;
    background-color: rgba(232, 0, 101, .2);
    border: 1px dashed rgba(20, 20, 20, .2)
}

.awr-grid-align-item-center {
    align-items: center
}

.awr-grid-align-item-center,
.awr-grid-align-item-start {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 180px
}

.awr-grid-align-item-start {
    align-items: start
}

.awr-grid-align-item-end {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 180px;
    align-items: end
}

.awr-grid-justify-content-start {
    justify-content: start;
    align-content: start;
    width: 100%
}

.awr-grid-justify-content-center {
    justify-content: center
}

.awr-grid-justify-content-center,
.awr-grid-justify-content-end {
    display: grid;
    grid-template-columns: 33.3% 33.3%;
    grid-gap: 0;
    padding: 30px
}

.awr-grid-justify-content-end {
    justify-content: end
}

.awr-grid-justify-content-around {
    display: grid;
    justify-content: space-around;
    grid-template-columns: 33.3% 33.3%;
    grid-gap: 0;
    padding: 30px
}

.awr-grid-justify-content-between {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 33.3%;
    grid-gap: 0;
    padding: 30px
}

.awr-grid-align-start {
    justify-content: start
}

.awr-grid-align-center,
.awr-grid-align-start {
    display: grid;
    grid-template-columns: 33.3%;
    grid-gap: 0;
    padding: 0
}

.awr-grid-align-center {
    justify-content: center
}

.awr-grid-align-end {
    display: grid;
    justify-content: end;
    grid-template-columns: 33.3%;
    grid-gap: 0;
    padding: 0
}

.awr-m-0 {
    margin: 0
}

.awr-mt-0,
.awr-my-0 {
    margin-top: 0
}

.awr-mr-0,
.awr-mx-0 {
    margin-right: 0
}

.awr-mb-0,
.awr-my-0 {
    margin-bottom: 0
}

.awr-ml-0,
.awr-mx-0 {
    margin-left: 0
}

.awr-m-1 {
    margin: .25rem
}

.awr-mt-1,
.awr-my-1 {
    margin-top: .25rem
}

.awr-mr-1,
.awr-mx-1 {
    margin-right: .25rem
}

.awr-mb-1,
.awr-my-1 {
    margin-bottom: .25rem
}

.awr-ml-1,
.awr-mx-1 {
    margin-left: .25rem
}

.awr-m-2 {
    margin: .5rem
}

.awr-mt-2,
.awr-my-2 {
    margin-top: .5rem
}

.awr-mr-2,
.awr-mx-2 {
    margin-right: .5rem
}

.awr-mb-2,
.awr-my-2 {
    margin-bottom: .5rem
}

.awr-ml-2,
.awr-mx-2 {
    margin-left: .5rem
}

.awr-m-3 {
    margin: .75rem
}

.awr-mt-3,
.awr-my-3 {
    margin-top: .75rem
}

.awr-mr-3,
.awr-mx-3 {
    margin-right: .75rem
}

.awr-mb-3,
.awr-my-3 {
    margin-bottom: .75rem
}

.awr-ml-3,
.awr-mx-3 {
    margin-left: .75rem
}

.awr-m-4 {
    margin: 1rem
}

.awr-mt-4,
.awr-my-4 {
    margin-top: 1rem
}

.awr-mr-4,
.awr-mx-4 {
    margin-right: 1rem
}

.awr-mb-4,
.awr-my-4 {
    margin-bottom: 1rem
}

.awr-ml-4,
.awr-mx-4 {
    margin-left: 1rem
}

.awr-m-5 {
    margin: 1.25rem
}

.awr-mt-5,
.awr-my-5 {
    margin-top: 1.25rem
}

.awr-mr-5,
.awr-mx-5 {
    margin-right: 1.25rem
}

.awr-mb-5,
.awr-my-5 {
    margin-bottom: 1.25rem
}

.awr-ml-5,
.awr-mx-5 {
    margin-left: 1.25rem
}

.awr-m-6 {
    margin: 1.5rem
}

.awr-mt-6,
.awr-my-6 {
    margin-top: 1.5rem
}

.awr-mr-6,
.awr-mx-6 {
    margin-right: 1.5rem
}

.awr-mb-6,
.awr-my-6 {
    margin-bottom: 1.5rem
}

.awr-ml-6,
.awr-mx-6 {
    margin-left: 1.5rem
}

.awr-m-7 {
    margin: 2rem
}

.awr-mt-7,
.awr-my-7 {
    margin-top: 2rem
}

.awr-mr-7,
.awr-mx-7 {
    margin-right: 2rem
}

.awr-mb-7,
.awr-my-7 {
    margin-bottom: 2rem
}

.awr-ml-7,
.awr-mx-7 {
    margin-left: 2rem
}

.awr-m-8 {
    margin: 3rem
}

.awr-mt-8,
.awr-my-8 {
    margin-top: 3rem
}

.awr-mr-8,
.awr-mx-8 {
    margin-right: 3rem
}

.awr-mb-8,
.awr-my-8 {
    margin-bottom: 3rem
}

.awr-ml-8,
.awr-mx-8 {
    margin-left: 3rem
}

.awr-m-9 {
    margin: 4rem
}

.awr-mt-9,
.awr-my-9 {
    margin-top: 4rem
}

.awr-mr-9,
.awr-mx-9 {
    margin-right: 4rem
}

.awr-mb-9,
.awr-my-9 {
    margin-bottom: 4rem
}

.awr-ml-9,
.awr-mx-9 {
    margin-left: 4rem
}

.awr-p-0 {
    padding: 0
}

.awr-pt-0,
.awr-py-0 {
    padding-top: 0
}

.awr-pr-0,
.awr-px-0 {
    padding-right: 0
}

.awr-pb-0,
.awr-py-0 {
    padding-bottom: 0
}

.awr-pl-0,
.awr-px-0 {
    padding-left: 0
}

.awr-p-1 {
    padding: .25rem
}

.awr-pt-1,
.awr-py-1 {
    padding-top: .25rem
}

.awr-pr-1,
.awr-px-1 {
    padding-right: .25rem
}

.awr-pb-1,
.awr-py-1 {
    padding-bottom: .25rem
}

.awr-pl-1,
.awr-px-1 {
    padding-left: .25rem
}

.awr-p-2 {
    padding: .5rem
}

.awr-pt-2,
.awr-py-2 {
    padding-top: .5rem
}

.awr-pr-2,
.awr-px-2 {
    padding-right: .5rem
}

.awr-pb-2,
.awr-py-2 {
    padding-bottom: .5rem
}

.awr-pl-2,
.awr-px-2 {
    padding-left: .5rem
}

.awr-p-3 {
    padding: .75rem
}

.awr-pt-3,
.awr-py-3 {
    padding-top: .75rem
}

.awr-pr-3,
.awr-px-3 {
    padding-right: .75rem
}

.awr-pb-3,
.awr-py-3 {
    padding-bottom: .75rem
}

.awr-pl-3,
.awr-px-3 {
    padding-left: .75rem
}

.awr-p-4 {
    padding: 1rem
}

.awr-pt-4,
.awr-py-4 {
    padding-top: 1rem
}

.awr-pr-4,
.awr-px-4 {
    padding-right: 1rem
}

.awr-pb-4,
.awr-py-4 {
    padding-bottom: 1rem
}

.awr-pl-4,
.awr-px-4 {
    padding-left: 1rem
}

.awr-p-5 {
    padding: 1.25rem
}

.awr-pt-5,
.awr-py-5 {
    padding-top: 1.25rem
}

.awr-pr-5,
.awr-px-5 {
    padding-right: 1.25rem
}

.awr-pb-5,
.awr-py-5 {
    padding-bottom: 1.25rem
}

.awr-pl-5,
.awr-px-5 {
    padding-left: 1.25rem
}

.awr-p-6 {
    padding: 1.5rem
}

.awr-pt-6,
.awr-py-6 {
    padding-top: 1.5rem
}

.awr-pr-6,
.awr-px-6 {
    padding-right: 1.5rem
}

.awr-pb-6,
.awr-py-6 {
    padding-bottom: 1.5rem
}

.awr-pl-6,
.awr-px-6 {
    padding-left: 1.5rem
}

.awr-p-7 {
    padding: 2rem
}

.awr-pt-7,
.awr-py-7 {
    padding-top: 2rem
}

.awr-pr-7,
.awr-px-7 {
    padding-right: 2rem
}

.awr-pb-7,
.awr-py-7 {
    padding-bottom: 2rem
}

.awr-pl-7,
.awr-px-7 {
    padding-left: 2rem
}

.awr-p-8 {
    padding: 3rem
}

.awr-pt-8,
.awr-py-8 {
    padding-top: 3rem
}

.awr-pr-8,
.awr-px-8 {
    padding-right: 3rem
}

.awr-pb-8,
.awr-py-8 {
    padding-bottom: 3rem
}

.awr-pl-8,
.awr-px-8 {
    padding-left: 3rem
}

.awr-p-9 {
    padding: 4rem
}

.awr-pt-9,
.awr-py-9 {
    padding-top: 4rem
}

.awr-pr-9,
.awr-px-9 {
    padding-right: 4rem
}

.awr-pb-9,
.awr-py-9 {
    padding-bottom: 4rem
}

.awr-pl-9,
.awr-px-9 {
    padding-left: 4rem
}

@media (min-width:576px) {
    .awr-m-sm-0 {
        margin: 0
    }
    .awr-mt-sm-0,
    .awr-my-sm-0 {
        margin-top: 0
    }
    .awr-mr-sm-0,
    .awr-mx-sm-0 {
        margin-right: 0
    }
    .awr-mb-sm-0,
    .awr-my-sm-0 {
        margin-bottom: 0
    }
    .awr-ml-sm-0,
    .awr-mx-sm-0 {
        margin-left: 0
    }
    .awr-m-sm-1 {
        margin: .25rem
    }
    .awr-mt-sm-1,
    .awr-my-sm-1 {
        margin-top: .25rem
    }
    .awr-mr-sm-1,
    .awr-mx-sm-1 {
        margin-right: .25rem
    }
    .awr-mb-sm-1,
    .awr-my-sm-1 {
        margin-bottom: .25rem
    }
    .awr-ml-sm-1,
    .awr-mx-sm-1 {
        margin-left: .25rem
    }
    .awr-m-sm-2 {
        margin: .5rem
    }
    .awr-mt-sm-2,
    .awr-my-sm-2 {
        margin-top: .5rem
    }
    .awr-mr-sm-2,
    .awr-mx-sm-2 {
        margin-right: .5rem
    }
    .awr-mb-sm-2,
    .awr-my-sm-2 {
        margin-bottom: .5rem
    }
    .awr-ml-sm-2,
    .awr-mx-sm-2 {
        margin-left: .5rem
    }
    .awr-m-sm-3 {
        margin: .75rem
    }
    .awr-mt-sm-3,
    .awr-my-sm-3 {
        margin-top: .75rem
    }
    .awr-mr-sm-3,
    .awr-mx-sm-3 {
        margin-right: .75rem
    }
    .awr-mb-sm-3,
    .awr-my-sm-3 {
        margin-bottom: .75rem
    }
    .awr-ml-sm-3,
    .awr-mx-sm-3 {
        margin-left: .75rem
    }
    .awr-m-sm-4 {
        margin: 1rem
    }
    .awr-mt-sm-4,
    .awr-my-sm-4 {
        margin-top: 1rem
    }
    .awr-mr-sm-4,
    .awr-mx-sm-4 {
        margin-right: 1rem
    }
    .awr-mb-sm-4,
    .awr-my-sm-4 {
        margin-bottom: 1rem
    }
    .awr-ml-sm-4,
    .awr-mx-sm-4 {
        margin-left: 1rem
    }
    .awr-m-sm-5 {
        margin: 1.25rem
    }
    .awr-mt-sm-5,
    .awr-my-sm-5 {
        margin-top: 1.25rem
    }
    .awr-mr-sm-5,
    .awr-mx-sm-5 {
        margin-right: 1.25rem
    }
    .awr-mb-sm-5,
    .awr-my-sm-5 {
        margin-bottom: 1.25rem
    }
    .awr-ml-sm-5,
    .awr-mx-sm-5 {
        margin-left: 1.25rem
    }
    .awr-m-sm-6 {
        margin: 1.5rem
    }
    .awr-mt-sm-6,
    .awr-my-sm-6 {
        margin-top: 1.5rem
    }
    .awr-mr-sm-6,
    .awr-mx-sm-6 {
        margin-right: 1.5rem
    }
    .awr-mb-sm-6,
    .awr-my-sm-6 {
        margin-bottom: 1.5rem
    }
    .awr-ml-sm-6,
    .awr-mx-sm-6 {
        margin-left: 1.5rem
    }
    .awr-m-sm-7 {
        margin: 2rem
    }
    .awr-mt-sm-7,
    .awr-my-sm-7 {
        margin-top: 2rem
    }
    .awr-mr-sm-7,
    .awr-mx-sm-7 {
        margin-right: 2rem
    }
    .awr-mb-sm-7,
    .awr-my-sm-7 {
        margin-bottom: 2rem
    }
    .awr-ml-sm-7,
    .awr-mx-sm-7 {
        margin-left: 2rem
    }
    .awr-m-sm-8 {
        margin: 3rem
    }
    .awr-mt-sm-8,
    .awr-my-sm-8 {
        margin-top: 3rem
    }
    .awr-mr-sm-8,
    .awr-mx-sm-8 {
        margin-right: 3rem
    }
    .awr-mb-sm-8,
    .awr-my-sm-8 {
        margin-bottom: 3rem
    }
    .awr-ml-sm-8,
    .awr-mx-sm-8 {
        margin-left: 3rem
    }
    .awr-m-sm-9 {
        margin: 4rem
    }
    .awr-mt-sm-9,
    .awr-my-sm-9 {
        margin-top: 4rem
    }
    .awr-mr-sm-9,
    .awr-mx-sm-9 {
        margin-right: 4rem
    }
    .awr-mb-sm-9,
    .awr-my-sm-9 {
        margin-bottom: 4rem
    }
    .awr-ml-sm-9,
    .awr-mx-sm-9 {
        margin-left: 4rem
    }
    .awr-p-sm-0 {
        padding: 0
    }
    .awr-pt-sm-0,
    .awr-py-sm-0 {
        padding-top: 0
    }
    .awr-pr-sm-0,
    .awr-px-sm-0 {
        padding-right: 0
    }
    .awr-pb-sm-0,
    .awr-py-sm-0 {
        padding-bottom: 0
    }
    .awr-pl-sm-0,
    .awr-px-sm-0 {
        padding-left: 0
    }
    .awr-p-sm-1 {
        padding: .25rem
    }
    .awr-pt-sm-1,
    .awr-py-sm-1 {
        padding-top: .25rem
    }
    .awr-pr-sm-1,
    .awr-px-sm-1 {
        padding-right: .25rem
    }
    .awr-pb-sm-1,
    .awr-py-sm-1 {
        padding-bottom: .25rem
    }
    .awr-pl-sm-1,
    .awr-px-sm-1 {
        padding-left: .25rem
    }
    .awr-p-sm-2 {
        padding: .5rem
    }
    .awr-pt-sm-2,
    .awr-py-sm-2 {
        padding-top: .5rem
    }
    .awr-pr-sm-2,
    .awr-px-sm-2 {
        padding-right: .5rem
    }
    .awr-pb-sm-2,
    .awr-py-sm-2 {
        padding-bottom: .5rem
    }
    .awr-pl-sm-2,
    .awr-px-sm-2 {
        padding-left: .5rem
    }
    .awr-p-sm-3 {
        padding: .75rem
    }
    .awr-pt-sm-3,
    .awr-py-sm-3 {
        padding-top: .75rem
    }
    .awr-pr-sm-3,
    .awr-px-sm-3 {
        padding-right: .75rem
    }
    .awr-pb-sm-3,
    .awr-py-sm-3 {
        padding-bottom: .75rem
    }
    .awr-pl-sm-3,
    .awr-px-sm-3 {
        padding-left: .75rem
    }
    .awr-p-sm-4 {
        padding: 1rem
    }
    .awr-pt-sm-4,
    .awr-py-sm-4 {
        padding-top: 1rem
    }
    .awr-pr-sm-4,
    .awr-px-sm-4 {
        padding-right: 1rem
    }
    .awr-pb-sm-4,
    .awr-py-sm-4 {
        padding-bottom: 1rem
    }
    .awr-pl-sm-4,
    .awr-px-sm-4 {
        padding-left: 1rem
    }
    .awr-p-sm-5 {
        padding: 1.25rem
    }
    .awr-pt-sm-5,
    .awr-py-sm-5 {
        padding-top: 1.25rem
    }
    .awr-pr-sm-5,
    .awr-px-sm-5 {
        padding-right: 1.25rem
    }
    .awr-pb-sm-5,
    .awr-py-sm-5 {
        padding-bottom: 1.25rem
    }
    .awr-pl-sm-5,
    .awr-px-sm-5 {
        padding-left: 1.25rem
    }
    .awr-p-sm-6 {
        padding: 1.5rem
    }
    .awr-pt-sm-6,
    .awr-py-sm-6 {
        padding-top: 1.5rem
    }
    .awr-pr-sm-6,
    .awr-px-sm-6 {
        padding-right: 1.5rem
    }
    .awr-pb-sm-6,
    .awr-py-sm-6 {
        padding-bottom: 1.5rem
    }
    .awr-pl-sm-6,
    .awr-px-sm-6 {
        padding-left: 1.5rem
    }
    .awr-p-sm-7 {
        padding: 2rem
    }
    .awr-pt-sm-7,
    .awr-py-sm-7 {
        padding-top: 2rem
    }
    .awr-pr-sm-7,
    .awr-px-sm-7 {
        padding-right: 2rem
    }
    .awr-pb-sm-7,
    .awr-py-sm-7 {
        padding-bottom: 2rem
    }
    .awr-pl-sm-7,
    .awr-px-sm-7 {
        padding-left: 2rem
    }
    .awr-p-sm-8 {
        padding: 3rem
    }
    .awr-pt-sm-8,
    .awr-py-sm-8 {
        padding-top: 3rem
    }
    .awr-pr-sm-8,
    .awr-px-sm-8 {
        padding-right: 3rem
    }
    .awr-pb-sm-8,
    .awr-py-sm-8 {
        padding-bottom: 3rem
    }
    .awr-pl-sm-8,
    .awr-px-sm-8 {
        padding-left: 3rem
    }
    .awr-p-sm-9 {
        padding: 4rem
    }
    .awr-pt-sm-9,
    .awr-py-sm-9 {
        padding-top: 4rem
    }
    .awr-pr-sm-9,
    .awr-px-sm-9 {
        padding-right: 4rem
    }
    .awr-pb-sm-9,
    .awr-py-sm-9 {
        padding-bottom: 4rem
    }
    .awr-pl-sm-9,
    .awr-px-sm-9 {
        padding-left: 4rem
    }
}

@media (min-width:768px) {
    .awr-m-md-0 {
        margin: 0
    }
    .awr-mt-md-0,
    .awr-my-md-0 {
        margin-top: 0
    }
    .awr-mr-md-0,
    .awr-mx-md-0 {
        margin-right: 0
    }
    .awr-mb-md-0,
    .awr-my-md-0 {
        margin-bottom: 0
    }
    .awr-ml-md-0,
    .awr-mx-md-0 {
        margin-left: 0
    }
    .awr-m-md-1 {
        margin: .25rem
    }
    .awr-mt-md-1,
    .awr-my-md-1 {
        margin-top: .25rem
    }
    .awr-mr-md-1,
    .awr-mx-md-1 {
        margin-right: .25rem
    }
    .awr-mb-md-1,
    .awr-my-md-1 {
        margin-bottom: .25rem
    }
    .awr-ml-md-1,
    .awr-mx-md-1 {
        margin-left: .25rem
    }
    .awr-m-md-2 {
        margin: .5rem
    }
    .awr-mt-md-2,
    .awr-my-md-2 {
        margin-top: .5rem
    }
    .awr-mr-md-2,
    .awr-mx-md-2 {
        margin-right: .5rem
    }
    .awr-mb-md-2,
    .awr-my-md-2 {
        margin-bottom: .5rem
    }
    .awr-ml-md-2,
    .awr-mx-md-2 {
        margin-left: .5rem
    }
    .awr-m-md-3 {
        margin: .75rem
    }
    .awr-mt-md-3,
    .awr-my-md-3 {
        margin-top: .75rem
    }
    .awr-mr-md-3,
    .awr-mx-md-3 {
        margin-right: .75rem
    }
    .awr-mb-md-3,
    .awr-my-md-3 {
        margin-bottom: .75rem
    }
    .awr-ml-md-3,
    .awr-mx-md-3 {
        margin-left: .75rem
    }
    .awr-m-md-4 {
        margin: 1rem
    }
    .awr-mt-md-4,
    .awr-my-md-4 {
        margin-top: 1rem
    }
    .awr-mr-md-4,
    .awr-mx-md-4 {
        margin-right: 1rem
    }
    .awr-mb-md-4,
    .awr-my-md-4 {
        margin-bottom: 1rem
    }
    .awr-ml-md-4,
    .awr-mx-md-4 {
        margin-left: 1rem
    }
    .awr-m-md-5 {
        margin: 1.25rem
    }
    .awr-mt-md-5,
    .awr-my-md-5 {
        margin-top: 1.25rem
    }
    .awr-mr-md-5,
    .awr-mx-md-5 {
        margin-right: 1.25rem
    }
    .awr-mb-md-5,
    .awr-my-md-5 {
        margin-bottom: 1.25rem
    }
    .awr-ml-md-5,
    .awr-mx-md-5 {
        margin-left: 1.25rem
    }
    .awr-m-md-6 {
        margin: 1.5rem
    }
    .awr-mt-md-6,
    .awr-my-md-6 {
        margin-top: 1.5rem
    }
    .awr-mr-md-6,
    .awr-mx-md-6 {
        margin-right: 1.5rem
    }
    .awr-mb-md-6,
    .awr-my-md-6 {
        margin-bottom: 1.5rem
    }
    .awr-ml-md-6,
    .awr-mx-md-6 {
        margin-left: 1.5rem
    }
    .awr-m-md-7 {
        margin: 2rem
    }
    .awr-mt-md-7,
    .awr-my-md-7 {
        margin-top: 2rem
    }
    .awr-mr-md-7,
    .awr-mx-md-7 {
        margin-right: 2rem
    }
    .awr-mb-md-7,
    .awr-my-md-7 {
        margin-bottom: 2rem
    }
    .awr-ml-md-7,
    .awr-mx-md-7 {
        margin-left: 2rem
    }
    .awr-m-md-8 {
        margin: 3rem
    }
    .awr-mt-md-8,
    .awr-my-md-8 {
        margin-top: 3rem
    }
    .awr-mr-md-8,
    .awr-mx-md-8 {
        margin-right: 3rem
    }
    .awr-mb-md-8,
    .awr-my-md-8 {
        margin-bottom: 3rem
    }
    .awr-ml-md-8,
    .awr-mx-md-8 {
        margin-left: 3rem
    }
    .awr-m-md-9 {
        margin: 4rem
    }
    .awr-mt-md-9,
    .awr-my-md-9 {
        margin-top: 4rem
    }
    .awr-mr-md-9,
    .awr-mx-md-9 {
        margin-right: 4rem
    }
    .awr-mb-md-9,
    .awr-my-md-9 {
        margin-bottom: 4rem
    }
    .awr-ml-md-9,
    .awr-mx-md-9 {
        margin-left: 4rem
    }
    .awr-p-md-0 {
        padding: 0
    }
    .awr-pt-md-0,
    .awr-py-md-0 {
        padding-top: 0
    }
    .awr-pr-md-0,
    .awr-px-md-0 {
        padding-right: 0
    }
    .awr-pb-md-0,
    .awr-py-md-0 {
        padding-bottom: 0
    }
    .awr-pl-md-0,
    .awr-px-md-0 {
        padding-left: 0
    }
    .awr-p-md-1 {
        padding: .25rem
    }
    .awr-pt-md-1,
    .awr-py-md-1 {
        padding-top: .25rem
    }
    .awr-pr-md-1,
    .awr-px-md-1 {
        padding-right: .25rem
    }
    .awr-pb-md-1,
    .awr-py-md-1 {
        padding-bottom: .25rem
    }
    .awr-pl-md-1,
    .awr-px-md-1 {
        padding-left: .25rem
    }
    .awr-p-md-2 {
        padding: .5rem
    }
    .awr-pt-md-2,
    .awr-py-md-2 {
        padding-top: .5rem
    }
    .awr-pr-md-2,
    .awr-px-md-2 {
        padding-right: .5rem
    }
    .awr-pb-md-2,
    .awr-py-md-2 {
        padding-bottom: .5rem
    }
    .awr-pl-md-2,
    .awr-px-md-2 {
        padding-left: .5rem
    }
    .awr-p-md-3 {
        padding: .75rem
    }
    .awr-pt-md-3,
    .awr-py-md-3 {
        padding-top: .75rem
    }
    .awr-pr-md-3,
    .awr-px-md-3 {
        padding-right: .75rem
    }
    .awr-pb-md-3,
    .awr-py-md-3 {
        padding-bottom: .75rem
    }
    .awr-pl-md-3,
    .awr-px-md-3 {
        padding-left: .75rem
    }
    .awr-p-md-4 {
        padding: 1rem
    }
    .awr-pt-md-4,
    .awr-py-md-4 {
        padding-top: 1rem
    }
    .awr-pr-md-4,
    .awr-px-md-4 {
        padding-right: 1rem
    }
    .awr-pb-md-4,
    .awr-py-md-4 {
        padding-bottom: 1rem
    }
    .awr-pl-md-4,
    .awr-px-md-4 {
        padding-left: 1rem
    }
    .awr-p-md-5 {
        padding: 1.25rem
    }
    .awr-pt-md-5,
    .awr-py-md-5 {
        padding-top: 1.25rem
    }
    .awr-pr-md-5,
    .awr-px-md-5 {
        padding-right: 1.25rem
    }
    .awr-pb-md-5,
    .awr-py-md-5 {
        padding-bottom: 1.25rem
    }
    .awr-pl-md-5,
    .awr-px-md-5 {
        padding-left: 1.25rem
    }
    .awr-p-md-6 {
        padding: 1.5rem
    }
    .awr-pt-md-6,
    .awr-py-md-6 {
        padding-top: 1.5rem
    }
    .awr-pr-md-6,
    .awr-px-md-6 {
        padding-right: 1.5rem
    }
    .awr-pb-md-6,
    .awr-py-md-6 {
        padding-bottom: 1.5rem
    }
    .awr-pl-md-6,
    .awr-px-md-6 {
        padding-left: 1.5rem
    }
    .awr-p-md-7 {
        padding: 2rem
    }
    .awr-pt-md-7,
    .awr-py-md-7 {
        padding-top: 2rem
    }
    .awr-pr-md-7,
    .awr-px-md-7 {
        padding-right: 2rem
    }
    .awr-pb-md-7,
    .awr-py-md-7 {
        padding-bottom: 2rem
    }
    .awr-pl-md-7,
    .awr-px-md-7 {
        padding-left: 2rem
    }
    .awr-p-md-8 {
        padding: 3rem
    }
    .awr-pt-md-8,
    .awr-py-md-8 {
        padding-top: 3rem
    }
    .awr-pr-md-8,
    .awr-px-md-8 {
        padding-right: 3rem
    }
    .awr-pb-md-8,
    .awr-py-md-8 {
        padding-bottom: 3rem
    }
    .awr-pl-md-8,
    .awr-px-md-8 {
        padding-left: 3rem
    }
    .awr-p-md-9 {
        padding: 4rem
    }
    .awr-pt-md-9,
    .awr-py-md-9 {
        padding-top: 4rem
    }
    .awr-pr-md-9,
    .awr-px-md-9 {
        padding-right: 4rem
    }
    .awr-pb-md-9,
    .awr-py-md-9 {
        padding-bottom: 4rem
    }
    .awr-pl-md-9,
    .awr-px-md-9 {
        padding-left: 4rem
    }
}

@media (min-width:992px) {
    .awr-m-lg-0 {
        margin: 0
    }
    .awr-mt-lg-0,
    .awr-my-lg-0 {
        margin-top: 0
    }
    .awr-mr-lg-0,
    .awr-mx-lg-0 {
        margin-right: 0
    }
    .awr-mb-lg-0,
    .awr-my-lg-0 {
        margin-bottom: 0
    }
    .awr-ml-lg-0,
    .awr-mx-lg-0 {
        margin-left: 0
    }
    .awr-m-lg-1 {
        margin: .25rem
    }
    .awr-mt-lg-1,
    .awr-my-lg-1 {
        margin-top: .25rem
    }
    .awr-mr-lg-1,
    .awr-mx-lg-1 {
        margin-right: .25rem
    }
    .awr-mb-lg-1,
    .awr-my-lg-1 {
        margin-bottom: .25rem
    }
    .awr-ml-lg-1,
    .awr-mx-lg-1 {
        margin-left: .25rem
    }
    .awr-m-lg-2 {
        margin: .5rem
    }
    .awr-mt-lg-2,
    .awr-my-lg-2 {
        margin-top: .5rem
    }
    .awr-mr-lg-2,
    .awr-mx-lg-2 {
        margin-right: .5rem
    }
    .awr-mb-lg-2,
    .awr-my-lg-2 {
        margin-bottom: .5rem
    }
    .awr-ml-lg-2,
    .awr-mx-lg-2 {
        margin-left: .5rem
    }
    .awr-m-lg-3 {
        margin: .75rem
    }
    .awr-mt-lg-3,
    .awr-my-lg-3 {
        margin-top: .75rem
    }
    .awr-mr-lg-3,
    .awr-mx-lg-3 {
        margin-right: .75rem
    }
    .awr-mb-lg-3,
    .awr-my-lg-3 {
        margin-bottom: .75rem
    }
    .awr-ml-lg-3,
    .awr-mx-lg-3 {
        margin-left: .75rem
    }
    .awr-m-lg-4 {
        margin: 1rem
    }
    .awr-mt-lg-4,
    .awr-my-lg-4 {
        margin-top: 1rem
    }
    .awr-mr-lg-4,
    .awr-mx-lg-4 {
        margin-right: 1rem
    }
    .awr-mb-lg-4,
    .awr-my-lg-4 {
        margin-bottom: 1rem
    }
    .awr-ml-lg-4,
    .awr-mx-lg-4 {
        margin-left: 1rem
    }
    .awr-m-lg-5 {
        margin: 1.25rem
    }
    .awr-mt-lg-5,
    .awr-my-lg-5 {
        margin-top: 1.25rem
    }
    .awr-mr-lg-5,
    .awr-mx-lg-5 {
        margin-right: 1.25rem
    }
    .awr-mb-lg-5,
    .awr-my-lg-5 {
        margin-bottom: 1.25rem
    }
    .awr-ml-lg-5,
    .awr-mx-lg-5 {
        margin-left: 1.25rem
    }
    .awr-m-lg-6 {
        margin: 1.5rem
    }
    .awr-mt-lg-6,
    .awr-my-lg-6 {
        margin-top: 1.5rem
    }
    .awr-mr-lg-6,
    .awr-mx-lg-6 {
        margin-right: 1.5rem
    }
    .awr-mb-lg-6,
    .awr-my-lg-6 {
        margin-bottom: 1.5rem
    }
    .awr-ml-lg-6,
    .awr-mx-lg-6 {
        margin-left: 1.5rem
    }
    .awr-m-lg-7 {
        margin: 2rem
    }
    .awr-mt-lg-7,
    .awr-my-lg-7 {
        margin-top: 2rem
    }
    .awr-mr-lg-7,
    .awr-mx-lg-7 {
        margin-right: 2rem
    }
    .awr-mb-lg-7,
    .awr-my-lg-7 {
        margin-bottom: 2rem
    }
    .awr-ml-lg-7,
    .awr-mx-lg-7 {
        margin-left: 2rem
    }
    .awr-m-lg-8 {
        margin: 3rem
    }
    .awr-mt-lg-8,
    .awr-my-lg-8 {
        margin-top: 3rem
    }
    .awr-mr-lg-8,
    .awr-mx-lg-8 {
        margin-right: 3rem
    }
    .awr-mb-lg-8,
    .awr-my-lg-8 {
        margin-bottom: 3rem
    }
    .awr-ml-lg-8,
    .awr-mx-lg-8 {
        margin-left: 3rem
    }
    .awr-m-lg-9 {
        margin: 4rem
    }
    .awr-mt-lg-9,
    .awr-my-lg-9 {
        margin-top: 4rem
    }
    .awr-mr-lg-9,
    .awr-mx-lg-9 {
        margin-right: 4rem
    }
    .awr-mb-lg-9,
    .awr-my-lg-9 {
        margin-bottom: 4rem
    }
    .awr-ml-lg-9,
    .awr-mx-lg-9 {
        margin-left: 4rem
    }
    .awr-p-lg-0 {
        padding: 0
    }
    .awr-pt-lg-0,
    .awr-py-lg-0 {
        padding-top: 0
    }
    .awr-pr-lg-0,
    .awr-px-lg-0 {
        padding-right: 0
    }
    .awr-pb-lg-0,
    .awr-py-lg-0 {
        padding-bottom: 0
    }
    .awr-pl-lg-0,
    .awr-px-lg-0 {
        padding-left: 0
    }
    .awr-p-lg-1 {
        padding: .25rem
    }
    .awr-pt-lg-1,
    .awr-py-lg-1 {
        padding-top: .25rem
    }
    .awr-pr-lg-1,
    .awr-px-lg-1 {
        padding-right: .25rem
    }
    .awr-pb-lg-1,
    .awr-py-lg-1 {
        padding-bottom: .25rem
    }
    .awr-pl-lg-1,
    .awr-px-lg-1 {
        padding-left: .25rem
    }
    .awr-p-lg-2 {
        padding: .5rem
    }
    .awr-pt-lg-2,
    .awr-py-lg-2 {
        padding-top: .5rem
    }
    .awr-pr-lg-2,
    .awr-px-lg-2 {
        padding-right: .5rem
    }
    .awr-pb-lg-2,
    .awr-py-lg-2 {
        padding-bottom: .5rem
    }
    .awr-pl-lg-2,
    .awr-px-lg-2 {
        padding-left: .5rem
    }
    .awr-p-lg-3 {
        padding: .75rem
    }
    .awr-pt-lg-3,
    .awr-py-lg-3 {
        padding-top: .75rem
    }
    .awr-pr-lg-3,
    .awr-px-lg-3 {
        padding-right: .75rem
    }
    .awr-pb-lg-3,
    .awr-py-lg-3 {
        padding-bottom: .75rem
    }
    .awr-pl-lg-3,
    .awr-px-lg-3 {
        padding-left: .75rem
    }
    .awr-p-lg-4 {
        padding: 1rem
    }
    .awr-pt-lg-4,
    .awr-py-lg-4 {
        padding-top: 1rem
    }
    .awr-pr-lg-4,
    .awr-px-lg-4 {
        padding-right: 1rem
    }
    .awr-pb-lg-4,
    .awr-py-lg-4 {
        padding-bottom: 1rem
    }
    .awr-pl-lg-4,
    .awr-px-lg-4 {
        padding-left: 1rem
    }
    .awr-p-lg-5 {
        padding: 1.25rem
    }
    .awr-pt-lg-5,
    .awr-py-lg-5 {
        padding-top: 1.25rem
    }
    .awr-pr-lg-5,
    .awr-px-lg-5 {
        padding-right: 1.25rem
    }
    .awr-pb-lg-5,
    .awr-py-lg-5 {
        padding-bottom: 1.25rem
    }
    .awr-pl-lg-5,
    .awr-px-lg-5 {
        padding-left: 1.25rem
    }
    .awr-p-lg-6 {
        padding: 1.5rem
    }
    .awr-pt-lg-6,
    .awr-py-lg-6 {
        padding-top: 1.5rem
    }
    .awr-pr-lg-6,
    .awr-px-lg-6 {
        padding-right: 1.5rem
    }
    .awr-pb-lg-6,
    .awr-py-lg-6 {
        padding-bottom: 1.5rem
    }
    .awr-pl-lg-6,
    .awr-px-lg-6 {
        padding-left: 1.5rem
    }
    .awr-p-lg-7 {
        padding: 2rem
    }
    .awr-pt-lg-7,
    .awr-py-lg-7 {
        padding-top: 2rem
    }
    .awr-pr-lg-7,
    .awr-px-lg-7 {
        padding-right: 2rem
    }
    .awr-pb-lg-7,
    .awr-py-lg-7 {
        padding-bottom: 2rem
    }
    .awr-pl-lg-7,
    .awr-px-lg-7 {
        padding-left: 2rem
    }
    .awr-p-lg-8 {
        padding: 3rem
    }
    .awr-pt-lg-8,
    .awr-py-lg-8 {
        padding-top: 3rem
    }
    .awr-pr-lg-8,
    .awr-px-lg-8 {
        padding-right: 3rem
    }
    .awr-pb-lg-8,
    .awr-py-lg-8 {
        padding-bottom: 3rem
    }
    .awr-pl-lg-8,
    .awr-px-lg-8 {
        padding-left: 3rem
    }
    .awr-p-lg-9 {
        padding: 4rem
    }
    .awr-pt-lg-9,
    .awr-py-lg-9 {
        padding-top: 4rem
    }
    .awr-pr-lg-9,
    .awr-px-lg-9 {
        padding-right: 4rem
    }
    .awr-pb-lg-9,
    .awr-py-lg-9 {
        padding-bottom: 4rem
    }
    .awr-pl-lg-9,
    .awr-px-lg-9 {
        padding-left: 4rem
    }
}

@media (min-width:1200px) {
    .awr-m-xl-0 {
        margin: 0
    }
    .awr-mt-xl-0,
    .awr-my-xl-0 {
        margin-top: 0
    }
    .awr-mr-xl-0,
    .awr-mx-xl-0 {
        margin-right: 0
    }
    .awr-mb-xl-0,
    .awr-my-xl-0 {
        margin-bottom: 0
    }
    .awr-ml-xl-0,
    .awr-mx-xl-0 {
        margin-left: 0
    }
    .awr-m-xl-1 {
        margin: .25rem
    }
    .awr-mt-xl-1,
    .awr-my-xl-1 {
        margin-top: .25rem
    }
    .awr-mr-xl-1,
    .awr-mx-xl-1 {
        margin-right: .25rem
    }
    .awr-mb-xl-1,
    .awr-my-xl-1 {
        margin-bottom: .25rem
    }
    .awr-ml-xl-1,
    .awr-mx-xl-1 {
        margin-left: .25rem
    }
    .awr-m-xl-2 {
        margin: .5rem
    }
    .awr-mt-xl-2,
    .awr-my-xl-2 {
        margin-top: .5rem
    }
    .awr-mr-xl-2,
    .awr-mx-xl-2 {
        margin-right: .5rem
    }
    .awr-mb-xl-2,
    .awr-my-xl-2 {
        margin-bottom: .5rem
    }
    .awr-ml-xl-2,
    .awr-mx-xl-2 {
        margin-left: .5rem
    }
    .awr-m-xl-3 {
        margin: .75rem
    }
    .awr-mt-xl-3,
    .awr-my-xl-3 {
        margin-top: .75rem
    }
    .awr-mr-xl-3,
    .awr-mx-xl-3 {
        margin-right: .75rem
    }
    .awr-mb-xl-3,
    .awr-my-xl-3 {
        margin-bottom: .75rem
    }
    .awr-ml-xl-3,
    .awr-mx-xl-3 {
        margin-left: .75rem
    }
    .awr-m-xl-4 {
        margin: 1rem
    }
    .awr-mt-xl-4,
    .awr-my-xl-4 {
        margin-top: 1rem
    }
    .awr-mr-xl-4,
    .awr-mx-xl-4 {
        margin-right: 1rem
    }
    .awr-mb-xl-4,
    .awr-my-xl-4 {
        margin-bottom: 1rem
    }
    .awr-ml-xl-4,
    .awr-mx-xl-4 {
        margin-left: 1rem
    }
    .awr-m-xl-5 {
        margin: 1.25rem
    }
    .awr-mt-xl-5,
    .awr-my-xl-5 {
        margin-top: 1.25rem
    }
    .awr-mr-xl-5,
    .awr-mx-xl-5 {
        margin-right: 1.25rem
    }
    .awr-mb-xl-5,
    .awr-my-xl-5 {
        margin-bottom: 1.25rem
    }
    .awr-ml-xl-5,
    .awr-mx-xl-5 {
        margin-left: 1.25rem
    }
    .awr-m-xl-6 {
        margin: 1.5rem
    }
    .awr-mt-xl-6,
    .awr-my-xl-6 {
        margin-top: 1.5rem
    }
    .awr-mr-xl-6,
    .awr-mx-xl-6 {
        margin-right: 1.5rem
    }
    .awr-mb-xl-6,
    .awr-my-xl-6 {
        margin-bottom: 1.5rem
    }
    .awr-ml-xl-6,
    .awr-mx-xl-6 {
        margin-left: 1.5rem
    }
    .awr-m-xl-7 {
        margin: 2rem
    }
    .awr-mt-xl-7,
    .awr-my-xl-7 {
        margin-top: 2rem
    }
    .awr-mr-xl-7,
    .awr-mx-xl-7 {
        margin-right: 2rem
    }
    .awr-mb-xl-7,
    .awr-my-xl-7 {
        margin-bottom: 2rem
    }
    .awr-ml-xl-7,
    .awr-mx-xl-7 {
        margin-left: 2rem
    }
    .awr-m-xl-8 {
        margin: 3rem
    }
    .awr-mt-xl-8,
    .awr-my-xl-8 {
        margin-top: 3rem
    }
    .awr-mr-xl-8,
    .awr-mx-xl-8 {
        margin-right: 3rem
    }
    .awr-mb-xl-8,
    .awr-my-xl-8 {
        margin-bottom: 3rem
    }
    .awr-ml-xl-8,
    .awr-mx-xl-8 {
        margin-left: 3rem
    }
    .awr-m-xl-9 {
        margin: 4rem
    }
    .awr-mt-xl-9,
    .awr-my-xl-9 {
        margin-top: 4rem
    }
    .awr-mr-xl-9,
    .awr-mx-xl-9 {
        margin-right: 4rem
    }
    .awr-mb-xl-9,
    .awr-my-xl-9 {
        margin-bottom: 4rem
    }
    .awr-ml-xl-9,
    .awr-mx-xl-9 {
        margin-left: 4rem
    }
    .awr-p-xl-0 {
        padding: 0
    }
    .awr-pt-xl-0,
    .awr-py-xl-0 {
        padding-top: 0
    }
    .awr-pr-xl-0,
    .awr-px-xl-0 {
        padding-right: 0
    }
    .awr-pb-xl-0,
    .awr-py-xl-0 {
        padding-bottom: 0
    }
    .awr-pl-xl-0,
    .awr-px-xl-0 {
        padding-left: 0
    }
    .awr-p-xl-1 {
        padding: .25rem
    }
    .awr-pt-xl-1,
    .awr-py-xl-1 {
        padding-top: .25rem
    }
    .awr-pr-xl-1,
    .awr-px-xl-1 {
        padding-right: .25rem
    }
    .awr-pb-xl-1,
    .awr-py-xl-1 {
        padding-bottom: .25rem
    }
    .awr-pl-xl-1,
    .awr-px-xl-1 {
        padding-left: .25rem
    }
    .awr-p-xl-2 {
        padding: .5rem
    }
    .awr-pt-xl-2,
    .awr-py-xl-2 {
        padding-top: .5rem
    }
    .awr-pr-xl-2,
    .awr-px-xl-2 {
        padding-right: .5rem
    }
    .awr-pb-xl-2,
    .awr-py-xl-2 {
        padding-bottom: .5rem
    }
    .awr-pl-xl-2,
    .awr-px-xl-2 {
        padding-left: .5rem
    }
    .awr-p-xl-3 {
        padding: .75rem
    }
    .awr-pt-xl-3,
    .awr-py-xl-3 {
        padding-top: .75rem
    }
    .awr-pr-xl-3,
    .awr-px-xl-3 {
        padding-right: .75rem
    }
    .awr-pb-xl-3,
    .awr-py-xl-3 {
        padding-bottom: .75rem
    }
    .awr-pl-xl-3,
    .awr-px-xl-3 {
        padding-left: .75rem
    }
    .awr-p-xl-4 {
        padding: 1rem
    }
    .awr-pt-xl-4,
    .awr-py-xl-4 {
        padding-top: 1rem
    }
    .awr-pr-xl-4,
    .awr-px-xl-4 {
        padding-right: 1rem
    }
    .awr-pb-xl-4,
    .awr-py-xl-4 {
        padding-bottom: 1rem
    }
    .awr-pl-xl-4,
    .awr-px-xl-4 {
        padding-left: 1rem
    }
    .awr-p-xl-5 {
        padding: 1.25rem
    }
    .awr-pt-xl-5,
    .awr-py-xl-5 {
        padding-top: 1.25rem
    }
    .awr-pr-xl-5,
    .awr-px-xl-5 {
        padding-right: 1.25rem
    }
    .awr-pb-xl-5,
    .awr-py-xl-5 {
        padding-bottom: 1.25rem
    }
    .awr-pl-xl-5,
    .awr-px-xl-5 {
        padding-left: 1.25rem
    }
    .awr-p-xl-6 {
        padding: 1.5rem
    }
    .awr-pt-xl-6,
    .awr-py-xl-6 {
        padding-top: 1.5rem
    }
    .awr-pr-xl-6,
    .awr-px-xl-6 {
        padding-right: 1.5rem
    }
    .awr-pb-xl-6,
    .awr-py-xl-6 {
        padding-bottom: 1.5rem
    }
    .awr-pl-xl-6,
    .awr-px-xl-6 {
        padding-left: 1.5rem
    }
    .awr-p-xl-7 {
        padding: 2rem
    }
    .awr-pt-xl-7,
    .awr-py-xl-7 {
        padding-top: 2rem
    }
    .awr-pr-xl-7,
    .awr-px-xl-7 {
        padding-right: 2rem
    }
    .awr-pb-xl-7,
    .awr-py-xl-7 {
        padding-bottom: 2rem
    }
    .awr-pl-xl-7,
    .awr-px-xl-7 {
        padding-left: 2rem
    }
    .awr-p-xl-8 {
        padding: 3rem
    }
    .awr-pt-xl-8,
    .awr-py-xl-8 {
        padding-top: 3rem
    }
    .awr-pr-xl-8,
    .awr-px-xl-8 {
        padding-right: 3rem
    }
    .awr-pb-xl-8,
    .awr-py-xl-8 {
        padding-bottom: 3rem
    }
    .awr-pl-xl-8,
    .awr-px-xl-8 {
        padding-left: 3rem
    }
    .awr-p-xl-9 {
        padding: 4rem
    }
    .awr-pt-xl-9,
    .awr-py-xl-9 {
        padding-top: 4rem
    }
    .awr-pr-xl-9,
    .awr-px-xl-9 {
        padding-right: 4rem
    }
    .awr-pb-xl-9,
    .awr-py-xl-9 {
        padding-bottom: 4rem
    }
    .awr-pl-xl-9,
    .awr-px-xl-9 {
        padding-left: 4rem
    }
}

.awr-pull-left {
    float: left!important
}

.awr-pull-right {
    float: right!important
}

.awr-pull-none {
    float: none!important
}

@media (min-width:576px) {
    .awr-pull-sm-left {
        float: left!important
    }
    .awr-pull-sm-right {
        float: right!important
    }
    .awr-pull-sm-none {
        float: none!important
    }
}

@media (min-width:768px) {
    .awr-pull-md-left {
        float: left!important
    }
    .awr-pull-md-right {
        float: right!important
    }
    .awr-pull-md-none {
        float: none!important
    }
}

@media (min-width:992px) {
    .awr-pull-lg-left {
        float: left!important
    }
    .awr-pull-lg-right {
        float: right!important
    }
    .awr-pull-lg-none {
        float: none!important
    }
}

@media (min-width:1200px) {
    .awr-pull-xl-left {
        float: left!important
    }
    .awr-pull-xl-right {
        float: right!important
    }
    .awr-pull-xl-none {
        float: none!important
    }
}

.awr-clearfix:after {
    display: block;
    clear: both;
    content: ""
}

.awr-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0
}

.awr-sr-only-focusable:active,
.awr-sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal
}

.awr .awr-title-1,
.awr .awr-title-2,
.awr .awr-title-3,
.awr .awr-title-4,
.awr .awr-title-5,
.awr .awr-title-6,
.awr .h1,
.awr .h2,
.awr .h3,
.awr .h4,
.awr .h5,
.awr .h6,
.awr h1,
.awr h2,
.awr h3,
.awr h4,
.awr h5,
.awr h6 {
    font-family: MarkForMC, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
    font-weight: 300;
    color: inherit
}

.awr .awr-title-1,
.awr .h1,
.awr h1 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    line-height: 2.5rem
}

@media (min-width:768px) {
    .awr .awr-title-1,
    .awr .h1,
    .awr h1 {
        margin-bottom: 2rem;
        font-size: 3rem;
        line-height: 3.5rem
    }
}

.awr .awr-title-2,
.awr .h2,
.awr h2 {
    margin-bottom: 1rem;
    font-size: 1.75rem;
    line-height: 2.25rem
}

@media (min-width:768px) {
    .awr .awr-title-2,
    .awr .h2,
    .awr h2 {
        margin-bottom: 1.5rem;
        font-size: 2.25rem;
        line-height: 2.625rem
    }
}

.awr .awr-title-3,
.awr .h3,
.awr h3 {
    margin-bottom: 1rem;
    font-size: 1.75rem;
    line-height: 1.25rem
}

@media (min-width:768px) {
    .awr .awr-title-3,
    .awr .h3,
    .awr h3 {
        margin-bottom: 1.5rem;
        font-size: 1.75rem;
        line-height: 2.375rem
    }
}

.awr .awr-title-4,
.awr .h4,
.awr h4 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 1.875rem
}

@media (min-width:768px) {
    .awr .awr-title-4,
    .awr .h4,
    .awr h4 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        line-height: 1.875rem
    }
}

.awr .awr-title-5,
.awr .h5,
.awr h5 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.5rem
}

@media (min-width:768px) {
    .awr .awr-title-5,
    .awr .h5,
    .awr h5 {
        margin-bottom: 1rem;
        font-size: 1.25rem;
        line-height: 1.5rem
    }
}

.awr .awr-title-6,
.awr .h6,
.awr h6 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    line-height: 1.5rem
}

@media (min-width:768px) {
    .awr .awr-title-6,
    .awr .h6,
    .awr h6 {
        margin-bottom: 1rem;
        font-size: 1.25rem;
        line-height: 1.5rem
    }
}

.awr .awr-text-eyebrow,
.awr .awr-title-eyebrow {
    margin-bottom: 1rem;
    font-family: MarkForMC-Bold, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
    text-transform: uppercase;
    letter-spacing: .8rem;
    font-size: .75rem;
    line-height: 1rem
}

@media (min-width:768px) {
    .awr .awr-text-eyebrow,
    .awr .awr-title-eyebrow {
        font-size: .875rem;
        line-height: 1.5rem
    }
}

.awr .awr-text-eyebrow a,
.awr .awr-title-eyebrow a {
    font-family: MarkForMC-Bold, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

.awr-lead,
.awr-text-lead,
.awr-text-lg {
    margin-bottom: 2rem;
    line-height: 1.625rem;
    font-size: 1.125rem;
    font-family: MarkForMCNrw, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

.awr-small,
.awr-text-sm {
    font-size: 87.5%
}

.awr-text-article {
    margin-bottom: 2rem;
    font-size: 1.125rem;
    line-height: 2rem
}

.awr-text-justify {
    text-align: justify!important
}

.awr-text-nowrap {
    white-space: nowrap!important
}

.awr-text-wrap {
    white-space: normal!important
}

.awr-text-left {
    text-align: left!important
}

.awr-text-right {
    text-align: right!important
}

.awr-text-center {
    text-align: center!important
}

@media (min-width:576px) {
    .awr-text-sm-left {
        text-align: left!important
    }
    .awr-text-sm-right {
        text-align: right!important
    }
    .awr-text-sm-center {
        text-align: center!important
    }
}

@media (min-width:768px) {
    .awr-text-md-left {
        text-align: left!important
    }
    .awr-text-md-right {
        text-align: right!important
    }
    .awr-text-md-center {
        text-align: center!important
    }
}

@media (min-width:992px) {
    .awr-text-lg-left {
        text-align: left!important
    }
    .awr-text-lg-right {
        text-align: right!important
    }
    .awr-text-lg-center {
        text-align: center!important
    }
}

@media (min-width:1200px) {
    .awr-text-xl-left {
        text-align: left!important
    }
    .awr-text-xl-right {
        text-align: right!important
    }
    .awr-text-xl-center {
        text-align: center!important
    }
}

.awr-text-lowercase {
    text-transform: lowercase
}

.awr-text-uppercase {
    text-transform: uppercase
}

.awr-text-capitalize {
    text-transform: capitalize
}

.awr-text-truncate {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal
}

.awr-list-inline-item,
.awr-text-truncate {
    display: inline-block
}

.awr-text-success {
    color: #4db050!important
}

a.awr-text-success:focus,
a.awr-text-success:hover {
    color: #3d8d40!important
}

.awr-text-info {
    color: #3498db!important
}

a.awr-text-info:focus,
a.awr-text-info:hover {
    color: #217dbb!important
}

.awr-text-warning {
    color: #f1c40f!important
}

a.awr-text-warning:focus,
a.awr-text-warning:hover {
    color: #c29d0b!important
}

.awr-text-danger {
    color: #d7373c!important
}

a.awr-text-danger:focus,
a.awr-text-danger:hover {
    color: #b72529!important
}

.awr-text-initial {
    color: #141414!important
}

a.awr-text-initial:focus,
a.awr-text-initial:hover {
    color: #000!important
}

.awr-text-inverse {
    color: #fff!important
}

a.awr-text-inverse:focus,
a.awr-text-inverse:hover {
    color: #e6e6e6!important
}

.awr-text-black {
    color: #141414!important
}

a.awr-text-black:focus,
a.awr-text-black:hover {
    color: #000!important
}

.awr-text-white {
    color: #fff!important
}

a.awr-text-white:focus,
a.awr-text-white:hover {
    color: #e6e6e6!important
}

.awr-text-muted {
    color: #777!important
}

a.awr-text-muted:focus,
a.awr-text-muted:hover {
    color: #5e5e5e!important
}

.awr .awr-btn,
.awr a.awr-btn {
    display: inline-block;
    border-radius: 1.5rem;
    padding: .5rem 1rem;
    font-size: .875rem;
    line-height: 1.43rem;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    min-width: 10rem;
    max-height: 40px;
    cursor: pointer
}

.awr .awr-btn:focus,
.awr .awr-btn:hover,
.awr a.awr-btn:focus,
.awr a.awr-btn:hover {
    text-decoration: none
}

.awr .awr-btn.focus,
.awr .awr-btn:focus,
.awr a.awr-btn.focus,
.awr a.awr-btn:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(20, 20, 20, .25)
}

.awr .awr-btn.disabled,
.awr .awr-btn:disabled,
.awr a.awr-btn.disabled,
.awr a.awr-btn:disabled {
    box-shadow: none;
    cursor: not-allowed;
    opacity: .5
}

.awr .awr-btn:not([disabled]):not(.disabled).active,
.awr .awr-btn:not([disabled]):not(.disabled):active,
.awr a.awr-btn:not([disabled]):not(.disabled).active,
.awr a.awr-btn:not([disabled]):not(.disabled):active {
    box-shadow: 0 0 0 2px rgba(20, 20, 20, .25), inset 0 3px 5px rgba(0, 0, 0, .125);
    background-image: none
}

a.awr-btn.disabled,
fieldset[disabled] a.awr-btn {
    pointer-events: auto
}

.awr-btn-primary-inverse,
a.awr-btn-primary-inverse {
    box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, .15), 0 1px 1px rgba(0, 0, 0, .075);
    border-radius: #fcfbfa;
    font-weight: 500
}

.awr-btn-primary-inverse,
.awr-btn-primary-inverse:hover,
a.awr-btn-primary-inverse,
a.awr-btn-primary-inverse:hover {
    color: #141414;
    background-color: #fff;
    border-color: #fff
}

.awr-btn-primary-inverse.focus,
.awr-btn-primary-inverse:focus,
a.awr-btn-primary-inverse.focus,
a.awr-btn-primary-inverse:focus {
    color: #141414;
    background-color: #fff;
    border-color: #fff;
    position: relative
}

.awr-btn-primary-inverse.focus:before,
.awr-btn-primary-inverse:focus:before,
a.awr-btn-primary-inverse.focus:before,
a.awr-btn-primary-inverse:focus:before {
    content: " ";
    position: absolute;
    border: 2px solid #ffab82;
    border-radius: 1.5rem
}

.awr-btn-primary-inverse.disabled,
.awr-btn-primary-inverse:disabled,
a.awr-btn-primary-inverse.disabled,
a.awr-btn-primary-inverse:disabled {
    background-color: #000;
    border-color: #fff;
    opacity: .5
}

.awr-btn-primary-inverse.active,
.awr-btn-primary-inverse:active,
a.awr-btn-primary-inverse.active,
a.awr-btn-primary-inverse:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
    color: #141414;
    background-color: #fff;
    background-image: none;
    border-color: #fff
}

.awr-btn-secondary {
    color: #000;
    background-color: transparent;
    background-image: none;
    border-color: #000;
    border-radius: 1.25rem;
    font-weight: 500
}

.awr-btn-secondary:hover {
    color: #777470;
    background-color: transparent;
    border-color: #777470
}

.awr-btn-secondary.focus,
.awr-btn-secondary:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, .5)
}

.awr-btn-secondary.disabled,
.awr-btn-secondary:disabled {
    color: #000;
    background-color: transparent
}

.awr-btn-secondary.active,
.awr-btn-secondary:active {
    color: #777470;
    background-color: transparent;
    border-color: #777470
}

.awr-btn-secondary-inverse {
    color: #141414;
    background-color: transparent;
    background-image: none;
    border-color: #141414;
    border-radius: 1.25rem;
    font-weight: 500
}

.awr-btn-secondary-inverse:hover {
    color: #777470;
    background-color: transparent;
    border-color: #777470
}

.awr-btn-secondary-inverse.focus,
.awr-btn-secondary-inverse:focus {
    box-shadow: 0 0 0 2px rgba(20, 20, 20, .5)
}

.awr-btn-secondary-inverse.disabled,
.awr-btn-secondary-inverse:disabled {
    color: #141414;
    background-color: transparent
}

.awr-btn-secondary-inverse.active,
.awr-btn-secondary-inverse:active {
    color: #777470;
    background-color: transparent;
    border-color: #777470
}

.awr-btn-link,
.awr-btn-link-initial,
.awr-btn-link-inverse {
    font-weight: 400;
    background-color: transparent
}

.awr-btn-link-initial:hover,
.awr-btn-link-inverse:hover,
.awr-btn-link:hover {
    background-color: transparent;
    border-color: transparent
}

.awr-btn-link-initial.focus,
.awr-btn-link-initial:focus,
.awr-btn-link-inverse.focus,
.awr-btn-link-inverse:focus,
.awr-btn-link.focus,
.awr-btn-link:focus {
    border-color: transparent;
    box-shadow: none
}

.awr-btn-link-initial.disabled,
.awr-btn-link-initial:disabled,
.awr-btn-link-inverse.disabled,
.awr-btn-link-inverse:disabled,
.awr-btn-link.disabled,
.awr-btn-link:disabled {
    color: #777
}

.awr-btn-link,
.awr-btn-link-initial {
    color: #141414;
    text-decoration: none
}

.awr-btn-link-initial:hover,
.awr-btn-link:hover {
    color: #000;
    text-decoration: underline
}

.awr-btn-link-inverse {
    color: #fff;
    text-decoration: none
}

.awr-btn-link-inverse:hover {
    color: #d9d9d9;
    text-decoration: underline
}

.awr-btn-primary,
a.awr-btn-primary {
    box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, .15), 0 1px 1px rgba(0, 0, 0, .075);
    color: #fff;
    background-color: #444340;
    border-color: #444340;
    border-radius: #000;
    font-weight: 500
}

.awr-btn-primary:hover,
a.awr-btn-primary:hover {
    color: #fff;
    background-color: #000;
    border-color: #000
}

.awr-btn-primary.focus,
.awr-btn-primary:focus,
a.awr-btn-primary.focus,
a.awr-btn-primary:focus {
    color: #fff;
    background-color: #444340;
    border-color: #444340;
    position: relative
}

.awr-btn-primary.focus:before,
.awr-btn-primary:focus:before,
a.awr-btn-primary.focus:before,
a.awr-btn-primary:focus:before {
    content: " ";
    position: absolute;
    border: 2px solid #ffab82;
    border-radius: 1.5rem
}

.awr-btn-primary.disabled,
.awr-btn-primary:disabled,
a.awr-btn-primary.disabled,
a.awr-btn-primary:disabled {
    background-color: #000;
    border-color: #444340;
    opacity: .5
}

.awr-btn-primary.active,
.awr-btn-primary:active,
a.awr-btn-primary.active,
a.awr-btn-primary:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);
    color: #fff;
    background-color: #444340;
    background-image: none;
    border-color: #444340
}

.awr-btn-xl {
    border-radius: .35rem;
    padding: .94rem 1rem
}

.awr-btn-lg,
.awr-btn-xl {
    font-size: 1rem;
    line-height: 1.5
}

.awr-btn-lg {
    border-radius: 1.5rem;
    padding: .5rem 1rem
}

.awr-btn-sm {
    border-radius: 1.25rem;
    padding: .4rem .5rem .5rem;
    font-size: 1rem;
    line-height: 1.5
}

@media (min-width:768px) {
    .awr-btn-brick {
        display: inline-block;
        width: auto
    }
    .awr-btn-brick+.awr-btn-brick {
        margin-top: 0
    }
}

.awr-form-control {
    display: block;
    width: 100%;
    height: 2.25rem;
    padding: .5rem .75rem;
    font-size: 1rem;
    line-height: 1.25rem;
    background-image: none;
    background-clip: padding-box;
    border-radius: .25rem;
    appearance: none
}

.awr-form-control::-ms-expand {
    background-color: transparent;
    border: 0
}

.awr-form-control::-ms-clear {
    display: none
}

.awr-form-control:disabled {
    cursor: not-allowed
}

.awr-form-control:invalid {
    border: 1px solid #d7373c
}

.awr-form-control:invalid:focus {
    border: 1px solid #900
}

.awr-form-control-light {
    color: #000;
    background-color: #fff;
    border: 1px solid #96918b
}

.awr-form-control-light:focus {
    color: #000;
    box-shadow: 0 2px 5px 0 #000;
    border-color: #444340;
    outline: none
}

.awr-form-control-light::placeholder {
    color: #777;
    opacity: 1
}

.awr-form-control-light:disabled,
.awr-form-control-light[readonly] {
    color: #b1ada6;
    border: 1px solid #b1ada6
}

.awr-form-control-light:disabled::placeholder,
.awr-form-control-light[readonly]::placeholder {
    color: #b1ada6
}

.awr-form-control-dark {
    color: #000;
    background-color: #fff;
    border: 1px solid #fff
}

.awr-form-control-dark:focus {
    color: #fff;
    box-shadow: 0 2px 5px 0 #fff;
    border-color: #444340;
    outline: none
}

.awr-form-control-dark::placeholder {
    color: #eee;
    opacity: 1
}

.awr-form-control-dark:disabled,
.awr-form-control-dark[readonly] {
    color: #b1ada6;
    border: 1px solid #b1ada6
}

.awr-form-control-dark:disabled::placeholder,
.awr-form-control-dark[readonly]::placeholder {
    color: #b1ada6
}

.awr textarea.form-control {
    border-radius: .25rem;
    height: auto;
    border-color: #000
}

.awr textarea.form-control:focus {
    color: #000;
    box-shadow: 0 2px 5px 0 #000;
    border-color: #444340;
    outline: none
}

.awr textarea.form-control:disabled {
    resize: none
}

.awr-icon-wrapper {
    position: relative;
    display: inline-block;
    margin: 0 auto;
    text-align: center
}

.awr-icon-social-twitter1 {
    border: 8px solid #fff;
    border-radius: 50px
}

.awr .fill {
    fill: #fff
}

.awr svg .icon,
.awr svg path .fill {
    stroke: #fff;
    fill: #fff
}

.awr-icon-x-small {
    width: 8px;
    height: 8px;
    font-size: 8px
}

.awr-icon-small {
    width: 16px;
    height: 16px;
    font-size: 16px
}

.awr-icon-medium {
    width: 24px;
    height: 24px;
    font-size: 24px
}

.awr-icon-large {
    width: 32px;
    height: 32px;
    font-size: 32px
}

.awr-icon-x-large {
    width: 40px;
    height: 40px;
    font-size: 40px
}

.awr-icon-2x-large {
    width: 56px;
    height: 56px;
    font-size: 48px
}

.awr-icon-3x-large {
    width: 64px;
    height: 64px;
    font-size: 56px
}

.awr-icon-4x-large {
    width: 88px;
    height: 88px;
    font-size: 64px
}

.awr-icon-5x-large {
    width: 88px;
    height: 88px;
    font-size: 72px
}

.awr-icon-6x-large {
    width: 88px;
    height: 88px;
    font-size: 80px
}

@font-face {
    font-family: mc-icon;
    font-style: normal;
    font-weight: 400;
    src: url(https://stage.asset.mastercard.com/content/dam/awr/fonts/mc-icons/mc-icons.eot);
    src: url(https://stage.asset.mastercard.com/content/dam/awr/fonts/mc-icons/mc-icons.eot#iefix) format("embedded-opentype"), url(https://stage.asset.mastercard.com/content/dam/awr/fonts/mc-icons/mc-icons.woff2) format("woff2"), url(https://stage.asset.mastercard.com/content/dam/awr/fonts/mc-icons/mc-icons.woff) format("woff"), url(https://stage.asset.mastercard.com/content/dam/awr/fonts/mc-icons/mc-icons.ttf) format("truetype")
}

.awr .awr-icon {
    font-family: mc-icon;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    line-height: 1;
    text-transform: none;
    speak: none
}

.awr .awr-icon-card-access:before {
    content: ""
}

.awr .awr-icon-card-approve:before {
    content: ""
}

.awr .awr-icon-card-secure:before {
    content: ""
}

.awr .awr-icon-card:before {
    content: ""
}

.awr .awr-icon-caret-up:before {
    content: ""
}

.awr .awr-icon-caret-right:before {
    content: ""
}

.awr .awr-icon-caret-down:before {
    content: ""
}

.awr .awr-icon-caret-left:before {
    content: ""
}

.awr .awr-icon-close:before {
    content: ""!important
}

.awr .awr-icon-expand:before {
    content: ""
}

.awr .awr-icon-collapse:before {
    content: ""
}

.awr .awr-icon-arrow-bwd:before {
    content: ""
}

.awr .awr-icon-arrow-fwd:before {
    content: ""
}

.awr .awr-icon-person:before {
    content: ""
}

.awr .awr-icon-icon-play:before {
    content: ""
}

.awr .awr-icon-hamburger:before {
    content: ""
}

.awr .awr-icon-hacker-news:before {
    content: ""
}

.awr .awr-icon-globe:before {
    content: ""
}

.awr .awr-icon-search:before {
    content: ""!important
}

.awr .awr-icon-icon-share:before {
    content: ""
}

.awr .awr-icon-circle-email:before,
.awr .awr-icon-email:before {
    content: ""
}

.awr .awr-icon-circle-facebook:before,
.awr .awr-icon-facebook:before {
    content: ""
}

.awr .awr-icon-circle-linkedin:before,
.awr .awr-icon-linkedin:before {
    content: ""
}

.awr .awr-icon-circle-tumblr:before,
.awr .awr-icon-tumblr:before {
    content: ""
}

.awr .awr-icon-circle-twitter:before,
.awr .awr-icon-twitter:before {
    content: ""
}

.awr .awr-icon-circle-youtube:before,
.awr .awr-icon-youtube:before {
    content: ""
}

.awr .awr-icon-circle-pinterest:before,
.awr .awr-icon-pinterest:before {
    content: ""
}

.awr .awr-icon-circle-youku:before,
.awr .awr-icon-youku:before {
    content: ""
}

.awr .awr-icon-circle-weibo:before,
.awr .awr-icon-weibo:before {
    content: ""
}

.awr .awr-icon-circle-weixin:before,
.awr .awr-icon-weixin:before {
    content: ""
}

.awr .awr-icon-circle-vk:before,
.awr .awr-icon-vk:before {
    content: ""
}

.awr-btn-close {
    background-color: transparent
}

.awr-dropdown-list {
    list-style: none;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    top: auto;
    left: 0;
    border-radius: 3px;
    z-index: 99;
    margin-bottom: 0;
    padding: 0
}

.awr-dropdown-list li {
    height: 40px;
    cursor: pointer;
    position: relative;
    line-height: 40px;
    text-indent: 1px;
    z-index: 5;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 0 15px
}

.awr-dropdown-list li:after {
    content: "";
    display: block;
    position: absolute;
    z-index: 0;
    width: 98%;
    height: 41px;
    top: 0;
    left: 2%
}

.awr-dropdown-list li:first-child:after {
    border-top: 0
}

.awr-dropdown-list li:last-child:after {
    border-bottom: 0
}

.awr-dropdown-list li:hover:after {
    width: 100%;
    left: 0
}

.awr-dropdown-list li.active,
.awr-dropdown-list li:focus,
.awr-dropdown-list li:hover {
    outline: none
}

.awr-dropdown-list li:hover {
    background-color: #f6f3ef
}

.awr-list-container {
    position: absolute;
    width: 100%;
    z-index: 2;
    overflow: hidden;
    display: none;
    top: 40px
}

.awr-dropdown-md .awr-list-container {
    top: 48px
}

.awr-dropdown-container {
    margin: 0;
    width: 100%;
    position: relative
}

.awr-dropdown-container .awr-dropdown {
    width: 100%;
    height: 40px;
    cursor: pointer;
    padding: 0 36px 0 14px;
    display: block;
    line-height: inherit;
    border-radius: 3px;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: left
}

.awr-dropdown-container .awr-dropdown-md button,
.awr-dropdown-container .awr-dropdown-md input {
    height: 3rem;
    font-size: 1.5rem
}

.awr-embed-responsive {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden
}

.awr-embed-responsive:before {
    display: block;
    content: ""
}

.awr-embed-responsive .embed-responsive-item,
.awr-embed-responsive embed,
.awr-embed-responsive iframe,
.awr-embed-responsive object,
.awr-embed-responsive video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0
}

.awr-embed-responsive-21by9:before {
    padding-top: 42.85714%
}

.awr-embed-responsive-16by9:before {
    padding-top: 56.25%
}

.awr-embed-responsive-4by3:before {
    padding-top: 75%
}

.awr-embed-responsive-1by1:before {
    padding-top: 100%
}

.awr-bg-success {
    background-color: #4db050
}

a.awr-bg-success:focus,
a.awr-bg-success:hover {
    background-color: #3d8d40
}

.awr-bg-info {
    background-color: #3498db
}

a.awr-bg-info:focus,
a.awr-bg-info:hover {
    background-color: #217dbb
}

.awr-bg-warning {
    background-color: #f1c40f
}

a.awr-bg-warning:focus,
a.awr-bg-warning:hover {
    background-color: #c29d0b
}

.awr-bg-danger {
    background-color: #d7373c
}

a.awr-bg-danger:focus,
a.awr-bg-danger:hover {
    background-color: #b72529
}

.awr-bg-initial {
    background-color: #fff
}

a.awr-bg-initial:focus,
a.awr-bg-initial:hover {
    background-color: #e6e6e6
}

.awr-bg-inverse {
    background-color: #141414
}

a.awr-bg-inverse:focus,
a.awr-bg-inverse:hover {
    background-color: #000
}

.awr-bg-mod-01 {
    background-color: #f6f3ef
}

a.awr-bg-mod-01:focus,
a.awr-bg-mod-01:hover {
    background-color: #e4dbce
}

.awr-bg-mod-02 {
    background-color: #323231
}

a.awr-bg-mod-02:focus,
a.awr-bg-mod-02:hover {
    background-color: #181818
}

.awr-bg-mod-03 {
    background-color: #8cba2d
}

a.awr-bg-mod-03:focus,
a.awr-bg-mod-03:hover {
    background-color: #6d9123
}

.awr-bg-mod-04 {
    background-color: #cf4500
}

a.awr-bg-mod-04:focus,
a.awr-bg-mod-04:hover {
    background-color: #9c3400
}

.awr-bg-transparent {
    background-color: transparent
}

.awr-bg-contour {
    background-repeat: no-repeat;
    background-position: 83% 92%;
    background-size: 200% auto
}

@media (min-width:576px) {
    .awr-bg-contour {
        background-position: 108% 67%;
        background-size: 133% auto
    }
}

@media (min-width:768px) {
    .awr-bg-contour {
        background-position: 108% 75%;
        background-size: 133% auto
    }
}

@media (min-width:992px) {
    .awr-bg-contour {
        background-position: 83% 83%;
        background-size: 133% auto
    }
}

@media (min-width:1200px) {
    .awr-bg-contour {
        background-position: 117% 83%;
        background-size: 133% auto
    }
}

.awr-bg-contour-initial {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM3OSIgaGVpZ2h0PSIxMzc5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgc3Ryb2tlPSIjMTQxNDEzIiBzdHJva2Utd2lkdGg9IjIiIGN4PSI2ODkiIGN5PSI2ODkiIHI9IjY4OCIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+")
}

.awr-bg-contour-inverse {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTU1NSIgaGVpZ2h0PSIxNTU1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjIiIGN4PSI3NzcuNSIgY3k9Ijc3Ny41IiByPSI3NzYuNSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+")
}

.awr-mc-logo {
    background: url(../img/mc-logo.png) no-repeat;
    padding: 0;
    height: 100px
}

.awr-form-actions,
.awr-form-group {
    margin-bottom: 1rem
}

.awr-nav {
    margin-bottom: 0;
    display: flex;
    flex-wrap: wrap
}

.awr-nav-link {
    padding: .45rem 1rem;
    display: block
}

.awr-nav-link:focus,
.awr-nav-link:hover {
    text-decoration: none
}

.awr-nav-link.disabled {
    color: #777
}

.awr-nav-fill>.awr-nav-item,
.awr-nav-justified>.awr-nav-item {
    text-align: center
}

.awr-nav-fill>.awr-nav-item {
    flex: 1 1 auto
}

.awr-nav-justified>.awr-nav-item {
    flex-basis: 0;
    flex-grow: 1
}

.awr-modal,
.awr-modal-open {
    overflow: hidden
}

.awr-modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    outline: 0
}

.awr-modal.fade .awr-modal-dialog {
    transition: transform .3s ease-out;
    transform: translateY(-25%)
}

.awr-modal.show .awr-modal-dialog {
    transform: translate(0)
}

.awr-modal-open .awr-modal {
    overflow-x: hidden;
    overflow-y: auto
}

.awr-modal-dialog {
    position: relative;
    max-width: 100%;
    height: 100%;
    margin: 0
}

@media (min-width:576px) {
    .awr-modal-dialog {
        max-width: 100%
    }
}

@media (min-width:768px) {
    .awr-modal-dialog {
        max-width: 596px
    }
}

@media (min-width:992px) {
    .awr-modal-dialog {
        max-width: 792px
    }
}

@media (min-width:1200px) {
    .awr-modal-dialog {
        max-width: 792px
    }
}

@media (min-width:768px) {
    .awr-modal-dialog {
        height: auto;
        margin: 2rem auto
    }
}

.awr-modal-dialog-centered {
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    height: 100%
}

.awr-modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    outline: 0;
    min-height: 100%
}

@media (min-width:768px) {
    .awr-modal-content {
        min-height: auto;
        border-radius: .25rem;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .1);
        border: 1px solid rgba(0, 0, 0, .2)
    }
}

.awr-modal-header {
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2rem;
    border-bottom: 0 solid #222
}

.awr-modal-title {
    margin-bottom: 0;
    line-height: 1.5
}

.awr-modal-body {
    position: relative;
    flex: 1 1 auto
}

.awr-modal-footer {
    display: block;
    padding: 1rem 0 0;
    border-top: 0 solid #222
}

.awr-modal-footer>:not(:first-child) {
    margin-left: .25rem
}

.awr-modal-footer>:not(:last-child) {
    margin-right: .25rem
}

.awr-modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll
}

.awr-modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #fff
}

.awr-modal-backdrop.fade {
    transition: opacity .15s linear;
    opacity: .0001
}

.awr-modal-backdrop.show {
    opacity: .7
}

.awr-none {
    display: none!important
}

.awr-inline {
    display: inline!important
}

.awr-inline-block {
    display: inline-block!important
}

.awr-block {
    display: block!important
}

.awr-table {
    display: table!important
}

.awr-table-row {
    display: table-row!important
}

.awr-table-cell {
    display: table-cell!important
}

.awr-flex {
    display: flex!important
}

.awr-inline-flex {
    display: inline-flex!important
}

@media (min-width:576px) {
    .awr-sm-none {
        display: none!important
    }
    .awr-sm-inline {
        display: inline!important
    }
    .awr-sm-inline-block {
        display: inline-block!important
    }
    .awr-sm-block {
        display: block!important
    }
    .awr-sm-table {
        display: table!important
    }
    .awr-sm-table-row {
        display: table-row!important
    }
    .awr-sm-table-cell {
        display: table-cell!important
    }
    .awr-sm-flex {
        display: flex!important
    }
    .awr-sm-inline-flex {
        display: inline-flex!important
    }
}

@media (min-width:768px) {
    .awr-md-none {
        display: none!important
    }
    .awr-md-inline {
        display: inline!important
    }
    .awr-md-inline-block {
        display: inline-block!important
    }
    .awr-md-block {
        display: block!important
    }
    .awr-md-table {
        display: table!important
    }
    .awr-md-table-row {
        display: table-row!important
    }
    .awr-md-table-cell {
        display: table-cell!important
    }
    .awr-md-flex {
        display: flex!important
    }
    .awr-md-inline-flex {
        display: inline-flex!important
    }
}

@media (min-width:992px) {
    .awr-lg-none {
        display: none!important
    }
    .awr-lg-inline {
        display: inline!important
    }
    .awr-lg-inline-block {
        display: inline-block!important
    }
    .awr-lg-block {
        display: block!important
    }
    .awr-lg-table {
        display: table!important
    }
    .awr-lg-table-row {
        display: table-row!important
    }
    .awr-lg-table-cell {
        display: table-cell!important
    }
    .awr-lg-flex {
        display: flex!important
    }
    .awr-lg-inline-flex {
        display: inline-flex!important
    }
}

@media (min-width:1200px) {
    .awr-xl-none {
        display: none!important
    }
    .awr-xl-inline {
        display: inline!important
    }
    .awr-xl-inline-block {
        display: inline-block!important
    }
    .awr-xl-block {
        display: block!important
    }
    .awr-xl-table {
        display: table!important
    }
    .awr-xl-table-row {
        display: table-row!important
    }
    .awr-xl-table-cell {
        display: table-cell!important
    }
    .awr-xl-flex {
        display: flex!important
    }
    .awr-xl-inline-flex {
        display: inline-flex!important
    }
}

@media print {
    .awr-print-none {
        display: none!important
    }
    .awr-print-inline {
        display: inline!important
    }
    .awr-print-inline-block {
        display: inline-block!important
    }
    .awr-print-block {
        display: block!important
    }
    .awr-print-table {
        display: table!important
    }
    .awr-print-table-row {
        display: table-row!important
    }
    .awr-print-table-cell {
        display: table-cell!important
    }
    .awr-print-flex {
        display: flex!important
    }
    .awr-print-inline-flex {
        display: inline-flex!important
    }
}

.awr-flex-row {
    flex-direction: row!important
}

.awr-flex-column {
    flex-direction: column!important
}

.awr-flex-row-reverse {
    flex-direction: row-reverse!important
}

.awr-flex-column-reverse {
    flex-direction: column-reverse!important
}

.awr-flex-wrap {
    flex-wrap: wrap!important
}

.awr-flex-nowrap {
    flex-wrap: nowrap!important
}

.awr-flex-wrap-reverse {
    flex-wrap: wrap-reverse!important
}

.awr-flex-fill {
    flex: 1 1 auto!important
}

.awr-flex-grow-0 {
    flex-grow: 0!important
}

.awr-flex-grow-1 {
    flex-grow: 1!important
}

.awr-flex-shrink-0 {
    flex-shrink: 0!important
}

.awr-flex-shrink-1 {
    flex-shrink: 1!important
}

.awr-justify-content-start {
    justify-content: flex-start!important
}

.awr-justify-content-end {
    justify-content: flex-end!important
}

.awr-justify-content-center {
    justify-content: center!important
}

.awr-justify-content-between {
    justify-content: space-between!important
}

.awr-justify-content-around {
    justify-content: space-around!important
}

.awr-align-items-start {
    align-items: flex-start!important
}

.awr-align-items-end {
    align-items: flex-end!important
}

.awr-align-items-center {
    align-items: center!important
}

.awr-align-items-baseline {
    align-items: baseline!important
}

.awr-align-items-stretch {
    align-items: stretch!important
}

.awr-align-content-start {
    align-content: flex-start!important
}

.awr-align-content-end {
    align-content: flex-end!important
}

.awr-align-content-center {
    align-content: center!important
}

.awr-align-content-between {
    align-content: space-between!important
}

.awr-align-content-around {
    align-content: space-around!important
}

.awr-align-content-stretch {
    align-content: stretch!important
}

.awr-align-self-auto {
    align-self: auto!important
}

.awr-align-self-start {
    align-self: flex-start!important
}

.awr-align-self-end {
    align-self: flex-end!important
}

.awr-align-self-center {
    align-self: center!important
}

.awr-align-self-baseline {
    align-self: baseline!important
}

.awr-align-self-stretch {
    align-self: stretch!important
}

@media (min-width:576px) {
    .awr-flex-sm-row {
        flex-direction: row!important
    }
    .awr-flex-sm-column {
        flex-direction: column!important
    }
    .awr-flex-sm-row-reverse {
        flex-direction: row-reverse!important
    }
    .awr-flex-sm-column-reverse {
        flex-direction: column-reverse!important
    }
    .awr-flex-sm-wrap {
        flex-wrap: wrap!important
    }
    .awr-flex-sm-nowrap {
        flex-wrap: nowrap!important
    }
    .awr-flex-sm-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }
    .awr-flex-sm-fill {
        flex: 1 1 auto!important
    }
    .awr-flex-sm-grow-0 {
        flex-grow: 0!important
    }
    .awr-flex-sm-grow-1 {
        flex-grow: 1!important
    }
    .awr-flex-sm-shrink-0 {
        flex-shrink: 0!important
    }
    .awr-flex-sm-shrink-1 {
        flex-shrink: 1!important
    }
    .awr-justify-content-sm-start {
        justify-content: flex-start!important
    }
    .awr-justify-content-sm-end {
        justify-content: flex-end!important
    }
    .awr-justify-content-sm-center {
        justify-content: center!important
    }
    .awr-justify-content-sm-between {
        justify-content: space-between!important
    }
    .awr-justify-content-sm-around {
        justify-content: space-around!important
    }
    .awr-align-items-sm-start {
        align-items: flex-start!important
    }
    .awr-align-items-sm-end {
        align-items: flex-end!important
    }
    .awr-align-items-sm-center {
        align-items: center!important
    }
    .awr-align-items-sm-baseline {
        align-items: baseline!important
    }
    .awr-align-items-sm-stretch {
        align-items: stretch!important
    }
    .awr-align-content-sm-start {
        align-content: flex-start!important
    }
    .awr-align-content-sm-end {
        align-content: flex-end!important
    }
    .awr-align-content-sm-center {
        align-content: center!important
    }
    .awr-align-content-sm-between {
        align-content: space-between!important
    }
    .awr-align-content-sm-around {
        align-content: space-around!important
    }
    .awr-align-content-sm-stretch {
        align-content: stretch!important
    }
    .awr-align-self-sm-auto {
        align-self: auto!important
    }
    .awr-align-self-sm-start {
        align-self: flex-start!important
    }
    .awr-align-self-sm-end {
        align-self: flex-end!important
    }
    .awr-align-self-sm-center {
        align-self: center!important
    }
    .awr-align-self-sm-baseline {
        align-self: baseline!important
    }
    .awr-align-self-sm-stretch {
        align-self: stretch!important
    }
}

@media (min-width:768px) {
    .awr-flex-md-row {
        flex-direction: row!important
    }
    .awr-flex-md-column {
        flex-direction: column!important
    }
    .awr-flex-md-row-reverse {
        flex-direction: row-reverse!important
    }
    .awr-flex-md-column-reverse {
        flex-direction: column-reverse!important
    }
    .awr-flex-md-wrap {
        flex-wrap: wrap!important
    }
    .awr-flex-md-nowrap {
        flex-wrap: nowrap!important
    }
    .awr-flex-md-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }
    .awr-flex-md-fill {
        flex: 1 1 auto!important
    }
    .awr-flex-md-grow-0 {
        flex-grow: 0!important
    }
    .awr-flex-md-grow-1 {
        flex-grow: 1!important
    }
    .awr-flex-md-shrink-0 {
        flex-shrink: 0!important
    }
    .awr-flex-md-shrink-1 {
        flex-shrink: 1!important
    }
    .awr-justify-content-md-start {
        justify-content: flex-start!important
    }
    .awr-justify-content-md-end {
        justify-content: flex-end!important
    }
    .awr-justify-content-md-center {
        justify-content: center!important
    }
    .awr-justify-content-md-between {
        justify-content: space-between!important
    }
    .awr-justify-content-md-around {
        justify-content: space-around!important
    }
    .awr-align-items-md-start {
        align-items: flex-start!important
    }
    .awr-align-items-md-end {
        align-items: flex-end!important
    }
    .awr-align-items-md-center {
        align-items: center!important
    }
    .awr-align-items-md-baseline {
        align-items: baseline!important
    }
    .awr-align-items-md-stretch {
        align-items: stretch!important
    }
    .awr-align-content-md-start {
        align-content: flex-start!important
    }
    .awr-align-content-md-end {
        align-content: flex-end!important
    }
    .awr-align-content-md-center {
        align-content: center!important
    }
    .awr-align-content-md-between {
        align-content: space-between!important
    }
    .awr-align-content-md-around {
        align-content: space-around!important
    }
    .awr-align-content-md-stretch {
        align-content: stretch!important
    }
    .awr-align-self-md-auto {
        align-self: auto!important
    }
    .awr-align-self-md-start {
        align-self: flex-start!important
    }
    .awr-align-self-md-end {
        align-self: flex-end!important
    }
    .awr-align-self-md-center {
        align-self: center!important
    }
    .awr-align-self-md-baseline {
        align-self: baseline!important
    }
    .awr-align-self-md-stretch {
        align-self: stretch!important
    }
}

@media (min-width:992px) {
    .awr-flex-lg-row {
        flex-direction: row!important
    }
    .awr-flex-lg-column {
        flex-direction: column!important
    }
    .awr-flex-lg-row-reverse {
        flex-direction: row-reverse!important
    }
    .awr-flex-lg-column-reverse {
        flex-direction: column-reverse!important
    }
    .awr-flex-lg-wrap {
        flex-wrap: wrap!important
    }
    .awr-flex-lg-nowrap {
        flex-wrap: nowrap!important
    }
    .awr-flex-lg-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }
    .awr-flex-lg-fill {
        flex: 1 1 auto!important
    }
    .awr-flex-lg-grow-0 {
        flex-grow: 0!important
    }
    .awr-flex-lg-grow-1 {
        flex-grow: 1!important
    }
    .awr-flex-lg-shrink-0 {
        flex-shrink: 0!important
    }
    .awr-flex-lg-shrink-1 {
        flex-shrink: 1!important
    }
    .awr-justify-content-lg-start {
        justify-content: flex-start!important
    }
    .awr-justify-content-lg-end {
        justify-content: flex-end!important
    }
    .awr-justify-content-lg-center {
        justify-content: center!important
    }
    .awr-justify-content-lg-between {
        justify-content: space-between!important
    }
    .awr-justify-content-lg-around {
        justify-content: space-around!important
    }
    .awr-align-items-lg-start {
        align-items: flex-start!important
    }
    .awr-align-items-lg-end {
        align-items: flex-end!important
    }
    .awr-align-items-lg-center {
        align-items: center!important
    }
    .awr-align-items-lg-baseline {
        align-items: baseline!important
    }
    .awr-align-items-lg-stretch {
        align-items: stretch!important
    }
    .awr-align-content-lg-start {
        align-content: flex-start!important
    }
    .awr-align-content-lg-end {
        align-content: flex-end!important
    }
    .awr-align-content-lg-center {
        align-content: center!important
    }
    .awr-align-content-lg-between {
        align-content: space-between!important
    }
    .awr-align-content-lg-around {
        align-content: space-around!important
    }
    .awr-align-content-lg-stretch {
        align-content: stretch!important
    }
    .awr-align-self-lg-auto {
        align-self: auto!important
    }
    .awr-align-self-lg-start {
        align-self: flex-start!important
    }
    .awr-align-self-lg-end {
        align-self: flex-end!important
    }
    .awr-align-self-lg-center {
        align-self: center!important
    }
    .awr-align-self-lg-baseline {
        align-self: baseline!important
    }
    .awr-align-self-lg-stretch {
        align-self: stretch!important
    }
}

@media (min-width:1200px) {
    .awr-flex-xl-row {
        flex-direction: row!important
    }
    .awr-flex-xl-column {
        flex-direction: column!important
    }
    .awr-flex-xl-row-reverse {
        flex-direction: row-reverse!important
    }
    .awr-flex-xl-column-reverse {
        flex-direction: column-reverse!important
    }
    .awr-flex-xl-wrap {
        flex-wrap: wrap!important
    }
    .awr-flex-xl-nowrap {
        flex-wrap: nowrap!important
    }
    .awr-flex-xl-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }
    .awr-flex-xl-fill {
        flex: 1 1 auto!important
    }
    .awr-flex-xl-grow-0 {
        flex-grow: 0!important
    }
    .awr-flex-xl-grow-1 {
        flex-grow: 1!important
    }
    .awr-flex-xl-shrink-0 {
        flex-shrink: 0!important
    }
    .awr-flex-xl-shrink-1 {
        flex-shrink: 1!important
    }
    .awr-justify-content-xl-start {
        justify-content: flex-start!important
    }
    .awr-justify-content-xl-end {
        justify-content: flex-end!important
    }
    .awr-justify-content-xl-center {
        justify-content: center!important
    }
    .awr-justify-content-xl-between {
        justify-content: space-between!important
    }
    .awr-justify-content-xl-around {
        justify-content: space-around!important
    }
    .awr-align-items-xl-start {
        align-items: flex-start!important
    }
    .awr-align-items-xl-end {
        align-items: flex-end!important
    }
    .awr-align-items-xl-center {
        align-items: center!important
    }
    .awr-align-items-xl-baseline {
        align-items: baseline!important
    }
    .awr-align-items-xl-stretch {
        align-items: stretch!important
    }
    .awr-align-content-xl-start {
        align-content: flex-start!important
    }
    .awr-align-content-xl-end {
        align-content: flex-end!important
    }
    .awr-align-content-xl-center {
        align-content: center!important
    }
    .awr-align-content-xl-between {
        align-content: space-between!important
    }
    .awr-align-content-xl-around {
        align-content: space-around!important
    }
    .awr-align-content-xl-stretch {
        align-content: stretch!important
    }
    .awr-align-self-xl-auto {
        align-self: auto!important
    }
    .awr-align-self-xl-start {
        align-self: flex-start!important
    }
    .awr-align-self-xl-end {
        align-self: flex-end!important
    }
    .awr-align-self-xl-center {
        align-self: center!important
    }
    .awr-align-self-xl-baseline {
        align-self: baseline!important
    }
    .awr-align-self-xl-stretch {
        align-self: stretch!important
    }
}

.awr-required {
    color: #d7373c;
    padding: 0 1px
}

.awr-require-field {
    padding-top: 10px;
    padding-bottom: 10px
}

.awr h1,
.awr h2,
.awr h3,
.awr h4,
.awr h5,
.awr h6 {
    font-family: MarkForMC-Lt, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

.awr h1+.awr-require-field,
.awr h2+.awr-require-field,
.awr h3+.awr-require-field,
.awr h4+.awr-require-field,
.awr h5+.awr-require-field,
.awr h6+.awr-require-field {
    padding-top: 0
}

.awr h1 a,
.awr h2 a,
.awr h3 a,
.awr h4 a,
.awr h5 a,
.awr h6 a {
    font-family: MarkForMC-Lt, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

.awr a {
    font-family: MarkForMC, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

.awr select {
    height: 2.5rem;
    border: 1px solid #96918b;
    padding: 10px 52px 10px 16px;
    font-size: .875rem;
    line-height: 1.25rem;
    border-radius: .25rem;
    width: 100%;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, #96918b 0), linear-gradient(135deg, #96918b 50%, transparent 0);
    background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px);
    background-size: 5px 5px, 5px 5px;
    background-repeat: no-repeat
}

.awr select::placeholder {
    color: #96918b
}

.awr select:focus {
    color: #000;
    border-color: #000;
    background-image: linear-gradient(45deg, transparent 50%, #000 0), linear-gradient(135deg, #000 50%, transparent 0)
}

.awr .awr-heading-xl {
    font-size: 5.25rem;
    line-height: 6rem
}

.awr .awr-heading-lg,
.awr .awr-heading-xl {
    font-family: MarkForMC-ExtraLt, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
}

.awr .awr-heading-lg {
    font-size: 3.75rem;
    line-height: 4.5rem
}

.awr .awr-font-size-lg {
    font-size: 1.125rem;
    line-height: 1.625rem
}

.awr .awr-font-size-md {
    font-size: 1rem;
    line-height: 1.5rem
}

.awr .awr-font-size-sm {
    font-size: .75rem;
    line-height: 1rem
}

.awr .awr-bold {
    font-weight: 700
}

.awr .awr-eyebrow-lg {
    font-size: .875rem;
    line-height: 1.5rem
}

.awr .awr-eyebrow-lg,
.awr .awr-eyebrow-sm {
    font-display: "MarkForMC-Bold", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
}

.awr .awr-eyebrow-sm {
    font-size: .75rem;
    line-height: 1rem
}

.awr .awr-text-eyebrow,
.awr .awr-title-eyebrow {
    text-transform: none;
    letter-spacing: 1.8px
}

@media (max-width:767.98px) {
    .awr .awr-heading-lg,
    .awr .awr-heading-xl {
        font-size: 2.25rem;
        line-height: 2.625rem
    }
}

.awr-no-outline {
    outline: 0
}

@keyframes awr-marquee {
    0% {
        text-indent: 20px
    }
    to {
        text-indent: -485px
    }
}

.awr-marquee {
    overflow: hidden;
    white-space: nowrap
}

.awr-marquee,
.awr-marquee:hover {
    animation: marquee 17s linear infinite;
    text-overflow: inherit
}

.awr-badge {
    width: .625rem;
    height: .625rem;
    display: block;
    border-radius: 50%
}
