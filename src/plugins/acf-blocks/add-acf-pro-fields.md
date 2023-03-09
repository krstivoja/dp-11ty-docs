---
title: Add ACF Pro fields
category: [acf-blocks]
order: 19
---

{% youtube 'id', class="XXX" %}

## Create Block

**The first step is to create Gutenberg block**, so you have where to assign ACF fields to it. If Block is not created you will not be able to target fields location.

## Create and Assign field to block

You need to have **ACF Pro** to be able to assign fields to the blocks.

Navigate to **Custom Fields** &gt; **Fields Groups** and hit **"**Add new**"** button.

My best practice is to add same title as Block title and add prefix "Block -" Hello World.

Bellow you can create needed fields

Under location be sure to chose:  
**"Block" - "is equal to" - "Block name"** in this case "Hello World".

![screenshot 2022 05 15 at 20.35.41](../img/Screenshot-2022-05-15-at-20.35.41-800x255.png)

## Add ACF php code to render the fields.

![screenshot 2022 05 15 at 20.47.03](../img/Screenshot-2022-05-15-at-20.47.03-800x378.png)

## Edit ACF Values inside Gutenberg

There is two ways to edit it.

### In sidebar

![screenshot 2022 05 15 at 20.49.10](../img/Screenshot-2022-05-15-at-20.49.10-800x244.png)

### Switch to edit mode

![screenshot 2022 05 15 at 20.49.23](../img/Screenshot-2022-05-15-at-20.49.23-800x224.png)

![screenshot 2022 05 15 at 20.49.30](../img/Screenshot-2022-05-15-at-20.49.30-800x239.png)

