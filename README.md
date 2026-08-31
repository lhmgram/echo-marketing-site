# ECHO ポートフォリオサイト

屋号ECHO「集客責任者代行」のポートフォリオサイト。Next.js (App Router) + TypeScript + Tailwind CSS + recharts で構築。

## セットアップ

このマシンにNode.jsがグローバルインストールされていない場合、以下のようにPATHへ追加してから実行する。

```bash
export PATH="/Users/luckymigin/Desktop/Claude/.toolchain/node-v24.20.0-darwin-arm64/bin:$PATH"
```

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できる。

## 補足

- 実績セクションの折れ線グラフ(`src/lib/constants/reservationData.ts`)はダミーデータ。実データ提供後に差し替える前提のプレースホルダー。
- お問い合わせフォームは送信時に `console.log` へ内容を出力するのみで、バックエンドには未接続。
- ブランドカラー・フォントは `src/app/globals.css` の `@theme` で定義。

## デプロイ

Vercelで `echo-portfolio/` をプロジェクトルートとしてリポジトリをインポートすれば、Next.jsとして自動検出されそのままデプロイできる。
