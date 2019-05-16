# CSS loader

[![CDNJS](https://img.shields.io/cdnjs/v/css-loader.svg)](https://cdnjs.com/libraries/css-loader) [![npm version](https://badge.fury.io/js/pure-css-loader.svg)](https://badge.fury.io/js/pure-css-loader) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/raphaelfabeni/css-loader/issues) [![HitCount](http://hits.dwyl.io/raphaelfabeni/css-loader.svg)](http://hits.dwyl.io/raphaelfabeni/css-loader)


> A few simple examples of loaders using only one `div` and *CSS*.

![loader-g](https://cloud.githubusercontent.com/assets/1345662/19414412/5e472d6c-9322-11e6-9407-5e3662072aee.gif)

[Try it online! :metal:](http://www.raphaelfabeni.com.br/css-loader/)

## Why

It's usually common to show a loader to users when they must wait for something in a web application (an _ajax_ request or a form submit, etc). _Gif_ image loaders were great but by using CSS we can avoid the image request, also it's easier to customise and maintain and it's cooler.

## toc

* [Install](#install)
* [Setup](#setup)
* [Examples](#examples)
  * [default](#default)
  * [double](#double)
  * [bar](#bar)
  * [bar ping pong](#bar-ping-pong)
  * [border](#border)
  * [ball](#ball)
  * [smartphone](#smartphone)
  * [clock](#clock)
  * [curtain](#curtain)
  * [music](#music)
  * [pokeball](#pokeball)
  * [bouncing](#bouncing)
* [Contributing](#contributing)
* [Browser Support](#browser-support)

## Install

```bash
npm install pure-css-loader
```

Also you can clone the repository or [download the zip file](https://github.com/raphaelfabeni/css-loader/archive/master.zip) and get the main *CSS* file that is located in: `dist/css-loader.css`.

## Thanks

Thanks for all this [amazing people](https://github.com/raphaelfabeni/css-loader/graphs/contributors) who already helped me with the project.

## Setup

Add the CSS file to your project and add the link to the file:

```html
<link rel="stylesheet" href="path/to/css-loader.css">
```

Select the loader and add the corresponding HTML. In order to show the loader, you need to add the helper CSS class `is-active`. And to hide the loader, just do the opposite, removing the CSS helper from the loader. You can do it with JavaScript.

```html
<!-- Loader -->
<div class="loader loader-default"></div>

<!-- Loader active -->
<div class="loader loader-default is-active"></div>
```

## Examples

### Default

```html
<div class="loader loader-default is-active"></div>
```

![loader](https://cloud.githubusercontent.com/assets/1345662/19313531/2c715f18-906d-11e6-856a-17ca264112de.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-default) :metal: | [CSS](https://raw.githubusercontent.com/raphaelfabeni/css-loader/master/dist/loader-default.css) :sparkles:

#### Variations

**data-text**: add a _Loading_ text to the loader. Just add the `data-text` attribute.

```html
<div class="loader loader-default is-active" data-text></div>
```

![loader-data-text](https://cloud.githubusercontent.com/assets/1345662/19313794/1fdf0ce0-906e-11e6-8a9f-39d2421a41d6.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-default-text) :metal:

It's also possible to change the text, just passing a value to the attribute `data-text`.

```html
<div class="loader loader-default is-active" data-text="Custom text"></div>
```

![loader-data-text-custom](https://cloud.githubusercontent.com/assets/1345662/19313797/21e3fb22-906e-11e6-8f0a-11cc9c0fb8d2.gif)

**blink**: passing the `data-blink` attribute, you can add a simple _fade_ animation to the text loader

```html
<div class="loader loader-default is-active" data-text data-blink></div>
```

![loader-blink](https://cloud.githubusercontent.com/assets/1345662/19313798/25fa2830-906e-11e6-88d2-2f165a68cb80.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-default-blink) :metal:

**half**: a _half_ loader.

![loader-half](https://cloud.githubusercontent.com/assets/1345662/19418371/55ae80cc-93a1-11e6-9273-22955e62a6a4.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-default-half) :metal:

The variations _data-half_, _data-text_ and _data-blink_ works together. 😄

### Double

```html
<div class="loader loader-double is-active"></div>
```

![loader-double](https://cloud.githubusercontent.com/assets/1345662/19314508/c2279a06-9070-11e6-8079-4fa82b5f2610.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-double) :metal: | [CSS](https://raw.githubusercontent.com/raphaelfabeni/css-loader/master/dist/loader-double.css) :sparkles:

### Bar | [CSS](https://raw.githubusercontent.com/raphaelfabeni/css-loader/master/dist/loader-bar.css) :sparkles:

```html
<div class="loader loader-bar is-active"></div>
```

![loader-bar-updated](https://cloud.githubusercontent.com/assets/1345662/23286931/5eae58a8-fa19-11e6-8718-ae28d633ed1e.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-bar) :metal:

#### Variations

Like the `loader` example, it's also possible to pass the `data-text` and `blink` attributes.

```html
<div class="loader loader-bar is-active" data-text></div>
<!-- -->
<div class="loader loader-bar is-active" data-inverse></div>
<!-- -->
<div class="loader loader-bar is-active" data-text="Custom text"></div>
<!-- -->
<div class="loader loader-bar is-active" data-text data-blink></div>
```

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-bar-text) :metal:

**rounded**: passing the `data-rounded` attribute, it's possible to add a simple `border-radius` to the loader.

![loader-bar-rounded-updated](https://cloud.githubusercontent.com/assets/1345662/23287022/abe16980-fa19-11e6-87c3-c7a4c28e7bb5.gif)

```html
<div class="loader loader-bar is-active" data-text data-rounded></div>
```

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-bar-rounded) :metal:

**inverse**: passing the `data-inverse` attribute, it's possible change the direction of the animation (from left to right).

![loader-bar](https://cloud.githubusercontent.com/assets/1345662/19314685/6d719056-9071-11e6-88c8-2c3750ca0198.gif)

```html
<div class="loader loader-bar is-active" data-inverse></div>
```

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-bar-inverse) :metal:

*Obs*. It's also possible pass a parameter `data-text` with a content value that will show as a text loader, or with no value, and the default *loading* text  it's going to show instead.

### Bar Ping Pong

![loader-bar-ping-pong](https://cloud.githubusercontent.com/assets/1345662/23591096/deed9e04-01c9-11e7-9d5f-356fa249ff00.gif)

```html
<div class="loader loader-bar-ping-pong is-active"></div>
```

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-bar-ping-pong) :metal: | [CSS](https://raw.githubusercontent.com/raphaelfabeni/css-loader/master/dist/loader-bar-ping-pong.css) :sparkles:

#### Variations

**rounded**: passing the `data-rounded` attribute, it's possible to add a `border-radius` to the bar and the _ticker_ transforms into a circle.

![loader-bar-ping-pong-rounded](https://cloud.githubusercontent.com/assets/1345662/23591095/deea37e6-01c9-11e7-81e3-86f866a94d40.gif)

```html
<div class="loader loader-bar-ping-pong is-active" data-rounded></div>
```

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-bar-ping-pong-rounded) :metal:

### Border

![loader-border](https://cloud.githubusercontent.com/assets/1345662/19314686/6d733622-9071-11e6-8167-a55e6c16a02f.gif)

```html
<div class="loader loader-border is-active"></div>
```

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-border) :metal: | [CSS](https://raw.githubusercontent.com/raphaelfabeni/css-loader/master/dist/loader-border.css) :sparkles:

#### Variations

Like the `loader` example, it's also possible to pass the `data-text` and `blink` attributes.

```html
<div class="loader loader-border is-active" data-text></div>
<!-- -->
<div class="loader loader-border is-active" data-text="Custom text"></div>
<!-- -->
<div class="loader loader-border is-active" data-text data-blink></div>
```

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-border-text) :metal:

### Ball

```html
<div class="loader loader-ball is-active"></div>
```

![loader-ball](https://cloud.githubusercontent.com/assets/1345662/19314687/6d771ff8-9071-11e6-8839-713066f11056.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-ball) :metal: | [CSS](https://raw.githubusercontent.com/raphaelfabeni/css-loader/master/dist/loader-ball.css) :sparkles:

#### Variations

**shadow**: a version of the ball with inset shadow.

![loader-ball-shadow](https://cloud.githubusercontent.com/assets/1345662/19502619/06f1c906-958d-11e6-87c9-d64b13688485.gif)

```html
<div class="loader loader-ball is-active" data-shadow></div>
```

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-ball-shadow) :metal:

### Smartphone

```html
<div class="loader loader-smartphone is-active"></div>
```

![loader-smartphone-empty](https://cloud.githubusercontent.com/assets/1345662/19544262/83cd4b42-965c-11e6-9238-91a48f0d5cf5.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-smartphone) :metal: | [CSS](https://raw.githubusercontent.com/raphaelfabeni/css-loader/master/dist/loader-smartphone.css) :sparkles:

#### Variations

**w/ screen text**: it's possible to pass an attribute to the loader and show a simple text inside the screen. Like the other one, if we only pass the attribute, a default _loading_ text is shown; but you can pass a custom text. Just remember that it can't be a big word (our smartphone screen is small).

```html
<!-- default loading text -->
<div class="loader loader-smartphone is-active" data-screen></div>

<!-- custom text -->
<div class="loader loader-smartphone is-active" data-screen="hello"></div>
```

![loader-smartphone](https://cloud.githubusercontent.com/assets/1345662/19544263/83ec08a2-965c-11e6-99f3-fea1896c0191.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-smartphone-text) :metal:

### Clock

```html
<div class="loader loader-clock is-active"></div>
```

![loader-clock](https://cloud.githubusercontent.com/assets/1345662/19628192/f09d9a88-9936-11e6-8a2c-de22df0f820b.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-clock) :metal: | [CSS](https://raw.githubusercontent.com/raphaelfabeni/css-loader/master/dist/loader-clock.css) :sparkles:

### Curtain

```html
<div class="loader loader-curtain is-active"></div>
```

![loader-curtain-default](https://cloud.githubusercontent.com/assets/1345662/20083193/fd7043fc-a541-11e6-8f86-e08cbb2c02c2.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-curtain) :metal: | [CSS](https://raw.githubusercontent.com/raphaelfabeni/css-loader/master/dist/loader-curtain.css) :sparkles:

#### Variations

**brazilian**: a simple version using the traditional brazilian green and yellow. :brazil:

```html
<div class="loader loader-curtain is-active" data-brazilian></div>
```

![loader-curtain-br](https://cloud.githubusercontent.com/assets/1345662/20083191/fd5596c4-a541-11e6-8f26-1a9325e0401e.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-curtain-brazilian) :metal:

**colorful**: a colorful version.

```html
<div class="loader loader-curtain is-active" data-colorful></div>
```

![loader-curtain-color](https://cloud.githubusercontent.com/assets/1345662/20083192/fd59f854-a541-11e6-97eb-6bd380ff5356.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-curtain-colorful) :metal:

**w/ custom text**: it's also possible customize the text loader. It's just pass the data attribute `data-curtain-text` with the value desired.

```html
<div class="loader loader-curtain is-active" colorful data-curtain-text="Hello"></div>
```

### Music

```html
<div class="loader loader-music is-active" data-hey-oh></div>
```

This loader differs from the other because we have to pass an attribute to it, according to song's chorus that we want to load.

[CSS](https://raw.githubusercontent.com/raphaelfabeni/css-loader/master/dist/loader-music.css) :sparkles:

#### Variations

**hey-oh**: The classic [Hey! Oh! Let's Go!](https://www.youtube.com/watch?v=xuOnePNlOgY) from Ramones.

```html
<div class="loader loader-music is-active" data-hey-oh></div>
```

![loader-music-hey-oh](https://cloud.githubusercontent.com/assets/1345662/20288053/c3179248-aab7-11e6-8551-9819f523fbee.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-music-hey-oh) :metal:

**no-cry**: [No woman no cry](https://www.youtube.com/watch?v=x59kS2AOrGM) from Bob Marley.

```html
<div class="loader loader-music is-active" data-no-cry></div>
```

![loader-music-no-woman](https://cloud.githubusercontent.com/assets/1345662/20288054/c3363950-aab7-11e6-882a-8fdecdca06d3.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-music-no-cry) :metal:

**we-are**: [We are the world](https://www.youtube.com/watch?v=x59kS2AOrGM) from Michael Jackson.

```html
<div class="loader loader-music is-active" data-we-are></div>
```

![loader-music-we-are](https://cloud.githubusercontent.com/assets/1345662/20288055/c33fd910-aab7-11e6-8a0d-6cd303759c92.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-music-we-are) :metal:

**rock-you**: [We will rock you](https://www.youtube.com/watch?v=-tJYN-eG1zk) from Queen.

```html
<div class="loader loader-music is-active" data-rock-you></div>
```

![loader-music-we-will](https://cloud.githubusercontent.com/assets/1345662/20288056/c344bf66-aab7-11e6-9adb-7fbc21bf1c09.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-music-rock-you) :metal:

### Pokeball

```html
<div class="loader loader-pokeball is-active"></div>
```

![loader-pokeball](https://cloud.githubusercontent.com/assets/1345662/22757245/3ddfc9d4-ee31-11e6-97e3-5d7221542e2e.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-pokeball) :metal: | [CSS](https://raw.githubusercontent.com/raphaelfabeni/css-loader/master/dist/loader-pokeball.css) :sparkles:

### Bouncing

```html
<div class="loader loader-bouncing is-active"></div>
```

![loader-bouncing](https://user-images.githubusercontent.com/397832/37002847-ca80f236-20a9-11e8-9bd0-246c5c7f980e.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-bouncing) :metal:

## Contributing

1. Clone this repository.
2. Run `yarn install` and `yarn start`
3. Open `http://localhost:3000`.
4. Make your magic contribution.
  * Choose a special name for your loader (`loaders-name-you-want`) and add to `loaders.json`. 
  * Create the example file inside the `examples` folder (uses the loader name you chose). You can copy one of the examples and make the necessary changes.
  * Create the `.sass` files. The first one inside `src` folder which is the root style file for the loader and it will import the other files. And the other one, inside `loaders` folder with the specific style for the loader (both must have the same name you chose  - _loader-name-you-chose_).
5. Run `yarn build` to create/update the dist files.
6. Open a _PR_ with a new branch describing your changes. <o/

All examples use CSS _animation_ which is supported by [most current browsers](http://caniuse.com/#search=animation).

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_128x128.png" width="48px" height="48px" alt="Chrome logo"> | <img src="https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_128x128.png?raw=true" width="48px" height="48px" alt="Firefox logo"> | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/40.2.1/archive/internet-explorer_9-11/internet-explorer_9-11_128x128.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="https://github.com/alrra/browser-logos/blob/master/src/opera/opera_128x128.png?raw=true" width="48px" height="48px" alt="Opera logo"> | <img src="https://github.com/alrra/browser-logos/blob/master/src/safari/safari_128x128.png?raw=true" width="48px" height="48px" alt="Safari logo"> | <img src="https://github.com/alrra/browser-logos/blob/master/src/android/android_128x128.png?raw=true" width="48px" height="48px" alt="Android Browser Logo" >
|:---:|:---:|:---:|:---:|:---:|:---:|
| 43+ ✔ | 16+ ✔ | 10+ ✔ | 30+ ✔ | 9+ ✔ | 5.2+ ✔

Based on _Can i Use_. One thing to note is that the CSS file has no browser prefixes, but you can easily add them and increase the browser support.

## License

[MIT License](https://raphaelfabeni.mit-license.org/) © Raphael Fabeni
