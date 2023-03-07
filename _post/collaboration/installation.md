---
title: Installation
category: [collaboration]
---

## Server Requirements

The Collaboration plugin has a few system requirements. Of course, modern hosting satisfies all of these requirements, so it's highly recommended that you use modern hosting to run the Collaboration plugin.

You will need to make sure your server meets the following requirements:

- PHP 7.4+
- WordPress 5.5+

## Installing Collaboration

Log in and download the latest Collaboration plugin from the [Customer Portal](http://dplugins-documentation.local/checkout/downloads/).

If you have a copy of the plugin as a zip file, you can manually upload it and install it through the Plugins admin screen.

1. Navigate to **Plugins &gt; Add New**.
2. Click the **Upload Plugin** button at the top of the screen.
3. Select the zip file from your local filesystem.
4. Click the **Install Now** button.
5. When the installation is complete, you’ll see “Plugin installed successfully.” Click the **Activate Plugin** button at the bottom of the page.

Please read the [official documentation](https://wordpress.org/support/article/managing-plugins/#manual-upload-via-wordpress-admin) for plugin installation instructions.

## Initial Configuration

The Collaboration plugin uses the [Pusher.com](https://pusher.com/channels) service on its core, allowing it to achieve real-time experience in economic and easy to setup.

\[yt id=eDi0MQXQDIg\]

To allow you to use the real-time feature, you need a [Pusher.com](http://pusher.com/) App Keys.

> TIP
> 
> <cite>You can reuse the [Pusher.com](http://pusher.com/) App Keys on multiple WordPress installations.</cite>

1. Sign in to [Pusher.com](https://dashboard.pusher.com/accounts/sign_in)
2. Navigate to Channels [Dashboard](https://dashboard.pusher.com/channels)
3. Click the **Create App** button at the top right of the screen.
4. Fill the “Select a cluster” field with the nearest region to you.
5. Click the **Create App** button. The new app will be created and you will be redirected to the app dashboard page.
6. Navigate to the **App Settings** tab
7. Check the **Enable client events** checkbox
8. Click **Update** to save the changed settings
9. Navigate to the **App Keys** tab
10. On your WordPress site, Navigate to **Aether &gt; Collaboration**
11. Fill all the setting fields with the [Pusher.com](http://pusher.com/) App Keys from step #9, and click the **Save Changes** button.

Now you can use the Oxygen Editor and collaborate in a real-time experience. You will see the **indicator badge** on the bottom right of your Oxygen Editor screen.

## Plugin Automatic Update

Get the latest version of the Collaboration plugin by registering your installed plugin on the admin page.

1. Navigate to **Aether &gt; Collaboration**
2. Click the **License** tab at the top of the screen.
3. Input your plugin license key in the “License Key” field.
4. Click the **Save Changes** button to register your installed plugin.

When the new version is available, you will get the update notification and do updater right on the **Dashboard &gt; Updates**.

## Entire Installation in the video

\[yt id=q51xhGxTk5k\]