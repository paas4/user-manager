简单的用户系统及鉴权模板
---


涉及文件内
```yaml
server/middleware/index.js

# 路由
server/app/feature/home/index.js
server/app/feature/home/resolver.js
```

整个文件复制
```yaml
# 中间件
server/middleware/jwtError.js
server/middleware/jwtRefreshToken.js

# 鉴权核心文件
server/app/feature/controller/auth.js
# 用户表操作Controller实例
server/app/feature/controller/user.js

# 用户表
server/app/db/mysql/users.js
```

核心依赖模块
```sh
npm i koa-jwt jsonwebtoken md5 shortid
```
