## pnpm monorepo
使用pnpm workspace管理的monorepo

## 项目结构
```js
mz-app // workspace目录                            
├─ api // 公共api模块                            
│  ├─ src                          
│  ├─ index.ts                     
│  ├─ package.json                 
│  └─ tsconfig.json                
├─ components // 功能组件                   
│  ├─ src                          
│  ├─ README.md                    
│  ├─ index.html                   
│  ├─ index.ts                     
│  ├─ package.json                 
│  ├─ tsconfig.json                
│  ├─ tsconfig.node.json           
│  └─ vite.config.ts               
├─ packages // 项目目录                       
│  └─ h5-client                    
│     ├─ public                    
│     │  └─ vite.svg               
│     ├─ src                       
│     ├─ README.md                 
│     ├─ index.html                
│     ├─ package.json              
│     ├─ tsconfig.json             
│     ├─ tsconfig.node.json        
│     └─ vite.config.ts            
├─ utils // 公共工具库模块                          
│  ├─ src                          
│  ├─ index.ts                     
│  ├─ package.json                 
│  └─ tsconfig.json                
├─ README.md                       
├─ package.json                    
├─ pnpm-lock.yaml // 所有工作区项目依赖信息                 
└─ pnpm-workspace.yaml // workspace配置             
```

## 配置工作区
使用`pnpm-workspace.yaml` 进行管理
```js
// pnpm-workspace.yaml
packages:
  # all packages in direct subdirs of packages/
  - 'packages/*'
  # all packages in subdirs of components/
  - 'components/**'
  - 'api/**'
  - 'utils/**'
  # exclude packages that are inside test directories
  - '!**/test/**'
```

## 安装依赖
### 全局安装
```js
pnpm add tsup -D -w
```
### 指定工作区安装
```js
pnpm add axios --filter @mz/api

pnpm add tsup @types/node -D --filter @mz/api
```
### 安装所有依赖
在工作区根目录执行
```js
pnm install
```

## 工作区指令
### 执行具体工作区指令
```js
pnpm --filter @mz/api build
```

### 执行所有工作区指令
```js
// 执行所有工作区的build指令， 默认异步执行
pnpm --filter @mz/** build

// 同步执行
pnpm --parallel --filter @mz/** build
```