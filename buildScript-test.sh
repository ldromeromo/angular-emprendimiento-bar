npm install
npm run build --prod
mkdir dist/deploy
cp Dockerfile dist/deploy
cp nginx.conf dist
cp manifests/deployment-dev.yml dist/deploy