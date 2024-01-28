---
title: "Setting up Windows Terminal For Professional Software Development"
publishedAt: 2023-05-24
description: "The Windows command shell isn't intuitive"
slug: "win-shell"
isPublish: true
---

## How To Setup Windows Terminal For Professional Software Development

If you're a developer in 2023 still using the Windows CMD for your daily tasks, you're probably feeling like the last kid picked for the dodgeball team in PE class. While your friends on Linux and macOS are running around with their fancy terminals, you're left alone in the corner with your basic command prompt. But don't despair! With a bit of work, we can turn this situation around and make your terminal the envy of colleagues. So buckle up, and let's the Windows Terminal from zero to hero!

## Install and Configure Nerd Font - Hack

First things first, let's give your terminal a makeover. We'll start by installing a Nerd Font. Nerd Fonts takes popular fonts and adds a bunch of glymphs. We'll be using Hack for this tutorial.

1. Download Hack Nerd Font from the [Nerd Fonts Github page](https://github.com/ryanoasis/nerd-fonts/releases)
2. Extract the zip file and install the font by right-clicking on the `.ttf` file and selecting "Install"

![[Pasted image 20231009170226.png]]

Now, let's configure the Windows Terminal to use this font.

1. Open Windows Terminal and go to Settings (the gear icon).
2. Under "Profile" -> "Defaults", find the "Font Face" setting and replace it "Hack Nerd Font"

![[Pasted image 20231009171427.png]]

## Install Powershell v7+ and Configure Terminal Appearence

In order for our terminal to support modern tools we need to upgrade to a Powershell v7+.

1. Open Microsoft Store and Search for Powershell and install it

![[Pasted image 20231009172010.png]]

Now if you successfully installed Powershell Go back to the Terminal App and close it.

Now open the terminal app and type `pwsh`, if powershell is correctlty you should the following:

![[Pasted image 20231009172341.png]]

If the above shows, we are doing good so far.

Now Lets Configure the looks of our terminal, firstly we are going to give it transparency effects.

1. Click the drop down icon besides the open new button denoted by a `+` and open settings.
2. Under "Profile" -> "Defaults" -> "Additional Settings" -> "Appearance" -> "Transparency" and set the background opacity to around 50% or until it looks good for you.
3. Below the Transparency section find the "Enable acrylic material" switch and toggle it on.
4. You can also experiment with other options like "Colour scheme", "Font size" etc.
5. Now save and go back to the PowerShell tab and it should like something like this:

![[Pasted image 20231009174158.png]]

## Install Scoop

Next, we're going to install Scoop, a command-line installer for Windows. Trust me, it's like the ice cream truck of software installation.

1. Open PowerShell and run the following command to install Scoop:

```shell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
iwr -useb get.scoop.sh | iex
```

## Install and Configure Starship.rs

Now let's pimp your prompt with Starship.rs. Its like your terminal a new paint job.

1. Install Starship via Scoop by running `scoop install starship`.
2. Add the following to the end of your PowerShell configuration (find it by running `$PROFILE`):

```shell
Invoke-Expression (&starship init powershell)
```

3. Save The file and restart the terminal. Now to to any project folder and you should see something like this:

![[Pasted image 20231010143635.png]]

## Terminal Icons

Let's add some bling to your terminal with Terminal icons. This addon will add icons to your files and folders. It's like putting spinners on your terminals wheels.

1. Install Terminal Icons via PowerShell by running `Install -Module -Name Terminal-Icons -Repository PSGallery`.
2. Refresh the terminal and type `Get-ChildItem`, you should a nice folder structure like this:

![[Pasted image 20231010144227.png]]

## Set Aliases

Aliases are like nicknames for your commands. They can save you typing and make your commands easier to remember.

1. Open your shell's config file again.
2. Add your aliases. Earlier on we used the `Get-ChildItem` command. Instead of typing that over and over, we alias `ll` to `Get-ChildItem`, add the following line:

```shell
Set-Alias -Name ll -Value Get-ChildItem.
```

3. Also I would like to alias `g` to `git`, so add the following line:

```shell
Set-Alias -Name g -Value git
```

So here is the final result:
![[Pasted image 20231010145322.png]]