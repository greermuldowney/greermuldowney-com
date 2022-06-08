## Setup

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
1. Open a new Terminal window. Install `jekyll`:
 	```
 	gem install jekyll
 	cd <directory-to-repository>
 	bundle install
 	```

## Local debugging

1. In terminal, `bundle exec jekyll serve`
1. Open `http://127.0.0.1:4000` in the browser.
