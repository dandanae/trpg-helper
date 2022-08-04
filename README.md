echo "# trpg-doumi" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dandanae/trpg-doumi.git
git push -u origin main
git checkout -b gh-pages
git add index.html
git commit -m 'added main.html'
git push -u origin gh-pages
