---
title: Advanced Settings
category: [acf-blocks]
order: 23
---

**This is available in version 1.1.0 and above**

Those options are disabled by default as they may overwhelm beginners. Scroll to the bottom of the settings and enable it by switching the toggle.

{: .col-2}
![screenshot 2022 05 25 at 21.46.48](../img/Screenshot-2022-05-25-at-21.46.48-800x1217.png)
![screenshot 2022 05 26 at 13.37.07](../img/Screenshot-2022-05-26-at-13.37.07-800x1796.png)

## JSX (for inner blocks)

To enable adding blocks inside your block you need to:

1. Enable it under **Advanced Mode &gt; JSX (for inner blocks)**
2. Add `<InnerBlocks/>` inside your code

```
<pre class="wp-block-code">```php
<div class="container">
    <InnerBlocks/>
</div>
```
```

## Insert multiple times on same post or page

If this one is disabled you can add block only once per post or page.

## Visible in \[+\] Add Block panel

If this option is disable user will not be able to add block by using those tree options. Block will then needs to be added programmatically.

![screenshot 2022 05 25 at 21.59.35](../img/Screenshot-2022-05-25-at-21.59.35-800x355.png)

Read more about "Inserter" on [WordPress Reference Guide.](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/#inserter)

## Define Horizontal Align Options

This will allow you to add horizontal align classes from the toolbar. You can choose witch options you want to add to the toolbar.

{: .col-2}
![screenshot 2022 05 25 at 22.07.24](../img/Screenshot-2022-05-25-at-22.07.24.png)
![screenshot 2022 05 25 at 22.08.58](../img/Screenshot-2022-05-25-at-22.08.58.png)

{: .col-2}
![screenshot 2022 05 25 at 22.10.15](../img/Screenshot-2022-05-25-at-22.10.15.png)
![screenshot 2022 05 25 at 22.10.08](../img/Screenshot-2022-05-25-at-22.10.08.png)

```
<pre class="wp-block-code">```php
// This needs review
<?php
    $className = 'block-example';
    if( !empty($block['className']) ) {
        $className .= ' ' . $block['className'];
    }
    if( !empty($block['align']) ) {
        $className .= ' align' . $block['align'];
    }
?>
<div class="<?php echo esc_attr( $classname ) ; ?>">
    <h1>This is Code Example Block</h1>
</div>
```
```

## Vertical Align

Will allow you to set Align top, Align middle and Align bottom

![screenshot 2022 05 26 at 10.29.33](../img/Screenshot-2022-05-26-at-10.29.33.png)

## Text Align

Will allow you to set Align text left, Align text center, Align text right

![screenshot 2022 05 26 at 13.35.44](../img/Screenshot-2022-05-26-at-13.35.44-800x383.png)

<div class="wp-block-group">### Horizontal, Vertical and Text Align Default

You can predefine selected option in the toolbar and the front end, when you are adding block to the page.

</div>## Full Height

This option is toggle state and not dropdown select. It will toggle full-height class.

![screenshot 2022 05 26 at 13.33.44](../img/Screenshot-2022-05-26-at-13.33.44-800x109.png)

## Edit Mode inside block

If this option is not enabled you will get ACF fields in sidebar. If this option is enabled you can edit ACF fields directly inside block area. If edit mode inside block is active you will not see ACF fields in the sidebar at the same time.

![screenshot 2022 05 26 at 12.15.01](../img/Screenshot-2022-05-26-at-12.15.01-800x370.png)

![screenshot 2022 05 26 at 12.15.14](../img/Screenshot-2022-05-26-at-12.15.14-800x194.png)

## Reusable

Enables option to save it as Reusable block

![screenshot 2022 05 26 at 13.38.21](../img/add-to-reusable-800x640.png)

## Lock

After enabling this options you can find it under toolbar &gt; advanced options (tree dots).

![screenshot 2022 05 26 at 13.36.24](../img/Screenshot-2022-05-26-at-13.36.24-800x644.png)

Locking block will give you several options where you can apply lock state.

![screenshot 2022 05 26 at 12.06.10](../img/Screenshot-2022-05-26-at-12.06.10-800x556.png)

## Dimensions (Margin, Padding)

Will unlock options in sidebar to add Margin and Padding

![screenshot 2022 05 26 at 12.03.24](../img/Screenshot-2022-05-26-at-12.03.24-800x298.png)

## HTML anchor

Will replace automatic generated ID values to help you link easier to the current block

![screenshot 2022 05 26 at 12.00.01](../img/Screenshot-2022-05-26-at-12.00.01-800x338.png)

## Code Boilerplate

```
<pre class="wp-block-code">```php
<?php
    if(isset($_GET['print_block_args'])){
        echo ""; print_r($block); "";
    }
    // Get ID
    $id = 'block-example-' . $block['id'];
    // Get HTML anchor
    if( !empty($block['supports']['anchor']) ) {
        $id = $block['supports']['anchor'];
    }
    // Set Default Class 
    $className = 'block-example';
    if( !empty($block['className']) ) {
        $className .= ' ' . $block['className'];
    }
    // Get Horizontal Class
    if( !empty($block['align']) ) {
        $className .= ' align-' . $block['align'];
    }
    // Get Vertical Class (Inner Content Align)
    if( !empty($block['align_content']) ) {
        $className .= ' vertical-align-' . $block['align_content'];
    }
    // Get Text Align Class
    if( !empty($block['align_text']) ) {
        $className .= ' text-align-' . $block['align_text'];
    }
    // Get Full Height Class
    if( !empty($block['full_height']) ) {
        $className .= ' full-height';
    }
    // echo '';
    // print_r($block);
?>
<div    
    id="<?php echo esc_attr( $id ); ?>"
    class="<?php echo esc_attr( $className ) ; ?>">
    
    <h1>This is Code Example Block</h1>
    
</div>    
```
```