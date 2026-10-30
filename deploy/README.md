# Web 页面部署

将 `web/index.html` 安装到 `/var/www/xiaobibi/index.html`，并按 `tonglu.21ido.com` 的 TLS 证书路径使用 `nginx-tonglu.conf` 配置站点。API 服务在本机 `127.0.0.1:3000` 运行，由 `/api/` 反向代理提供访问。

部署后验证 `https://tonglu.21ido.com/` 返回页面、`https://tonglu.21ido.com/api/health` 返回 `status=ok`。后端服务代码和数据库维护在 `tonglu_api` 仓库。
