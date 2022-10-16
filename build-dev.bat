read -p "Enter comment: " comment
ionic build
echo $comment
git remote set-url origin https://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@github.com/hammerchu/cms.git
@REM cp ./static/index.html ./templates/index.html
git add ./static/*
git add ./flask_app.py
@REM git add ./templates/index.html
git commit -m "$comment"
git push -u origin main
