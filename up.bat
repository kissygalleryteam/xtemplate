git add .
git commit -am "2.2.2"
git tag publish/2.2.2
git push origin master:daily/2.2.2
git push origin publish/2.2.2:publish/2.2.2