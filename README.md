# CSS loader

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
  * [border](#border)
  * [ball](#ball)
  * [smartphone](#smartphone)
  * [clock](#clock)
  * [curtain](#curtain)
  * [music](#music)
* [Contributing](#contributing)
* [Browser Support](#browser-support)

## Install

```bash
npm install pure-css-loader
```

Also you can clone the repository or [download the zip file](https://github.com/raphaelfabeni/css-loader/archive/master.zip) and get the main *CSS* file that is located in: `dist/css-loader.css`.

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

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-default) :metal:

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

The variations _data-half_, _data-text_ and _data-blink_ work together. 😄

### Double

```html
<div class="loader loader-double is-active"></div>
```

![loader-double](https://cloud.githubusercontent.com/assets/1345662/19314508/c2279a06-9070-11e6-8079-4fa82b5f2610.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-double) :metal:

### Bar

```html
<div class="loader loader-bar is-active"></div>
```

![loader-bar](https://cloud.githubusercontent.com/assets/1345662/19314685/6d719056-9071-11e6-88c8-2c3750ca0198.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-bar) :metal:

#### Variations

Like the `loader` example, it's also possible to pass the `data-text` and `blink` attributes.

```html
<div class="loader loader-bar is-active" data-text></div>
<!-- -->
<div class="loader loader-bar is-active" data-text="Custom text"></div>
<!-- -->
<div class="loader loader-bar is-active" data-text data-blink></div>
```

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-bar-text) :metal:

**rounded**: passing the `data-rounded` attribute, it's possible to add a simple `border-radius` to the loader.

![loader-bar-rounded](https://cloud.githubusercontent.com/assets/1345662/19315031/ab850700-9072-11e6-9cd4-9fe899f05a10.gif)

```html
<div class="loader loader-bar is-active" data-text data-rounded></div>
```

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-bar-rounded) :metal:

### Border

![loader-border](https://cloud.githubusercontent.com/assets/1345662/19314686/6d733622-9071-11e6-8167-a55e6c16a02f.gif)

```html
<div class="loader loader-border is-active"></div>
```

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-border) :metal:

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

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-ball) :metal:

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

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-smartphone) :metal:

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

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-clock) :metal:

### Curtain

```html
<div class="loader loader-curtain is-active"></div>
```

![loader-curtain-default](https://cloud.githubusercontent.com/assets/1345662/20083193/fd7043fc-a541-11e6-8f86-e08cbb2c02c2.gif)

[See it](http://raphaelfabeni.com.br/css-loader/#/loader-curtain) :metal:

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

## Contributing

1. Clone this repository.
2. `npm install` and `gulp`
3. Open => `http://localhost:3000`
4. Make your magic contribution.
5. Open a _PR_ with a new branch describing your changes. <o/

## Browser Support

All examples use CSS _animation_ which is supported by [most current browsers](http://caniuse.com/#search=animation).

| <img src="https://github.com/alrra/browser-logos/blob/master/chrome/chrome_128x128.png?raw=true" width="48px" height="48px" alt="Chrome logo"> | <img src="https://github.com/alrra/browser-logos/blob/master/firefox/firefox_128x128.png?raw=true" width="48px" height="48px" alt="Firefox logo"> | <img src="https://github.com/alrra/browser-logos/blob/master/internet-explorer/internet-explorer_128x128.png?raw=true" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="https://github.com/alrra/browser-logos/blob/master/opera/opera_128x128.png?raw=true" width="48px" height="48px" alt="Opera logo"> | <img src="https://github.com/alrra/browser-logos/blob/master/safari/safari_128x128.png?raw=true" width="48px" height="48px" alt="Safari logo"> | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/android/android_128x128.png" width="48px" height="48px" alt="Android Browser Logo" >
|:---:|:---:|:---:|:---:|:---:|:---:|
| 43+ ✔ | 16+ ✔ | 10+ ✔ | 30+ ✔ | 9+ ✔ | 5.2+ ✔

Based on _Can i Use_. One thing to note is that the CSS file has no browser prefixes, but you can easily add them and increase the browser support.

## License

[MIT License](https://raphaelfabeni.mit-license.org/) © Raphael Fabeni

