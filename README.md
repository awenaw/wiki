# Wiki

个人 Markdown 笔记站，使用 [VitePress](https://vitepress.dev/) 生成静态网页，
并可通过 Cloudflare Pages 自动构建和发布。

## 本地预览

```bash
npm install
npm run docs:dev
```

## 构建

```bash
npm run docs:build
```

构建结果位于 `.vitepress/dist`。

## Cloudflare Workers

Cloudflare Workers Builds 配置：

```text
构建命令：npm run docs:build
部署命令：npm run docs:deploy
```
