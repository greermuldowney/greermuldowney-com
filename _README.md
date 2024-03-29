This page is best viewed at https://github.com/greermuldowney/greermuldowney-com/blob/main/_README.md

# Making changes to GitHub website

## Set up your desktop

* Open the GitHub Desktop app.
* Open the Sublime Text app and set up a project window.
    * `Command-N` to create a new window in Sublime Text
    * In Finder, go to the repository directory `greermuldowney-com/`
    * Drag the folder icon in the title bar of the Finder window, into the Sublime Text window. A sidebar containing the project folder and the entire directory structure should appear.
* Open Terminal.
    * Type in `cd ` (with the extra space at the end)
    * Drag the folder icon in the title bar of the Finder window, into the Terminal window. The full path to the project folder should appear.
    * Press Enter.
    * Type in `asdf exec bundle exec jekyll serve`
    * You should see output similar to this:
        ```
               Configuration file: /Volumes/Projects/greermuldowney-com/_config.yml
                   Source: /Volumes/Projects/greermuldowney-com
              Destination: /Volumes/Projects/greermuldowney-com/_site
        Incremental build: disabled. Enable with --incremental
             Generating...
              Jekyll Feed: Generating feed for posts
                           done in 1.135 seconds.
        Auto-regeneration: enabled for '/Volumes/Projects/greermuldowney-com'
           Server address: http://127.0.0.1:4000/
        ```
    * In your web browser, load http://127.0.0.1:4000/. You should see the website.

## Update your local repository with the latest files from GitHub

* In the GitHub Desktop app, click "Fetch" then "Pull"

## How to make changes

* Edit the files in Sublime Text.
* See how your changes affect the website by loading your webpage through http://127.0.0.1:4000

If the changes look good, it's time to commit it to your local repository.

* In GitHub Desktop, review the changes.
* If there is a specific change you want to revert, right-click the thin darker border on the right-hand side of the left-hand gutter, and select "Discard Modified Lines..."
* When the changes look good, enter a title and optional description in the bottom-left hand panel.
* Click "Commit"

# How to push changes to the website

When you're ready to deploy all of your changes to the live website:

* In GitHub Desktop, click "Push"

# When you're done with editing the website

* In Terminal, `Control-C` to stop the local web server.
* Quit Terminal, Sublime Text, GitHub Desktop.


# How the site is structured

## Jekyll and YAML

Each page and post has a metadata section at the top, contained within the `---` lines. This section is called _front matter_ in [Jekyll parlance](https://jekyllrb.com/docs/front-matter/), and the formatting is based on [YAML](https://learnxinyminutes.com/docs/yaml/).

YAML is quirky, so make sure you are using a text editor (Sublime Text, BBEdit) and not a word processor (TextEdit, Microsoft Word). All of the indentation needs to be consistent, and use tabs or spaces. In this project, they are all spaces.

## Home page

The home page showcases a random image as the background. You can update the set of images the site chooses from by editing the `random-images` property in the front matter of `index.md`. The image is assumed to exist under `assets/series/` so you only need to specify the directory from there.

## Projects

For photography and curatorial sections, each project is treated like a blog post.

### Create a new project by creating a new post

To create a new project, create a new file under the appropriate `_posts` directory. Make sure to format it as `YYYY-MM-DD-name-of-project.md` (note the `md` file extension).

Taking one of the existing posts, and duplicating and modifying it may be the easiest way to add a new project.

When you add a new post, it will automatically be added to the post's associated overview page.

### Front matter contains metadata for the project

In the file for the post, the front matter contains metadata that is used throughout the site. It is used to create the image gallery. Below the front matter is the actual body text.

These are the top-level properties used in posts:

```
title: REQUIRED
subtitle: optional
collaborator: optional
end-date: optional

photo-directory-prefix: REQUIRED
preferred-splash-image: optional
photos: REQUIRED
    - filename: REQUIRED
    - video-filename: REQUIRED
      placeholder-image: REQUIRED
    ...
```

* `title` and `subtitle` are self-explanatory. Straight quotes will automatically be turned into smart quotes.
* `collaborator`: Include this if relevant.
* `end-date`: This is used with the date of the post (listed in the filename) to create the date range for a project. In the Photography section it only lists the year, so the month and day do not matter. However, if you have multiple projects in a year, you can increment the month to force a specific order. Without this, the project is assumed to be open-ended, and has no end date.
* `photo-directory-prefix`: This points to the subdirectory under `assets/series/` where the photos for the project exist. Make sure to include the ending slash, e.g. `photo-directory-prefix: cape-ann/`.
* `photos`: This contains an indented list of all of the photos, to be displayed in order. If the photo is a video, use `video-filename` instead of `filename`.
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

### Specifying the dates for a project

For Photography, the year matters the most. If you have multiple projects in the same year, you can order them explicitly by using months later in the year.

For Curatorial, the actual full dates are used.

If the project has an end date, you specify that in the front matter. In the top section of the post, between the `---` section, add the `end-date` property. For Photography, the year
