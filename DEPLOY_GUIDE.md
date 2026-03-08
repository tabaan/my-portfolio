# 项目部署指南 (GitHub + Vercel + 阿里云域名)

本指南将帮助你将本地的 Neo-Brutalist 作品集网站部署到线上，并绑定你的 `qianqian.click` 域名。

## 第一步：上传代码到 GitHub

1.  登录你的 [GitHub](https://github.com/) 账号。
2.  点击右上角的 `+` 号，选择 **New repository**。
3.  填写仓库名称 (例如 `my-portfolio`)，选择 **Public** 或 **Private** 均可，**不要**勾选 "Initialize with README/gitignore" (因为我们本地已经有了)。
4.  点击 **Create repository**。
5.  在创建成功的页面中，复制 "…or push an existing repository from the command line" 下方的命令。通常是这样的：
    ```bash
    git remote add origin https://github.com/你的用户名/my-portfolio.git
    git branch -M main
    git push -u origin main
    ```
6.  回到你的本地终端 (VSCode)，**在 `neo-brutalist-portfolio` 目录下** 粘贴并执行这些命令。
    *   注意：如果这是你第一次在本地使用 Git，可能需要先配置用户名和邮箱：
        ```bash
        git config --global user.name "你的名字"
        git config --global user.email "你的邮箱"
        ```

## 第二步：在 Vercel 上部署

1.  访问 [Vercel](https://vercel.com/) 并使用 GitHub 账号登录。
2.  在控制台点击 **Add New...** -> **Project**。
3.  在 "Import Git Repository" 列表中，找到刚才创建的 `my-portfolio` 仓库，点击 **Import**。
4.  在配置页面：
    *   **Framework Preset**: 选择 `Vite` (通常会自动识别)。
    *   **Root Directory**: 保持默认 `./`。
    *   **Build Command**: `vite build` (默认)。
    *   **Output Directory**: `dist` (默认)。
5.  点击 **Deploy**。等待几分钟，部署完成后你会看到一个 `.vercel.app` 的预览链接，点击确认网站能否正常访问。

## 第三步：绑定自定义域名 (qianqian.click)

1.  在 Vercel 的项目页面，点击顶部的 **Settings** 标签。
2.  在左侧菜单选择 **Domains**。
3.  在输入框中输入 `qianqian.click`，点击 **Add**。
4.  Vercel 会提示你选择重定向策略 (推荐选择 `Recommended`)，点击 **Add**。
5.  Vercel 会显示你需要添加的 DNS 记录。通常有两种情况：
    *   **A 记录**: 主机记录 `@`，记录值 `76.76.21.21` (请以 Vercel 显示的为准)。
    *   **CNAME 记录**: 主机记录 `www`，记录值 `cname.vercel-dns.com`。

## 第四步：在阿里云配置 DNS 解析

1.  登录 [阿里云域名控制台](https://dc.console.aliyun.com/)。
2.  找到 `qianqian.click`，点击 **解析**。
3.  点击 **添加记录**，根据 Vercel 的提示添加记录：
    *   **记录类型**: `A`
    *   **主机记录**: `@`
    *   **记录值**: `76.76.21.21` (或者 Vercel 提供的 IP)
    *   **TTL**: 默认即可
4.  再添加一条 (如果是 www)：
    *   **记录类型**: `CNAME`
    *   **主机记录**: `www`
    *   **记录值**: `cname.vercel-dns.com`
5.  回到 Vercel 的 Domains 页面，等待 DNS 刷新（通常几分钟到几小时）。当状态变为绿色勾号时，你的网站就可以通过 `https://qianqian.click` 访问了！

---
**常见问题：**
*   **HTTPS**: Vercel 会自动为你配置 SSL 证书，无需手动操作。
*   **更新代码**: 以后只需将代码 `git push` 到 GitHub，Vercel 会自动触发重新部署。
