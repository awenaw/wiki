---
title: docker swarm 部署
date: 2026-07-14
description: docker swarm 部署.md
category: 技术
tags:
  - docker
  - 分布式
---

### 环境
```
# 在 node1 (Manager 节点)(10.0.0.131) 执行
hostnamectl set-hostname node1

# 在 node2 (worker1)(10.0.0.132) 执行
hostnamectl set-hostname node2

# 在 node3 (worker2)(10.0.0.133) 执行
hostnamectl set-hostname node3
```

### Manager 节点
```

docker swarm init --advertise-addr 10.0.0.131

```

### worker1 和 worker2 执行
```
    docker swarm join --token SWMTKN-1-xxx 10.0.0.131:2377
    
```

### 验证
```
docker node ls

```

后续略（通过 tcpdump 验证）
