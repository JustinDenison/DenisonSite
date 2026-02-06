PROJECT LOCATION
cd ~/projects/DenisonSite

LOCAL DEVELOPMENT
ng serve

SCRAP UNCOMMITTED LOCAL CHANGES (RESET TO REMOTE)
git restore .
git clean -fd

CREATE AND USE DEV BRANCH (ONE TIME)
git checkout -b dev
git push -u origin dev

SWITCH BETWEEN BRANCHES
git checkout dev
git checkout main

DAILY DEV WORKFLOW (ON DEV)
git checkout dev
git status
git add .
git commit -m "Dev work"
git push

MERGE DEV INTO MAIN (WHEN READY)
git checkout main
git merge dev
git push

DEPLOY TO GITHUB PAGES (FROM MAIN ONLY)
ng build --configuration production
npx angular-cli-ghpages --dir=dist/DenisonSite/browser

FULL DEPLOY (MOST COMMON)
cd ~/projects/DenisonSite
git checkout dev
git add .
git commit -m "Update site"
git push
git checkout main
git merge dev
git push
ng build --configuration production
cp dist/DenisonSite/browser/index.csr.html dist/DenisonSite/browser/index.html
cp dist/DenisonSite/browser/index.html dist/DenisonSite/browser/404.html
npx angular-cli-ghpages --dir=dist/DenisonSite/browser --cname=www.denison.org

USEFUL CHECKS
git branch
git status
git remote -v
git pull
