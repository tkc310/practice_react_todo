# practice_react_todo
勉強会資料 reactでTODOアプリ

## 事前準備

なお、当日は create-react-app というツールを利用するため、事前にv6以上のnode.jsをPCにインストールしてください。

(8.11.3が最新の安定板です)

- [create-react-app](https://github.com/facebook/create-react-app#creating-an-app)

- node.jsとnpmのインストール
[mac](https://qiita.com/yuuki_tf/items/19e64eb3ee9bda947db0)
[windows](http://jsstudy.hatenablog.com/entry/functionaljs-9-nvm-windows)

## 内容

- [react.jsでTODOアプリ作成](https://www.to-r.net/media/react-tutorial13/)

- [コンポーネントを分割](https://www.to-r.net/media/react-tutorial14/)

- 余裕に応じて、localStrageにリストを保存する処理などの課題

## タイムテーブル

13:00 - 16:00 : TODOアプリ作成

16:00 - 17:00 : 解説

17:00 - 17:30 : 休憩

17:30 - : 前回好評だったRailsのCRUD, MVC解説を行います

-------------------------

## create-react-appでひな形作成

```
$ npm install -g create-react-app
$ mkdir ~/作業スペース && cd ~/作業スペース
$ npx create-react-app react_todo
# 開発サーバ起動
$ npm start
```

## 前編

#### 1. AppコンポーネントにTODOリストのHTMLをJSXでマークアップ
#### 2. コンポーネントのstateとして、todoリストを初期化
#### 3. リストの追加メソッドを実装
#### 4. リストの削除メソッドを実装

## 後編

#### 1. リスト部分をListコンポーネントに切り出し
#### 2. テキストフィールド部分をInputコンポーネントに切り出し
#### 3. リファクタ

## 課題

#### 1. ローカルストレージでTODOリストを管理できるようにする (画面を更新しても消えないようにする)
簡単にローカルストレージが使えるようになる[store2](https://www.npmjs.com/package/store2)などのパッケージを利用してみる
(シリアライズ/デシリアライズなどを行ってくれる、イテレーションしてくれるメソッドなど)
#### 2. todoの状態として、titleの他に「完了」ステータスを追加する (初期値はfalse)
