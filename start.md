---
layout: default
title: Start Page
sitemap: false
---

<style>
    main p { max-width: 50em; }
    code { background-color: #fc004710;}
    code strong { background-color: #fc004718;}
    h1, h2, h3, h4, h5, h6 { margin-top: revert; margin-bottom: revert; }
    table { border-collapse: collapse; }
    td { padding: .1em 2em .1em 0; }
    img { max-width: 30em; }
</style>

{%- assign ghEdit = "https://github.com/greermuldowney/greermuldowney-com/edit/main/" %}
{%- assign ghTree = "https://github.com/greermuldowney/greermuldowney-com/tree/main/" %}

# Start page

Click below to jump to that section.

* Contents
{: toc}

# Quick Tips

* Terminology: **Front matter** is the metadata in the top section of a post. It exists between two lines marked ```---```.
* If there's a piece of code in this guide that is confusing, look for examples of it in the repository by searching on GitHub:

    ![GitHub search](/assets/img/start/github-search.jpg)

# Quick Links into GitHub

To edit a file in the GitHub browser, click on the pencil icon on the top right-hand area. When you are done, click on the green "Commit changes" button in the upper right hand side of the page.

![GitHub edit file](/assets/img/start/github-edit-file.jpg)

Changes you commit will trigger an immediate update to the entire site. It will take around a minute for the changes to be visible.

To confirm that your changes are live, shift-click the reload button in your browser.

Click below to go to the directory that contains the text and metadata for each project:

* [Photography]({{ ghTree }}photography/_posts){:target="_blank"}
* [Collaborations]({{ ghTree }}collaborations/_posts){:target="_blank"}
* [Curatorial & Projects]({{ ghTree }}curatorial/_posts){:target="_blank"}
* [Commissions]({{ ghTree }}commissions/_posts){:target="_blank"}

Click below to directly edit the file:

* [Home Page]({{ ghEdit }}index.md){:target="_blank"}
* [Curriculum Vitae]({{ ghEdit }}cv.md){:target="_blank"}
* [About]({{ ghEdit }}about.md){:target="_blank"}

# Adding a new project

Each project is structured like a blog post.

## Create a new post

### Title

The file name will turn into the URL for the webpage. It is forced to lowercase, and whitespace and underscore characters turn to dashes:

> <code>2022-01-01-<strong>Strictly-personal</strong>.md</code><br/>→ <code>greermuldowney.com/collaborations/<strong>strictly-personal</strong></code>
>
> <code>2023-01-01-<strong>yankee_magazine_olmsted</strong>.md</code><br/>→ <code>greermuldowney.com/commissions/<strong>yankee-magazine-olmsted</strong></code>

**Note:** The file name must have the **```.md``` file extension**.

### Date

The file name includes the blog post's date, which for this website represents the year that the project began:

> *Monetary Violence* started in 2017: <code><strong>2017</strong>-01-01-monetary-violence.md</code>

Outside of projects in the Curatorial section, month and day are ignored. If multiple projects started in the same year, use the month to list them in a specific order.

If a project is complete, in the front matter, provide the end date. See *Urban Turbines* for an example.

Projects in the Curatorial section expect specific dates (month and day), as well as an end date.

## Add the images

### List them in the post

The post requires two pieces of information to show the images: the name of the directory where the images are, and an ordered list of the image file names.

In the post's front matter:
{: id="pdp"}

1. Name the directory inside ```assets/series/``` where the photos are located:
    > <code>---<br/>
    > title: Small Run Books<br/>
    > <strong>photo-directory-prefix: small-run-books/</strong><br/>
    > photos:<br/>
    >     - filename: ...<br/>
    > ---</code>

    **Note:** there must be a **slash at the end** of the directory name.
1. The photos should be listed in order as ```photos``` metadata.

### Add a first image to a new directory if it doesn't exist already

Adding a new directory in GitHub's UI is a little wonky. You have to upload the file first, and then rename it with the directory.

1. Go to [```assets/series/```]({{ ghTree }}assets/series/){:target="_blank"}.
1. In the upper-right hand area, click **Add file** then **Upload files**.
1. Upload one of the images. You should see it under the ```assets/series/``` directory.
1. Click on the image file. Click on the pencil icon on the top right-hand corner to edit the file.
1. You will see the directory path to the file: ```greermuldowney-com / assets / series / image.avif``` with ```image.avif``` inside a text field. Prepend the file name with the directory you specified in ```photo-directory-prefix``` earlier, like: ```undergraduate-photography-now/image.avif```. When you type the slash, GitHub recognizes it as a directory.
1. Commit the change.

### Add the rest of the images to an existing directory

If the ```photo-directory-prefix``` directory already exists, navigate there, and then upload the image files. Multiple images can be uploaded at once.

# Formatting text

Text is written in a format called Markdown. A quick cheat sheet is available [here](https://www.markdownguide.org/cheat-sheet/), but the most common things you will use:

|Formatting|Markdown|
|:-|:-|
|*italicized text*|`*italicized text*`|
|**bold text**|`**bold text**`|
|[link to a website](https://photography.org)|`[link to a website](https://photography.org)`|
|en dash: 2012--2014|`2012--2014`|
|em dash: Hi---again|`Hi---again`|

# Formatting images

While JPG has been the historic format for compressed images, newer formats like WebP and AVIF are now supported in most modern browsers and devices. They have better compression ratios and higher-quality results.

To prepare an AVIF image in Photoshop:

1. Resize the largest dimension (width or height) to ~2000 pixels.
2. Save the file as AVIF. Note: the Display P3 color gamut should be embedded by default, so that the image can be displayed in HDR.
3. Export settings:
    * Color Compression: Lossy, Quality **50 to 75** (aim for as low as possible)
    * Transparency Compression (if relevant): **Lossless**
    * Color Fidelity: Format **4:4:4**, Depth **12-bit**
    * Metadata: **Include EXIF Metadata** is checked
    * Speed: **Slowest (Smallest)** (long time to export, but the file size is the smallest)

You are aiming for around 300 KB per image.

# Editing a project

Each project is structured like a blog post. The two terms are used interchangeably below.

## Cover images

By default the first image in the gallery is used. To use something else, add `preferred-splash-image` to the front matter.

## Front matter

The front matter contains metadata about the project, and it is used throughout the site and to create the image gallery. Below the front matter is the body text which serves as the description of the project.

These are the top-level properties used in posts:

> ```
> title: REQUIRED
> subtitle: optional
> collaborator: optional
> end-date: optional
> 
> photo-directory-prefix: REQUIRED
> preferred-splash-image: optional
> photos: REQUIRED
>     - filename: REQUIRED
>     - video-filename: REQUIRED
>       placeholder-image: REQUIRED
>     ...
> ```

* `title` and `subtitle` are self-explanatory. Straight quotes will automatically be turned into smart quotes.
* `collaborator`: Include this if relevant.
* `end-date`: This is used with the date of the post (listed in the filename) to create the date range for a project. In the Photography section it only lists the year, so the month and day do not matter. However, if you have multiple projects in a year, you can increment the month to force a specific order. Without this, the project is assumed to be open-ended, and has no end date.
* `photo-directory-prefix`: This points to the subdirectory under `assets/series/` where the photos for the project exist. Make sure to include the ending slash, e.g. `photo-directory-prefix: cape-ann/`.
* `photos`: This contains an indented list of all of the photos, to be displayed in order. If the photo is a video, use `video-filename` instead of `filename`.
* `preferred-splash-image`: In the overview pages, the first photo in `photos` is used to represent the project. You can override that default here.

For the Curatorial section there are these additional properties:

> ```
> location: REQUIRED
> participants: optional
>     what-are-they-called: REQUIRED
>     who-are-they: REQUIRED
>         - name: REQUIRED
>           note: optional
>           url: optional
>         ...
> ```

* `location`: Where the exhibition or show was held.
* `participants`: If you wish to list the participants, include this whole section.
* `what-are-they-called`: The text used as the heading for this section. Examples: "Participants", "Featured Students"
* `who-are-they`: The list of participants. Only the `name` is required. The `note` will be listed immediately after `name` in smaller text. The optional `url` will turn the `name` into a link. Make sure that the property names line up neatly with spaces.

### Specifying the dates for a project

For Photography, the year matters the most. If you have multiple projects in the same year, you can order them explicitly by using months later in the year.

For Curatorial, the actual full dates are used.

If the project has an end date, you specify that in the front matter. In the top section of the post, between the `---` section, add the `end-date` property. For Photography, the year

# Editing other areas of the website

## Home page

Click [here]({{ ghEdit }}index.md){:target="_blank"}
 to edit the home page.

The home page showcases a random image as the background. You can update the set of images the site chooses from by editing the `random-images` property in the front matter of `index.md`. The image is assumed to exist under `assets/series/` so you only need to specify the directory from there.

# About AVIF support

According to Claude, global browser support is 95%.

Technology that does **not** support AVIF:

* iPhones and iPads (capped at iOS/iPadOS 15):
    * iPad Air 2: 2014
    * iPhone 6s and 6s Plus: 2015
    * iPad mini 4: 2015
    * iPhone SE (1st gen): 2016
    * iPhone 7 and 7 Plus: 2016
* Macs that can't run Ventura
    * iMac: 2015 and earlier
    * MacBook Pro: 2016 and earlier
    * 12-inch MacBook: 2016 and earlier
    * MacBook Air: 2017 and earlier
    * Mac mini: 2014 and earlier
* Windows 7 came out in 2009 and Windows 8.1 in 2013. The Edge that's frozen on them dates from early 2023, and AVIF support reached Edge in January 2024.
* IE11 is from 2013.
* Chrome added AVIF support in August 2020, and Samsung Internet did in 2021. Nearly every Android phone from roughly 2015 onward has since updated past those versions.

For comparison, iOS 16 and macOS Ventura shipped in fall 2022. The affected group is therefore devices from 2016 or earlier, plus newer ones whose owners never updated their OS.

# Q&A and Troubleshooting

How can I create a project but not have it public?
: In the front matter, include the line ```published: false```. When you're ready to publish, remove that line.

Images are not showing up.
: Make sure the `photo-directory-prefix` [has a slash at the end](#pdp).