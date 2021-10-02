rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:xuhaooo/lion-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://xuhaooo.github.io/lion-ui-website/index.html