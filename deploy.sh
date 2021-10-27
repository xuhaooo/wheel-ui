rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git branch -M main &&
git remote add origin git@github.com:xuhaooo/lion-ui-website.git &&
git remote add gitee git@gitee.com:bingoxuhao/lion-ui-website.git &&
git push -f -u origin main &&
git push -f gitee main &&
cd -
echo https://xuhaooo.github.io/lion-ui-website/index.html
echo https://bingoxuhao.gitee.io/lion-ui-website