git仓库

```
git@192.168.20.240:omg/react-admin-deploy.git

```


安装node版本控制nvm
```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
```

生效 nvm 命令 
```
source ~/.bashrc
```

安装node v6.2.2
```
nvm install v6.2.2
```
查看node版本
```
node -v
v6.2.2
```

安装node进程调度器pm2
```
$ npm install pm2@latest -g
```

进入项目路径，安装依赖
```
npm install --production
```
启动项目
```
pm2  start server.js
```

重载项目
```
pm2 reload
```
