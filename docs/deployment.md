# 部署

基础站点采用 Next.js 静态导出，并通过 Docker 中的 Nginx 提供服务。

## 当前生产环境

- 服务商：腾讯云轻量应用服务器
- 区域：香港
- 公开 URL：`https://ui.kelin.center/`
- Registry URL：`https://ui.kelin.center/r/registry.json`
- 入口：Cloudflare Tunnel `kelin-newsletter-hk`
- 源站：`http://127.0.0.1:8088`
- 容器：`open-ui-registry`
- 公网防火墙规则：不需要；端口 `8088` 仅绑定回环地址

## 为什么使用静态导出

初始组件库和 Registry 端点不需要服务端应用运行时。静态导出可以降低 1 GB 腾讯云轻量服务器的内存占用，也无需在宿主机上安装 Node.js。

## 服务器部署

```bash
git clone https://github.com/HuangYuChuh/open-ui-registry.git
cd open-ui-registry
sh deploy/server-deploy.sh
```

默认配置：

- 公开端口：`8088`；
- 候选版本验证端口：`18088`，仅绑定本机；
- 运行时内存限制：`96m`；
- 容器名称：`open-ui-registry`。

脚本会用 Git 修订版本标记构建镜像，在候选端口验证后切换到公开端口；如果最终健康检查失败，则恢复上一个镜像。

需要时可以覆盖公开端口：

```bash
PUBLIC_PORT=8089 sh deploy/server-deploy.sh
```
