# yt-dlp for newbies

This is a minimal tutorial on how to use [yt-dlp](https://github.com/yt-dlp/yt-dlp) for people with no experience using the command line.

This guide won't cover how to use the command line beyond the bare minimum required to use yt-dlp. Mozilla has an excellent [tutorial](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line) explaining the basicis of what the command line is and how to use it. I highly recommend reading it in full to get a better understanding of what each of these commands does. A more in depth tutorial on how to use the command line is also available [on the Ubuntu website](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview).

## Installation / basic usage

### Windows

1. Open PowerShell by searching for it in the Start menu.
2. Install the [Scoop](https://scoop.sh/) package manager by pasting these lines into PowerShell, pressing Enter after each one, and following the instructions. (Note: these commands may be outdated, visit the Scoop website for more information if you have issues).

	```
	Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
	irm get.scoop.sh | iex```
	
3. After installing Scoop, use it to install yt-dlp and ffmpeg with `scoop install yt-dlp ffmpeg`.
4. Navigate to your Downloads folder with `cd .\Downloads\`.
5. Run your yt-dlp command!

### macOS

1. Open Terminal. The app is located in Applications/Utilities.
2. Install the [Homebrew](https://brew/) package manager by pasting this line into Terminal, pressing Enter, and following the instructions. (Note: this command may be outdated, visit the Homebrew website for more information if you have issues).

	```
	/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
	```
	
3. After installing, use Brew to install yt-dlp and ffmpeg with `brew install yt-dlp ffmpeg`.
4. Navigate to your Downloads folder with `cd Downloads`.
5. Run your yt-dlp command!
 
### Linux

All of the steps for macOS should work by simply swapping `brew` with the name of the package manager for your distribution. This is usually `apt` or `dpkg`.

## Using yt-dlp

`yt-dlp 'https://www.youtube.com/watch?v={your video id}'` will download any YouTube video in the best available quality regardless of format.
`yt-dlp -S "ext:mp4:m4a" 'https://www.youtube.com/watch?v={your video id}'` will force video and audio to be converted to mp4 and m4a respectively.
`yt-dlp --extract-audio --audio-format wav 'https://www.youtube.com/watch?v={your video id}'` will only download audio and convert it to WAV (note: this will be transcoded from the lossy original audio).

**Notes**

* Make sure to use single quotes around your URL to avoid parsing errors.
* A full list of options is available on yt-dlp's [GitHub page](https://github.com/yt-dlp/yt-dlp).
* yt-dlp should also work with most non-YouTube websites.

#### Updating

yt-dlp will occasionally break on specific websites and need to be updated.

On macOS: `brew upgrade yt-dlp ffmpeg`

On Windows/Scoop: `scoop update yt-dlp ffmpeg`
