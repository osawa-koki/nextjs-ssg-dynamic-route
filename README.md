# nextjs-ssg-dynamic-route

🎻🎻🎻 Next.jsで動的ページ(SSG)を利用してみる！  

## 実行方法

```shell
# モジュールのインストール
yarn install

# 開発用実行
yarn dev

# ビルド
yarn build
```

Dockerを使用する場合は以下のコマンドを実行してください。  

```shell
# Dockerイメージのビルド
docker build -t nextjs-ssg-dynamic-route .

# Dockerコンテナの実行
docker run --rm -d -p 80:80 --name nextjs-ssg-dynamic-route nextjs-ssg-dynamic-route
```
