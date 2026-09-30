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
</style>

{%- assign ghEdit = "https://github.com/greermuldowney/greermuldowney-com/edit/main/" %}
{%- assign ghTree = "https://github.com/greermuldowney/greermuldowney-com/tree/main/" %}

# Start page

Click below to jump to that section.

* Contents
{: toc}

**QUICK TERMINOLOGY:** **Front matter** is the metadata in the top section of a post. It exists between two lines marked ```---```.

# Shortcuts

Click the links below to edit the file or go to the directory (GitHub login needed). When you are done, click on the green "Commit changes" button in the upper right hand side of the page.

Changes you commit will trigger an immediate update to the entire site. It will take around a minute for the changes to be visible.

To confirm that your changes are live, shift-click the reload button in your browser.

Go to the directory that contains the text and metadata for each project:

* [Photography]({{ ghTree }}photography/_posts){:target="_blank"}
* [Collaborations]({{ ghTree }}collaborations/_posts){:target="_blank"}
* [Curatorial & Projects]({{ ghTree }}curatorial/_posts){:target="_blank"}
* [Commissions]({{ ghTree }}commissions/_posts){:target="_blank"}

Editing files:

* [Curriculum Vitae]({{ ghEdit }}cv.md){:target="_blank"}
* [Bio]({{ ghEdit }}bio.md){:target="_blank"}


# Adding new projects

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

## AVIF support

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

