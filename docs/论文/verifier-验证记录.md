# Verifier 验证记录（Danus）

> 本文件由 AI 从 `D:\Danus\danus\verify\runs\` 自动汇总，**原始记录未改动**。

> 运行总数：**55**　最早：`20261018T100957Z_9a759a23b42d`　最晚：`20261019T133225Z_a3f3fa5bf048`

## 一、结论分布

| verdict | 次数 |
|---|---|
| `correct` | 31 |
| `wrong` | 24 |

## 二、逐次运行（run id / verdict / 报告摘要前 110 字）

| # | run id | verdict | 报告摘要 |
|---|---|---|---|
| 1 | `20261018T100957Z_9a759a23b42d` | correct | The statement is 'For every real number x, one has x = x'. The proof consists of a single line invoking the re |
| 2 | `20261018T102220Z_2eed6ea616f9` | correct | The proof is valid. For a real number x, distributivity gives x*(0+0) = x*0 + x*0, and the additive identity 0 |
| 3 | `20261018T102309Z_8f2b00bf06a9` | correct | The proof is valid. For an arbitrary real x, distributivity gives x*(0+0) = x*0 + x*0, and since 0+0 = 0 we ge |
| 4 | `20261018T102545Z_b405616eea99` | correct | The proof is correct. The opening paragraph establishes that d is continuous and strictly positive on the open |
| 5 | `20261018T102633Z_55f53c6af4a7` | wrong | The overall strategy is sound — restrict to the full-measure set G where J is finite, use that every boundary  |
| 6 | `20261018T103158Z_6f919a769ade` | correct | The proof is correct. It defines J(x) = int_Omega \|g(x)-g(y)\|^q \|x-y\|^{-n-sigma q} nu_a(dy) and W = int_Omega  |
| 7 | `20261018T103239Z_c122372a9ced` | wrong | The proof's overall strategy is sound: the sigma-lemma would force every top-order derivative D^beta f (\|beta\| |
| 8 | `20261018T103245Z_28a81adb7281` | wrong | The main mathematical argument is sound. Step 1 correctly proves the weighted measure lemma: for x in the full |
| 9 | `20261018T103506Z_81abf8d738f0` | wrong | The overall strategy is sound: restrict to the full-measure set E where J is finite, use the dichotomy lemma t |
| 10 | `20261018T103519Z_9fedb0dade06` | correct | The proof is correct. The k=0 case is immediate: the sole multi-index with \|beta\|=0 gives f = D^0 f = c_0 almo |
| 11 | `20261018T103929Z_b22ef615b492` | wrong | The overall strategy is sound and Steps 1-3 are correct: every polynomial of degree at most k lies in F^s beca |
| 12 | `20261018T104012Z_81abf8d738f0` | correct | The proof is correct. Checked in textual order: the setup correctly observes that d is continuous and positive |
| 13 | `20261018T104034Z_c122372a9ced` | correct | The proof is correct and follows the required textual order. Step 1 invokes the verified fact 9764dcb121fb7ece |
| 14 | `20261018T104134Z_28a81adb7281` | wrong | The proof's overall strategy is sound: Step 1 aims to prove a weighted rigidity lemma, Step 2 shows that all t |
| 15 | `20261018T104347Z_b4f684b84a92` | correct | Verified sequentially in the order of the proof. Step 1: for P in P_k, boundedness of Omega gives P in W^{k,p} |
| 16 | `20261018T104549Z_fffe721d9da0` | correct | The proof is correct. Step 1: the beta=0 summand of S(f) is one of the nonnegative summands of S(f), hence is  |
| 17 | `20261018T104635Z_15ee8a67775f` | correct | Verified in textual order. The statement is a concrete counterexample with n=1, Omega=(0,1), d(x)=min(x,1-x),  |
| 18 | `20261018T104754Z_7f945b78ca11` | correct | The proof is correct when read in textual order. Step 0 is a self-contained rigidity lemma for a general nonne |
| 19 | `20261018T104907Z_067bc021a65d` | correct | The proof is valid and self-contained. Setting R = diam(Omega) in (0, infinity), the proof correctly observes  |
| 20 | `20261018T105026Z_15ccad450af6` | correct | Verified sequentially in the order written. Fact 5854a0ed976146d3 applies with k=0 and sigma=s in (0,1) and gi |
| 21 | `20261018T105115Z_2891861c4194` | wrong | The proof correctly handles the L^p terms and the r<k seminorm estimates, but it has a fatal computational err |
| 22 | `20261018T105512Z_4b026650b4c2` | wrong | The proof is well structured and Part 1 (the weighted interior estimate) is correct. In Part 2, Claim 2 (smoot |
| 23 | `20261018T105749Z_326ad021ca03` | correct | Verified the proof in textual order. (1) L^p terms: since d(x) <= D = diam(Omega) on the bounded domain, \|\|f_0 |
| 24 | `20261018T110023Z_4b026650b4c2` | correct | The proof is correct and self-contained. Part 1: the split of the y-integral into {d(y) < delta/2} and {d(y) > |
| 25 | `20261018T110145Z_0aacd71e85a2` | correct | The proof is correct. It verifies the case (I) density statement for p = q and s in (0,1). Step 1 correctly ap |
| 26 | `20261018T110259Z_dd1217cc7a06` | wrong | The proof reproduces the CLWZ truncation estimates for w_eps in Step 1 and the support reduction in Step 2, an |
| 27 | `20261018T110422Z_d8a79ffe92e3` | wrong | The proof is invalid, and the estimate as stated is false. The fatal error is Step 2: the claimed support-diam |
| 28 | `20261018T111101Z_dd1217cc7a06` | wrong | The proof's Step 1 correctly reproduces the CLWZ truncation estimates and shows w_eps -> 0 in F^k; Step 2 corr |
| 29 | `20261018T111228Z_851e38c9eaaf` | wrong | Verified in textual order. The main conclusion (every f in C_c^infinity(Omega) lies in X, so X is non-degenera |
| 30 | `20261018T111245Z_77510f6ad13c` | correct | Verified the markdown proof in textual order. Setup: the proof fixes f in the Hardy-augmented space tilde F^s  |
| 31 | `20261018T111837Z_f972a377887c` | correct | The proof is correct when read in textual order. (1) Setup paragraph: for p = q the Hardy-augmented norm \|\|f\|\| |
| 32 | `20261018T111844Z_68833a7f23b2` | correct | Verified sequentially in the order of the proof. Let f in C_c^infinity(Omega). Every D^alpha f with \|alpha\| <= |
| 33 | `20261018T112226Z_3e37ced3ab49` | correct | The proof is correct. Step 1 uses the Lipschitz chart definition and compactness of the boundary to obtain fin |
| 34 | `20261018T112230Z_ae68a4ecb4c5` | wrong | Verified in textual order. The CLWZ references used by the proof (Definition 1.6; Lemmas 2.1, 2.2, 5.1, 5.3; e |
| 35 | `20261018T112502Z_58d579ee6608` | correct | The proof is correct. The opening paragraph correctly identifies the target norm with the one-dimensional p=q  |
| 36 | `20261018T112953Z_ae68a4ecb4c5` | wrong | The proof follows the CLWZ Whitney-cutoff strategy and Steps 1-2 are essentially correct: the product formula, |
| 37 | `20261018T113526Z_09373f874ca7` | wrong | The proof's overall strategy is correct. In part (a), the density of C_c(R^n;E) in L^p(R^n;E), the translation |
| 38 | `20261019T115423Z_b54ff240766a` | wrong | Part (a) is correct: the density of C_c(R^n;E) in L^p(R^n;E), translation invariance of the norm, and uniform  |
| 39 | `20261019T115626Z_3ece1f432057` | wrong | Verified in textual order. The setup, the identification F^s_{2,2}(Omega,d^{-1/2}) = W^{1/2,2;1/2,0}(Omega) (S |
| 40 | `20261019T120033Z_b54ff240766a` | wrong | Part (a) is correct: C_c(R^n;E) is dense in L^p(R^n;E), compactly supported continuous E-valued functions are  |
| 41 | `20261019T120104Z_54ab1c2d4079` | correct | Verified the proof sequentially in the order written. Step 0 correctly identifies the norm with CLWZ (1.2) at  |
| 42 | `20261019T120820Z_b54ff240766a` | correct | Verified the proof sequentially in the order written. Part (a): Step 1 is correct (a compactly supported conti |
| 43 | `20261019T120825Z_3ece1f432057` | correct | Verified in textual order. The setup correctly fixes Omega=(0,1), d(x)=min(x,1-x)=dist(x,{0,1}), p=q=2, s=1/2, |
| 44 | `20261019T120826Z_c7ab8f0f6e43` | wrong | The proof is not correct. The decisive error is in Step 0: for σq>0 the integral ∫_{\|z\|≤D}\|z\|^{-n-σq}dz = ω_{n |
| 45 | `20261019T122625Z_651ee225171b` | wrong | Verified the proof in textual order. The theorem is true and most of the argument is correct. Step 0 correctly |
| 46 | `20261019T123031Z_adae4d0caab4` | correct | Verified the proof in textual order. Setting and hypotheses: Omega is a nonempty bounded domain, so it is open |
| 47 | `20261019T123144Z_682462074c85` | correct | The proof is correct. Step 0 computes the intrinsic norm of the constant function 1: all weak derivatives of p |
| 48 | `20261019T123531Z_1a411974f5e9` | wrong | The proof follows a coherent Whitney-mollification strategy and correctly estimates the two Hardy norms separa |
| 49 | `20261019T123816Z_7908acdf39a7` | wrong | Checked the markdown proof in textual order. The external reference was verified: Kijaczko, arXiv:2110.04012,  |
| 50 | `20261019T124652Z_d269efb73a22` | correct | Verified the markdown proof in textual order. Part (i): for bounded Omega the factor (1+\|x\|)^{-n-sp} is bounde |
| 51 | `20261019T125855Z_2703c4250b07` | wrong | Verified the proof sequentially. Steps 0-1 (identification with Kijaczko's W^{1/2,2;1/2,0} and the computation |
| 52 | `20261019T131712Z_64919ed8e0b9` | correct | Verified the markdown proof sequentially in textual order. Step 0 correctly identifies the stated norm with Ki |
| 53 | `20261019T132159Z_89c0fe814d1f` | correct | The proof is correct. The statement is self-contained: it fixes n >= 1, a nonempty bounded Lipschitz domain Om |
| 54 | `20261019T132453Z_ca6d8603e00c` | wrong | The proof correctly invokes Kijaczko Theorem 4 (the closure characterization) and Theorem 19 (C-infinity densi |
| 55 | `20261019T133225Z_a3f3fa5bf048` | correct | The proof was checked in the order displayed. The quoted Kijaczko Theorem 4 and Theorem 3 match arXiv:2110.040 |

## 三、怎么用这份记录

- 它是「关键结果已过 Verifier」的**可核对凭证**（清单第 4 项左半边）；

- 但 **Verifier 是 LLM，不是形式化证明器**（论文第 9 节已如实声明），所以：

  - 通过验证 ≠ 数学真理；

  - 「人工或第二模型复核」是**另外半边**，目前只覆盖 2 条，仍是缺口；

- 与 `facts_dump.json`（19 条、`verifiable=0`、手写、验证器不可达）**不是同一批东西**，不要混用。
