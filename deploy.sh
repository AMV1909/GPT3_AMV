set -e
npm run build
cd dist
echo > .nojekyll

git init
git checkout -B main
git add -A
git commit -m 'deploy'

if you are deploying to https://amv1909.github.io/GPT3_AMV
git push -f git@github.com:AMV1909/GPT3_AMV.git master:gh-pages

cd -