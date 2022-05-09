bundle exec jekyll build
# TODO(brycew): would love to figure out how git subtrees actually work
# and keep _site in my .gitignore for the main branch
# Look into: https://gist.github.com/waylan/4505033
# https://gist.github.com/cobyism/4730490
# https://www.atlassian.com/git/tutorials/git-subtree
git add _site && git commit -m "New commit"
git subtree push --prefix _site origin gh-pages