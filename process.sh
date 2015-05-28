#! /bin/bash

# 复制一下损坏的历史记录文件此文件：
cp ~/.zsh_history ~/zsh_history

# 然后删除原来的历史记录：
rm ~/.zsh_history

# 最后通过strings命令修复此文件：
strings ~/zsh_history > ~/.zsh_history

# 现在Zsh的历史记录就修复成功了