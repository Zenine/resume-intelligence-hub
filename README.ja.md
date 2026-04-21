<!--
  Translation status:
  Source file : README.md
  Source commit: 47251d8
  Translated  : 2026-04-21
  Status      : up-to-date
-->

> **Language**: [English](README.md) · [简体中文](README.zh.md) · **日本語** · [繁體中文](README.zh-TW.md)

# resume-intelligence-hub

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/Docs-online-6366f1?style=flat&logo=vitepress&logoColor=white)](https://zenine.github.io/resume-intelligence-hub/)
[![Skills.sh](https://img.shields.io/badge/skills.sh-listed-f59e0b?style=flat)](https://skills.sh/Zenine/resume-intelligence-hub)

> **[📖 ドキュメント & ランディングページ →](https://zenine.github.io/resume-intelligence-hub/)**

> 意見を持った AI エージェント **skill**。個人のキャリアインテリジェンスハブ（プライベート Git リポジトリ）を初期化し、**(a) 単一の信頼できる情報源**（履歴書・面接準備・研究課題申請・応募前検証）**と (b) キャリアの羅針盤**（1–2 段上の到達したいポジション、そのポジションとの明確なギャップ、今四半期に埋めるべき項目）を両方担う。`AGENTS.md` を読める任意の AI IDE で動作（Claude Code、Cursor、Codex、Cline、Windsurf、GitHub Copilot…）。

エコシステム上の多くのキャリア系 skill は単発ジェネレータ（「JD を貼って履歴書を得る」）だが、本 skill は違う。**フレームワーク**として、永続的でバージョン管理されたハブを先に構築し、その上で継続的な求職活動、面接準備、研究課題申請、ファクトチェックを駆動する。**履歴書を出力するだけなら価値の半分にすぎない——残り半分は方向性だ**：ハブはストレッチ目標を明文化させ、能力ギャップ（スキル・タイトル・スコープ・報酬）を可視化し、応募のたびに見直しを強制する。結果として、一件一件の応募が明確なゴールに向けて積み上がり、漂流しなくなる。

## 誰向けか

- 散らばった履歴書・CV を単一の信頼できる情報源に統合したい人
- **1〜2 段上**へジャンプしたいが、現在のポジションと目標ポジションとの能力ギャップをまだ整理できていない人、あるいはそもそも次にどのポジションを狙うべきか定まっていない人
- シニア層（ディレクター / VP / CTO / パートナー / PI）で、応募頻度は低いが 1 回 1 回が重要な人
- 二言語（中国語 / 英語）で求職する人（どちらのハブもサポート、初期化時に選択）
- 研究者で求職もする人（オプションの双軌：求職 + 研究課題申請）
- 友人や家族に同じ仕組みを設定してあげたい人

**業界非依存**——ソフトウェア、医療、金融、法律、デザイン、学術、営業、製造など何でも対応。フレームワーク自体は業界非依存で、具体的な語彙は初期化時の Q&A でカスタマイズ。

## 提供されるもの

### 1. 次の構造を持つプライベート Git リポジトリ
```
.
├── profiles/              # 単一の信頼できる情報源
│   ├── master.md          # 求人向け履歴書のソース
│   ├── research.md        # 研究課題申請のソース（オプション）
│   ├── skills.md          # 能力マトリクス
│   └── stories.md         # STAR ストーリーライブラリ
├── jobs/
│   ├── templates/
│   ├── market-watch/      # ターゲット企業 + 採用シグナル
│   └── applications/{company}-{role}-{YYYY-MM-DD}/
├── verification/          # 応募前ファクトチェック
│   ├── credentials/       # 非機密の原本
│   ├── references.md      # パス参照インデックス（機密原本はローカル保管）
│   └── {date}-web-check.md
├── assessments/           # 性格診断、360 度フィードバック
├── resumes-archive/
├── research-archive/      # （オプション）
├── todo.md / changelog.md
└── AGENTS.md              # AI エージェント行動ガイド
```

### 2. エージェントがハブ上で実行する 6 つのワークフロー
- **キャリアプランニング & ギャップ分析** — 1-2 段上のストレッチ目標を定め、能力ギャップ（スキル / スコープ / 背書 / ネットワーク）を棚卸しし、四半期ごとの SMART プランに落とし込む。初期化後に最初に実行し、その後は四半期ごとに再実行。
- **JD ソーシング** — 良い求人票を見つける（ストレッチターゲットに基づくアクティブ検索、または手元の JD の選別）
- **JD カスタム履歴書** — profiles/master.md から特定の JD に対するカスタム履歴書を生成
- **面接準備** — 質問予測、STAR 回答準備、技術復習、行動面接戦略
- **応募前検証** — すべての重要な主張を公開情報源と照合
- **研究課題申請** — NSFC / NIH / 省級 / 業界フォーマットで研究提案を生成（オプション）

### 3. 参照フレームワーク
Skill は定着したキャリアフレームワークを名前で引用し、利用者が自ら深掘りできる語彙を提供：
- **Google XYZ formula**（Laszlo Bock）— 履歴書の要点構造
- **STAR** — 行動面接回答
- **BEI**（McClelland）— 行動面接の方法論
- **Heilmeier Catechism**（DARPA）— 研究提案の構成
- **T-shaped / π-shaped skills** — ポジショニング
- **Career capital**（Cal Newport）— キャリア資本と目標ポジションとのギャップ分析
- **Stretch target heuristic**（1-2 レベル上、1.2-3 倍報酬、70% マッチ）— 応募ターゲティング
- **Triangulation** — デューデリジェンス / 検証

## インストール

Skills CLI 経由（推奨）：
```bash
npx skills add Zenine/resume-intelligence-hub -g -y
```

または手動で自分の IDE の skills ディレクトリにクローン（下記は Claude Code のパス。Cursor / Codex / Cline / Windsurf を使う場合は各自のパスに調整）：
```bash
git clone https://github.com/Zenine/resume-intelligence-hub ~/.claude/skills/resume-intelligence-hub
```

## 使い方

お使いの AI IDE で次のいずれかを言えばよい：
- "把散落在几个文件夹的简历合并成一个库" / "I've got 5 resumes across different folders — consolidate them into one hub"（散らばった履歴書をひとつのハブに統合）— **初期化**
- "想从 Senior 跳 Staff，盘一下我跟那把椅子的差距，排个这季度的计划" / "I want to jump Senior→Staff — diff the gap and give me a plan for this quarter"（Senior → Staff 転換、ギャップ棚卸し + 四半期プラン）— **キャリアプランニング & ギャップ分析**
- "朋友发了个 Staff PM 的 JD，值得投吗？值得就顺手定制一版简历" / "A friend sent me this Staff PM JD — triage it, and if it's worth applying, tailor my resume against it"（JD の選別 + カスタム履歴書）— **JD 選別 + カスタム履歴書**
- "想从 Senior 跳 Staff，扫一下最近两周市面上合适的 stretch 机会" / "I'm aiming Senior→Staff — surface stretch-target roles posted in the last two weeks"（直近 2 週間のストレッチ求人を洗い出す）— **アクティブ JD ソーシング**
- "周四有个现场面，对着这份 JD 帮我预测题目并排练一遍" / "Onsite this Thursday — predict likely questions from this JD and drill me on STAR answers"（対面面接の質問予測 + STAR 模擬）— **面接準備**
- "投出去前，把简历里的数字跟我 GitHub、论文、LinkedIn 对一遍，别有出入" / "Before I hit submit, cross-check every load-bearing claim in my resume against my GitHub, papers, and LinkedIn"（送信前に GitHub / 論文 / LinkedIn と数字突合）— **応募前検証**
- "帮我生成国自然青基的申报简历" / "Draft an NSFC / NIH grant application profile"（NSFC / NIH 等の研究課題申請プロファイル）— **研究課題申請**（リサーチトラック有効時）

Skill の `SKILL.md` ファイルが初期化フロー全体をエージェントに指示する：7 問インタビュー（言語、既存資料、業界、シニアリティ、リサーチトラック有無、履歴書出力言語、リポジトリ場所）、その後スキャフォールド、最後に「次のステップ」パンチリストを書き出す。

## デザイン哲学（非自明な選択）

1. **単一の信頼できる情報源**は `profiles/`；アーカイブは読み取り専用
2. **ポジショニングロック**は `AGENTS.md` の先頭——ターゲットを一度変更すれば、以降すべての履歴書がそれに偏る
3. **双軌分離**（有効時）——求職プロファイルと研究プロファイルは別
4. **機密原本はパス参照**——リポジトリは共有可能なまま、原本はローカルに保管
5. **高ステークス応募前に公開情報源クロスチェック**
6. **todo.md / changelog.md の分離**——todo は未完了のみ、完了項目は changelog へ移行
7. **応募ごとに日付付きフォルダ**——同じ会社に 2 回 = 2 つのフォルダ
8. **STAR ストーリーは事実と別管理**——磨いた語り vs. 生データ
9. **単一言語ハブ**——初期化時に中国語 / 英語のどちらかを選択、混在不可
10. **AI IDE 非依存**——`AGENTS.md` クロス IDE 規約を採用

## エコシステムの補完スキル

これはフレームワーク。特定の単発タスクには次を重ねて使う：

| Skill | 用途 |
|-------|------|
| [`paramchoudhary/resumeskills@resume-ats-optimizer`](https://skills.sh/paramchoudhary/resumeskills/resume-ats-optimizer) | ATS 深層最適化 |
| [`paramchoudhary/resumeskills@linkedin-profile-optimizer`](https://skills.sh/paramchoudhary/resumeskills/linkedin-profile-optimizer) | LinkedIn プロファイル |
| [`composiohq/awesome-claude-skills@tailored-resume-generator`](https://skills.sh/composiohq/awesome-claude-skills/tailored-resume-generator) | 別の JD カスタムジェネレータ |
| [`anthropics/knowledge-work-plugins@interview-prep`](https://skills.sh/anthropics/knowledge-work-plugins/interview-prep) | Anthropic 公式面接準備 |
| [`refoundai/lenny-skills@career-transitions`](https://skills.sh/refoundai/lenny-skills/career-transitions) | Lenny のキャリア転換 |
| [`aradotso/trending-skills@awesome-phd-cv`](https://skills.sh/aradotso/trending-skills/awesome-phd-cv) | 博士 CV（リサーチトラック） |

## プライバシー

本 skill には**個人データは含まれない**。すべてのテンプレートは「to be filled」マーカー付きのプレースホルダーフリー散文で、AI が各ユーザーとの対話を通じて埋めていく。`templates/{cn,en}/profiles/stories.md` 内の STAR ストーリー例はすべて汎用的な架空シナリオで、匿名化フォーマット参照として明確にラベル付けされている。

ハブ自体は一度入力すると実際の個人データを含む——設計上、**プライベート** Git リポジトリに置くことを前提としており、公開されるべきではない。

## License

MIT。[LICENSE](LICENSE) 参照。

## コントリビューション

PR 歓迎——特に次の方向：
- 追加の言語サポート（現在：中国語 + 英語）
- テンプレート内の業界特化語彙の拡充
- 新ワークフロー（例：給与交渉、報酬ベンチマーキング、ネットワーキングプレイブック）
- 地域的 JD ソーシングチャネル（現カバレッジ：中国、米国、英国、EU、グローバルテック；ギャップ：東南アジア、インド、日本、韓国、ラテンアメリカ）

## 引用

本 skill で参照されているフレームワークはそれぞれの著者の成果：Laszlo Bock（Google）、David McClelland（BEI）、George Heilmeier（DARPA）、Cal Newport（*So Good They Can't Ignore You*）。Skill はそれらを引用・適用するのみ——深く理解したい場合は原著を参照されたい。
