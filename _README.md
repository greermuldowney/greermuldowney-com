This page is best viewed at https://github.com/greermuldowney/greermuldowney-com/blob/main/_README.md

## Setup

### Setup GitHub SSH keys

1. Open Terminal and set up new SSH keys:
    ```
    ssh-keygen
    <press enter 3 times>
    cat ~/.ssh/id_rsa.pub
    ```
1. Go to https://github.com/settings/keys, log in if necessary
1. "New SSH key"
1. Enter any name for the key under "Title".
1. Copy-paste the key from Terminal. I triple-click the gobbledygook and it should highlight everything from "ssh-rsa" through to "user-name@machine-name.local".
1. "Add SSH key"

### Download the git repository

1. Download GitHub Desktop: https://desktop.github.com
1. Open up the app and log in.
1. Clone the repository.

### Install or update ruby

Inspired by https://mac.install.guide/ruby/index.html

1. Install `brew`:
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
1. Add Homebrew to `PATH` in `~/.zprofile`:
    ```
    touch ~/.zprofile
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
    brew doctor
    ```
1. Install `asdf`:
    ```
    brew install asdf
    echo -e "\n. $(brew --prefix asdf)/libexec/asdf.sh" >> ~/.zshrc
    ```
1. Open a new Terminal window. Install `ruby` and set the latest version to be the default:
    ```
    asdf --version
    echo $PATH
    asdf plugin add ruby
    asdf install ruby latest
    asdf global ruby 3.1.2
    ```
1. Open a new Terminal window.
1. Install `jekyll`:
    ```
    gem install jekyll
    cd <directory-to-repository>
    bundle install
    ```

## Local debugging

1. In terminal, `bundle exec jekyll serve`
1. Open `http://127.0.0.1:4000` in the browser.


# Jekyll and YAML

Each page and post has a metadata section at the top, contained within the `---` lines. This section is called _front matter_ in [Jekyll parlance](https://jekyllrb.com/docs/front-matter/), and the formatting is based on [YAML](https://learnxinyminutes.com/docs/yaml/).

YAML is quirky, so make sure you are using a text editor (Sublime Text, BBEdit) and not a word processor (TextEdit, Microsoft Word). All of the indentation needs to be consistent, and use tabs or spaces. In this project, they are all spaces.

# Home page

The home page showcases a random image as the background. You can update the set of images the site chooses from by editing the `random-images` property in the front matter of `index.md`. The image is assumed to exist under `assets/series/` so you only need to specify the directory from there.

# Projects

For photography and curatorial sections, each project is treated like a blog post.

## Create a new project by creating a new post

To create a new project, create a new file under the appropriate `_posts` directory. Make sure to format it as `YYYY-MM-DD-name-of-project.md` (note the `md` file extension).

Taking one of the existing posts, and duplicating and modifying it may be the easiest way to add a new project.

When you add a new post, it will automatically be added to the post's associated overview page.

## Front matter contains metadata for the project

In the file for the post, the front matter contains metadata that is used throughout the site. It is used to create the image gallery. Below the front matter is the actual body text.

These are the top-level properties used in posts:

```
title: REQUIRED
subtitle: optional
end-date: optional

photo-directory-prefix: REQUIRED
preferred-splash-image: optional
photos: REQUIRED
    - filename: REQUIRED
    ...
```

* `title` and `subtitle` are self-explanatory. Straight quotes will automatically be turned into smart quotes.
* `end-date`: This is used with the date of the post (listed in the filename) to create the date range for a project. In the Photography section it only lists the year, so the month and day do not matter. However, if you have multiple projects in a year, you can increment the month to force a specific order. Without this, the project is assumed to be open-ended, and has no end date.
* `photo-directory-prefix`: This points to the subdirectory under `assets/series/` where the photos for the project exist. Make sure to include the ending slash, e.g. `photo-directory-prefix: cape-ann/`.
* `photos`: This contains an indented list of all of the photos, to be displayed in order.
* `preferred-splash-image`: In the overview pages, the first photo in `photos` is used to represent the project. You can override that default here.

For the Curatorial section there are these additional properties:

```
location: REQUIRED
participants: optional
    what-are-they-called: REQUIRED
    who-are-they: REQUIRED
        - name: REQUIRED
          note: optional
          url: optional
        ...
```

* `location`: Where the exhibition or show was held.
* `participants`: If you wish to list the participants, include this whole section.
* `what-are-they-called`: The text used as the heading for this section. Examples: "Participants", "Featured Students"
* `who-are-they`: The list of participants. Only the `name` is required. The `note` will be listed immediately after `name` in smaller text. The optional `url` will turn the `name` into a link. Make sure that the property names line up neatly with spaces.

## Specifying the dates for a project

For Photography, the year matters the most. If you have multiple projects in the same year, you can order them explicitly by using months later in the year.

For Curatorial, the actual full dates are used.

If the project has an end date, you specify that in the front matter. In the top section of the post, between the `---` section, add the `end-date` property. For Photography, the year

# Text

Here's a [basic guide to Markdown](https://www.markdownguide.org/basic-syntax/). Jekyll actually uses a more fully-featured variant called [kramdown](https://kramdown.gettalong.org/documentation.html).

Hyphens: "-" (dash key) is for words. "–" (en dash, Option-dash) is for date ranges and used throughout the project pages. "—" (em dash, Option-Shift-dash) is for text. See CV for best examples.

Smart quotes: all straight quotes will be converted to smart quotes.

`&nbsp;`: In some specific instances I wanted to avoid have a line break between two words because it looked odd or ugly. Examples: "Part 3", "Boston, MA". To tell the browser to not break a line between those words, replace the space with `&nbsp;` (non-breaking space).