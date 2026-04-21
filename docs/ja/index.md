---
layout: home

hero:
  name: "Resume Intelligence Hub"
  text: "あなた専用のキャリア OS"
  tagline: "単一の信頼できる情報源となる Git リポジトリ、意見を持った方法論、そして重い作業をこなす AI エージェント——JD ソーシングから研究課題申請まで。"
  image:
    src: /hero.svg
    alt: Resume Intelligence Hub
  actions:
    - theme: brand
      text: クイックスタート →
      link: /ja/quick-start
    - theme: alt
      text: GitHub で見る
      link: https://github.com/Zenine/resume-intelligence-hub

features:
  - icon:
      src: /icons/compass.svg
      width: 48
      height: 48
    title: 単一の信頼できる情報源
    details: profiles/ が権威あるデータ層。生成されるすべての履歴書、カバーレター、研究提案書はそこから派生する——手で編集しない。

  - icon:
      src: /icons/target.svg
      width: 48
      height: 48
    title: ポジショニングロック
    details: AGENTS.md の先頭でターゲットロール層と業界を一度だけ設定。以降のすべての生成物がそれに偏る——再プロンプト不要。

  - icon:
      src: /icons/fork.svg
      width: 48
      height: 48
    title: デュアルトラック対応
    details: 求人応募と研究 / 助成金提案はデータソースもフォーマットも異なる。分けて管理——初期化時にリサーチトラックを切り替え。

  - icon:
      src: /icons/shield.svg
      width: 48
      height: 48
    title: 応募前検証
    details: シニアロール面接や助成金提出前に、すべての重要な主張を公開情報源で裏取り。主張の前にエビデンスを。

  - icon:
      src: /icons/globe.svg
      width: 48
      height: 48
    title: AGENTS.md でクロス IDE
    details: Claude Code、Cursor、Codex、Cline、Windsurf、GitHub Copilot で動作。一度シンボリックリンクを張れば、どこでも使える。

  - icon:
      src: /icons/book.svg
      width: 48
      height: 48
    title: 実証済みフレームワーク基盤
    details: Google XYZ formula、STAR、BEI、Heilmeier Catechism、stretch-target heuristic、triangulation——名前で引用しているので自分で深掘りできる。
---

<!--
  Translation status:
  Source file : docs/index.md
  Source commit: f5f491c
  Translated  : 2026-04-21
  Status      : up-to-date
-->

<div class="vp-doc" style="max-width: 960px; margin: 48px auto 96px; padding: 0 24px;">

## インストール

```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

その後、お使いの AI IDE で次のいずれかを言えばよい：

```
> 帮我搭个简历库 / build my career repo       # 新規ハブの初期化
> 帮我针对这个 JD 生成简历                     # JD にカスタム履歴書
> 看看有什么合适的机会                         # アクティブ JD ソーシング
> 针对这个职位帮我准备面试                     # 面接コーチング
> 投递前帮我核查一下公开资料                   # 応募前検証
```

## 他の履歴書 skill との違い

市場にある多くの履歴書系 skill は単発ジェネレータ——JD を貼ると履歴書を出力、それで終わり。本 skill は違う。数か月にわたる求職活動、面接、（必要なら）研究課題申請を同一の**永続的なプライベートリポジトリ**に蓄積させる。エージェントは毎セッションでリポジトリを読み、あなたのポジショニングロックに従って産出する。完全な方法論は [SKILL.md](https://github.com/Zenine/resume-intelligence-hub/blob/main/SKILL.md) 参照。

## 補完スキル

本ハブの上に、特定の単発ニーズ向けに次を重ねて使う：

- [`paramchoudhary/resumeskills@resume-ats-optimizer`](https://skills.sh/paramchoudhary/resumeskills/resume-ats-optimizer) — ATS 深層最適化
- [`paramchoudhary/resumeskills@linkedin-profile-optimizer`](https://skills.sh/paramchoudhary/resumeskills/linkedin-profile-optimizer) — LinkedIn プロファイル
- [`anthropics/knowledge-work-plugins@interview-prep`](https://skills.sh/anthropics/knowledge-work-plugins/interview-prep) — Anthropic 公式面接準備
- [`refoundai/lenny-skills@career-transitions`](https://skills.sh/refoundai/lenny-skills/career-transitions) — Lenny のキャリア転換

</div>
