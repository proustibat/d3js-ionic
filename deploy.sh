#!/bin/bash

# THANKS https://github.com/steveklabnik/automatically_update_github_pages_with_travis_example
#    CREATE orphan branch gh-pages
#    git checkout --orphan gh-pages
#    rm -rf *.md *.json *xml *.sh *.properties src config resources *.yml *.travis.yml .gitignore .editorconfig
#    git add . && git commit -am "Initial Commit" && git push origin -u gh-pages
#    git checkout master

echo -e "#####################################################"
echo -e " START DEPLOYING"
echo -e "#####################################################"

# stop executing if any errors occur, by default bash will just continue past any errors to run the next command
# stop executing if an unset variable is encountered, by default bash will use an empty string for the value of such variables.
set -o errexit -o nounset

# Here we ensure that we only deploy when we commit against the master branch,
# if not we just simply abort the deploy, no errors. So this way we can see the
# result of the tests when we make pull request between different branches or
# commit against a different branch than the master.
if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

# This sets a variable, rev, with the short hash of HEAD.
# We'll use this later in a commit message.
rev=$(git rev-parse --short HEAD)

# We need to cd into wherever our website built.
# With Jekyll, it's _site. But do whatever.
cd documentation


# First, we initialize a new git repository. Yes, a new one. You'll see.
git init

# We then set our user name and user email. This person will have done the commits that go to gh-pages.
# It's not a default branch, so don't worry, GitHub doesn't count these commits as contributions for your graph.
git config user.name "proustibat"
git config user.email "jennifer.proust@gmail.com"

# Next, we add a remote, named upstream, and we set it to our project.
# But we also interpolate that $GH_TOKEN variable,
# which will allow us to push to this repository later.
git remote add upstream "https://$GH_TOKEN@github.com/proustibat/d3js-ionic.git"
git remote -v

# We then fetch it and reset to the gh-pages branch.
# Now, git sees this new repository as just some files
# that change your upstream gh-pages branch.
git fetch upstream
git reset upstream/gh-pages


# Sometimes, you'll need some extra files.
# A CNAME is common, which sets a custom domain up.
# You'll need to run whatever commands generate those files for you.
#echo "rustbyexample.com" > CNAME


# We then touch everything, so that git considers all of our local copies fresh.
touch .

# Turn off Jekyll (useful for files that start with an underscore)
# https://help.github.com/articles/files-that-start-with-an-underscore-are-missing/
touch .nojekyll

git status
# We then add all changes, commit them, using our rev from earlier, and then push to upstream.
git add -A .
git commit -m "rebuild pages at ${rev}"
# The -q keeps this a bit more quiet, and you can control the noisiness
# of all these different git commands with a judicious sprinkling of -q.
git push upstream HEAD:gh-pages
