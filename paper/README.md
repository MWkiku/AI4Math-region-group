# paper/ · 论文归档快照

> 📦 **2026-10-26 起，论文正本已迁至独立仓库 [`Cinfty-density`](https://github.com/MWkiku/Cinfty-density)。本目录保留历史快照，不再更新。**
> 论文编辑现场仍在 **Overleaf**；本仓只做流程与 Issue 追踪。

> ⚠️ **论文正文以 Overleaf 为准，这里只是归档快照，不是主位置。**
> 最新可编辑版本请看 Overleaf（链接见 Issue #9）。改这里不会改变论文本体。

## 一、目录

```
paper/
├── src/    LaTeX 源（main_zh.tex + preamble.tex + sec1–sec6_zh.tex，共 8 个文件）
└── pdf/    定稿 PDF（只放定稿，中间版本走坚果云）
```

## 二、快照信息

| 项 | 内容 |
|---|---|
| 快照时间 | 2026-10-26 |
| 来源 | `danus-results\中文论文-LaTeX\` 与 `加权Triebel-Lizorkin稠密性-中文论文.pdf` |
| 页面 | 70 页 |
| 标题（快照时） | 加权 Triebel–Lizorkin 空间中 C^∞ 稠密性的若干精确结论——基于 32 条机器验证事实，附第三方复核与修订记录 |
| 对应的 Overleaf 版本 | **待补充**（建好 Overleaf 后回填） |

## 三、规矩

1. **只放定稿 PDF**：中间稿、每日版本放坚果云，不进 git（每次 +700KB，十版就是 7MB）；
2. 上传新定稿前，**先确认它已经同步到 Overleaf**，否则仓库会比主位置更新，形成第二事实源；
3. 更新快照时**只改「快照信息」表里的时间和版本**，不要删历史（历史在 `git log` 里）；
4. 复核报告暂未入库（见 `docs/论文/` 与 Issue #11 的讨论），需要时放 `paper/reviews/` 并同步改 `.gitignore` 例外。

## 四、标题里的「32 条」待核准

同一天内出现过 **28 条**（上一版）、**32 条**（本版）、**19 条**（Danus 面板与 `facts_dump.json`）、**66 次**验证运行（`D:\Danus\danus\verify\runs`）。
这个数字必须锁定口径后再定稿，见 [Issue #10](https://github.com/MWkiku/AI4Math-region-group/issues/10)。
